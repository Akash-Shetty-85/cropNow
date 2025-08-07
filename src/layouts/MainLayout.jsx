import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Footer from "../components/Footer";
import logo from "/src/assets/CropNow_icon.png";
// sdnjkfnsnal.nl
const MainLayout = ({ children }) => {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = [
        { name: "About", link: "/about" },
        { name: "Our Solutions", link: "/ourSolution" },
        { name: "Technology", link: "/technology" },
        { name: "R&D", link: "/randd" },
        { name: "Contact", link: "/contact" },
    ];
    useMotionValueEvent(scrollY, "change", (latest) => {
        const prev = scrollY.getPrevious() || 0;
        setIsVisible(latest < prev);
    });

    return (
        <div className="relative overflow-hidden">
            {/* Mobile Dropdown Header */}
            <div className="md:hidden fixed top-0 left-0 w-full z-50 shadow-none flex items-center justify-between px-4 py-3 bg-transparent">
                <Link to="/">
                    <div className="text-lg font-semibold flex gap-0 items-start">
                        <img
                            src={logo}
                            alt="CropNow Logo"
                            className="bg-black w-10 rounded-full p-0.5"
                        />
                        <span className="font-sans text-xs">™</span>
                        <span className="font-semibold self-center text-green-700">CropNow</span>
                    </div>
                </Link>
                <button
                    className="focus:outline-none"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-7 h-7 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            {/* Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden fixed top-14 left-0 w-full shadow-lg z-40 animate-fade-in-down bg-black/80">
                    <ul className="flex flex-col py-2">
                        {navLinks.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.link}
                                    className="block px-6 py-3 text-lg text-white hover:bg-green-50 transition-colors"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {/* Navigation Bar for Desktop */}
            <motion.nav
                className="hidden md:flex fixed top-1 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-15
                            z-10 text-white p-6 justify-between items-center 
                            shadow-lg rounded-2xl bg-transparent"
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
                    <NavItem to="/about" text="About" />
                    <NavItem to="/ourSolution" text="Our Solutions " />
                    <NavItem to="/technology" text="Technology" />
                    <NavItem to="/randd" text="R&D" />
                    <NavItem to="/contact" text="Contact" />
                </div>
            </motion.nav>
            {/* Page Content */}
            <main className="!mt-6 p-3">{children}</main>
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
