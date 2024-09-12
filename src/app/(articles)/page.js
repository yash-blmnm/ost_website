import React from "react";
import { aboutContent } from "../../lib/about";
import Image from "next/image";
import About from "../../markdown/about.mdx";

export default function page() {
  return (
    <div className="prose w-full max-w-full">
      <About />
    </div>
  );
}
