// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// /* eslint-disable @typescript-eslint/no-unsafe-argument */
// import { env } from '@/env';
// import { sendPaymentConfirmationEmail } from "@/lib/email";
// import { db } from "@/server/db";
// import { NextResponse, type NextRequest } from "next/server";
// import crypto from 'crypto';
// import * as razorypay from "razorpay";

// // ...



// export async function POST(req: NextRequest) {
//  const payload = await req.text();
//  const signature = req.headers.get("x-razorpay-signature");
//  const expectedSignature = crypto
//   .createHmac("sha256", env.RAZORPAY_WEBHOOK_SECRET)
//   .update(payload)
//   .digest("hex");

//  if (signature !== expectedSignature) {
//   return NextResponse.json({ message: "Invalid signature" }, { status: 400 });
//  }

//  const event: unknown = JSON.parse(payload);

//  console.log("✅ Success:", event?.event);

//  if (event.event === "payment.captured") {
//   await updateBookingStatus(event.payload.payment.entity);
//   const userEmail = event.payload.payment.entity.email;
//   const userFirstname = event.payload.payment.entity.notes.name || "Customer";

//   // Send confirmation email
//   if (userEmail) {
//    await sendPaymentConfirmationEmail(userEmail, userFirstname);
//   }
//  } else if (event.event === "payment.failed") {
//   await createTransactionHistory(event.payload.payment.entity);
//  }

//  return NextResponse.json({ message: "Webhook processed successfully" }, { status: 200 });
// }

// async function updateBookingStatus(payment: any) {
//  const bookingId = Number.parseInt(payment.notes.bookingId);

//  await db.booking.update({
//   where: { id: bookingId },
//   data: {
//    status: "BOOKING_COMPLETED",
//    payments: {
//     create: [
//      {
//       stripePaymentId: payment?.id,
//       paymentMethod: payment?.method,
//       amount: payment?.amount / 100,
//       currency: payment?.currency,
//       status: "PAID",
//      },
//     ],
//    },
//    transactionHistory: {
//     create: [
//      {
//       razorpayTransactionId: payment.id,
//       amount: payment.amount / 100,
//       currency: payment.currency,
//       status: "COMPLETED",
//      },
//     ],
//    },
//   },
//  });

//  console.log("Updating booking status for payment:", payment.id);
// }

// async function createTransactionHistory(payment: any) {
//  const bookingId = Number.parseInt(payment.notes.bookingId);

//  await db.booking.update({
//   where: { id: bookingId },
//   data: {
//    status: "BOOKING_CANCELLED",
//    transactionHistory: {
//     create: [
//      {
//       razorpayTransactionId: payment.id,
//       failureReason: payment.error_description || "Unknown reason",
//       amount: payment.amount / 100,
//       currency: payment.currency,
//       status: "FAILED",
//      },
//     ],
//    },
//   },
//  });

//  console.log("Creating failed transaction history for payment:", payment.id);
// }
