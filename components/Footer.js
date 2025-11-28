import React from "react";

export function Footer() {
  return (
    <footer className="bg-black text-center py-10 border-t border-white/10" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-neutral-500 text-sm mb-4">
          &copy; {new Date().getFullYear()} Freelance Portfolio. All rights reserved.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <a href="mailto:contact@freelance.com" className="text-lg font-semibold text-white hover:text-blue-400 transition">
            contact@freelance.com
          </a>
          
        </div>
      </div>
    </footer>
  );
}
