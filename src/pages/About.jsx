
import { FocusCards } from "../components/ui/focus-cards";
import { Timeline } from "../components/ui/timeline";
import { motion } from "framer-motion";
// import { title } from "process";
import image from "../assets/Team/k.jpg";
import image1 from "../assets/Team/n.png";
import image2 from "../assets/Team/s.png";

const About = () => {
  const timelineData = [
    {
      title: "Project Launch",
      content: "Started working on Aceternity in early 2023, laying the foundation for the platform.",
    },
    {
      title: "Beta Release",
      content: "Launched the beta version to gather feedback from early adopters.",
    },
    {
      title: "Public Release",
      content: "Officially released Aceternity to the public in 2024, with improved features and stability.",
    },
  ];

  const cards = [
    {
      title: "Mohammed Kabeer",
      src: image,
      post: "Founder & CEO",
      linkdin: "https://www.linkedin.com/in/mohammed-kabeer?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BriPpMCByTLKleDKLoDQZ2w%3D%3D",
    },
    {
      title: "Mohammad Aman",
      src: image1,
      post: "R&D Head",
      linkdin: "https://www.linkedin.com/in/mohammad-aman-993421326?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWpH6%2Bbb4SyKT85jtn%2FsP8A%3D%3D",
    },
    {
      title: "Esha Jenifer",
      src: image,
      post: "Branding & Marketing Head",
      linkdin: "https://www.linkedin.com/in/esha-jenifer-120989250?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYLw7hngdRgGgYiGkK8cXhw%3D%3D",
    },
    {
      title: "Saravanan M",
      src: image2,
      post: "Mechatronics & Robotics Lead",
      linkdin: "https://www.linkedin.com/in/saravanan-m-29a42a249?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZMSx50B9T9S1045T1NBTNA%3D%3D",
    },
  ];
  return (
    <div className="p-8 text-white min-h-screen">
      {/* Hero Section */}
      <motion.div
        className="!mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1
          className="text-6xl font-bold tracking-wide text-white drop-shadow-md"
          style={{
            fontFamily: "Telegraf, sans-serif",
            fontWeight: 700,
            fontStretch: "expanded",
          }}
        >
          About Us
        </h1>
        <p className="text-lg !mt-4 text-gray-300 max-w-xl !mx-auto">
          Learn how CropNow is making a difference.
        </p>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="!mt-8 max-w-4xl !mx-auto space-y-6 text-lg text-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p>
          CropNow is an agritech company dedicated to transforming agriculture through innovation, automation, and sustainable solutions. We develop AI-powered, data-driven technologies to enhance productivity, optimize resource usage, and promote eco-friendly farming practices. Our solutions, including precision agriculture tools, smart farming systems, and waste management innovations, empower farmers, agribusinesses, and industries to achieve higher efficiency with minimal environmental impact. By integrating advanced automation and real-time analytics, CropNow is paving the way for a smarter, greener, and more resilient agricultural future.

        </p>
      </motion.div>

      {/* Key Features Section */}
      <motion.div
        className="!mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {[
          { title: "AI-Powered Solutions", desc: "Revolutionizing agriculture with smart algorithms." },
          { title: "Sustainable Practices", desc: "Eco-friendly innovations for a greener future." },
          { title: "Precision Farming", desc: "Maximizing yield with data-driven insights." },
          { title: "Real-Time Analytics", desc: "Instant data for proactive decision-making." },
          { title: "Smart Farming Systems", desc: "Automated tools for enhanced productivity." },
          { title: "Waste Management", desc: "Minimizing agricultural waste effectively." },
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, background: "rgba(255, 255, 255, 0.5)", color: "rgba(0, 0, 0, 0.9)" }}
            whileTap={{ scale: 0.95 }}
            className="p-6 bg-white/10 rounded-xl shadow-lg hover:shadow-xl transition duration-300 hover:text-black"
          >
            <h3 className="text-2xl font-semibold !mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      <Timeline data={timelineData} />
      <section>
        <h1 className="screenwh text-5xl justify-center flex !m-4">The minds behind our mission</h1>
      </section>
      <FocusCards cards={cards} />
    </div>
  );
};

export default About;
