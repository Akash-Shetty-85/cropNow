"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

// ✅ Counter Component
const Counter = ({ target ,symbol}) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 5,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(Math.floor(latest).toLocaleString()); // ✅ Format number
      },
    });

    return () => controls.stop(); // Cleanup animation
  }, [target]);

  return (
    <p className="text-5xl font-bold text-white">
      <span>{display}</span> {symbol}
    </p>
  );
};

// ✅ Impact Page Component
const Impact = () => {
  return (
    <div className="w-full  py-1 !mt-20 h-full !m-1 rounded-lg mr-4 text-white">
      <h1 className="text-5xl leading-2 font-bold !mb-10 flex items-center justify-center">Our Impact</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Card 1 - Acres Sprayed */}
        <motion.div
          className="p-6 border border-white-500 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <img
            // src="https://niqorobotics.com/wp-content/uploads/hp-acres-sprayed-1.svg"
            alt="Acres Sprayed"
            className="h-20 mx-auto !mb-4"
          />
          <Counter target={(98)} symbol={'%'}/>
          <p className="text-xl !mt-2">Accuracy Rate</p>
        </motion.div>

        {/* Card 2 - Farmers Helped */}
        <motion.div
          className="p-6 border border-white-500 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            // src="https://niqorobotics.com/wp-content/uploads/hp-farmers-helped-1.svg"
            alt="Farmers Helped"
            className="h-20 mx-auto mb-4"
          />
          <Counter target={24} symbol={'/7'} />
          <p className="text-xl mt-2">Monitoring</p>
        </motion.div>

        {/* Card 3 - Efficiency Gained */}
        <motion.div
          className="p-6 border border-white-500 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img
            // src="https://niqorobotics.com/wp-content/uploads/hp-efficiency-gain-1.svg"
            alt="Efficiency Gain"
            className="h-20 !mx-auto mb-4"
          />
          <Counter target={50} symbol={'+'} />
          <p className="text-xl !mt-2">Partner Farms</p>
        </motion.div>

        <motion.div
          className="p-6 border border-white-500 rounded-lg shadow-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            // src="https://niqorobotics.com/wp-content/uploads/hp-acres-sprayed-1.svg"
            alt="Acres Sprayed"
            className="h-20 mx-auto !mb-4"
          />
          <Counter target={(30)} symbol={'%'}/>
          <p className="text-xl !mt-2">Yield Increase</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Impact;
