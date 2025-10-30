"use client";
import Image from "next/image";
import { ArrowRight, User, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function RecentPosts() {
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const arrowVariants = {
    hover: { x: 5 },
  };

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="mb-10">
        <h4 className="text-lg font-semibold tracking-widest">My Recent Post</h4>
        <h2 className="text-5xl font-bold mt-3 leading-tight">
          Elevate your brand with a the
        </h2>
        <p className="text-gray-500 mt-2 max-w-3xl">
          ished fact that a reader will be distrol acted bioiiy desig ished fact
          that a reader will acted ished fact that a reader will be distrol acted
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">

        {/* Post 1 */}
        <motion.div
          className="bg-white border-r-4 border-[#FF014F] shadow-md rounded-2xl transition-all hover:shadow-lg cursor-pointer w-[90%] mx-auto"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="relative w-full h-[280px] overflow-hidden rounded-2xl">
            <Image
              src="/Blog1.webp"
              alt="Post Image"
              fill
              className="object-cover grayscale rounded-2xl"
            />
            <span className="absolute top-0 left-0 bg-black/80 text-white text-sm md:text-base font-bold py-2 px-4 rounded-br-lg">
              12 Feb
            </span>
          </div>

          <div className="p-6">
            {/* Author & Comments */}
            <div className="flex items-center gap-4 text-gray-600 mb-3 text-sm md:text-base">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4 md:w-5 md:h-5" /> Mesbah
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" /> Comments (05)
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Inspiring the World, One Project at a Time for the men
            </h3>

            {/* Read More Button */}
            <motion.button
              className="mt-10 flex items-center gap-2 px-6 py-4 border border-gray-400 rounded-full
                         bg-gray-100 text-gray-900 font-medium 
                         hover:bg-gradient-to-r hover:from-[#FF014F] hover:to-[#FF014F]
                         hover:text-white transition-all duration-300 cursor-pointer"
              whileHover="hover"
            >
              Read More
              <motion.span variants={arrowVariants}>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>

        {/* Post 2 */}
        <motion.div
          className="bg-white border-r-4 border-[#FF014F] shadow-md rounded-2xl transition-all hover:shadow-lg cursor-pointer w-[90%] mx-auto"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="relative w-full h-[280px] overflow-hidden rounded-2xl">
            <Image
              src="/Blog2.webp"
              alt="Post Image"
              fill
              className="object-cover grayscale rounded-2xl"
            />
            <span className="absolute top-0 left-0 bg-black/80 text-white text-sm md:text-base font-bold py-2 px-4 rounded-br-lg">
              13 Feb
            </span>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-4 text-gray-600 mb-3 text-sm md:text-base">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4 md:w-5 md:h-5" /> Mesbah
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" /> Comments (05)
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Let’s bring your ideas to life! Contact me and let's work
            </h3>

            <motion.button
              className="mt-10 flex items-center gap-2 px-6 py-4 border border-gray-400 rounded-full
                         bg-gray-100 text-gray-900 font-medium 
                         hover:bg-gradient-to-r hover:from-[#FF014F] hover:to-[#FF014F]
                         hover:text-white transition-all duration-300 cursor-pointer"
              whileHover="hover"
            >
              Read More
              <motion.span variants={arrowVariants}>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>

            {/* Post 3 */}
        <motion.div
          className="bg-white border-r-4 border-[#FF014F] shadow-md rounded-2xl transition-all hover:shadow-lg cursor-pointer w-[90%] mx-auto"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="relative w-full h-[280px] overflow-hidden rounded-2xl">
            <Image
              src="/Blog3.webp"
              alt="Post Image"
              fill
              className="object-cover grayscale rounded-2xl"
            />
            <span className="absolute top-0 left-0 bg-black/80 text-white text-sm md:text-base font-bold py-2 px-4 rounded-br-lg">
              13 Feb
            </span>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-4 text-gray-600 mb-3 text-sm md:text-base">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4 md:w-5 md:h-5" /> Mesbah
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" /> Comments (05)
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Let’s bring your ideas to life! Contact me and let's work
            </h3>

            <motion.button
              className="mt-10 flex items-center gap-2 px-6 py-4 border border-gray-400 rounded-full
                         bg-gray-100 text-gray-900 font-medium 
                         hover:bg-gradient-to-r hover:from-[#FF014F] hover:to-[#FF014F]
                         hover:text-white transition-all duration-300 cursor-pointer"
              whileHover="hover"
            >
              Read More
              <motion.span variants={arrowVariants}>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>

            {/* Post 4 */}
        <motion.div
          className="bg-white border-r-4 border-[#FF014F] shadow-md rounded-2xl transition-all hover:shadow-lg cursor-pointer w-[90%] mx-auto"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={cardVariants}>
          <div className="relative w-full h-[280px] overflow-hidden rounded-2xl">
            <Image
              src="/Blog4.webp"
              alt="Post Image"
              fill
              className="object-cover grayscale rounded-2xl"/>
            <span className="absolute top-0 left-0 bg-black/80 text-white text-sm md:text-base font-bold py-2 px-4 rounded-br-lg">
              13 Feb
            </span>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-4 text-gray-600 mb-3 text-sm md:text-base">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4 md:w-5 md:h-5" /> Mesbah
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" /> Comments (05)
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Let’s bring your ideas to life! Contact me and let's work
            </h3>

            <motion.button
              className="mt-10 flex items-center gap-2 px-6 py-4 border border-gray-400 rounded-full
                         bg-gray-100 text-gray-900 font-medium 
                         hover:bg-gradient-to-r hover:from-[#FF014F] hover:to-[#FF014F]
                         hover:text-white transition-all duration-300 cursor-pointer"
              whileHover="hover">
              Read More
              <motion.span variants={arrowVariants}>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
