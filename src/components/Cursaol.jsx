import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Cursaol = ({ heading, data = [], variant = "default" }) => {


    return (
        <div
            className={`h-10/12 md:h-[20rem] !mx-10 rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden`}>
            <h1
                className={`text-3xl md:text-5xl font-bold leading-tight text-white`}
                style={{ fontFamily: "Telegraf, sans-serif", fontWeight: 700 }}
            >
                {heading}
            </h1>
            <InfiniteMovingCards items={data} direction="right" speed="slow" variant={variant} />
        </div>
    );
};

export default Cursaol;
