const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white p-8 mt-10 overflow-x-hidden">
        <div className="container mx-auto flex flex-col md:flex-row justify-between  overflow-x-hidden items-center">
          {/* Left Section */}
          <p className="text-sm">&copy; {new Date().getFullYear()} CropNow. All rights reserved.</p>
  
          {/* Center Section - Links */}
          <nav className="flex gap-4 text-sm">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms of Service</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/careers" className="hover:underline">Careers</a>
          </nav>
  
          {/* Right Section - Social Media */}
          <div className="flex gap-6 ">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
            
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  