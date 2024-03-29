// Ensure that this file is named properly, e.g., Navbar.jsx or Navbar.tsx
// Make sure it's recognized as a React component file

"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const handleClick = (id: string) => {
    const yOffset = -150; 
    const element = document.getElementById(id);
    const y = (element?.getBoundingClientRect()?.top ?? 0) + window.pageYOffset + yOffset; 
    window.scrollTo({ top: y, behavior: 'smooth' });
    setActive(id); // Set active menu item if needed
  };


  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <button onClick={() => handleClick("about")}>About</button>
        <button onClick={() => handleClick("members")}>Members</button>
        <button onClick={() => handleClick("faqs")}>FAQs</button>
        <button onClick={() => handleClick("gallery")}>Gallery</button>
      </Menu>
    </div>
  );
}

export default Navbar;

        {/* <Link href="#members">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Members"
          ></MenuItem>
        </Link> */}

        
        {/* <Link href="#faqs">
          <MenuItem
            setActive={setActive}
            active={active}
            item="FAQs"
          ></MenuItem>
        </Link> */}

        {/* <Link href="#gallery">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Gallery"
          ></MenuItem>
        </Link> */}


