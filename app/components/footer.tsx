import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Company Info */}
        <div className="max-w-md">
        <Link href="/" className="flex items-center">
          <Image className="h-12 mr-3 bg-black" alt="Flowbite Logo" src={'/logo.png'} height={50} width={50} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">PreciseVal Capital</span>
        </Link>
          <p className="text-base leading-relaxed">
            A modern platform offering end-to-end property inspection and valuation tools built for speed, scale, and compliance.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-4 text-base">
          <a href="#solutions" className="hover:text-blue-600 transition">Solutions</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>

        {/* Contact Info */}
        <div className="text-base space-y-2">
          <p>Email: <a href="mailto:support@preciseval.com" className="text-blue-600 hover:underline">support@preciseval.com</a></p>
          <p>Phone: (123) 456-7890</p>
          <p>Sacramento, CA</p>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} PreciseVal Capital. All rights reserved.
      </div>
    </footer>
  );
}
