"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { DottedMap } from "@/components/ui/dotted-map";

export function About() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-black py-20 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base text-neutral-300 font-semibold tracking-wide uppercase mb-2">
            About Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Empowering Businesses with <span className="text-neutral-300">Future Tech</span>
          </h3>
          <p className="text-lg text-neutral-400 mb-6">
            We are a dedicated team of experts specializing in automation, website design, and mobile apps. Our mission is to transform your ideas into powerful digital products.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-neutral-200 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-white">Smart Automation</h4>
                <p className="text-neutral-400">Streamline operations with intelligent workflows.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-neutral-200 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-white">Website Design</h4>
                <p className="text-neutral-400">Build fast, responsive, and beautiful websites.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-neutral-200 mt-1" />
              <div>
                <h4 className="text-xl font-semibold text-white">Mobile Apps</h4>
                <p className="text-neutral-400">Create engaging experiences for mobile users.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Dotted Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[400px] w-full flex items-center justify-center"
        >
          <DottedMap className="w-full h-full text-neutral-400" />
          {/* Optional Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
