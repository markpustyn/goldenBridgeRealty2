'use client';

import { useRef } from 'react';
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function Main() {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  return (
    <main className="w-full">
      <div className="mx-auto max-w-screen-xl px-4 pt-52 pb-40">

        {/* Hero */}
        <section className="text-center">
          <h1
            ref={textRef}
            className="mx-auto max-w-full text-4xl md:text-6xl font-bold tracking-tight text-gray-900"
          >
            Clear Property Data Solutions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
            Fast, reliable property inspections solutions delivered nationwide with clarity and precision.
          </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact">
            <Button
              className="h-14 px-8 text-[15px] font-semibold border-2 border-blue-700 text-blue-700 bg-white rounded transition-all duration-200 hover:bg-blue-700 hover:text-white hover:shadow-lg active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              Learn More
            </Button>
          </Link>

          <Link href="https://app.bluegridvaluations.com/client-sign-up" target='_blank'>
            <Button
              className="h-14 px-8 text-[15px] font-semibold bg-blue-700 text-white rounded shadow-md transition-all duration-200 hover:bg-blue-800 hover:shadow-xl active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign Up Now
            </Button>
          </Link>
        </div>
        </section>
          <section className="mt-16">
            <div className="mx-auto max-w-3xl">
              <div className="px-6 py-10 md:px-10 md:py-12">
                <h2 className="mt-4 text-xl md:text-3xl font-bold tracking-tight text-gray-900">
                  We capture the data to help you make confident and informed decisions about your property.
                </h2>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <span className="rounded-full border-2 border-blue-700 bg-white px-5 py-2 text-sm font-semibold text-blue-700 transition-all duration-200 hover:bg-blue-700 hover:text-white hover:shadow-md">
                    Insurance Underwriters
                  </span>

                  <span className="rounded-full border-2 border-blue-700 bg-white px-5 py-2 text-sm font-semibold text-blue-700 transition-all duration-200 hover:bg-blue-700 hover:text-white hover:shadow-md">
                    Residential & Commercial Lenders
                  </span>

                  <span className="rounded-full border-2 border-blue-700 bg-white px-5 py-2 text-sm font-semibold text-blue-700 transition-all duration-200 hover:bg-blue-700 hover:text-white hover:shadow-md">
                    Home Equity Lenders
                  </span>

                  <span className="rounded-full border-2 border-blue-700 bg-white px-5 py-2 text-sm font-semibold text-blue-700 transition-all duration-200 hover:bg-blue-700 hover:text-white hover:shadow-md">
                    Property Management Firms
                  </span>

                  <span className="rounded-full border-2 border-blue-700 bg-white px-5 py-2 text-sm font-semibold text-blue-700 transition-all duration-200 hover:bg-blue-700 hover:text-white hover:shadow-md">
                    Real Estate Investors
                  </span>
                </div>
              </div>
            </div>
          </section>
      </div>
    </main>
  );
}

export default Main;