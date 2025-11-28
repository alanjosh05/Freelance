"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "@/components/ui/Marquee";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <section className="py-20 bg-black relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-neutral-300 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            What Our Clients Say
          </p>
        </div>

        <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
          <Marquee pauseOnHover className="[--duration:30s]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = ({ image, name, role, quote }) => {
  return (
    <div
      className={cn(
        "relative w-74 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="42" height="32" alt="" src={image} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{role}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-neutral-300">{quote}</blockquote>
    </div>
  );
};

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    quote: "The team transformed our business operations with their AI automation solutions. Highly recommended!",
  },
  {
    name: "Michael Chen",
    role: "Founder, StartUp Inc",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    quote: "Their web development skills are top-notch. Our new site is fast, beautiful, and converts visitors into customers.",
  },
  {
    name: "Emily Davis",
    role: "Marketing Director, Creative Co",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    quote: "The mobile app they built for us has received rave reviews from our users. Professional and easy to work with.",
  },
  {
    name: "James Wilson",
    role: "CTO, FutureNet",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    quote: "Exceptional quality and attention to detail. The UI design is simply stunning.",
  },
  {
    name: "Linda Martinez",
    role: "Product Manager, Appify",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    quote: "They delivered the project on time and exceeded our expectations. A true partner.",
  },
  {
    name: "Robert Taylor",
    role: "Director, Innovate",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
    quote: "The best freelance team we've worked with. Their technical expertise is unmatched.",
  },
];

