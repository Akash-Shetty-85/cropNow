import React from 'react';
import { motion } from 'framer-motion';
import { Tabs } from "@/components/ui/tabs";

const OurSolutions = () => {
    const tabs = [
        {
            title: "Agriculture",
            value: "Agriculture",
            content: <TabContent title="Smart Farming for a Better Future" content={agricultureContent} />,
        },
        {
            title: "Environment",
            value: "Environment",
            content: <TabContent title="Helping Communities & Businesses Build a Greener Future" content={environmentContent} />,
        },
        {
            title: "Government",
            value: "Government",
            content: <TabContent title="Supporting Smart Policies for Food Security & Sustainability" content={governmentContent} />,
        },
        {
            title: "Food Industry",
            value: "Food Industry",
            content: <TabContent title="Transforming the Food Industry with Smart Solutions" content={foodIndustryContent} />,
        },
    ];

    return (
        <div className="p-8 text-white min-h-screen h-fit !mb-25 ">
            {/* Hero Section */}
            <motion.div
                className="!mb-8 text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h1 className="text-6xl font-bold tracking-wide text-white drop-shadow-md">
                    Our Solutions
                </h1>
                <p className="text-lg !mt-4 text-gray-300 !mx-auto">
                    Learn how CropNow is making a difference through its innovative solutions.
                </p>
            </motion.div>

            <Tabs tabs={tabs} contentClassName="!mt-25" activeTabClassName="" />
        </div>
    );
};

const TabContent = ({ title, content }) => (
    <div className="w-full overflow-hidden relative h-100 rounded-2xl p-8 text-lg text-white bg-gradient-to-br from-green-700 to-green-900">
        <h2 className="text-4xl font-bold !mb-6">{title}</h2>
        <div className="!space-y-4">{content.map((item, index) => (
            <div key={index}>
                <h3 className="text-2xl font-semibold">{item.heading}</h3>
                <p className="text-gray-200">{item.text}</p>
            </div>
        ))}</div>
    </div>
);

const agricultureContent = [
    { heading: "Better Crop Management", text: "Understand which crops are growing well and which need attention." },
    { heading: "Soil Health Monitoring", text: "Find out if your soil lacks nutrients and improve it with the right fertilizers." },
    { heading: "Early Disease Detection", text: "Spot signs of disease early to prevent major losses." },
    { heading: "Pest Forecasting", text: "Know in advance when pests might attack so you can protect your crops." }
];

const environmentContent = [
    { heading: "Water & Soil Quality Monitoring", text: "Detect contamination early and take steps to prevent damage." },
    { heading: "Climate Adaptation Strategies", text: "Get real-time insights to prepare for extreme weather and environmental risks." },
    { heading: "Sustainable Resource Use", text: "Reduce waste and improve efficiency in water, land, and energy usage." }
];

const governmentContent = [
    { heading: "Monitoring Agricultural Productivity", text: "Get real-time data on crop yields, soil health, and weather patterns." },
    { heading: "Disaster Preparedness & Response", text: "Use early warning systems to respond to droughts, floods, and pests." },
    { heading: "Sustainable Farming Initiatives", text: "Support programs that encourage climate-smart agriculture." },
    { heading: "Transparent Policy Implementation", text: "Improve accountability with accurate field data and reporting." }
];

const foodIndustryContent = [
    { heading: "Quality & Safety Monitoring", text: "Track food quality from farm to table to prevent contamination and spoilage." },
    { heading: "Supply Chain Efficiency", text: "Improve logistics and reduce food waste with real-time tracking." },
    { heading: "Sustainable Sourcing", text: "Support responsible farming and ethical sourcing of raw materials." },
    { heading: "Reducing Food Waste", text: "Identify inefficiencies and optimize processing to minimize losses." }
];

export default OurSolutions;
