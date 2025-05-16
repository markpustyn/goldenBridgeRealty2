'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

function Main() {
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    // Optional future effects
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden">
      <Image
        src='/backgrnd.jpg'
        alt="House Background"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center space-y-6 h-full">
        <h1
          ref={textRef}
          className="text-4xl md:text-6xl text-white text-center max-w-4xl font-extrabold text-nowrap"
        >
         Propert Valuation Solutions
        </h1>
        <div className='pt-4'>
        <InteractiveHoverButton>
          Request Demo
        </InteractiveHoverButton>
        </div>
      </div>
    </main>
  );
}

export default Main;
