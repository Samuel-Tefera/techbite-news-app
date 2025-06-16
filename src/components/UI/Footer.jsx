import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 px-6 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 border-b border-gray-800 dark:border-gray-800 py-10">
        <div>
          <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3">TechBite</h3>
          <p className="text-gray-400">
            Bringing you the latest in technology news, reviews, and insights.
          </p>
        </div>
        <div>
          <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3">
            Popular Categories
          </h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">AI</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">Cybersecurity</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">Programming</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">Gadgets</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">Startups</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row py-6 items-center justify-between">
        <p className="text-gray-400">© {currentYear} TechBite. All rights reserved.</p>
        <div className="text-gray-400 flex gap-4 mt-2 sm:mt-0">
          <a className="hover:text-blue-400 transition-colors" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="hover:text-blue-400 transition-colors" href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a className="hover:text-blue-400 transition-colors" href="#">
            <i className="fab fa-linkedin"></i>
          </a>
          <a className="hover:text-blue-400 transition-colors" href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
