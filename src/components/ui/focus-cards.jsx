import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const Card = React.memo(({
    card,
    index,
    hovered,
    setHovered,
    imgClassName,
    renderContent ,
    onClick
}) => (
    <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        onClick={onClick}
        className={cn(
            "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
            hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
    >
        <img
            src={card.src}
            alt={card.title}
            className={twMerge(
                "object-cover absolute inset-0 w-full h-full",
                imgClassName
            )}
        />
        <div
            className={cn(
                "absolute inset-0 bg-black/50 flex flex-col justify-end py-8 px-4 transition-opacity duration-300",
                hovered === index ? "opacity-100" : "opacity-0"
            )}
        >
            <div className="text-xl font-extrabold md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                {card.title}
            </div>
            {renderContent && renderContent(card)}
        </div>
    </div>
));

Card.displayName = "Card";

export function FocusCards({
    cards,
    className,
    imgClassName,
    renderContent,  // Fixed: Added renderContent as a prop
    onClick
}) {
    const [hovered, setHovered] = useState(null);

    return (
        <div
            className={twMerge(
                "grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full",
                className
            )}
        >
            {cards.map((card, index) => (
                <Card
                    key={index}  // Fixed: Use index as the key since no id field is present
                    card={card}
                    index={index}
                    hovered={hovered}
                    setHovered={setHovered}
                    imgClassName={imgClassName}  // Fixed: Pass the imgClassName prop
                    renderContent={renderContent}  // Fixed: Pass renderContent prop
                    onClick={() => onClick(card)}
                />
            ))}
        </div>
    );
}

export default FocusCards;
