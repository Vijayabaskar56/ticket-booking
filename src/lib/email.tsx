import { render } from "@react-email/components";
import { Email } from "../../email/Email";
import nodemailer from "nodemailer";
import { env } from "@/env";

export const emailOptions = {
  from: "you@example.com",
  to: "user@gmail.com",
  subject: "hello world",
  html: render(<Email userFirstname="demo" />),
};

const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: Number(env.SMTP_PORT),
  secure: false,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
});

export const sendPaymentConfirmationEmail = async (
  userEmail: string,
  userFirstname: string,
) => {
  const emailOptions = {
    from: "your-email@example.com",
    to: userEmail,
    subject: "Payment Confirmation",
    html: await render(<Email userFirstname={userFirstname} />),
  };

  try {
    await transporter.sendMail(emailOptions);
    console.log("Payment confirmation email sent successfully");
  } catch (error) {
    console.error("Error sending payment confirmation email:", error);
  }
};
