import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactUs() {
 return (
  <div className="container mx-auto px-4 py-8">
   <div className="mb-8 text-center">
    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Contact Us</h1>
    <p className="text-xl text-gray-600">We&apos;d love to hear from you!</p>
   </div>

   <div className="grid md:grid-cols-2 gap-8">
    <Card className="md:order-2">
     <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
      <CardDescription className="text-gray-100">
       Fill out the form below and we&apos;ll get back to you as soon as possible.
      </CardDescription>
     </CardHeader>
     <CardContent className="pt-6">
      <form className="space-y-4">
       <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
         <Label htmlFor="first-name">First name</Label>
         <Input id="first-name" placeholder="John" required />
        </div>
        <div className="space-y-2">
         <Label htmlFor="last-name">Last name</Label>
         <Input id="last-name" placeholder="Doe" required />
        </div>
       </div>
       <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="john.doe@example.com" type="email" required />
       </div>
       <div className="space-y-2">
        <Label htmlFor="phone">Phone number</Label>
        <Input id="phone" placeholder="(123) 456-7890" type="tel" />
       </div>
       <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Select>
         <SelectTrigger id="subject">
          <SelectValue placeholder="Select a subject" />
         </SelectTrigger>
         <SelectContent>
          <SelectItem value="reservation">Reservation</SelectItem>
          <SelectItem value="feedback">Feedback</SelectItem>
          <SelectItem value="catering">Catering</SelectItem>
          <SelectItem value="other">Other</SelectItem>
         </SelectContent>
        </Select>
       </div>
       <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
         id="message"
         placeholder="Please enter your message here"
         required
        />
       </div>
      </form>
     </CardContent>
     <CardFooter className="flex justify-end">
      <Button type="submit" className="bg-gradient-to-r from-orange-500 to-red-500 text-white">Send Message</Button>
     </CardFooter>
    </Card>

    <div className="space-y-8 md:order-1">
     <Card>
      <CardHeader>
       <CardTitle className="text-2xl font-bold">Our Location</CardTitle>
      </CardHeader>
      <CardContent>
       <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
         title="Gourmet Table Location"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412634965804!2d-73.98784368459377!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1647551896221!5m2!1sen!2sus"
         width="100%"
         height="100%"
         style={{ border: 0 }}
         allowFullScreen
         loading="lazy"
        />
       </div>
       <div className="space-y-2">
        <div className="flex items-center">
         <MapPin className="h-5 w-5 mr-2 text-orange-500" />
         <p>123 Gourmet Street, Foodie City, FC 12345</p>
        </div>
        <div className="flex items-center">
         <Phone className="h-5 w-5 mr-2 text-orange-500" />
         <p>+1 (555) 123-4567</p>
        </div>
        <div className="flex items-center">
         <Mail className="h-5 w-5 mr-2 text-orange-500" />
         <p>contact@puffandplug.com</p>
        </div>
       </div>
      </CardContent>
     </Card>

     <Card>
      <CardHeader>
       <CardTitle className="text-2xl font-bold">Opening Hours</CardTitle>
      </CardHeader>
      <CardContent>
       <ul className="space-y-2">
        <li><span className="font-semibold">Monday - Friday:</span> 11:00 AM - 10:00 PM</li>
        <li><span className="font-semibold">Saturday - Sunday:</span> 10:00 AM - 11:00 PM</li>
        <li><span className="font-semibold">Holidays:</span> 12:00 PM - 9:00 PM</li>
       </ul>
      </CardContent>
     </Card>
    </div>
   </div>
  </div>
 );
}
