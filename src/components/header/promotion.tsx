"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";
import { motion } from "framer-motion";
import Image from "next/image";


export function Promotion() {
 const images = [
  "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 ];
 return (
  <div className="h-screen py-20 w-full">
   <LayoutGrid cards={cards} />
   <div className="flex justify-center w-full h-40 items-center">
    {images.map((image, idx) => (
     <motion.div
      key={"images" + idx}
      style={{
       rotate: Math.random() * 20 - 10,
      }}
      whileHover={{
       scale: 1.1,
       rotate: 0,
       zIndex: 100,
      }}
      whileTap={{
       scale: 1.1,
       rotate: 0,
       zIndex: 100,
      }}
      className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
     >
      <Image
       src={image}
       alt="bali images"
       width="500"
       height="500"
       className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
      />
     </motion.div>
    ))}
   </div>
  </div>
 );
}

const SkeletonOne = () => {
 return (
  <div>
   <p className="font-bold md:text-4xl text-xl text-white">
    House in the woods
   </p>
   <p className="font-normal text-base text-white"></p>
   <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    A serene and tranquil retreat, this house in the woods offers a peaceful
    escape from the hustle and bustle of city life.
   </p>
  </div>
 );
};

const SkeletonTwo = () => {
 return (
  <div>
   <p className="font-bold md:text-4xl text-xl text-white">
    House above the clouds
   </p>
   <p className="font-normal text-base text-white"></p>
   <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    Perched high above the world, this house offers breathtaking views and a
    unique living experience. It&apos;s a place where the sky meets home,
    and tranquility is a way of life.
   </p>
  </div>
 );
};
const SkeletonThree = () => {
 return (
  <div>
   <p className="font-bold md:text-4xl text-xl text-white">
    Greens all over
   </p>
   <p className="font-normal text-base text-white"></p>
   <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
    perfect place to relax, unwind, and enjoy life.
   </p>
  </div>
 );
};
const SkeletonFour = () => {
 return (
  <div>
   <p className="font-bold md:text-4xl text-xl text-white">
    Rivers are serene
   </p>
   <p className="font-normal text-base text-white"></p>
   <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
    A house by the river is a place of peace and tranquility. It&apos;s the
    perfect place to relax, unwind, and enjoy life.
   </p>
  </div>
 );
};

const cards = [
 {
  id: 1,
  content: <SkeletonOne />,
  className: "md:col-span-2",
  thumbnail:
   "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 },
 {
  id: 2,
  content: <SkeletonTwo />,
  className: "col-span-1",
  thumbnail:
   "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 },
 {
  id: 3,
  content: <SkeletonThree />,
  className: "col-span-1",
  thumbnail:
   "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 },
 {
  id: 4,
  content: <SkeletonFour />,
  className: "md:col-span-2",
  thumbnail:
   "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 },
];
