// import { emailOptions } from '@/lib/email'
import { sendPaymentConfirmationEmail } from "@/lib/email";
import { stripe } from "@/lib/stripe";
// import { transporter } from '@/lib/utils'
import { db } from "@/server/db";
import { NextResponse, type NextRequest } from "next/server";
// import { type SendMailOptions } from 'nodemailer'
import type Stripe from "stripe";

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(req: NextRequest) {
 const payload = await req.text();
 // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
 const response: { created?: number; } = JSON.parse(payload);
 const sig = req.headers.get("stripe-signature");

 let event: Stripe.Event;
 // const dateTime = new Date(response?.created ?? 0 * 1000).toLocaleDateString()
 // const timeString = new Date(response?.created ?? 0 * 1000).toLocaleDateString()

 try {
  if (payload !== null) {
   event = stripe.webhooks.constructEvent(
    payload ?? "",
    sig!,
    webhookSecret,
   );
  } else {
   console.log("❌ Payload is null");
   return NextResponse.json("Webhook Error: Payload is null", {
    status: 400,
   });
  }
 } catch (err: unknown) {
  console.log(`❌ Error message: ${(err as Error)?.message}`);
  return NextResponse.json(`Webhook Error: ${(err as Error)?.message}`, {
   status: 400,
  });
 }

 console.log("✅ Success:", event.type);

 if (event.type === "checkout.session.completed") {
  const session = event.data.object;

  await updateBookingStatus(session);
  const userEmail = "vj2k02@gmail.com";
  const userFirstname = "Vijayabaskar";

  // Send confirmation email
  if (userEmail) {
   await sendPaymentConfirmationEmail(userEmail, userFirstname);
  }
 } else if (event.type === "checkout.session.async_payment_failed") {
  console.log(
   "❌ Checkout session cancelled for session",
   JSON.stringify(event, null, 2),
  );
  const session = event.data.object as Stripe.Checkout.Session & {
   last_payment_error?: { message?: string; } | undefined;
  };

  await createTransactionHistory(session);
 }

 return NextResponse.json(`Webhook received: ${event.id}`, { status: 200 });
}

async function updateBookingStatus(
 session: Stripe.Checkout.Session & { billing_details?: { email?: string; }; },
) {
 if (session?.billing_details?.email) {
  console.log("Customer email:", session.customer_email);
  const isUserPresent = await db.user.findFirst({
   where: {
    email: session.billing_details?.email,
   },
  });

  if (isUserPresent) {
   await db.user.update({
    where: {
     email: session.billing_details?.email,
    },
    data: {
     bookings: {
      connect: {
       id: Number.parseInt(session.metadata?.bookingId ?? "0"),
      },
     },
    },
   });
  } else {
   await db.user.create({
    data: {
     email: session.billing_details?.email,
     bookings: {
      connect: {
       id: Number.parseInt(session.metadata?.bookingId ?? "0"),
      },
     },
    },
   });
  }
 }
 await db.booking.update({
  where: {
   id: Number.parseInt(session.metadata?.bookingId ?? "0"),
  },
  data: {
   numberOfGuests: 0,
   bookingDate: session.metadata?.date ?? "",
   status: "BOOKING_COMPLETED",
   payments: {
    create: [
     {
      stripePaymentId: session?.payment_intent?.toString() ?? "",
      paymentMethod: session.payment_method_types[0] ?? "card",
      amount: session.amount_total ?? 0,
      currency: session.currency ?? "inr",
      status: "PAID" ?? "PAID",
     },
    ],
   },
   transactionHistory: {
    create: [
     {
      stripeTransactionId: session?.payment_intent?.toString() ?? "",
      amount: session.amount_total ?? 0,
      currency: session.currency ?? "inr",
      status: "COMPLETED" ?? "COMPLETED",
     },
    ],
   },
  },
 });

 console.log("Updating booking status for session:", session.id);
}

async function createTransactionHistory(
 session: Stripe.Checkout.Session & {
  last_payment_error?: { message?: string; } | undefined;
  billing_details?: { email?: string; };
 },
) {
 if (session.billing_details?.email) {
  console.log("Customer email:", session.billing_details?.email);
  const isUserPresent = await db.user.findFirst({
   where: {
    email: session.billing_details?.email,
   },
  });

  if (isUserPresent) {
   await db.user.update({
    where: {
     email: session.billing_details?.email,
    },
    data: {
     bookings: {
      connect: {
       id: Number.parseInt(session.metadata?.bookingId ?? "0"),
      },
     },
    },
   });
  } else {
   await db.user.create({
    data: {
     email: session.customer_email,
     bookings: {
      connect: {
       id: Number.parseInt(session.metadata?.bookingId ?? "0"),
      },
     },
    },
   });
  }
 }

 await db.booking.update({
  where: {
   id: Number.parseInt(session.metadata?.bookingId ?? "0"),
  },
  data: {
   status: "BOOKING_CANCELLED",
   transactionHistory: {
    create: [
     {
      stripeTransactionId: session?.payment_intent?.toString() ?? "",
      failureReason:
       session.last_payment_error?.message ?? "Unknown reason",
      amount: session.amount_total ?? 0,
      currency: session.currency ?? "inr",
      status: "FAILED" ?? "FAILED",
     },
    ],
   },
  },
 });

 console.log("Updating booking status for session:", session.id);
}
