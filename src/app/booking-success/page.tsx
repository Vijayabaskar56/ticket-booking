import Link from "next/link"
import React from "react"

export default function Component() {
 return (
  <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background px-4 py-12 sm:px-6 lg:px-8">
   <div className="max-w-md text-center">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4">
     <CheckIcon className="w-8 h-8" />
    </div>
    <h1 className="text-3xl font-bold tracking-tight text-foreground">Booking Complete</h1>
    <p className="mt-4 text-muted-foreground">
     Your reservation for a table has been successful. Please check your email for the booking receipt.
    </p>
    <div className="mt-6">
     <Link
      href="#"
      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      prefetch={false}
     >
      Back to Home
     </Link>
    </div>
   </div>
  </div>
 )
}

function CheckIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
 return (
  <svg
   {...props}
   xmlns="http://www.w3.org/2000/svg"
   width="24"
   height="24"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="2"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <path d="M20 6 9 17l-5-5" />
  </svg>
 )
}