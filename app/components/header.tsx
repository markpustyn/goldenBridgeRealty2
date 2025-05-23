import Image from 'next/image';
import Link from 'next/link'; 



const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-xs">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 mt-4">
        <Link href="/" className="flex items-center">
          <Image className="h-12 mr-3" alt="PreciseVal Logo" src={'/logo.png'} height={150} width={60} />
          <span className="self-center text-4xl font-semibold whitespace-nowrap text-white">PreciseVal Capital</span>
        </Link>
        <div className="flex md:order-2">
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li className="relative text-xl">
            </li>
            <li>
              <Link href="/" className="block py-2 text-white rounded hover:bg-sky-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-sky-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-2xl">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-sky-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-sky-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-2xl">
                Services
              </Link>
            </li>
            <li>
            <Link href="/contact" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-sky-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-sky-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-2xl">
                Contact
              </Link>
            </li>
          </ul>
        </div>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-sky-700 dark:focus:ring-gray-600"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
