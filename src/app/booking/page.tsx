"use client";
import { useState } from 'react'
import { format } from 'date-fns'
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon, Users, Clock, Music, Baby, Utensils } from 'lucide-react'

type Preferences = {
 kidsFriendly: boolean
 lowMusic: boolean
 outdoorSeating: boolean
}

export default function BookingPage() {
 const [date, setDate] = useState<Date | undefined>(new Date())
 const [guests, setGuests] = useState<number>(2)
 const [selectedTime, setSelectedTime] = useState<string | null>(null)
 const [preferences, setPreferences] = useState<Preferences>({
  kidsFriendly: false,
  lowMusic: false,
  outdoorSeating: false,
 })

 const timeSlots = [
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
 ]

 return (
  <div className="container mx-auto px-48 py-8">
   <h1 className="text-4xl font-bold text-center mb-8">Book Your Dining Experience</h1>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <Card className="col-span-1 md:col-span-2">
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
        onValueChange={(value) => setGuests(value?.[0] ?? 0)}
        className="w-full"
       />
      </div>
     </CardContent>
    </Card>

    <Card>
     <CardHeader>
      <CardTitle className="text-2xl">Choose Your Date</CardTitle>
      <CardDescription>Select a date for your reservation</CardDescription>
     </CardHeader>
     <CardContent>
      <Popover>
       <PopoverTrigger asChild>
        <Button
         variant={"outline"}
         className={cn(
          "w-full justify-start text-left font-normal",
          !date && "text-muted-foreground"
         )}
        >
         <CalendarIcon className="mr-2 h-4 w-4" />
         {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
       </PopoverTrigger>
       <PopoverContent className="w-auto p-0">
        <Calendar
         mode="single"
         selected={date}
         onSelect={setDate}
         initialFocus
        />
       </PopoverContent>
      </Popover>
     </CardContent>
    </Card>

    <Card>
     <CardHeader>
      <CardTitle className="text-2xl">Choose Your Time</CardTitle>
      <CardDescription>Select a time slot for your reservation</CardDescription>
     </CardHeader>
     <CardContent>
      <div className="grid grid-cols-4 gap-2">
       {timeSlots.map((time) => (
        <Button
         key={time}
         variant={selectedTime === time ? "default" : "outline"}
         onClick={() => setSelectedTime(time)}
         className="w-full"
        >
         <Clock className="mr-2 h-4 w-4" />
         {time}
        </Button>
       ))}
      </div>
     </CardContent>
    </Card>

    <Card className="col-span-1 md:col-span-2">
     <CardHeader>
      <CardTitle className="text-2xl">Additional Preferences</CardTitle>
      <CardDescription>Customize your dining atmosphere</CardDescription>
     </CardHeader>
     <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       <div className="flex items-center space-x-2">
        <Switch
         id="kids-friendly"
         checked={preferences.kidsFriendly}
         onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, kidsFriendly: checked }))}
        />
        <Label htmlFor="kids-friendly" className="flex items-center">
         <Baby className="mr-2 h-4 w-4" />
         Kids Friendly
        </Label>
       </div>
       <div className="flex items-center space-x-2">
        <Switch
         id="low-music"
         checked={preferences.lowMusic}
         onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, lowMusic: checked }))}
        />
        <Label htmlFor="low-music" className="flex items-center">
         <Music className="mr-2 h-4 w-4" />
         Low Music
        </Label>
       </div>
       <div className="flex items-center space-x-2">
        <Switch
         id="outdoor-seating"
         checked={preferences.outdoorSeating}
         onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, outdoorSeating: checked }))}
        />
        <Label htmlFor="outdoor-seating" className="flex items-center">
         <Utensils className="mr-2 h-4 w-4" />
         Outdoor Seating
        </Label>
       </div>
      </div>
     </CardContent>
    </Card>
   </div>

   <Card className="mt-8">
    <CardHeader>
     <CardTitle className="text-2xl">Your Booking Summary</CardTitle>
     <CardDescription>Review your dining experience details</CardDescription>
    </CardHeader>
    <CardContent>
     <div className="space-y-2">
      <p className="flex items-center">
       <Users className="mr-2 h-5 w-5" />
       <span className="font-semibold">{guests} guests</span>
      </p>
      <p className="flex items-center">
       <CalendarIcon className="mr-2 h-5 w-5" />
       <span className="font-semibold">{date ? format(date, "PPP") : "Date not selected"}</span>
      </p>
      <p className="flex items-center">
       <Clock className="mr-2 h-5 w-5" />
       <span className="font-semibold">{selectedTime ?? "Time not selected"}</span>
      </p>
      <div className="flex flex-wrap gap-2">
       {preferences.kidsFriendly && <Badge variant="outline"><Baby className="mr-1 h-3 w-3" /> Kids Friendly</Badge>}
       {preferences.lowMusic && <Badge variant="outline"><Music className="mr-1 h-3 w-3" /> Low Music</Badge>}
       {preferences.outdoorSeating && <Badge variant="outline"><Utensils className="mr-1 h-3 w-3" /> Outdoor Seating</Badge>}
      </div>
     </div>
    </CardContent>
    <CardFooter>
     <Button className="w-full">Confirm Booking</Button>
    </CardFooter>
   </Card>
  </div>
 )
}