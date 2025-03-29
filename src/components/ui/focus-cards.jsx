"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
// import Image from '@/assets/image.jpeg'
// import Image1 from '@/assets/k.jpg'

export const Card = React.memo(({
    card,
    index,
    hovered,
    setHovered
}) => (
    <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
            "w-full rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 transition-all duration-300 ease-out",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}>
        <img
            src={card.src}
            alt={card.title}
            className="object-cover absolute inset-0 w-full h-full" />
        <div
            className={cn(
                "absolute inset-0 bg-[rgba(0,0,0,0.5)] flex flex-col items-start align-bottom justify-end gap-2 py-8 px-4 transition-opacity duration-300",
                hovered === index ? "opacity-100" : "opacity-0"
            )}>
            <div
                className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                {card.title}

            </div>
            <p className="text-sm text-gray-300 mt-1">{card.post}</p>
            <a
                href={card.linkdin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm text-blue-400 underline hover:text-blue-500 transition-colors"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 fill-current text-blue-500 hover:text-blue-600 transition-colors"
                    viewBox="0 0 24 24"
                >
                    <path d="M22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46A1.77 1.77 0 0 0 1.77 24h20.46A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0zM7.12 20.45H3.56V9h3.56zm-1.78-13a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.38-1.86c3.61 0 4.28 2.38 4.28 5.47z" />
                </svg>
            </a>
        </div>
    </div>
));

Card.displayName = "Card";

export function FocusCards({
    cards
}) {
    const [hovered, setHovered] = useState(null);

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-5xl mx-auto md:px-8 min-w-full">
            {cards.map((card, index) => (
                <Card
                    key={card.title}
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered} />
            ))}
        </div>
    );
}
