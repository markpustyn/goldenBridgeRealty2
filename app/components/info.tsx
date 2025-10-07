import Image from "next/image";

function Info() {
  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            className="w-full max-w-2xl object-contain"
            src="/software4.png"
            alt="Inspection software demo"
            width={1400}
            height={1400}
            priority
          />
        </div>

        {/* Text and Button Section */}
        <div className="flex flex-col justify-center text-gray-900">
          <p className="text-blue-700 font-bold uppercase mb-3 tracking-wide">
            Next Generation Software
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Valuation Services, Built for Scale
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Blue Grid Valuations offers nationwide inspection services
            for both residential and commercial properties. From securing assets to
            providing detailed Drive-By Exterior and Interior Inspections, we streamline
            the full valuation lifecycle.
          </p>
          <button className="self-start bg-blue-600 text-white px-10 py-3 rounded-md hover:bg-blue-700 transition text-xl">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Info;
