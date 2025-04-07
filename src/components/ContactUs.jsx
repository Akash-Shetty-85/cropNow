import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const navigate = useNavigate();

    const handleRedirect = (option) => {
        navigate(`/contact?option=${option}`);
    };

    const cardData = [
        {
            title: "Collaborate with Us",
            description:
                "Discover how CropNow’s AI-driven monitoring turns traditional farming into a smart, sustainable ecosystem, helping businesses and communities thrive.",
            buttonText: "TALK TO OUR EXPERT →",
            color: "bg-green-600 hover:bg-blue-700",
            option: "collaborate",
        },
        {
            title: "Get Started",
            description:
                "Find out how CropNow’s real-time insights can revolutionize the way you manage your farm, improve soil health, and optimize resource usage.",
            buttonText: "BOOK A DEMO →",
            color: "bg-green-600 hover:bg-green-700",
            option: "demo",
        },
        {
            title: "Support Our Mission",
            description:
                "Explore transparent investment opportunities in cutting-edge AgriTech solutions that are shaping the future of sustainable agriculture.",
            buttonText: "REQUEST A PRESENTATION →",
            color: "bg-green-600 hover:bg-purple-700",
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
                        className="bg-black border-r-2 border-green-500  text-white rounded-2xl shadow-lg p-8 text-left transition-all duration-300 hover:shadow-2xl"
                    >
                        <h2 className="text-2xl font-bold !mb-4">{card.title}</h2>
                        <p className="text-gray-300 !mb-6">{card.description}</p>
                        <button
                            onClick={() => handleRedirect(card.option)}
                            className={`px-5 py-3 rounded-full text-white font-semibold transition ${card.color}`}
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
