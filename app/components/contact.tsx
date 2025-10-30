import { Rubik } from "next/font/google";
import { motion } from "framer-motion";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Contact() {
  const container = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      className={`${rubik.className} py-20 px-6`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}>
      <motion.div className="max-w-5xl mx-auto text-left mb-10" variants={item}>
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-3xl font-semibold">GET IN TOUCH</h3>
        </div>

        <h2 className="text-5xl font-bold leading-tight mb-4">
          Elevate your brand with a the
        </h2>

        <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
          ished fact that a reader will be distrol acted bioiiy desig ished fact
          that a reader will acted ished fact that a reader will be distrol acted
        </p>
      </motion.div>

      <motion.form className="max-w-6xl mx-auto" variants={container}>
        <motion.div className="grid md:grid-cols-2 gap-6 mb-6" variants={item}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-white border border-gray-200 rounded-xl py-4 px-5 focus:border-[#FF014F] outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-white border border-gray-200 rounded-xl py-4 px-5 focus:border-[#FF014F] outline-none"
          />
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-6 mb-6" variants={item}>
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full bg-white border border-gray-200 rounded-xl py-4 px-5 focus:border-[#FF014F] outline-none"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-white border border-gray-200 rounded-xl py-4 px-5 focus:border-[#FF014F] outline-none"
          />
        </motion.div>

        <motion.textarea
          rows={6}
          placeholder="Your Message"
          className="w-full bg-white border border-gray-200 rounded-xl py-4 px-5 focus:border-[#FF014F] outline-none mb-8"
          variants={item}
        ></motion.textarea>

        <motion.button
          type="submit"
          className="w-full bg-[#FF014F] text-white text-lg py-4 rounded-full font-semibold hover:opacity-90 transition-all cursor-pointer"
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Appointment Now →
        </motion.button>
      </motion.form>
    </motion.section>
  );
}
