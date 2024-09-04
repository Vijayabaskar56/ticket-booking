/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
'use client'

import { useState, useMemo, useCallback } from 'react'
import { format, isSameDay, parseISO, startOfDay } from 'date-fns'
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { loadStripe } from '@stripe/stripe-js';
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CalendarIcon, Users, Clock, IndianRupee } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { env } from '@/env'
import { api } from '@/trpc/react'


const BASE_PRICE_PER_HOUR = 500


const times: Record<number, string> = {
 1: "TEN_AM",
 2: "ELEVEN_AM",
 3: "TWELVE_PM",
 4: "ONE_PM",
 5: "THREE_PM",
 6: "FOUR_PM",
 7: "FIVE_PM",
 8: "SIX_PM",
 9: "SEVEN_PM",
 10: "EIGHT_PM"
}

const timeSlots = [
 "10:00", "11:00", "12:00", "1:00", "3:00",
 "4:00", "5:00", "6:00", "7:00", "8:00",
]


const stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);


export default function BookingForm() {
 const [date, setDate] = useState<Date | undefined>(new Date())
 const [guests, setGuests] = useState(1)
 const [selectedTimeSlots, setSelectedTimeSlots] = useState<number[]>([])
 const [isLoading, setIsLoading] = useState(false);
 const { toast } = useToast()
 const bookingData = api.booking.getSlotDetails.useQuery(null);
 // const bookingData = {
 //  data: {
 //   status: 200,
 //   message: "Slot details fetched successfully",
 //   data: [
 //    {
 //     bookingDate: new Date().toISOString(), // Today
 //     timeSlot: ["ELEVEN_AM", "TWELVE_PM"]
 //    },
 //    {
 //     bookingDate: addDays(new Date(), 1).toISOString(), // Tomorrow
 //     timeSlot: ["ONE_PM", "THREE_PM"]
 //    },
 //    {
 //     bookingDate: addDays(new Date(), 2).toISOString(), // Day after tomorrow
 //     timeSlot: ["TEN_AM", "ELEVEN_AM", "TWELVE_PM"]
 //    },
 //    {
 //     bookingDate: addDays(new Date(), 3).toISOString(), // Three days from now
 //     timeSlot: ["TEN_AM", "ELEVEN_AM", "TWELVE_PM", "ONE_PM", "THREE_PM", "FOUR_PM", "FIVE_PM", "SIX_PM", "SEVEN_PM", "EIGHT_PM"]
 //    }
 //   ]
 //  }
 // }



 const bookings = useMemo(() => {
  return bookingData?.data?.data?.map(booking => ({
   date: startOfDay(parseISO(booking.bookingDate?.toString())),
   slots: booking.timeSlot.map(slot =>
    Object.entries(times).find(([_, value]) => value === slot)?.[0]
   ).filter(Boolean).map(Number)
  }))
 }, [bookingData?.data?.data])

 const isDateFullyBooked = useCallback((date: Date) => {
  const bookingsForDate = bookings?.filter((booking) => isSameDay(booking.date, date))
  const bookedSlots = new Set(bookingsForDate?.flatMap(booking => booking.slots))
  return bookedSlots.size === Object.keys(times).length
 }, [bookings])

 const getBookedSlotsForDate = useCallback((date: Date) => {
  return bookings
   ?.filter((booking) => isSameDay(booking.date, date))
   ?.flatMap((booking) => booking.slots)
 }, [bookings])

 const handleTimeSlotClick = (index: number) => {
  setSelectedTimeSlots(prev => {
   if (prev.includes(index)) {
    return prev.filter(i => i !== index)
   } else if (prev.length === 0 || prev.includes(index - 1) || prev.includes(index + 1)) {
    return [...prev, index].sort((a, b) => a - b)
   }
   return prev
  })
 }

 const totalPrice = useMemo(() => {
  return selectedTimeSlots.length * BASE_PRICE_PER_HOUR * guests
 }, [selectedTimeSlots.length, guests])
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  console.log('date', !date || selectedTimeSlots.length === 0);
  console.log(selectedTimeSlots.map(index => times[index + 1]))
  new Error('error');
  if (!date || selectedTimeSlots.length === 0) {
   toast({
    title: "Booking Error",
    description: "Please select a date and at least one time slot.",
    variant: "destructive",
   })
   return
  }

  setIsLoading(true);

  try {
   // Create Checkout Session
   const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({
     guests,
     selectedTimeSlots: selectedTimeSlots.map(index => times[index + 1]),
     totalPrice,
     date,
    }),
   });
   console.log(response, 'response');


   const session = await response.json() as unknown as { sessionId: string };

   // Redirect to Checkout
   const stripe = await stripePromise;
   const result = await stripe!.redirectToCheckout({
    sessionId: session.sessionId,
   });

   if (result.error) {
    throw new Error(result.error.message);
   }
  } catch (error: unknown) {
   toast({
    title: "Payment Error",
    description: (error as Error).message,
    variant: "destructive",
   });
  } finally {
   setIsLoading(false);
  }
 }

 return (
  <div className='p-0 m-0 md:px-80 py-20'>
   <form onSubmit={handleSubmit} className="lg:flex lg:gap-8">
    <div className="lg:flex-grow space-y-8">
     <Card>
      <CardHeader>
       <CardTitle className="text-2xl">Select Your Preferences</CardTitle>
       <CardDescription>Customize your dining experience</CardDescription>
      </CardHeader>
      <CardContent>
       <div className="space-y-4">
        <div className="flex items-center justify-between">
         <Label htmlFor="guests" className="text-lg font-semibold">Number of Guests</Label>
         <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-muted-foreground" />
          <span className="text-2xl font-bold">{guests}</span>
         </div>
        </div>
        <Slider
         id="guests"
         min={1}
         max={20}
         step={1}
         value={[guests]}
         onValueChange={(value) => setGuests(value[0]!)}
         className="w-full"
        />
        <div className="text-sm text-muted-foreground">
         Price per hour: ₹{BASE_PRICE_PER_HOUR * guests} for {guests} guest{guests > 1 ? 's' : ''}
        </div>
       </div>
      </CardContent>
     </Card>

     <Card>
      <CardHeader>
       <CardTitle className="text-2xl">Choose Your Date</CardTitle>
       <CardDescription>Select a date for your reservation</CardDescription>
      </CardHeader>
      <CardContent className='flex justify-center'>
       <Calendar
        mode="single"
        selected={date}
        onSelect={(newDate) => {
         setDate(newDate ? startOfDay(newDate) : undefined)
         setSelectedTimeSlots([])
        }}
        disabled={(date) => startOfDay(date) < startOfDay(new Date()) || isDateFullyBooked(date)}
        className="rounded-md border"
       />
      </CardContent>
     </Card>

     <Card>
      <CardHeader>
       <CardTitle className="text-2xl">Choose Your Time</CardTitle>
       <CardDescription>Select time slots for your reservation</CardDescription>
      </CardHeader>
      <CardContent>
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {timeSlots.map((slot, index) => {
         const isBooked = date ? getBookedSlotsForDate(date)?.includes(index + 1) : false
         return (
          <Button
           key={index}
           type="button"
           disabled={isBooked}
           variant={selectedTimeSlots.includes(index) ? "default" : "outline"}
           onClick={() => handleTimeSlotClick(index)}
           className="w-full"
          >
           <Clock className="mr-2 h-4 w-4" />
           {slot}
          </Button>
         )
        })}
       </div>
      </CardContent>
     </Card>
    </div>

    <Card className="mt-8 lg:mt-0 lg:w-80 lg:flex-shrink-0 lg:sticky lg:top-8 lg:self-start">
     <CardHeader>
      <CardTitle className="text-2xl">Your Booking Summary</CardTitle>
      <CardDescription>Review your dining experience details</CardDescription>
     </CardHeader>
     <CardContent>
      <div className="space-y-2">
       <p className="flex items-center">
        <Users className="mr-2 h-5 w-5" />
        <span className="font-semibold">{guests} guest{guests > 1 ? 's' : ''}</span>
       </p>
       <p className="flex items-center">
        <CalendarIcon className="mr-2 h-5 w-5" />
        <span className="font-semibold">{date ? format(date, "PPP") : "Date not selected"}</span>
       </p>
       <p className="flex items-center">
        <Clock className="mr-2 h-5 w-5" />
        <span className="font-semibold">
         {selectedTimeSlots.length > 0
          ? `${timeSlots[selectedTimeSlots?.[0] ?? 0]} - ${timeSlots?.[selectedTimeSlots?.[selectedTimeSlots?.length - 1] ?? 0]}`
          : "Time not selected"}
        </span>
       </p>
       <p className="flex items-center">
        <IndianRupee className="mr-2 h-5 w-5" />
        <span className="font-semibold">Total Price: ₹{totalPrice}</span>
       </p>
       {selectedTimeSlots.length > 0 && (
        <p className="text-sm text-muted-foreground">
         (₹{BASE_PRICE_PER_HOUR * guests} per hour for {selectedTimeSlots.length} hour{selectedTimeSlots.length > 1 ? 's' : ''})
        </p>
       )}
      </div>
     </CardContent>
     <CardFooter>
      <Button onClick={handleSubmit} type="submit" className="w-full">Confirm Booking</Button>
     </CardFooter>
    </Card>
   </form>
  </div>
 )
}