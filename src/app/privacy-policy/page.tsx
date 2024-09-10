'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronUp } from 'lucide-react';

const privacyPolicyData = [
 {
  title: "1. Introduction",
  content: "Welcome to Gourmet Table's Privacy Policy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our dining booking service and tell you about your privacy rights and how the law protects you."
 },
 {
  title: "2. Information We Collect",
  content: [
   "Personal identification information (Name, email address, phone number, etc.)",
   "Booking information (Date, time, number of guests, special requests)",
   "Payment information (processed securely through our payment provider)",
   "Usage data (How you interact with our website and service)",
   "Marketing and communications data (Your preferences in receiving marketing from us)"
  ]
 },
 {
  title: "3. How We Use Your Information",
  content: [
   "To process and manage your bookings",
   "To provide customer support",
   "To improve our website and services",
   "To send you marketing communications (if you've opted in)",
   "To comply with legal obligations"
  ]
 },
 {
  title: "4. Data Security",
  content: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know."
 },
 {
  title: "5. Data Retention",
  content: "We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements."
 },
 {
  title: "6. Your Legal Rights",
  content: [
   "The right to access your personal data",
   "The right to correction of your personal data",
   "The right to erasure of your personal data",
   "The right to object to processing of your personal data",
   "The right to restrict processing of your personal data",
   "The right to data portability",
   "The right to withdraw consent"
  ]
 },
 {
  title: "7. Third-Party Links",
  content: "Our website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements."
 },
 {
  title: "8. Cookies",
  content: "We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
 },
 {
  title: "9. Changes to This Privacy Policy",
  content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last updated' date at the bottom of this Privacy Policy."
 },
 {
  title: "10. Contact Us",
  content: "If you have any questions about this Privacy Policy, please contact us at privacy@gourmettable.com or by post at: Gourmet Table, 123 Gourmet Street, Foodie City, FC 12345."
 }
];

export default function PrivacyPolicy() {
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
    <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
     <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
     <CardDescription className="text-gray-100">
      Your privacy is important to us. Please read our policy carefully.
     </CardDescription>
    </CardHeader>
    <CardContent className="p-0">
     <ScrollArea className="scroll-area h-[600px] w-full rounded-b-md p-6" onScroll={handleScroll}>
      <Accordion type="single" collapsible className="w-full">
       {privacyPolicyData.map((item, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <AccordionItem key={index} value={`item-${index + 1}`}>
         <AccordionTrigger>{item.title}</AccordionTrigger>
         <AccordionContent>
          {Array.isArray(item.content) ? (
           <ul className="list-disc pl-5 space-y-2">
            {item.content.map((point, pointIndex) => (
             // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
             <li key={pointIndex}>{point}</li>
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
