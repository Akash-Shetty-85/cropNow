import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import image from "@/assets/image.jpeg";

export function ExpandableCardDemo() {
    const [active, setActive] = useState(null);
    const id = useId();
    const ref = useRef(null);

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10" />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}>
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
                            <motion.div layoutId={`img-${active.title}-${id}`}>
                                <img
                                    priority
                                    width={200}
                                    height={200}
                                    src={image}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
                                            {active.title}
                                        </motion.h3>
                                        {/* <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 text-base">
                                            {active.description}
                                        </motion.p> */}
                                    </div>

                                    <motion.a
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul
                className="max-w-full mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col  hover:bg-bright-green dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
                        <div className="flex gap-4 flex-col w-full">
                            <motion.div layoutId={`img-${card.title}-${id}`}>
                                <img
                                    width={100}
                                    height={100}
                                    src={image}
                                    alt={card.title}
                                    className="h-60 w-full rounded-lg object-cover object-top" />
                            </motion.div>
                            <div className="flex justify-center items-start flex-col">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-white dark:text-neutral-200 text-center md:text-left text-base">
                                    {card.title}
                                </motion.h3>
                                {/* <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-400 dark:text-neutral-400 text-center md:text-left text-base">
                                    {card.description}
                                </motion.p> */}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
    {
        description: "Lana Del Rey",
        title: "CropNow Farm Survey",
        src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
        ctaText: "Visit",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <div className=" text-gray-800 overflow-y-auto h-60 p-9">
                    <section className="py-2">
                        <div className="text-start">
                            <h2 className="text-2xl font-semibold">Why Choose CropNow Farm Survey?</h2>
                            <p className="!mt-4 text-lg">
                                CropNow Farm Survey is a specialized offline service designed for farmers who require
                                in-depth field assessment and expert recommendations. Our team visits farms in person,
                                conducts a detailed survey, and provides tailored suggestions to improve productivity
                                and sustainability.
                            </p>
                        </div>
                    </section>

                    <section className="py-2">
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold">Key Features</h2>
                            <div className="grid grid-cols-1 gap-4 !mt-4">
                                <div className="bg-green-100 p-4 rounded-lg shadow-md">
                                    <h3 className="text-lg font-bold">Field Inspection</h3>
                                    <p>A comprehensive on-site evaluation of soil health, crop condition, pest infestations, and overall farm management.</p>
                                </div>
                                <div className="bg-green-100 p-4 rounded-lg shadow-md">
                                    <h3 className="text-lg font-bold">Data-Driven Insights</h3>
                                    <p>Utilization of advanced agricultural techniques and technology to assess productivity and identify potential risks.</p>
                                </div>
                                <div className="bg-green-100 p-4 rounded-lg shadow-md">
                                    <h3 className="text-lg font-bold">Personalized Recommendations</h3>
                                    <p>Expert guidance on crop planning, disease management, and sustainable farming practices.</p>
                                </div>
                                <div className="bg-green-100 p-4 rounded-lg shadow-md">
                                    <h3 className="text-lg font-bold">Follow-Up Support</h3>
                                    <p>Continuous monitoring and follow-up actions to ensure long-term improvements.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-2 !mb-1.5">
                        <div className="text-center">
                            <h2 className="text-xl font-semibold">Get in Touch</h2>
                            <p className="!mt-4 text-sm">Interested in our services? Reach out to us today!</p>
                            <a href="mailto:info@cropnow.com" className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-700">
                                Contact Us
                            </a>
                        </div>
                    </section>
                </div>
            );
        },
    },
    {
        description: "Babbu Maan",
        title: "CropNow Farm Partner",
        src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
        ctaText: "Visit",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>Babu Maan, a legendary Punjabi singer, is renowned for his soulful
                    voice and profound lyrics that resonate deeply with his audience. Born
                    in the village of Khant Maanpur in Punjab, India, he has become a
                    cultural icon in the Punjabi music industry. <br /> <br />His songs
                    often reflect the struggles and triumphs of everyday life, capturing
                    the essence of Punjabi culture and traditions. With a career spanning
                    over two decades, Babu Maan has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.
                </p>
            );
        },
    },


];
