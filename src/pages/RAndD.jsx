import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, children, delay }) => (
  <motion.div
    className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:shadow-2xl border border-white/20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{
      scale: 1.03,
      boxShadow: "0 8px 30px rgba(255,255,255,0.2)",
    }}
  >
    <h2 className="text-2xl md:text-3xl font-semibold text-white drop-shadow-sm">
      {title}
    </h2>
    <p className="text-gray-300 mt-3 leading-relaxed">{children}</p>
  </motion.div>
);

const RAndD = () => {
  return (
    <div className="p-8 text-white min-h-screen ">
      {/* Hero Section */}
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1
          className="text-4xl md:text-6xl font-bold tracking-wide drop-shadow-md"
          style={{ fontFamily: "Telegraf, sans-serif", fontWeight: 700 }}
        >
          Research & Development
        </h1>
        <p className="text-lg !mt-4 text-gray-300  !mx-auto !mb-6">
          Pioneering tomorrow’s agri-tech through continuous innovation and
          hands-on research.
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Research & Development at CropNow" delay={0.1}>
          CropNow’s R&D focuses on making farming smarter, more efficient, and
          sustainable. By studying real-world challenges and working closely
          with farmers, practical solutions are developed to improve agriculture
          for everyone.
        </Card>

        <Card title="CropChronicles – Research Rooted in the Field" delay={0.2}>
          CropChronicles is our ongoing effort to observe, understand, and
          document what really happens in the fields. Our research team works
          side by side with nature, studying how crops respond to changing
          weather, common infections, pests, and unexpected challenges farmers
          face every day. These real-world insights help us design practical,
          farmer-friendly technologies that truly make a difference.
        </Card>

        <Card title="Learning from Farmers – Case Studies" delay={0.3}>
          Spending time with farmers to understand daily struggles, test new
          ideas in real-world conditions, and develop solutions that create real
          impact.
        </Card>

        <Card title="Keeping Plants Healthy" delay={0.4}>
          Early detection of plant diseases and pests ensures timely
          intervention, improving crop health and overall yield quality.
        </Card>

        <Card title="Caring for the Soil" delay={0.5}>
          Studying soil moisture, fertility, and nutrient levels to promote
          healthier, more resilient crops and long-term sustainability.
        </Card>

        <Card title="Reducing Waste & Creating Value" delay={0.6}>
          Transforming farm waste into useful by-products to cut costs, minimize
          environmental impact, and enhance resource efficiency.
        </Card>
      </div>
    </div>
  );
};

export default RAndD;
