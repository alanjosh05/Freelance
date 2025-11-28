"use client";
import React from "react";
import { MagicBentoGrid, MagicBentoCard } from "@/components/ui/MagicBentoGrid";
import {
  Smartphone,
  Bot,
  Globe,
  Palette,
} from "lucide-react";

export function Services() {
  return (
    <div className="min-h-screen w-full bg-black bg-grid-white/[0.2] relative flex flex-col items-center justify-center py-20" id="services">
       <div className="absolute inset-0 h-full w-full bg-black bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-base text-neutral-300 font-semibold tracking-wide uppercase">
            Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Our Expertise
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Specialized solutions to drive your digital transformation.
          </p>
        </div>
        <MagicBentoGrid className="max-w-7xl mx-auto">
          {items.map((item, i) => (
            <MagicBentoCard
              key={i}
              name={item.title}
              className={i === 0 || i === 3 ? "md:col-span-2 min-h-[20rem]" : "md:col-span-1 min-h-[20rem]"}
              background={
                <div className="absolute inset-0 opacity-60 transition-opacity group-hover:opacity-40">
                    {item.header}
                </div>
              }
              Icon={item.icon}
              description={item.description}
              href="#"
            />
          ))}
        </MagicBentoGrid>
      </div>
    </div>
  );
}

const ImageHeader = ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
);

const items = [
  {
    title: "Business Automation",
    description: "Smart tools to help your business run smoother and faster.",
    header: <ImageHeader src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop" alt="AI Automation" />,
    icon: Bot,
  },
  {
    title: "Website Creation",
    description: "Beautiful websites that look great on any device.",
    header: <ImageHeader src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop" alt="Web Development" />,
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    description: "Engaging apps for iPhone and Android users.",
    header: <ImageHeader src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop" alt="Mobile App Development" />,
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "Intuitive and visually stunning interfaces for your products.",
    header: <ImageHeader src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop" alt="UI Design" />,
    icon: Palette,
  },
];
