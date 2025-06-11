import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#1f2937] px-6 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 border-b-[0.5px] border-[#374151] py-10">
        <div>
          <h3 className="text-zinc-100 text-xl sm:text-2xl font-semibold mb-3">TechBite</h3>
          <p className="text-zinc-300">
            Bringing you the latest in technology news, reviews, and insights.
          </p>
        </div>
        <div>
          <h3 className="text-zinc-100 text-xl sm:text-2xl font-semibold mb-3">Quick Links</h3>
          <ul className="text-zinc-300 space-y-2">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-zinc-100 text-xl sm:text-2xl font-semibold mb-3">
            Popular Categories
          </h3>
          <ul className="text-zinc-300 space-y-2">
            <li>
              <a href="#">AI</a>
            </li>
            <li>
              <a href="#">Cybersecurity</a>
            </li>
            <li>
              <a href="#">Programming</a>
            </li>
            <li>
              <a href="#">Gadgets</a>
            </li>
            <li>
              <a href="#">Startups</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row py-6 items-center justify-between">
        <p className="text-zinc-300">© {currentYear} TechBite. All rights reserved.</p>
        <div className="text-zinc-300 flex gap-4 mt-2 sm:mt-0">
          <a className="hover:text-blue-600 duration-300" href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a className="hover:text-blue-600 duration-300" href="#">
            <i class="fab fa-facebook"></i>
          </a>
          <a className="hover:text-blue-600 duration-300" href="#">
            <i class="fab fa-linkedin"></i>
          </a>
          <a className="hover:text-blue-600 duration-300" href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
