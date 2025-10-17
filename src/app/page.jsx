import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 gap-10">
      {/* Logo */}
      <Image src="/logo.png" width={300} height={300} alt="IT Legend Logo" />

      {/* Button */}
      <Link href="/course-details">
        <button className="bg-background rounded-sm px-8 py-4 text-lg font-medium transition-all hover:bg-primary-base hover:text-background cursor-pointer border border-border">
          Starting SEO as your Home-Based Business
        </button>
      </Link>
    </div>
  );
}
