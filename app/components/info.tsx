import Image from "next/image";

function Info() {
  return (
    <section className="w-full bg-white px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Image Section */}
        <Image
          className="w-full max-w-md mx-auto md:mx-0"
          src="/compImg.jpg"
          alt="Inspection software demo"
          width={500}
          height={500}
        />
        
        {/* Text and Button Section */}
        <div className="flex flex-col justify-center text-gray-900">
          <p className="text-blue-700 font-bold uppercase mb-2 tracking-wide">
            Next Generation Software
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Valuation Services, Built for Scale
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Blue Grid Valuations offers nationwide inspection and preservation services for both residential and commercial properties. From securing assets to providing detailed BPOs and Drive-By Exterior Inspections, we streamline the full valuation lifecycle.
          </p>
          <button className="self-start bg-blue-600 text-white px-10 py-2 rounded-md hover:bg-blue-700 transition text-xl">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Info;
