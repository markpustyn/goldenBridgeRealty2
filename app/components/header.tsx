'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full z-50 border-b-2 pb-4">
      <div className="mx-auto max-w-screen-xl px-4 pt-4">
        <div className="">
          <div className="relative flex items-center px-4 py-3 md:px-6">
            {/* Logo (left) */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                alt="Golden Bridge Realty Logo"
                src="/newLogo.svg"
                height={80}
                width={260}
                priority
                className="w-[200px] md:w-[260px]"
              />
            </Link>

            {/* Center links (desktop) */}
            <div className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2">
              <ul className="flex items-center gap-10 font-medium">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/service-area", label: "Service Area" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="relative text-[19px] text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side: Get Started (desktop) + hamburger (mobile) */}
            <div className="ml-auto flex items-center gap-3">
              <Link
                href="/"
                target="_blank"
                className="hidden md:inline-flex"
              >
                <Button className="inline-flex items-center justify-center rounded bg-blue-700 px-6 py-6 text-[15px] text-white tracking-tight transition-all duration-200 hover:bg-blue-800 hover:shadow-lg active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                  Get Started
                </Button>
              </Link>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center justify-center rounded-xl p-2 text-gray-700 md:hidden hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-200"
                aria-controls="navbar-mobile"
                aria-expanded={open}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-5 w-5"
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
            </div>
          </div>

          {/* Mobile dropdown */}
          <div
            id="navbar-mobile"
            className={[open ? 'block' : 'hidden', 'md:hidden px-4 pb-4 pt-3'].join(' ')}
          >
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-lg font-medium text-gray-900 hover:bg-white/70"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/vendors"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-lg font-medium text-gray-900 hover:bg-white/70"
                >
                  Vendors
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2 text-lg font-medium text-gray-900 hover:bg-white/70"
                >
                  Contact
                </Link>
              </li>

              <li className="pt-2">
                <Link
                  href="/"
                  target="_blank"
                  className="block"
                  onClick={() => setOpen(false)}
                >
                  <Button className="w-full inline-flex items-center justify-center rounded bg-blue-700 px-6 py-6 text-[15px] text-white tracking-tight transition-all duration-200 hover:bg-blue-800 hover:shadow-lg active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                    Get Started
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;