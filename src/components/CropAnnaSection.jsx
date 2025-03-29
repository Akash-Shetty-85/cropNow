import { motion } from "framer-motion";

const CropAnnaSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col  md:flex-row items-center justify-center p-10 pt-1 rounded-lg">
      {/* Left Section - Text */}
      <div className="w-full md:max-w-6xl flex flex-col items-center text-center gap-2.5">

        <motion.h1
          className="text-3xl md:text-5xl font-bold text-green-400 w-full "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

        >
          CROPANNA IS IN THE MAKING!
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 my-6 px-6 max-w-3xl flex text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            marginTop: "3rem",
          }}
        >
          We’re currently testing the prototype to bring you an intelligent farming assistant.
          Coming soon to help you grow smarter!
        </motion.p>
        <motion.p
          className="text-lg text-gray-300 my-6 px-6 max-w-3xl text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            marginTop: "3rem",
            marginBottom: "3rem"
          }}
        >
          CropAnna is a smart AI chatbot that gives farmers, students, and researchers instant advice on crops, soil, pests, and sustainable farming. It speaks multiple languages, making expert guidance easy to access. Whether you need quick farming tips or in-depth insights, CropAnna has you covered!
        </motion.p>

        {/* Call to Action Button - Centered */}
        <motion.div
          className="mt-6 flex justify-center w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="https://www.instagram.com/cropnow.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg shadow-lg transition-all"
          >
            Stay Updated
          </a>
        </motion.div>
      </div>

      {/* Right Section - Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <img
          src="src/assets/CropAnna.png" // Ensure the correct path
          alt="CropAnna AI Assistant"
          className="w-80"
        />
      </motion.div>
    </div>
  );
};

export default CropAnnaSection;
