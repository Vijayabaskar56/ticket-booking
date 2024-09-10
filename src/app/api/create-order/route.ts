import { razorpay } from '@/lib/stripe';
import { db } from '@/server/db';
import type { timeSlot } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(req: Request): Promise<NextResponse> {
 try {
  const { guests, selectedTimeSlots, totalPrice, date } = await req.json() as { guests: number, selectedTimeSlots: timeSlot[], totalPrice: number, date: string; };

  // Create a booking in the database
  const { id } = await db.booking.create({
   data: {
    numberOfGuests: guests,
    bookingDate: date,
    timeSlot: selectedTimeSlots,
    status: 'BOOKING_PENDING',
   },
  });


  const order = await razorpay.orders.create({
   amount: totalPrice * 100, // Razorpay expects amount in paise
   currency: 'INR',
   receipt: `booking_${id}`,
   notes: {
    guests: guests.toString(),
    selectedTimeSlots: JSON.stringify(selectedTimeSlots),
    date,
    bookingId: id.toString(),
   },
  });

  return NextResponse.json({ orderId: order.id }, { status: 200 });
 } catch (err: unknown) {
  console.log('❌ Error creating Razorpay order:', (err as Error).message);
  return NextResponse.json({ message: (err as Error).message }, { status: 500 });
 }
}
