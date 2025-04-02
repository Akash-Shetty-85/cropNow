import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Footer from "../components/Footer";
import logo from "/src/assets/CropNow_icon.png";
// sdnjkfnsnal.nl
const MainLayout = ({ children }) => {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(true);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const prev = scrollY.getPrevious() || 0;
        setIsVisible(latest < prev);
    });

    return (
        <div className="relative overflow-hidden">
            {/* Navigation Bar */}
            <motion.nav
                className="fixed top-1 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-15
                            z-10 text-white p-6 flex justify-between items-center 
                            shadow-lg rounded-2xl"
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 150, damping: 50 }}
            >
                <Link to="/">
                    <div className="text-lg font-semibold flex gap-0 items-start">
                        <img
                            src={logo}
                            alt="CropNow Logo"
                            className="bg-black w-10 rounded-full p-0.5"
                        />
                        <span className="font-sans text-xs">™</span>
                        <span className="font-semibold self-center">CropNow</span>
                    </div>
                </Link>

                {/* Navigation Links */}
                <div className="flex gap-3">
                    {/* <NavItem to="/" text="Home" /> */}
                    <NavItem to="/about" text="About" />
                    <NavItem to="/ourSolution" text="Our Solutions " />
                    <NavItem to="/technology" text="Technology" />
                    <NavItem to="/randd" text="R&D" />
                    <NavItem to="/profile" text="Contact" />
                </div>

            </motion.nav>

            {/* Page Content */}
            <main className="mt-2 p-3">{children}</main>
            <Footer />
        </div>
    );
};

/* Navigation Item Component with hover animation */
const NavItem = ({ to, text }) => {
    return (
        <motion.div
            whileHover={{ scale: 1, y: -2 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
            <Link
                to={to}
                className="relative px-4 py-2 transition-all duration-10 
                hover:bg-gray-100 hover:text-green-600 rounded-full hover:font-semibold"
            >
                {text}
            </Link>
        </motion.div>
    );
};

export default MainLayout;
