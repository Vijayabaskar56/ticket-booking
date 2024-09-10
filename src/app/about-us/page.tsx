import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AboutUSHero from '@/components/header/AboutUSHero';
import Link from 'next/link';

const AboutUS = () => {
 return (
  <div className="container mx-auto px-10 py-8">
   <div className="mb-8 text-center">
    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">About Us</h1>
    <p className="text-xl text-gray-600">Learn More about Our Services!</p>
   </div>
   <section>
    <AboutUSHero />
   </section>
   <section className="my-12 w-full">
    <Card className="md:order-2 w-full">
     <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <CardTitle className="text-2xl font-bold">our Story</CardTitle>
     </CardHeader>
     <CardContent className="pt-6 w-full">
      <div className="flex flex-col md:flex-row items-center w-full gap-8 justify-between">
       <div className="md:w-1/2">
        <p className="text-lg mb-4">
         Flavor Haven was born out of a passion for bringing people together through exceptional food. Founded in 2010 by Chef Maria Rodriguez, our restaurant has become a cornerstone of the community, offering a unique blend of traditional recipes and innovative culinary techniques.
        </p>
        <p className="text-lg">
         From our humble beginnings as a small family-owned eatery to the bustling establishment we are today, our commitment to quality ingredients and warm hospitality has remained unwavering.
        </p>
       </div>
       <div className="md:w-1/2">
        <Image
         src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         alt="Flavor Haven restaurant interior"
         width={400}
         height={300}
         className="rounded-lg shadow-lg"
        />
       </div>
      </div>
     </CardContent>
    </Card>
   </section >

   <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     {[
      { name: "Maria Rodriguez", role: "Head Chef", image: "/placeholder.svg?height=200&width=200" },
      { name: "John Smith", role: "Sous Chef", image: "/placeholder.svg?height=200&width=200" },
      { name: "Emily Chen", role: "Pastry Chef", image: "/placeholder.svg?height=200&width=200" },
     ].map((member) => (
      <Card key={member.name}>
       <CardHeader>
        <Image
         src={member.image}
         alt={member.name}
         width={200}
         height={200}
         className="rounded-full mx-auto"
        />
       </CardHeader>
       <CardContent className="text-center">
        <CardTitle className="mb-2">{member.name}</CardTitle>
        <p className="text-muted-foreground">{member.role}</p>
       </CardContent>
      </Card>
     ))}
    </div>
   </section>

   <section className="mb-12">
    <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     {[
      { title: "Quality Ingredients", description: "We source only the freshest, locally-sourced ingredients to ensure the best flavors in every dish." },
      { title: "Sustainability", description: "Our commitment to the environment is reflected in our eco-friendly practices and packaging." },
      { title: "Community", description: "We believe in giving back to our community through various outreach programs and local partnerships." },
      { title: "Innovation", description: "While respecting traditional recipes, we constantly innovate to bring exciting new flavors to our menu." },
     ].map((value) => (
      <Card key={value.title}>
       <CardHeader>
        <CardTitle>{value.title}</CardTitle>
       </CardHeader>
       <CardContent>
        <p>{value.description}</p>
       </CardContent>
      </Card>
     ))}
    </div>
   </section>

   <div className="text-center">
    <Link href="/booking">
     <Button size="lg">
      Make a Reservation
     </Button>
    </Link>
   </div>
  </div >
 );
};

export default AboutUS;
