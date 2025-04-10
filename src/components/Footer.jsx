import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faGlobe,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-screen mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Section */}
        <div className=''>
          <h3 className="text-white text-xl font-semibold !mb-4">Contact Us</h3>

          <p className="flex items-start gap-2 !mb-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 !mt-1" />
            REVA Nest, Rukmini Knowledge Park, Kattigenahalli, Bangalore - 560064
          </p>

          <p className="flex items-start gap-2 !mb-3">
            <FontAwesomeIcon icon={faPhoneAlt} className="w-5 h-5 !mt-1" />
            <a href="tel:+919141749525" className="hover:underline">+91 91417 49525</a>
          </p>

          <p className="flex items-start gap-2 !mb-3">
            <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 !mt-1" />
            <a href="https://www.cropnow.in" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
              www.cropnow.in
            </a>
          </p>

          <p className="flex items-start gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 !mt-1" />
            <a href="mailto:cropnow.contact@gmail.com" className="hover:underline">
              cropnow.contact@gmail.com
            </a>
          </p>
        </div>

        {/* Quick Links Section */}
        <div className=' flex justify-center flex-col items-center'>
          <h3 className="text-white text-xl font-semibold !mb-4">Quick Links</h3>
          <ul className="!space-y-2">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/ourSolution" className="hover:underline">Solutions</a></li>
            <li><a href="/technology" className="hover:underline">Product</a></li>
            <li><a href="/careers" className="hover:underline font-bold">Career</a></li>
          </ul>

          {/* Social Icons */}

        </div>
        <div className=''>
          <div className="flex gap-8 !mt-5 text-xl md:justify-center">
            <a href="https://www.instagram.com/cropnow.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' className="hover:text-white transition" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/company/cropnow/" target='_blank' className="hover:text-white transition" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
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
