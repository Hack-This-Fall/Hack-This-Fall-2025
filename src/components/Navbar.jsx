"use client";

import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.2)] border-none pt-10">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex items-center justify-center h-20">
          {/* Logo - Centered */}
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
        </div>
      </div>
    </nav>
  );
}
