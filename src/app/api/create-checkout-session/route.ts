import { env } from '@/env';
import { stripe } from '@/lib/stripe';
import { db } from '@/server/db';
import { type timeSlot } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { guests, selectedTimeSlots, totalPrice, date } = await req.json() as { guests: number, selectedTimeSlots: timeSlot[], totalPrice: number, date: string };
    // Create Checkout Sessions from body params.
    const { id } = await db.booking.create({
      data: {
        numberOfGuests: 0,
        bookingDate: date ?? '',
        timeSlot: selectedTimeSlots ?? '',
        status: 'BOOKING_PENDING',
      },
    })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'Dining Reservation',
              description: `Reservation for ${guests} guests for ${selectedTimeSlots.length} hour(s)`,
            },
            unit_amount: totalPrice * 100, // Stripe expects amounts in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      billing_address_collection: 'required',
      success_url: `${env.NEXT_PUBLIC_SITE_URL}/booking-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${env.NEXT_PUBLIC_SITE_URL}/api/webhook`,
      metadata: {
        guests,
        selectedTimeSlots: JSON.stringify(selectedTimeSlots),
        date,
        bookingId: `${id}`,
      },
    });

    return NextResponse.json({ sessionId: session.id }, { status: 200 });
  } catch (err: unknown) {
    console.log('❌ Error creating checkout session:', (err as Error).message);

    return NextResponse.json({ message: (err as Error).message }, { status: 500 });
  }
}