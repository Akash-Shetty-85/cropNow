"use client";
import React from "react";
import { motion } from "framer-motion";

import image2 from '@/assets/Mission/m1.jpeg';
import image3 from '@/assets/Mission/m2.jpeg';
import image from '@/assets/Mission/m3.jpeg';
import image4 from '@/assets/Mission/4.jpg';

const sections = [
  {
    title: "Who We Are",
    description: `
      At CropNow, we believe that agriculture should be smarter, more efficient, and sustainable for generations to come.<br/><br/>
      We’re not just another agri-tech company — we’re a team passionate about empowering farmers with the right tools.<br/><br/>
      Our mission is simple: to help farmers grow more with less, using technology that enhances productivity, conserves resources, and supports eco-friendly practices.
    `,
    image: image2
  },
  {
    title: "What We Build",
    description: `We create practical, easy-to-use agricultural solutions designed for the real world. Whether it's AI-powered crop monitoring, precision sprinkling, or smart pest management, our technology helps farmers make informed decisions without the guesswork. By combining automation and data-driven insights, we make farming more predictable, efficient, and profitable without making it complicated.`,
    image: image3
  },
  {
    title: "Why We’re Different",
    description: `Technology should serve farmers, not the other way around. That’s why our solutions are built with ease of use and adaptability in mind. We work closely with farmers to ensure our tools fit seamlessly into their daily routines. Unlike one-size-fits-all approaches, we focus on solving real problems with practical innovations that improve both farm productivity and environmental sustainability.`,
    image: image
  },
  {
    title: "Powered by Tradition, Driven by Technology",
    description: `At CropNow, our innovations are built on generations of farming wisdom and shaped by modern technology.<br/><br/>
    Though our journey began in 2023, we stand on the strong foundation of collaboration with traditional farmers, local growers, agri-scientists, and engineers.<br/><br/>
    Every solution — from smart soil monitoring to autonomous crop surveillance — is inspired by field knowledge and enhanced by cutting-edge agri-tech. CropNow is where tradition meets tomorrow.`,
    image: image4
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Mission = () => {
  return (
    <div className="w-full py-20 bg-black text-white">
      <h1
        className="text-4xl md:text-5xl font-bold text-center mb-20"
        style={{ fontFamily: "Telegraf, sans-serif" }}
      >
        Our Mission
      </h1>

      <div className="flex flex-col gap-24 px-4 md:px-16">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className={`flex flex-col-reverse md:flex-row items-stretch gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={fadeUp}
          >
            {/* Text Section */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                {section.title}
              </h2>
              <p
                className="text-lg leading-relaxed text-gray-300"
                dangerouslySetInnerHTML={{ __html: section.description }}
              />
            </div>

            {/* Image Section */}
            <motion.div
              className="md:w-1/2 w-full flex items-center justify-center"
              initial={{ scale: 1.1, y: 30 }}
              whileInView={{ scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-full h-full max-h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
