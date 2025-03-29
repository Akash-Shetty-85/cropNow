import image1 from '@/assets/News/Image1.png'
import image2 from '@/assets/News/Image2.png'
import image3 from '@/assets/News/Image3.png'
import image4 from '@/assets/News/Image4.png'
import image5 from '@/assets/News/Image5.png'
import image6 from '@/assets/News/Image6.png'
"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Cursaol = ({ heading, data }) => {
    return (
        <div
            className="h-[17rem] !mt-10 rounded-md flex flex-col antialiased dark:bg-black bg-transparent items-center justify-center relative overflow-hidden">
            <h1 className='text-white text-5xl leading-2'
                style={{ fontFamily: "Telegraf, sans-serif", fontWeight: 700 }}
            >
                {heading}
            </h1>
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
    );
}

const testimonials = [
    {
        Image: image1,
        name: "press1",
    },
    {
        Image: image2,
        name: "press2",
    }, {
        Image: image3,
        name: "press3",
    }, {
        Image: image4,
        name: "press4",
    }, {
        Image: image5,
        name: "press5",
    }, {
        Image: image6,
        name: "press6",
    },
];
export default Cursaol
