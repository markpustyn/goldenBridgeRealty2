import Link from 'next/link';
import Image from 'next/image';
function Map() {
  return (
    <div className="w-full bg-white py-16 px-6 mb-24">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-6 text-center mb-12">
            Join Our Nationwide Network
          </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-16">
        {/* Text and CTA Section */}

        {/* Image Section */}
        <Image
          className="w-[600px] mx-auto my-4"
          src={'/map2.png'}
          alt="Service Area Map"
          width={500}
          height={500}
        />
                <div className="flex flex-col justify-center">
          <p className="text-md md:text-xl">
            We are actively expanding our coverage and seeking reliable property inspection vendors across the U.S. As part of our network, you will get access to consistent orders, streamlined tools, and fast payments—all from one powerful platform.
          </p>
          <hr className="my-6 border-b-4 border-blue-600 max-w-3/4 items-center" />
          <Link  href='/vendors' className="self-start bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition text-xl">
            Join the Network
          </Link>
        </div>

      </div>
      
    </div>
  );
}

export default Map;
