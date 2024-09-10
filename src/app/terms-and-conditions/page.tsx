'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronUp } from 'lucide-react';

const termsAndConditionsData = [
 {
  title: "1. Acceptance of Terms",
  content: "By accessing or using our dining booking service, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service."
 },
 {
  title: "2. Booking and Reservations",
  content: [
   "All bookings are subject to availability.",
   "We reserve the right to refuse or cancel any booking at our discretion.",
   "You must provide accurate and complete information when making a booking.",
   "Cancellations and modifications to bookings are subject to our cancellation policy."
  ]
 },
 {
  title: "3. Payment and Pricing",
  content: [
   "We use Razorpay as our payment gateway provider for processing payments.",
   "All prices are in Indian Rupees (INR) and include applicable taxes.",
   "Payment is required at the time of booking to confirm your reservation.",
   "We reserve the right to change our prices at any time without prior notice."
  ]
 },
 {
  title: "4. Razorpay Payment Gateway",
  content: [
   "By using our service, you agree to be bound by Razorpay's Terms of Service.",
   "Your payment information is processed securely through Razorpay's encrypted payment gateway.",
   "We do not store your credit card details or any sensitive payment information on our servers.",
   "Any disputes regarding payments should be directed to Razorpay's customer support."
  ]
 },
 {
  title: "5. Refunds and Cancellations",
  content: [
   "Refunds are processed through the same payment method used for the original transaction.",
   "Cancellations made at least 24 hours before the reservation time are eligible for a full refund.",
   "Cancellations made less than 24 hours before the reservation time are not eligible for a refund.",
   "No-shows will be charged the full booking amount."
  ]
 },
 {
  title: "6. User Responsibilities",
  content: [
   "You are responsible for arriving at the reserved time.",
   "You agree to follow all rules and regulations of the dining establishment.",
   "You are responsible for any damage caused to the establishment during your visit."
  ]
 },
 {
  title: "7. Privacy and Data Protection",
  content: [
   "We collect and process your personal data in accordance with our Privacy Policy.",
   "By using our service, you consent to the collection and use of your information as described in our Privacy Policy."
  ]
 },
 {
  title: "8. Limitation of Liability",
  content: [
   "We are not responsible for any issues arising from the dining experience itself.",
   "Our liability is limited to the amount paid for the booking."
  ]
 },
 {
  title: "9. Changes to Terms and Conditions",
  content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website."
 },
 {
  title: "10. Contact Information",
  content: "If you have any questions about these Terms and Conditions, please contact us at support@diningbooking.com."
 },
 {
  title: "11. Governing Law",
  content: "These Terms and Conditions are governed by and construed in accordance with the laws of India."
 }
];

export default function TermsAndConditions() {
 const [showScrollToTop, setShowScrollToTop] = useState(false);

 const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
  setShowScrollToTop(e.currentTarget.scrollTop > 300);
 };

 const scrollToTop = () => {
  const scrollArea = document.querySelector('.scroll-area');
  if (scrollArea) {
   scrollArea.scrollTop = 0;
  }
 };

 return (
  <div className="container mx-auto px-4 py-8">
   <Card className="relative overflow-hidden">
    <CardHeader className="bg-primary-gradient text-white">
     <CardTitle className="text-3xl font-bold">Terms and Conditions</CardTitle>
     <CardDescription className="text-gray-100">
      Please read these terms carefully before using our dining booking service.
     </CardDescription>
    </CardHeader>
    <CardContent className="p-0">
     <ScrollArea className="scroll-area h-[600px] w-full rounded-b-md p-6" onScroll={handleScroll}>
      <Accordion type="single" collapsible className="w-full">
       {termsAndConditionsData.map((item, index) => (
        <AccordionItem key={`${item.title}-${index}`} value={`item-${index + 1}`}>
         <AccordionTrigger>{item.title}</AccordionTrigger>
         <AccordionContent>
          {Array.isArray(item.content) ? (
           <ul className="list-disc pl-5 space-y-2">
            {item.content.map((point, pointIndex) => (
             <li key={`${point}-${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              pointIndex}`}>{point}</li>
            ))}
           </ul>
          ) : (
           <p>{item.content}</p>
          )}
         </AccordionContent>
        </AccordionItem>
       ))}
      </Accordion>

      <p className="mt-6 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
     </ScrollArea>
    </CardContent>
   </Card>
   {showScrollToTop && (
    <Button
     className="fixed bottom-4 right-4 rounded-full p-2"
     onClick={scrollToTop}
     aria-label="Scroll to top"
    >
     <ChevronUp className="h-6 w-6" />
    </Button>
   )}
  </div>
 );
}
