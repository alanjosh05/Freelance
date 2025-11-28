"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/BorderBeam";

export function Hero() {
  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-black">
      <Image
        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2560&auto=format&fit=crop"
        alt="AI Technology Background"
        fill
        className="object-cover absolute inset-0 z-0 opacity-50"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
      <div className="p-4 max-w-7xl mx-auto relative z-20 w-full pt-20 md:pt-0">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-4xl md:text-7xl font-bold text-center text-white tracking-tight"
        >
          Building the Future <br /> with <span className="text-blue-500">Intelligent AI.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-6 font-medium text-lg text-neutral-200 max-w-lg text-center mx-auto mb-8"
        >
          Scalable, efficient, and visionary digital solutions.
        </motion.p>
        
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50" />
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}
