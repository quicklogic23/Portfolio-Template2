"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  { id: 1, img: "/Box1.jpg", title: "Creative UI Portfolio", category: "UI Design" },
  { id: 2, img: "/Box2.jpg", title: "Finance App UI", category: "Mobile App" },
  { id: 3, img: "/Box3.webp", title: "Business Dashboard", category: "Dashboard" },
  { id: 4, img: "/Box4.webp", title: "E-Commerce Template", category: "Online Store" },
  { id: 5, img: "/Box5.webp", title: "Branding Project", category: "Brand Identity" },
  { id: 6, img: "/Box6.webp", title: "Mobile App UI", category: "App Design" },
];

export default function RecentPosts() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-10">
        <h4 className="text-lg font-semibold tracking-widest">My Completed Work</h4>
        <h2 className="text-5xl font-bold mt-3 leading-tight">
          Elevate your brand with a the
        </h2>
        <p className="text-gray-500 mt-2 max-w-3xl">
          ished fact that a reader will be distrol acted bioiiy desig ished fact
          that a reader will acted ished fact that a reader will be distrol acted
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.03, rotateX: 4, rotateY: -4 }}
            className="relative group border-2 border-pink-500/20 rounded-2xl transition-all shadow-sm cursor-pointer overflow-hidden">
            <div className="w-full h-[450px] overflow-hidden rounded-2xl">
              <Image
                src={project.img}
                alt={project.title}
                width={600}
                height={450}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 rounded-2xl"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-pink-600/60 to-transparent
                            opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl">
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between 
                            text-white opacity-0 group-hover:opacity-100 transition-all duration-500">

              <div>
                <h3 className="text-sm font-semibold drop-shadow-md">{project.title}</h3>
                <p className="font-bold text-3xl drop-shadow-md hover:text-[#FF014F]">
                  {project.category}
                </p>
              </div>
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-[#FF014F] 
                              flex justify-center items-center transition-all duration-500">
                
                <span className="absolute inset-0 bg-[#FF014F] scale-x-0 origin-right 
                                group-hover:scale-x-100 transition-transform duration-500"></span>

                <ArrowRight className="relative z-10 text-[#FF014F] group-hover:text-white 
                                      transition-all duration-500 group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
