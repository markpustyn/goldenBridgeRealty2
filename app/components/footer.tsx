import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Company Info */}
        <div className="max-w-md">
        <Link href="/" className="flex items-center">
          <Image className="mr-3" alt="Golden Bridge Realty Logo" src={'/newLogo.svg'} height={100} width={300} />
        </Link>
          <p className="text-base leading-relaxed">
           Expert guidance, local market knowledge, and personalized support every step of the way.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-4 text-base">
          <a href="/" className="hover:text-blue-700 transition">About</a>
          <a href="/vendors" className="hover:text-blue-700 transition">Service Area</a>
          <a href="/contact" className="hover:text-blue-700 transition">Contact</a>
        </div>

        {/* Contact Info */}
        <div className="text-base space-y-2">
          <p>Email: <a href="mailto:support@goldenbridgerealty.com" className="text-blue-700 hover:underline">support@goldenbridgerealty.com</a></p>
          <p>Phone: (916) 123-4567</p>
          <p>Charlotte, NC</p>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Golden Bridge Realty. All rights reserved.
      </div>
    </footer>
  );
}
