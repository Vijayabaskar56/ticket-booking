'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronUp } from 'lucide-react';

const refundPolicyData = [
 {
  title: "1. General Refund Policy",
  content: "We strive to ensure your satisfaction with our dining booking service. However, we understand that circumstances may arise where a refund is necessary. This policy outlines the conditions under which refunds are provided."
 },
 {
  title: "2. Eligibility for Refunds",
  content: [
   "Cancellations made at least 24 hours before the reservation time are eligible for a full refund.",
   "Cancellations made less than 24 hours before the reservation time are not eligible for a refund.",
   "In case of restaurant closures or other unforeseen circumstances on our end, a full refund will be provided.",
   "No-shows are not eligible for a refund."
  ]
 },
 {
  title: "3. Refund Process",
  content: [
   "Refunds are processed through the same payment method used for the original transaction.",
   "Refund requests must be submitted through our customer support channel.",
   "Approved refunds will be processed within 5-7 business days.",
   "The time it takes for the refund to appear in your account may vary depending on your payment provider."
  ]
 },
 {
  title: "4. Partial Refunds",
  content: [
   "In some cases, we may offer partial refunds:",
   "If you've used only a portion of your booking (e.g., arrived late but still dined).",
   "If there were issues with the service that didn't entirely ruin your experience.",
   "The amount of the partial refund will be determined on a case-by-case basis."
  ]
 },
 {
  title: "5. Non-Refundable Situations",
  content: [
   "Refunds will not be provided in the following situations:",
   "Dissatisfaction with the menu or food quality (these are under the restaurant's purview).",
   "Failure to present valid ID or meet other restaurant-specific requirements.",
   "Violation of the restaurant's policies or code of conduct."
  ]
 },
 {
  title: "6. Exceptional Circumstances",
  content: [
   "We understand that exceptional circumstances can occur. In cases of:",
   "Medical emergencies (with proper documentation)",
   "Natural disasters or severe weather conditions",
   "Unexpected travel restrictions",
   "We will review refund requests on a case-by-case basis and may offer a full or partial refund at our discretion."
  ]
 },
 {
  title: "7. Changes to Refund Policy",
  content: "We reserve the right to modify this refund policy at any time. Changes will be effective immediately upon posting on our website. It is your responsibility to review this policy periodically."
 },
 {
  title: "8. Contact Information",
  content: [
   "If you have any questions about our refund policy or to request a refund, please contact our customer support team at:",
   "Email: refunds@diningbooking.com",
   "Phone: +91 1234567890",
   "Our support team is available Monday to Friday, 9 AM to 6 PM IST."
  ]
 }
];

export default function RefundPolicy() {
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
     <CardTitle className="text-3xl font-bold">Refund Policy</CardTitle>
     <CardDescription className="text-gray-100">
      Our commitment to fair and transparent refund practices
     </CardDescription>
    </CardHeader>
    <CardContent className="p-0">
     <ScrollArea className="scroll-area h-[600px] w-full rounded-b-md p-6" onScroll={handleScroll}>
      <Accordion type="single" collapsible className="w-full">
       {refundPolicyData.map((item, index) => (
        <AccordionItem key={item.title} value={`item-${index + 1}`}>
         <AccordionTrigger>{item.title}</AccordionTrigger>
         <AccordionContent>
          {Array.isArray(item.content) ? (
           <ul className="list-disc pl-5 space-y-2">
            {item.content.map((point, pointIndex) => (
             <li key={`${pointIndex}-${point}`}>{point}</li>
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
