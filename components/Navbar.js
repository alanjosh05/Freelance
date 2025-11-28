import React from "react";
import { Dock, DockIcon } from "@/components/ui/Dock";
import { Home, User, Briefcase, MessageSquare, Star, Users } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <div className="fixed top-0 md:top-8 left-0 right-0 z-50 flex justify-center px-4">
      {/* Mobile Navbar (Dock) */}
      <div className="md:hidden">
        <Dock className="bg-black/50 border-white/10">
          <DockIcon>
            <Link href="/" className="flex h-full w-full items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors">
              <Home className="h-5 w-5 text-white" />
            </Link>
          </DockIcon>
          <DockIcon>
            <Link href="#about" className="flex h-full w-full items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors">
              <User className="h-5 w-5 text-white" />
            </Link>
          </DockIcon>
          <DockIcon>
            <Link href="#services" className="flex h-full w-full items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors">
              <Briefcase className="h-5 w-5 text-white" />
            </Link>
          </DockIcon>
          <DockIcon>
            <Link href="#team" className="flex h-full w-full items-center justify-center rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors">
              <Users className="h-5 w-5 text-white" />
            </Link>
          </DockIcon>
        </Dock>
      </div>

      {/* Desktop Navbar (Text) */}
      <div className="hidden md:flex items-center space-x-8 rounded-full border border-white/10 bg-black/50 px-10 py-4 backdrop-blur-md shadow-lg">
        <Link href="/" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
          Home
        </Link>
        <Link href="#about" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
          About
        </Link>
        <Link href="#services" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
          Services
        </Link>
        <Link href="#team" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
          Team
        </Link>
      </div>
    </div>
  );
};
