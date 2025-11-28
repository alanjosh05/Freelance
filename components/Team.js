"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Alan Joshua",
    role: "Fullstack & AI developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    socials: {
      linkedin: "#",
    },
  },
  {
    name: "Sriram Tantri",
    role: "Backend & AI developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    socials: {
      linkedin: "https://www.linkedin.com/in/sriram-tantri-b0a2a0284/",
    },
  },
];

export function Team() {
  return (
    <section className="min-h-screen w-full bg-black bg-grid-white/[0.2] relative flex flex-col items-center justify-center py-20" id="team">
      <div className="absolute inset-0 h-full w-full bg-black bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10 w-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-base text-neutral-300 font-semibold tracking-wide uppercase"
          >
            Our Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl"
          >
            Meet the Minds Behind the Magic
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-neutral-900/50 border border-white/10 p-8 hover:bg-neutral-900/80 transition-colors duration-300 h-full flex flex-col items-center text-center">
                <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-white/10 shadow-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-neutral-500 font-medium mb-4">{member.role}</p>
                
                <div className="flex justify-center mt-auto">
                  <a href={member.socials.linkedin} className="text-neutral-400 hover:text-blue-400 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>

                <BorderBeam size={250} duration={12} delay={9} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
