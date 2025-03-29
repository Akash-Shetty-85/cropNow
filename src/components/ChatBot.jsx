import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ChatBot = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {/* {!isHovered && ( */}
          <motion.div
            className="mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            Hi there, how can I help you?
          </motion.div>
        {/* )} */}
      </AnimatePresence>

      {/* Chatbot Icon */}
      <motion.div
        className=" text-white p-1 rounded-full shadow-lg cursor-pointer flex items-center justify-center hover:bg-green-700"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/chat")}
        style={{ width: "80px", height: "80px" }}
      >
        <img
          src="src/assets/CropAnna.png" // Replace with your chatbot image path
          alt="Chatbot"
          className="w-full h-full object-contain rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default ChatBot;
