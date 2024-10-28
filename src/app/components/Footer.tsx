import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 pt-8 mt-12">
      <div className="container  mx-auto px-4">
        <div className=" container flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          {/* Links Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-rose-800">Home</a></li>
              <li><a href="/about" className="hover:text-rose-800">About</a></li>
              <li><a href="/shop" className="hover:text-rose-800">Shop</a></li>
              <li><a href="/contact" className="hover:text-rose-800">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>1234 Street Name, City, Country</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>+92 315 3831104</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>✉️</span>
                <span>glamaura@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-200 hover:text-blue-400" aria-label="Facebook">🌐</a>
              <a href="#" className="text-gray-200 hover:text-blue-400" aria-label="Twitter">🐦</a>
              <a href="#" className="text-gray-200 hover:text-blue-400" aria-label="Instagram">📷</a>
              <a href="#" className="text-gray-200 hover:text-blue-400" aria-label="LinkedIn">🔗</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; 2024 GlamAura. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;