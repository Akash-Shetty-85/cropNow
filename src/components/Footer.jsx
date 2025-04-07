// const Footer = () => {
//     return (
//       <footer className="bg-gray-900 text-white p-8 mt-10 overflow-x-hidden">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between  overflow-x-hidden items-center">
//           {/* Left Section */}
//           <p className="text-sm">&copy; {new Date().getFullYear()} CropNow. All rights reserved.</p>

//           {/* Center Section - Links */}
//           <nav className="flex gap-4 text-sm">
//             <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
//             <a href="/terms" className="hover:underline">Terms of Service</a>
//             <a href="/contact" className="hover:underline">Contact</a>
//             <a href="/careers" className="hover:underline">Careers</a>
//           </nav>

//           {/* Right Section - Social Media */}
//           <div className="flex gap-6 ">
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
//               Twitter
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
//               LinkedIn
//             </a>

//           </div>
//         </div>
//       </footer>
//     );
//   };

//   export default Footer;
import image from  '@/assets/revaNest.png';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Contact Section */}
        <div>
          <h3 className="text-white text-xl font-semibold !mb-4">Contact Us</h3>
          <p className="flex items-start gap-2 !mb-3">
            <svg className="w-5 h-5 !mt-1" fill="currentColor" viewBox="0 0 384 512">
              <path d="M172.268 501.67C26.97 291.031...z" />
            </svg>
            REVA Nest, Rukmini Knowledge Park, Kattigenahalli, Bangalore - 560064
          </p>
          <p className="flex items-start gap-2 !mb-3">
            <svg className="w-5 h-5 !mt-1" fill="currentColor" viewBox="0 0 512 512">
              <path d="M497.39 361.8l-112-48...z" />
            </svg>
            +91 91417 49525
          </p>
          <p className="flex items-start gap-2 !mb-3">
            <svg className="w-5 h-5 !mt-1" fill="currentColor" viewBox="0 0 496 512">
              <path d="M336.5 160C322 70.7...z" />
            </svg>
            <a href="https://www.cropnow.in" className="text-blue-400 hover:underline">www.cropnow.in</a>
          </p>
          <p className="flex items-start gap-2">
            <svg className="w-5 h-5 !mt-1" fill="currentColor" viewBox="0 0 512 512">
              <path d="M502.3 190.8c3.9-3.1...z" />
            </svg>
            cropnow.contact@gmail.com
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-white text-xl font-semibold !mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#solutions" className="hover:underline">Solutions</a></li>
            <li><a href="#product" className="hover:underline">Product</a></li>
            <li><a href="#career" className="hover:underline font-bold">Career</a></li>
          </ul>
          <div className="flex gap-4 !mt-5 text-xl">
            <a href="#twitter" className="hover:text-white transition"><i className="fab fa-twitter" /></a>
            <a href="#instagram" className="hover:text-white transition"><i className="fab fa-instagram" /></a>
            <a href="#youtube" className="hover:text-white transition"><i className="fab fa-youtube" /></a>
            <a href="#linkedin" className="hover:text-white transition"><i className="fab fa-linkedin" /></a>
          </div>
        </div>

        {/* Incubator Section */}
        <div>
          <h3 className="text-white text-xl font-semibold !mb-4">Incubated At</h3>
          <img
            src={image}
            alt="Incubator Logo"
            className="w-40 !mb-4 rounded-lg shadow-md"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
            Feedback / Report
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="!mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-400">
        &copy; {new Date().getFullYear()} CropNow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
