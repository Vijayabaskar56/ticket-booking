"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/image-slider";

export function Hero() {
 const images = [
  "https://images.unsplash.com/photo-1600057858461-d15e7dfc6306?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1552590635-27c2c2128abf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1655195672440-c8c62902a05c?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1552590635-27c2c2128abf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 ];
 return (
  <ImagesSlider className="h-[40rem] border-b mb-[0.3] border-primary" images={images}>
   <motion.div
    initial={{
     opacity: 0,
     y: -80,
    }}
    animate={{
     opacity: 1,
     y: 0,
    }}
    transition={{
     duration: 0.6,
    }}
    className="z-50 flex flex-col justify-center items-center"
   >
    <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
     Puff and Plug
    </motion.p>
    <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
     The Home For Your Faviroutes Food <br />
    </motion.p>
    <button className="px-4 py-2 backdrop-blur-sm border bg-orange-300/10 border-orange-500/20 text-white mx-auto text-center rounded-full relative mt-4" type="button">
     <span>Book Now →</span>
     <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-orange-500 to-transparent" />
    </button>
   </motion.div>
  </ImagesSlider>
 );
}
