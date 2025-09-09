import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedOption = queryParams.get("option") || "general";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    inquiryType: selectedOption,
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      inquiryType: selectedOption,
    }));
  }, [selectedOption]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzZ81kEHLhFieyG1uohQ_IzK89n0XDmrpzgAr5LOXNfTCdDkvazKctj6cI9GPZCCIoC6A/exec",
        {
          method: "POST",
          mode: "no-cors", // Prevents CORS errors
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      alert("✅ Successfully Submitted & Saved to Google Sheets!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        inquiryType: selectedOption,
      });
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Failed to save data. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col items-center p-10">
      <h1
        className="text-4xl font-bold mb-6"
        style={{ fontFamily: "Telegraf, sans-serif", fontWeight: 700 }}
      >
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl bg-transparent p-10 rounded-2xl shadow-lg">
        {/* Contact Form */}
        <div className="bg-transparent p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-600 text-white border-none outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-600 text-white border-none outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Inquiry Type</label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-600 text-white border-none outline-none"
              >
                <option value="collaborate">Collaborate with Us</option>
                <option value="demo">Book a Demo</option>
                <option value="investment">Support Our Mission</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 rounded-lg bg-gray-600 text-white border-none outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-transparent p-6 rounded-xl">
          <h2 className="text-2xl font-semibold !mb-4">Our Contact Details</h2>
          <p className="text-gray-300 !mb-4">
            Feel free to reach out to us for any inquiries, collaborations, or
            support.
          </p>

          <div className="!space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-100">Location</h3>
              <p className="text-gray-300">
                Rukmini Knowledge Park, Kattigenahalli, Bangalore - 560064
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-100">Email</h3>
              <p className="text-gray-300">cropnow.contact@gmail.com</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-100">Phone</h3>
              <p className="text-gray-300">+91 9141749525</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-100">
                🕒 Business Hours
              </h3>
              <p className="text-gray-300">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
