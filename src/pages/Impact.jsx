"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate, useInView } from "framer-motion";

// ✅ Counter Component (Fix with useInView)
const Counter = ({ target, symbol }) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");
  const ref = useRef(null); // Reference to track visibility
  const isInView = useInView(ref, { once: true }); // Only trigger once when in view

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 2, // Adjusted for better UX
        ease: "easeInOut",
        onUpdate: (latest) => {
          setDisplay(Math.floor(latest).toLocaleString());
        },
      });

      return () => controls.stop(); // Cleanup animation
    }
  }, [isInView]); // Depend on visibility

  return (
    <p ref={ref} className="text-5xl font-bold text-white">
      <span>{display}</span> {symbol}
    </p>
  );
};

// ✅ Impact Page Component
const Impact = () => {
  return (
    <div className="w-full py-10 px-10 !mt-20 max-h-full !m-1 rounded-lg mr-4 text-white">
      <h1 className="text-5xl leading-2 font-bold !mb-10 flex items-center justify-center">
        Our Impact
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Card 1 - Accuracy Rate */}
        <motion.div
          className="p-6 border border-green-500 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Counter target={98} symbol="%" />
          <p className="text-xl !mt-2">Accuracy Rate</p>
        </motion.div>

        {/* Card 2 - Monitoring */}
        <motion.div
          className="p-6 border border-green-500 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Counter target={24} symbol="/ 7" />
          <p className="text-xl mt-2">Monitoring</p>
        </motion.div>

        {/* Card 3 - Partner Farms */}
        <motion.div
          className="p-6 border border-green-500 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Counter target={50} symbol="+" />
          <p className="text-xl !mt-2">Partner Farms</p>
        </motion.div>

        {/* Card 4 - Yield Increase */}
        <motion.div
          className="p-6 border border-green-500 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Counter target={30} symbol="%" />
          <p className="text-xl !mt-2">Yield Increase</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Impact;
