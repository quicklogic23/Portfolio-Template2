"use client";
import {FaInstagram,FaLinkedinIn,FaTwitter,FaFacebookF} from "react-icons/fa";
import { Rubik } from "next/font/google";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1 }}
      className={`${rubik.className} flex items-center justify-center min-h-screen bg-gray-50`}>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="border-2 border-gray-200 rounded-3xl p-10 flex flex-col items-center text-center w-[1000px] bg-white/80 backdrop-blur-xl shadow-xl">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src="/Pic1.webp"
          alt="John Lee"
          className="w-80 h-80 object-cover rounded-xl"/>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold mt-6 text-gray-900">
          John Lee
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-base mt-1 text-gray-600">
          Chief Operating Officer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-lg space-y-1">
          <p>Phone: +01234567890</p>
          <p>Email: admin@example.com</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-5 mt-6">
          {[
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaLinkedinIn />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaFacebookF />, link: "#" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="relative group w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 overflow-hidden transition transform hover:scale-110"
            >
              <span className="absolute inset-0 bg-[#FF014F] scale-0 group-hover:scale-100 rounded-full transition-transform duration-300 ease-in-out origin-center"></span>
              <span className="relative z-10 text-gray-800 group-hover:text-white text-lg transition-colors duration-300">
                {item.icon}
              </span>
            </a>
          ))}
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          href="#"
          className="relative mt-10 inline-flex items-center justify-center bg-[#FF014F] text-white font-semibold px-8 py-4 rounded-full shadow-md overflow-hidden transition-all duration-500 group">
          <span className="flex items-center gap-2 transition-all duration-500 group-hover:gap-4">
            <span className="order-2 group-hover:order-1 transition-all duration-500 transform group-hover:-translate-x-1">
              <FaArrowDown className="text-lg" />
            </span>
            <span className="order-1 group-hover:order-2 flex transition-all duration-500">
              {"Download CV".split("").map((char, i) => (
                <span
                  key={i}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  style={{ transitionDelay: `${i * 40}ms` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </span>
        </motion.a>
      </motion.div>
    </motion.main>
  );
}
