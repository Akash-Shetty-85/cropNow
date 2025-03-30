import { motion } from "framer-motion";
// import ChatBot from "../components/ChatBot";
import Mission from "../components/Mission";
import Services from "../components/Services";
import Cursaol from "../components/Cursaol";
import Impact from "./Impact";
import ContactUs from "../components/ContactUs";
import landingPageImage from "@/assets/landing.jpeg";
import cropAnna from "@/assets/CropAnna.png";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const imageVariant = {
  hidden: { scale: 1.5 },
  visible: {
    scale: 1,
    transition: { duration: 3.2, ease: "easeOut" },
  },
};

const Home = () => {
  const title = "CropNow.".split("");
  const subtitle = "For A Better India.".split("");

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-x-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-top rounded-xl"
          style={{
            backgroundImage: `url(${landingPageImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            filter: "brightness(85%)",
          }}
          variants={imageVariant}
          initial="hidden"
          animate="visible"
        />

        {/* Text Content */}
        <div className="relative text-left text-white p-6 bg-opacity-50 rounded-3xl shadow-3xl">
          <h1
            className="text-8xl font-bold"
            style={{ fontFamily: "Telegraf, sans-serif", fontWeight: 700 }}
          >
            {title.map((letter, i) => (
              <motion.span key={i} custom={i} variants={textVariant} initial="hidden" animate="visible">
                {letter}
              </motion.span>
            ))}
          </h1>

          <p
            className="text-green-500 text-5xl mt-2 text-right"
            style={{ fontFamily: "Avallon, sans-serif" }}
          >
            {subtitle.map((letter, i) => (
              <motion.span key={i} custom={i + 10} variants={textVariant} initial="hidden" animate="visible">
                {letter}
              </motion.span>
            ))}
          </p>
        </div>

        {/* ChatBot Icon - Fixed inside the Hero Section */}
        <motion.div
          className="absolute bottom-6 right-6  p-2 rounded-full shadow-lg cursor-pointer hover:bg-green-100 transition-transform transform hover:scale-110"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          onClick={() => window.location.href = "/chat"}
        >
          <img
            src={cropAnna} // Ensure correct image path
            alt="ChatBot Icon"
            className="w-16 h-16 object-contain rounded-full"
          />
        </motion.div>

      </div>

      <Mission />
      <Services />
      <Impact />
      <Cursaol heading={'CropNow Featured In'} />
      <ContactUs/>
      
    </>
  );
};

export default Home;
