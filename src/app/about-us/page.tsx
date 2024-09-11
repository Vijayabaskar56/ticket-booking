import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AboutUSHero from "@/components/header/AboutUSHero";
import Link from "next/link";

const AboutUS = () => {
  return (
    <div className="container mx-auto px-10 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-4xl font-bold text-transparent">
          About Us
        </h1>
        <p className="text-xl text-gray-600">Learn More about Our Services!</p>
      </div>
      <section>
        <AboutUSHero />
      </section>
      <section className="my-12 w-full">
        <Card className="w-full md:order-2">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardTitle className="text-2xl font-bold">our Story</CardTitle>
          </CardHeader>
          <CardContent className="w-full pt-6">
            <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">
              <div className="md:w-1/2">
                <p className="mb-4 text-lg">
                  Welcome to Puff and Plug, the ultimate hangout where comfort
                  meets flavor! Our space is designed for those who want to kick
                  back, enjoy some tasty bakery treats, and indulge in their
                  favorite smoking options—all in a cozy, inviting atmosphere.
                </p>
                <p className="mb-4 text-lg">
                  Imagine a place where you can set up your workspace for the
                  day, surrounded by the delicious aroma of freshly baked goods
                  while enjoying a smooth puff. Whether you prefer classic
                  tobacco, flavorful e-cigarettes, or innovative heat-not-burn
                  products, we have a variety of options to cater to your
                  cravings.
                </p>
                <p className="mb-4 text-lg">
                  Our comfy seating and relaxed vibe make it easy to settle in
                  and work for hours. Take breaks to grab a snack or chat with
                  friends, all while enjoying a seamless smoking experience.
                  Puff and Plug is not just a café; it’s your new favorite spot
                  to unwind, work, and savor the good things in life. Come join
                  us and make your day a little sweeter!
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
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold">Meet Our Team</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              name: "Maria Rodriguez",
              role: "Head Chef",
              image: "/placeholder.svg?height=200&width=200",
            },
            {
              name: "John Smith",
              role: "Sous Chef",
              image: "/placeholder.svg?height=200&width=200",
            },
            {
              name: "Emily Chen",
              role: "Pastry Chef",
              image: "/placeholder.svg?height=200&width=200",
            },
          ].map((member) => (
            <Card key={member.name}>
              <CardHeader>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
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
        <h2 className="mb-4 text-2xl font-semibold">
          Some of our products include:
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {[
            {
              title: "List of Products",
              description:
                "Vapes, Cigars, Hookah, CBD, Kratom, Exotic Snacks & Drinks, Tobacco, Cigarettes, Cigarillos, Wraps, Delta 8, Delta 9, Delta 10, Posh, Breeze, Mr. Fog, Esco Bars, Elf Bar, Hyde, Koppie, Pixxi, Raw, Swisher, White Owl, Game, Dutch, Pipes, Cones, Papers, Blunts, Bongs, Glass, Bowls, Chillums, Grinders, Stash Cans, Candles, Incense, and MUCH MORE!!",
            },
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
          <Button size="lg">Make a Reservation</Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUS;
