import React from 'react';
import { motion } from 'framer-motion';

const RAndD = () => {
    return (
        <div className="p-8 text-white min-h-screen">
            {/* Hero Section */}
            <motion.div
                className="!mb-8 text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h1
                    className="text-6xl font-bold tracking-wide text-white drop-shadow-md"
                    style={{ fontFamily: 'Telegraf, sans-serif', fontWeight: 700 }}
                >
                    Research & Development
                </h1>
                <p className="text-lg !mt-4 text-gray-300 max-w-full !mx-auto">
                    Pioneering tomorrow’s agri-tech through continuous innovation and hands-on research.
                </p>
            </motion.div>

            {/* Content Section */}
            <motion.div
                className="max-w-7xl mx-auto !space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {/* CropChronicles */}
                <div className="bg-white/10 p-6 rounded-xl shadow-lg ">
                    <h2 className="text-3xl font-semibold text-white">Research & Development at CropNow</h2>
                    <p className="text-gray-300 !mt-2">
                        CropNow’s R&D focuses on making farming smarter, more efficient, and sustainable. By studying real-world challenges and working closely with farmers, practical solutions are developed to improve agriculture for everyone.
                    </p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl shadow-lg ">
                    <h2 className="text-3xl font-semibold text-white">CropChronicles – Research Rooted in the Field
                    </h2>
                    <p className="text-gray-300 !mt-2">
                        CropChronicles is our ongoing effort to observe, understand, and document what really happens in the fields. Our research team works side by side with nature, studying how crops respond to changing weather, common infections, pests, and unexpected challenges farmers face every day. These real-world insights help us design practical, farmer-friendly technologies that truly make a difference on the ground.
                    </p>
                </div>
                {/* Case Studies */}
                <div className="bg-white/10 p-6 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-semibold text-white">Learning from Farmers – Case Studies</h2>
                    <p className="text-gray-300 !mt-2">
                        Spending time with farmers to understand daily struggles, test new ideas in real-world conditions, and develop solutions that create real impact.
                    </p>
                </div>

                {/* Plant Health */}
                <div className="bg-white/10 p-6 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-semibold text-white">Keeping Plants Healthy</h2>
                    <p className="text-gray-300 !mt-2">
                        Early detection of plant diseases and pests ensures timely intervention, improving crop health and overall yield quality.
                    </p>
                </div>

                {/* Soil Care */}
                <div className="bg-white/10 p-6 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-semibold text-white">Caring for the Soil</h2>
                    <p className="text-gray-300 !mt-2">
                        Studying soil moisture, fertility, and nutrient levels to promote healthier, more resilient crops and long-term sustainability.
                    </p>
                </div>

                {/* Waste Reduction */}
                <div className="bg-white/10 p-6 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-semibold text-white">Reducing Waste & Creating Value</h2>
                    <p className="text-gray-300 !mt-2">
                        Transforming farm waste into useful by-products to cut costs, minimize environmental impact, and enhance resource efficiency.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default RAndD;
