import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

// Reusable solution point
const SolutionPoint = ({ heading, text, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/10"
  >
    <h3 className="text-lg md:text-xl font-semibold">{heading}</h3>
    <p className="text-gray-200 mt-1 text-sm md:text-base">{text}</p>
  </motion.div>
);

// Tab content layout
const TabContent = ({ title, content }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="w-full rounded-2xl p-6 sm:p-8 md:p-10 text-white 
               bg-gradient-to-br from-green-700/80 to-green-900/80 
               backdrop-blur-lg shadow-lg border border-white/10"
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {content.map((item, idx) => (
        <SolutionPoint key={idx} heading={item.heading} text={item.text} index={idx} />
      ))}
    </div>
  </motion.div>
);

const OurSolutions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = [
    { title: "Agriculture", content: <TabContent title="Smart Farming for a Better Future" content={agricultureContent} /> },
    { title: "Environment", content: <TabContent title="Sustainable Practices for a Healthier Planet" content={environmentContent} /> },
    { title: "Government", content: <TabContent title="Helping Governments Build a Stronger Agricultural Sector" content={governmentContent} /> },
    { title: "Food Industry", content: <TabContent title="Transforming the Food Industry with Smart Solutions" content={foodIndustryContent} /> },
    { title: "Waste Management", content: <TabContent title="Waste Management for a Cleaner World" content={wasteManagementContent} /> },
    { title: "Commercial Agriculture", content: <TabContent title="Empowering Commercial Agriculture & Retail Chains" content={commercialAgricultureContent} /> },
  ];

  // Swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex((prev) => (prev + 1) % tabs.length),
    onSwipedRight: () => setActiveIndex((prev) => (prev - 1 + tabs.length) % tabs.length),
    trackMouse: true,
  });

  return (
    <div className="!px-4 sm:!px-6 md:!px-12 !py-10 text-white !min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-wide drop-shadow-md">
          Our Solutions
        </h1>
        <p className="text-base sm:text-lg mt-4 text-gray-300 max-w-2xl mx-auto">
          Empowering farmers with data-driven tools for healthier crops and smarter farming.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="overflow-x-auto flex gap-3 pb-3 scrollbar-hide snap-x snap-mandatory">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`snap-start px-4 py-2 rounded-full border transition-all whitespace-nowrap ${
              activeIndex === idx
                ? "bg-green-600 border-green-500 text-white"
                : "bg-white/10 border-white/20 text-gray-300 hover:bg-white/20"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content (Swipeable) */}
      <div {...handlers} className="mt-6">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};

/* Content Arrays */
const agricultureContent = [
  { heading: "Better Crop Management", text: "Understand which crops are growing well and which need attention." },
  { heading: "Soil Health Monitoring", text: "Find out if your soil lacks nutrients and improve it with the right fertilizers." },
  { heading: "Early Disease Detection", text: "Spot signs of disease early to prevent major losses." },
  { heading: "Pest Forecasting", text: "Know in advance when pests might attack so you can protect your crops." },
];

const environmentContent = [
  { heading: "Water & Soil Quality Monitoring", text: "Detect contamination early and take steps to prevent damage." },
  { heading: "Climate Adaptation Strategies", text: "Get real-time insights to prepare for extreme weather and environmental risks." },
  { heading: "Sustainable Resource Use", text: "Reduce waste and improve efficiency in water, land, and energy usage." },
];

const governmentContent = [
  { heading: "Monitoring Agricultural Productivity", text: "Get real-time data on crop yields, soil health, and weather patterns." },
  { heading: "Disaster Preparedness & Response", text: "Use early warning systems to respond to droughts, floods, and pests." },
  { heading: "Sustainable Farming Initiatives", text: "Support programs that encourage climate-smart agriculture." },
  { heading: "Transparent Policy Implementation", text: "Improve accountability with accurate field data and reporting." },
];

const foodIndustryContent = [
  { heading: "Quality & Safety Monitoring", text: "Track food quality from farm to table to prevent contamination and spoilage." },
  { heading: "Supply Chain Efficiency", text: "Improve logistics and reduce food waste with real-time tracking." },
  { heading: "Sustainable Sourcing", text: "Support responsible farming and ethical sourcing of raw materials." },
  { heading: "Reducing Food Waste", text: "Identify inefficiencies and optimize processing to minimize losses." },
];

const wasteManagementContent = [
  { heading: "Byproduct Utilization", text: "Convert agricultural waste into compost, animal feed, or biofuels to maximize its usability." },
  { heading: "Efficient Waste Collection", text: "Identify high-waste areas and streamline collection processes." },
  { heading: "Recycling & Resource Recovery", text: "Track and repurpose crop residues, husks, and other organic materials." },
  { heading: "Monitoring Pollution Levels", text: "Detect waste-related pollution and take corrective action to protect soil and water resources." },
];

const commercialAgricultureContent = [
  { heading: "Farm-to-Shelf Traceability", text: "Track produce quality from the farm to retail shelves, ensuring transparency and freshness." },
  { heading: "Optimized Procurement", text: "Source the best-quality crops with real-time yield predictions and supplier insights." },
  { heading: "Waste Reduction Strategies", text: "Minimize post-harvest losses and optimize distribution to prevent food spoilage." },
  { heading: "Sustainable Sourcing", text: "Partner with eco-friendly farms and promote responsible agricultural practices." },
];

export default OurSolutions;
