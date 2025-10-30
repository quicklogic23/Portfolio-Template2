"use client";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-white py-8 sm:py-10">
      <div className="flex flex-col items-center justify-center gap-4 px-4">
        <Image
          src="/Logo.webp"
          alt="Logo"
          width={120}
          height={50}
          className="object-contain"/>
        <p className="text-sm sm:text-xl text-center">
          © 2025. All rights reserved by{" "}
          <span className="hover:text-[#FF014F] cursor-pointer">Inversweb.</span>
        </p>
      </div>
    </footer>
  );
}
