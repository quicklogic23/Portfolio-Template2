"use client";
import { Rubik } from "next/font/google";
import { motion } from "framer-motion";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Education() {
  return (
    <section className={`${rubik.className} py-20 px-6`}>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-left">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-3xl">Education</h3>
        </div>

        <h2 className="text-5xl leading-tight mb-4">
          Elevate your brand with a the
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
          ished fact that a reader will be distrol acted bioiiy desig ished fact
          that a reader <br /> will acted ished fact that a reader will be distrol
          acted.
        </p>
      </motion.div>
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-8 mt-10">
        {[
          {
            title: "Trainer Marketing",
            date: "2005-2009",
            desc: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience, and creativity.",
          },
          {
            title: "Assistant Director",
            date: "2010-2014",
            desc: "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs.",
          },
          {
            title: "Design Assistant",
            date: "2008-2012",
            desc: "I’ve had the privilege of working with various clients, from startups to established companies, helping bring their visions to life.",
          },
          {
            title: "Design Assistant",
            date: "2008-2012",
            desc: "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs a personal.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring" }}
            className="relative bg-gray-100 px-10 py-6 rounded-2xl shadow-md transition-all duration-500 border-r-[3px] border-[#FF014F] hover:shadow-xl cursor-pointer"
          >
            <div className="flex flex-col justify-center h-full">
              <h4 className="text-xl mb-1">{card.title}</h4>
              <p className="font-semibold text-black text-base mb-3">{card.date}</p>
              <p className="text-gray-700 text-sm leading-relaxed max-w-[90%]">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <section className={`py-20 px-6`}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-left mb-5">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-3xl">Experience</h3>
          </div>
        </motion.div>
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Jr. Web Developer",
              date: "2005-2009",
              desc: "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.",
            },
            {
              title: "Sr. Web Developer",
              date: "2020-2021",
              desc: "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs.",
            },
            {
              title: "Sr. Grafic Designerr",
              date: "2018-2020",
              desc: "I’ve had the privilege of working with various clients, from startups to established companies, helping bring their visions to life.",
            },
            {
              title: "Design Assistant",
              date: "2017-2018",
              desc: "Building strong design foundations while working with creative teams.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring" }}
              className="relative bg-gray-100 px-10 py-6 rounded-2xl shadow-md transition-all duration-500 border-r-[3px] border-[#FF014F] hover:shadow-xl cursor-pointer"
            >
              <div className="flex flex-col justify-center h-full">
                <h4 className="text-xl mb-1">{card.title}</h4>
                <p className="font-semibold text-black text-base mb-3">{card.date}</p>
                <p className="text-gray-700 text-sm leading-relaxed max-w-[90%]">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className={`py-20 px-6`}>
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
            <h3 className="text-3xl font-semibold mb-10">Design Skill</h3>
            {[
              { name: "PHOTOSHOP", percent: "100%" },
              { name: "FIGMA", percent: "95%" },
              { name: "ADOBE XD", percent: "60%" },
              { name: "ADOBE ILLUSTRATOR", percent: "70%" },
            ].map((skill, i) => (
              <div key={i} className="mb-8">
                <div className="flex justify-between font-medium mb-2">
                  <p>{skill.name}</p>
                  <p>{skill.percent}</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.percent }}
                    transition={{ duration: 1 }}
                    className="h-full bg-[#FF014F] rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}>
            <h3 className="text-3xl font-semibold mb-10">Development Skill</h3>
            {[
              { name: "HTML", percent: "100%" },
              { name: "CSS", percent: "95%" },
              { name: "JavaScript", percent: "85%" },
              { name: "Next.js", percent: "70%" },
            ].map((skill, i) => (
              <div key={i} className="mb-8">
                <div className="flex justify-between font-medium mb-2">
                  <p>{skill.name}</p>
                  <p>{skill.percent}</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.percent }}
                    transition={{ duration: 1 }}
                    className="h-full bg-[#FF014F] rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </section>
  );
}
