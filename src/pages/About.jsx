import { FocusCards } from "../components/ui/focus-cards";
import { motion } from "framer-motion";
import { teamData } from "@/data/teamData";
import { advisorsData } from "@/data/teamData";
import timelineData from "@/data/timeLine";
import featuresData from "@/data/featuresData";

const About = () => {
  return (
    <div className="p-8 min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.div
        className="!mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1
          className="text-6xl font-bold tracking-wide text-white drop-shadow-md"
          style={{ fontFamily: "Telegraf, sans-serif", fontWeight: 700 }}
        >
          About Us
        </h1>
        <p className="text-lg !mt-4 text-gray-300 max-w-full !mx-auto">
          Discover the roots of CropNow, where purpose meets progress in
          sustainable agriculture.
        </p>
      </motion.div>

      {/* Description Section */}
      <motion.div
        className="!mt-8 max-w-4xl !mx-auto space-y-6 text-lg text-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p>
          CropNow is an agritech company dedicated to transforming agriculture
          through innovation, automation, and sustainable solutions. We develop
          AI-powered, data-driven technologies to enhance productivity, optimize
          resource usage, and promote eco-friendly farming practices.
        </p>
      </motion.div>

      {/* Features Section with Glassmorphism Style */}
      <motion.div
        className="!mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 rounded-xl shadow-xl border border-white/20 bg-white/10 backdrop-blur-md transition duration-300 hover:bg-white/20 hover:shadow-2xl group"
          >
            <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-white transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-300 hover:text-whiter transition-colors">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Custom Timeline Section */}
      <section className="!mt-16 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Our Journey
        </h2>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-white to-black"></div>

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex items-center mb-16 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <motion.div
                    className="bg-white text-black rounded-xl p-6 border border-white/20 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="leading-relaxed text-white">{item.content}</p>
                    <div className="text-sm opacity-70 mt-2">{item.date}</div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-white rounded-full border-4 border-black shadow-lg"></div>
                </div>

                {/* Empty Space */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden">
          <div className="!space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white text-black rounded-xl p-6 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-white rounded-full mr-4 border-2 border-black"></div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="leading-relaxed mb-2">{item.description}</p>
                <div className="text-sm opacity-70">{item.date}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="screenwh">
        <h1
          className="text-5xl justify-center flex !m-10 md:leading-2 lg:leading-2"
          style={{ fontFamily: "Telegraf, sans-serif", fontWeight: 700 }}
        >
          The Minds Behind Our Mission
        </h1>
      </section>
      <FocusCards
        cards={teamData}
        className="lg:grid-cols-3 lg:max-w-full font-extrabold"
        imgClassName="rounded-lg hover:scale-105 transition-transform"
        renderContent={(card) => (
          <>
            <p className="text-sm text-gray-200 !mt-1">{card.post}</p>
            <a
              href={card.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 underline mt-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-blue-500"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.765 0-.974.784-1.767 1.75-1.767s1.75.792 1.75 1.767c0 .975-.784 1.765-1.75 1.765zm13.5 11.268h-3v-5.604c0-1.338-.027-3.062-1.867-3.062-1.868 0-2.155 1.46-2.155 2.964v5.702h-3v-10h2.882v1.364h.04c.402-.762 1.382-1.564 2.845-1.564 3.04 0 3.615 2.004 3.615 4.609v5.591z" />
              </svg>
            </a>
          </>
        )}
      />

      {/* Advisors Section */}
      <section className="screenwh">
        <h1
          className="text-5xl justify-center flex !m-10 md:leading-2 lg:leading-2"
          style={{ fontFamily: "Telegraf, sans-serif", fontWeight: 700 }}
        >
          Mentors & Expert Support Team
        </h1>
      </section>
      <FocusCards
        cards={advisorsData}
        className="lg:grid-cols-3 lg:max-w-full font-extrabold"
        imgClassName="rounded-lg hover:scale-105 transition-transform"
        renderContent={(card) => (
          <>
            <p className="text-sm text-gray-200 !mt-1">{card.post}</p>
            {card.linkedin && (
              <a
                href={card.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 underline mt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-blue-500"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.765 0-.974.784-1.767 1.75-1.767s1.75.792 1.75 1.767c0 .975-.784 1.765-1.75 1.765zm13.5 11.268h-3v-5.604c0-1.338-.027-3.062-1.867-3.062-1.868 0-2.155 1.46-2.155 2.964v5.702h-3v-10h2.882v1.364h.04c.402-.762 1.382-1.564 2.845-1.564 3.04 0 3.615 2.004 3.615 4.609v5.591z" />
                </svg>
              </a>
            )}
          </>
        )}
      />
    </div>
  );
};

export default About;
