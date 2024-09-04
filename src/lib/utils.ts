import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
// import nodemailer from 'nodemailer'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// export const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST ?? 'smtp.ethereal.email',
//   port: parseInt(process.env.SMTP_PORT ?? '587'),
//   secure: process.env.SMTP_SECURE === 'true',
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// })
