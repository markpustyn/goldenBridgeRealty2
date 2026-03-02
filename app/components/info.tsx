'use client'

import { useState } from "react";
import Image from "next/image";

function Info() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-40 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Software Built for Modern Property Oversight
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A purpose built platform delivering structured exterior documentation 
            and actionable reporting for lenders, servicers, and investors.
          </p>
        </div>

        {/* Split Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Feature List */}
          <div className="space-y-8 w-96">

            {/* Item 1 */}
            <div>
              <button
                onClick={() => toggle(0)}
                className="text-left w-full"
              >
                <h3 className={`text-3xl font-semibold border-l-4 border-blue-700 pl-5 cursor-pointer
                  ${open === 0 ? 'text-blue-700' : 'text-gray-900'}
                  `}>
                  Lower Operational Costs
                </h3>
              </button>

              {open === 0 && (
                <p className="text-gray-600 mt-3 pl-5 md:text-lg text-sm">
                  Reduce reliance on full inspections while maintaining exterior visibility.
                </p>
              )}
            </div>

            {/* Item 2 */}
            <div>
              <button
                onClick={() => toggle(1)}
                className="text-left w-full"
              >
                <h3 className={`text-3xl font-semibold border-l-4 border-blue-700 pl-5 cursor-pointer
                  ${open === 1 ? 'text-blue-700' : 'text-gray-900'}
                  `}>
                  Faster Turnaround Times
                </h3>
              </button>

              {open === 1 && (
                <p className="text-gray-600 mt-3 pl-5 md:text-lg text-sm">
                  Report submitted in under three days designed for high volume portfolios.
                </p>
              )}
            </div>

            {/* Item 3 */}
            <div>
              <button
                onClick={() => toggle(2)}
                className="text-left w-full"
              >
                <h3 className={`text-3xl font-semibold border-l-4 border-blue-700 pl-5 cursor-pointer
                  ${open === 2 ? 'text-blue-700' : 'text-gray-900'}
                  `}>
                  Clear Structured Data
                </h3>
              </button>

              {open === 2 && (
                <p className="text-gray-600 mt-3 pl-5 md:text-lg text-sm">
                  Standardized reporting that supports underwriting and risk review.
                </p>
              )}
            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              className="max-w-md md:max-w-xl xl:max-w-2xl object-contain"
              src="/software4.png"
              alt="Inspection software dashboard"
              width={1600}
              height={1600}
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Info;