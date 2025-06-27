'use client';

import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Copyright */}
        <div className="text-center md:text-left text-sm">
          &copy; {new Date().getFullYear()} QuickShop. All rights reserved.
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-red-500 transition">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-red-500 transition">
            <Twitter size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-red-500 transition">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-red-500 transition">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
