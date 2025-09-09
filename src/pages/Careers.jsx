import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Modal from "react-modal";

const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzZ81kEHLhFieyG1uohQ_IzK89n0XDmrpzgAr5LOXNfTCdDkvazKctj6cI9GPZCCIoC6A/exec";

const CareerPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        inquiryType: "career", // used in Apps Script to decide the sheet
    });
    const [loading, setLoading] = useState(false);

    // Initialize AOS animations
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    // Track inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Submit form to Apps Script
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(
                "https://script.google.com/macros/s/AKfycbzZ81kEHLhFieyG1uohQ_IzK89n0XDmrpzgAr5LOXNfTCdDkvazKctj6cI9GPZCCIoC6A/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            );

            alert("✅ Successfully Submitted & Saved to Google Sheets!");

            // Reset form after success
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                inquiryType: "career",
            });
        } catch (error) {
            console.error("Error:", error);
            alert(
                "❌ Failed to save data. If you see a CORS/CSP error, you’ll need to use a serverless proxy (Netlify/Vercel)."
            );
        }
    };

    return (
        <div className="min-h-screen bg-black rounded-lg text-white p-10 flex flex-col items-center w-full">
            {/* Hero Section */}
            <motion.div
                className="text-center max-w-full space-y-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ marginTop: "4rem", marginBottom: "2rem" }}
            >
                <h1
                    className="text-6xl font-bold text-green-400 w-6xl"
                    style={{
                        marginBottom: "3rem",
                        fontFamily: "Telegraf, sans-serif",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    Welcome to Your Future with CropNow!
                </h1>
                <p className="text-lg text-gray-300 w-6xl">
                    CropNow is revolutionizing farming by integrating AI, IoT, and cutting-edge research into sustainable agriculture.
                    Join us in making farming smarter and more efficient.
                </p>
            </motion.div>

            {/* Work Culture Section */}
            <div
                className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl"
                style={{ marginTop: "4rem" }}
            >
                {[
                    { title: "Culture", desc: "Collaboration, flexibility, and innovation define our work." },
                    { title: "Quality", desc: "We value results over hours worked." },
                    { title: "Value", desc: "Your ideas matter in shaping the future of agriculture." },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        data-aos="fade-up"
                        className="bg-green-700 p-6 rounded-xl shadow-lg"
                    >
                        <h2 className="text-2xl font-semibold">{item.title}</h2>
                        <p className="text-gray-200 mt-2" style={{ marginTop: "2rem" }}>
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Benefits Section */}
            <motion.div
                className="!mt-16 max-w-4xl text-center space-y-6"
                data-aos="fade-up"
                style={{ marginTop: "4rem" }}
            >
                <h2 className="text-3xl font-bold text-green-400" style={{ marginBottom: "2rem" }}>
                    Why Join CropNow?
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-300">
                    {[
                        "Learning & Development",
                        "Shape the Future of India",
                        "Experience a Startup from Scratch",
                        "Expand Your Network",
                        "Interact with Industry Experts & Professors",
                        "Engage with Farmers & Solve Real-World Problems",
                    ].map((benefit, i) => (
                        <motion.li
                            key={i}
                            className="bg-gray-800 p-10 rounded-lg shadow-md"
                            data-aos="fade-up"
                        >
                            {benefit}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
                className="!mt-10 text-center max-w-2xl"
                data-aos="fade-up"
                style={{ marginTop: "2rem" }}
            >
                <h2 className="text-3xl font-bold text-green-400">Join our team</h2>
                <p className="!mt-3 text-gray-300" style={{ marginTop: "1rem" }}>
                    Be part of an exclusive team and make an impact on India's agriculture.
                </p>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="!mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg shadow-lg transition-all"
                    style={{ marginTop: "2rem" }}
                >
                    Apply Now
                </button>
            </motion.div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                className="bg-white text-black p-6 rounded-xl max-w-md mx-auto shadow-2xl !mt-20"
                overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center"
            >
                <h3 className="text-2xl font-bold text-green-600">Apply for CropNow</h3>
                <p className="text-gray-600 mb-4">Fill in your details to apply.</p>

                <form className="!space-y-6" onSubmit={handleSubmit}>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                    <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="text"
                        placeholder="Phone Number"
                        className="w-full p-2 border rounded-lg"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Why do you want to join?"
                        className="w-full p-2 border rounded-lg"
                        rows="3"
                        required
                    ></textarea>

                    <div className="flex gap-5">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default CareerPage;
