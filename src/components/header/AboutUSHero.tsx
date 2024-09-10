'use client';
import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";


const AboutUSHero = () => {
 const images = [
  "https://images.unsplash.com/photo-1600057858461-d15e7dfc6306?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1552590635-27c2c2128abf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1655195672440-c8c62902a05c?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1552590635-27c2c2128abf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 ];
 return (
  <div className="flex justify-center w-full h-40 items-center">
   {images.map((image, idx) => (
    <motion.div
     key={`image-${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
      idx}`}
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
     className="rounded-xl -mr-4 mt-4 p-1  flex-shrink-0 overflow-hidden"
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
 );
};

export default AboutUSHero;
