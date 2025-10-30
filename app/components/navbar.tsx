"use client";
import { useState } from "react";
import { Rubik } from "next/font/google";
import About from "./about";
import Resume from "./resume";
import Blog from "./blog";
import Contact from "./contact";
import Work from "./work";
import { motion, AnimatePresence } from "framer-motion";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Tabs() {
  const [active, setActive] = useState("about");

  const tabs = [
    { id: "about", label: "My About" },
    { id: "resume", label: "My Resume" },
    { id: "work", label: "My Work" },
    { id: "blog", label: "My Blog" },
    { id: "contact", label: "My Contact" },
  ];

  return (
    <div className={`flex flex-col items-center min-h-screen mt-15 ${rubik.className}`}>
      <div className="sticky top-0 z-50 w-full sm:w-11/12 bg-white/80 backdrop-blur-md rounded-2xl border-2 border-gray-200 mx-auto">
        <div className="max-w-5xl mx-auto flex justify-center p-3 sm:p-5">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-2xl">
            {tabs.map((tab) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`px-4 sm:px-10 py-2 sm:py-6 rounded-xl font-medium text-sm sm:text-lg transition-all duration-300 cursor-pointer ${
                  active === tab.id
                    ? "bg-[#FF014F] text-white shadow-md"
                    : "bg-gray-100 text-black hover:bg-[#FF014F] hover:text-white" }`}>
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-10 w-full max-w-5xl px-3 sm:px-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}>
            {active === "about" && <About />}
            {active === "resume" && <Resume />}
            {active === "work" && <Work />}
            {active === "blog" && <Blog />}
            {active === "contact" && <Contact />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
