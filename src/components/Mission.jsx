"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import image from '@/assets/mission2.jpg'
import image2 from '@/assets/OM1.jpg'
import image3 from '@/assets/mission1.jpg'


const content = [
  {
    title: "Who We Are",
    description: `At CropNow, we believe that agriculture should be smarter, more efficient, and sustainable for generations to come. We’re not just another agri-tech company, we’re a team passionate about empowering farmers with the right tools to make their work easier and more rewarding.<br><br>Our mission is simple: to help farmers grow more with less, using technology that enhances productivity, conserves resources, and supports eco-friendly farming practices.`,
    html: true, // 👈 Add this flag
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src={image2}
          width={800}
          height={800}
          className="h-full w-full object-fit"
          alt="linear board demo"
        />
      </div>
    ),
  },

  {
    title: "What We Build",
    description:
      "Technology should serve farmers, not the other way around. That’s why our solutions are built with ease of use and adaptability in mind. We work closely with farmers to ensure our tools fit seamlessly into their daily routines. Unlike one-size-fits-all approaches, we focus on solving real problems with practical innovations that improve both farm productivity and environmental sustainability. At CropNow, we’re not just building technology, we’re building a future where agriculture thrives for everyone.", content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          < img
            src={image3}
            width={500}
            height={500}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div >
      ),
  },
  {
    title: "Why We’re Different",
    description:
      "Technology should serve farmers, not the other way around. That’s why our solutions are built with ease of use and adaptability in mind. We work closely with farmers to ensure our tools fit seamlessly into their daily routines. Unlike one-size-fits-all approaches, we focus on solving real problems with practical innovations that improve both farm productivity and environmental sustainability. At CropNow, we’re not just building technology—we’re building a future where agriculture thrives for everyone.", content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          < img
            src={image}
            width={500}
            height={500}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div >
      ),
  }
];
const Mission = () => {
  return (
    <div className="w-full  py-1 !mt-10 h-full rounded-lg mr-1.5"
    >
      <h1 className="text-5xl !mb-10 text-white flex items-center justify-center font-semibold"
        style={{
          fontFamily: "Telegraf, sans-serif",
        }}
      >
        Our Mission
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}

export default Mission