import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const navigate = useNavigate();

    const handleRedirect = (option) => {
        navigate(`/contact?option=${option}`);
    };

    const cardData = [
        {
            title: "Explore The Partnership",
            description:
                "Explore a partnership with CropNow and discover how our AI-driven monitoring transforms traditional farming into a smart, sustainable ecosystem empowering your business to grow smarter.",
            buttonText: "TALK TO OUR EXPERT →",
            color: "bg-green-600 hover:bg-green-700",
            option: "collaborate",
        },
        {
            title: "Enquire Now",
            description:
                "Find out how CropNow’s real-time insights can transform farm management, boost soil health, and maximize resource efficiency.",
            buttonText: "BOOK A DEMO →",
            color: "bg-green-600 hover:bg-green-700",
            option: "demo",
        },
        {
            title: "Support Our Mission",
            description:
                "Explore transparent investment opportunities in cutting-edge AgriTech solutions that are shaping the future of sustainable agriculture.",
            buttonText: "REQUEST A PRESENTATION →",
            color: "bg-green-600 hover:bg-green-700",
            option: "investment",
        },
    ];

    return (
        <div className="min-h-fit flex flex-col items-center justify-center  text-white p-10">
            <h1 className="text-5xl font-bold !mb-8" style={{ fontFamily: "Telegraf, sans-serif", fontWeight: 700 }}>
                Lets Grow Sustinability Together
            </h1>
            <p className="text-lg !mb-10 text-gray-300">
                Reach out to us for any inquiries or support.
            </p>

            {/* Card Section */}
            <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="bg-black border-r-2 border-green-500 text-white rounded-2xl shadow-lg p-8 text-left transition-all duration-300 hover:shadow-2xl flex flex-col justify-between h-full"
                    >
                        <div>
                            <h2 className="text-2xl font-bold !mb-4">{card.title}</h2>
                            <p className="text-gray-300 !mb-6">{card.description}</p>
                        </div>
                        <button
                            onClick={() => handleRedirect(card.option)}
                            className={`mt-auto px-5 py-3 rounded-full text-white font-semibold transition ${card.color}`}
                        >
                            {card.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContactUs;
