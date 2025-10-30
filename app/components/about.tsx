"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaCode, FaLaptopCode, FaPenNib, FaMobileAlt } from "react-icons/fa";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const statsData = [
  { number: 20000, text: "Our Project Complete" },
  { number: 10000, text: "Our Natural Products" },
  { number: 200, text: "Clients Reviews" },
  { number: 1000, text: "Our Satisfied Clients" },
];

export default function About() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter: any) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const speed = 50;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className={`shadow-lg rounded-2xl p-10 bg-white ${rubik.className}`}>
      <motion.div variants={fadeUp} className="text-left">
        <h3 className="font-semibold text-3xl">About Me</h3>
        <h2 className="text-4xl font-medium leading-snug my-6">
          Boost Business Strategic <br /> Solutions with Us
        </h2>
        <p className="text-gray-600 text-lg">
          Hello! I'm Fatima, a passionate Web Developer, Graphic Designer, and Data Analyst…
        </p>
      </motion.div>
      <motion.div variants={stagger} className="mt-14">
        <h3 className="text-3xl font-bold mb-6">What I Do?</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[FaCode, FaLaptopCode, FaPenNib, FaMobileAlt].map((Icon, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-gray-50 p-8 text-left shadow-sm hover:shadow-xl transition-all border-l-4 border-[#FFD6E0] hover:border-[#FF014F]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-[#FF014F] text-white p-4 rounded-full text-2xl">
                  <Icon />
                </div>
                <h5 className="text-xl font-semibold">Service {i + 1}</h5>
              </div>
              <p className="text-gray-600">
                Creativity meets innovation —
                delivering top-notch business solutions.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={stagger}
        className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {statsData.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.07 }}
            className="bg-gray-50 rounded-2xl py-10 shadow-sm hover:shadow-lg transition-all border-b-4 border-[#FF014F]"
          >
            <h3
              className="text-4xl font-semibold text-gray-900 mb-2 counter"
              data-target={item.number}
            >
              0
            </h3>
            <p className="text-gray-600 text-lg">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
