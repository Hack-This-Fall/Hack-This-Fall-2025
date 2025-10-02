"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";

function NavList() {
  return (
    <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-0">
      <li>
        <a
          href="#hackathon"
          className="flex items-center px-6 py-3 text-[#535862] font-semibold text-base hover:text-black transition-colors font-outfit"
        >
          Hackathon
        </a>
      </li>
      <li>
        <a
          href="#build-stations"
          className="flex items-center px-6 py-3 text-[#535862] font-semibold text-base hover:text-black transition-colors font-outfit"
        >
          Build Stations
        </a>
      </li>
      <li>
        <a
          href="#partners"
          className="flex items-center px-6 py-3 text-[#535862] font-semibold text-base hover:text-black transition-colors font-outfit"
        >
          Partners
        </a>
      </li>
    </ul>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.2)] border-none">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Hack This Fall Logo"
              width={120}
              height={54}
              className="h-[54px] w-[120px] object-cover"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <NavList />
            <div className="flex items-center gap-3 ml-6">
              <Button
                variant="outline"
                className="border-2 border-black bg-white text-black font-semibold p-6 text-base hover:bg-gray-50 font-outfit rounded-none"
              >
                Join BuildStation
              </Button>
              <Button
                className="bg-[#ff9933] border-2 border-black text-black font-semibold p-6 text-base hover:bg-[#e6852e] font-outfit rounded-none"
              >
                Join Hackathon
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-black">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] bg-white">
                <div className="flex flex-col space-y-6 mt-6">
                  {/* Mobile Logo - Centered */}
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/assets/logo.png"
                      alt="Hack This Fall Logo"
                      width={150}
                      height={67}
                      className="h-[67px] w-[150px] object-cover"
                    />
                  </div>
                  
                  {/* Mobile Nav List */}
                  <div className="flex justify-center">
                    <NavList />
                  </div>
                  
                  {/* Mobile Buttons */}
                  <div className="flex flex-col gap-3 px-4">
                    <Button
                      variant="outline"
                      className="border-2 border-black bg-white text-black font-semibold py-4 text-base hover:bg-gray-50 w-full font-outfit rounded-none"
                      onClick={() => setIsOpen(false)}
                    >
                      Join BuildStation
                    </Button>
                    <Button
                      className="bg-[#ff9933] border-2 border-black text-black font-semibold py-4 text-base hover:bg-[#e6852e] w-full font-outfit rounded-none"
                      onClick={() => setIsOpen(false)}
                    >
                      Join Hackathon
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
