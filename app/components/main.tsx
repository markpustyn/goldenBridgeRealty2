'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

function Main() {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  return (
  <main className="w-full relative">
    {/* Background Image */}
    <div className="absolute inset-0 -z-10 bg-gray-200">
      <Image
        src="/oldBackground.jpg"
        alt="Main Image"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
      <div className="mx-auto max-w-screen-xl px-4 pt-52 pb-40">
        {/* Hero */}
        <section className="text-center">
          <h1
            ref={textRef}
            className="text-left max-w-full text-4xl md:text-6xl font-bold tracking-tight text-white pt-20"
          >
            North Carolinas Trusted Real Estate Services
          </h1>

          <p className="text-left mt-6 max-w-3xl text-[20px] text-white leading-relaxed">
           With 20+ years of experience, Golden Bridge Realty is your trusted partner for all your real estate needs in North Carolina. We provide expert guidance and personalized service to help you buy, sell, or invest with confidence.
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
      </div>
    </main>
  );
}

export default Main;