import { FocusCards } from '../components/ui/focus-cards';
import { Timeline } from '../components/ui/timeline';
import { motion } from 'framer-motion';
import teamData from '@/data/teamData';
import timelineData from '@/data/timeLine';
import featuresData from '@/data/featuresData';

const About = () => {
  return (
    <div className="p-8 text-white min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="!mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-6xl font-bold tracking-wide text-white drop-shadow-md" style={{ fontFamily: 'Telegraf, sans-serif', fontWeight: 700 }}>
          About Us
        </h1>
        <p className="text-lg !mt-4 text-gray-300 max-w-xl !mx-auto">
          Learn how CropNow is making a difference.
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
          CropNow is an agritech company dedicated to transforming agriculture through innovation, automation, and sustainable solutions. We develop AI-powered, data-driven technologies to enhance productivity, optimize resource usage, and promote eco-friendly farming practices.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="!mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.5)', color: 'rgba(0, 0, 0, 0.9)' }}
            whileTap={{ scale: 0.95 }}
            className="p-6 bg-white/10 rounded-xl shadow-lg hover:shadow-xl transition duration-300 hover:text-black"
          >
            <h3 className="text-2xl font-semibold !mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Timeline Section */}
      <Timeline data={timelineData} />

      {/* Team Section */}
      <section className="screenwh">
        <h1 className="text-5xl justify-center flex !m-10 md:leading-2 lg:leading-2" style={{ fontFamily: 'Telegraf, sans-serif', fontWeight: 700 }}>
          The Minds Behind Our Mission
        </h1>
      </section>
      <FocusCards
        cards={teamData}
        className="lg:grid-cols-4 lg:max-w-full"
        imgClassName="rounded-lg hover:scale-105 transition-transform"
        renderContent={(card) => (
          <>
            <p className="text-sm text-gray-200 mt-1">{card.post}</p>
            <a href={card.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 underline mt-1">
              LinkedIn Profile
            </a>
          </>
        )}
      />
    </div>
  );
};

export default About;
