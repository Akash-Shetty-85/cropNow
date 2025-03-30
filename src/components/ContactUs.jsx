import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/contact-us');
    };

    return (
        <div className="h-fit flex flex-col justify-center w-screen items-center text-white p-10">
            <h1 className="text-4xl font-bold !mb-6"
            style={
                {
                    fontFamily: "Telegraf, sans-serif",
                    fontWeight: 700
                }
            }
            >Get in Touch</h1>
            <p className="text-lg !mb-8">Reach out to us for any inquiries or support.</p>
            <button
                onClick={handleRedirect}
                className="px-3 py-3 bg-green-600 rounded-full text-white font-semibold hover:bg-green-700 transition"
            >
                Contact Us
            </button>
        </div>
    );
}

export default ContactUs;
