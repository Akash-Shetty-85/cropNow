import React from 'react'
import { motion } from 'framer-motion';

const RAndD = () => {
    return (
        <div className="p-8 text-white min-h-screen" >
            {/* Hero Section */}
            < motion.div
                className="!mb-8 text-center"
                initial={{ opacity: 0, y: -50 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h1 className="text-6xl font-bold tracking-wide text-white drop-shadow-md" style={{ fontFamily: 'Telegraf, sans-serif', fontWeight: 700 }}>
                    Research And Development
                </h1>
                <p className="text-lg !mt-4 text-gray-300 max-w-xl !mx-auto">
                    Learn how CropNow is making a difference from its Solutions.
                </p>
            </motion.div >
        </div >
    )
}

export default RAndD