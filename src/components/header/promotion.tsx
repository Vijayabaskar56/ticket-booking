import React from "react";
import { LayoutGrid } from "../ui/layout-grid";


export function Promotion() {
 return (
  <div className="h-screen py-20 w-full">
   <LayoutGrid cards={cards} />
  </div>
 );
}

const SkeletonOne = () => {
 return (
  <div>
   <p className="font-bold md:text-4xl text-xl text-white">
    House in the woods
   </p>
   <p className="font-normal text-base text-white" />
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
   <p className="font-normal text-base text-white" />
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
   <p className="font-normal text-base text-white" />
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
   <p className="font-normal text-base text-white" />
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
   "https://images.unsplash.com/photo-1552590635-27c2c2128abf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 },
 {
  id: 2,
  content: <SkeletonTwo />,
  className: "col-span-1",
  thumbnail:
   "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 },
 {
  id: 3,
  content: <SkeletonThree />,
  className: "col-span-1",
  thumbnail:
   "https://images.unsplash.com/photo-1655195672440-c8c62902a05c?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 },
 {
  id: 4,
  content: <SkeletonFour />,
  className: "md:col-span-2",
  thumbnail:
   "https://images.unsplash.com/photo-1600057858461-d15e7dfc6306?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 },
];
