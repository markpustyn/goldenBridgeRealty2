'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 mt-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            className="mr-3"
            alt="Blue Grid Valuations Logo"
            src="/blackLogo.svg"
            height={100}
            width={300}
          />
        </Link>

        {/* Right side controls */}
        <div className="flex items-center md:order-2">
          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={open}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Nav links */}
          <div
            id="navbar-sticky"
            className={`${open ? 'block' : 'hidden'} absolute left-0 right-0 top-full mt-2 mx-2 border-gray-100 bg-white backdrop-blur p-4 md:p-0 md:bg-transparent md:static md:mt-0 md:mx-0 md:border-0 md:flex md:w-auto md:items-center md:space-x-10`}
          >
            <ul className="flex flex-col gap-2 md:flex-row md:gap-10 md:items-center font-medium">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block py-2 text-xl text-gray-900 md:text-black hover:text-blue-700 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors"
                  onClick={() => setOpen(false)}
                  className="block py-2 text-xl text-gray-900 md:text-black hover:text-blue-700 transition-colors"
                >
                  Vendors
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block py-2 text-xl text-gray-900 md:text-black hover:text-blue-700 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://app.bluegridvaluations.com/"
                  target='_blank'
                  onClick={() => setOpen(false)}
                  className="block px-6 py-2 text-lg font-semibold text-white bg-blue-700 rounded-full shadow-md transition-all hover:bg-blue-800 hover:shadow-lg focus:ring-2 focus:ring-blue-300"
                >
                  Sign In
                </a>
              </li>
            </ul>
          </div>
          {/* End nav links */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
