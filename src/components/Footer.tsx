import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-slate-800 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo or Brand */}
          <div className="text-xl font-semibold">My School</div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white">
              About
            </a>
            <a href="#" className="hover:text-white">
              Services
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
          </div>

          {/* Social Icons or Copyright */}
          <div className="text-sm text-gray-400 text-center md:text-right">
            © {new Date().getFullYear()} MA Ahemd School. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
