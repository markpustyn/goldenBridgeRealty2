'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

function Main() {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  return (
    <main className="w-full relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/oldBackground.jpg"
          alt="Main Image"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-screen-xl px-6 pt-52 pb-40">
        <section className="max-w-3xl">
          <h1
            ref={textRef}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
          >
            North Carolina&apos;s Trusted Real Estate Services
          </h1>

          <p className="mt-5 text-[18px] md:text-[20px] text-white leading-relaxed">
            With 20+ years of experience, Golden Bridge Realty is your trusted
            partner for all your real estate needs in North Carolina. We provide
            expert guidance and personalized service to help you buy, sell, or
            invest with confidence.
          </p>

          <div className="mt-8">
            <Link href="/contact">
              <Button className="h-14 px-8 text-[16px] font-semibold border-2 border-white text-white bg-transparent rounded transition-all duration-200 hover:shadow-lg active:scale-[0.98]">
                Schedule a Call
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;