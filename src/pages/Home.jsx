import { motion } from "framer-motion";
import Mission from "../components/Mission";
import Services from "../components/Services";
import Cursaol from "../components/Cursaol";
import Impact from "./Impact";
import ContactUs from "../components/ContactUs";
import landingPageImage from "@/assets/landing.jpeg";
import cropAnna from "@/assets/CropAnna.png";




import image1 from '@/assets/News/Image1.png'
import image2 from '@/assets/News/Image2.png'
import image3 from '@/assets/News/Image3.png'
import image4 from '@/assets/News/Image4.png'
import image5 from '@/assets/News/Image5.png'
import image6 from '@/assets/News/Image6.png'


import c1 from '@/assets/company/autodesk.png'
import c2 from '@/assets/company/azure.png'
import c3 from '@/assets/company/Microsoft.png'
import c4 from '@/assets/company/NVIDIA.png'
import c5 from '@/assets/company/openAi.png'

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


const press = [
  {
    Image: image1,
    name: "press1",
  },
  {
    Image: image2,
    name: "press2",
  }, {
    Image: image3,
    name: "press3",
  }, {
    Image: image4,
    name: "press4",
  }, {
    Image: image5,
    name: "press5",
  }, {
    Image: image6,
    name: "press6",
  },
];
const techLeader = [

  {
    Image: c1,
    name: "Autodesk"
  },
  {
    Image:c2 ,
    name: "Azure"
  },
  {
    Image:c3,
    name: "Microsoft"
  },
  {
    Image:c4,
    name: "NIVIDIA"
  },
  {
    Image:c5,
    name: "OpenAI"
  },

  {
    Image:c1,
    name: "Autodesk"
  },
  {
    Image:c2,
    name: "Azure"
  },
  {
    Image:c3,
    name: "Microsoft"
  },
  {
    Image:c4,
    name: "NIVIDIA"
  },
  {
    Image:c5,
    name: "OpenAI"
  }

]
const HomeMobile = () => {
  const title = "CropNow.".split("");
  const subtitle = "For A Better India.".split("");


  return (
    <>
      <div className=" relative min-h-screen hidden md:flex items-center justify-center overflow-x-hidden p-4">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-top rounded-xl"
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
        <div className="relative text-left text-white p-4 bg-opacity-60 rounded-xl">
          <h1 className="text-5xl md:text-8xl  font-bold leading-tight" style={{ fontFamily: "Telegraf, sans-serif" }}>
            {title.map((letter, i) => (
              <motion.span key={i} custom={i} variants={textVariant} initial="hidden" animate="visible">
                {letter}
              </motion.span>
            ))}
          </h1>

          <p className="text-black text-3xl md:text-5xl mt-1 text-right" style={{ fontFamily: "Avallon, sans-serif" }}>
            {subtitle.map((letter, i) => (
              <motion.span key={i} custom={i + 10} variants={textVariant} initial="hidden" animate="visible">
                {letter}
              </motion.span>
            ))}
          </p>
        </div>

        <motion.div
          className="absolute bottom-4 right-4 p-1 rounded-full shadow-lg cursor-pointer hover:bg-green-100 transition-transform transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          onClick={() => window.location.href = "/chat"}
        >
          <img
            src={cropAnna}
            alt="ChatBot Icon"
            className="w-12 h-12 object-contain rounded-full"
          />
        </motion.div>
      </div>

      <Mission />
      <Cursaol heading={'Powered By Global Tech Leader'} data={techLeader} variant="tech" />
      <Services />
      <Impact />
      <Cursaol heading={'CropNow Featured In'} data={press} variant="press" />
      <ContactUs />
    </>
  );
};

export default HomeMobile;
