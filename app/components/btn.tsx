"use client";
import { ArrowUp,  } from "lucide-react";
import { FaFacebookMessenger } from "react-icons/fa";

export default function FloatingButtons() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 bottom-10 flex flex-col gap-4 z-5">
      <button
        className=" cursor-pointer w-14 h-14 bg-[#FF014F]  text-white rounded-full flex justify-center items-center shadow-lg transition-all">
        <FaFacebookMessenger className="w-5 h-5" />
      </button>

        <button
        onClick={scrollToTop}
        className="cursor-pointer w-14 h-14 bg-[#FF014F] text-white rounded-full flex justify-center items-center shadow-lg transition-all">
        <ArrowUp className="w-5 h-5" />
      </button>

    </div>
  );
}
