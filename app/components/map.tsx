import Link from 'next/link';
import Image from 'next/image';
function Map() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        {/* Text and CTA Section */}
        <div className="flex flex-col justify-center">
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-6">
            Join Our Nationwide Network
          </h1>
          <p className="text-md md:text-xl">
            We are actively expanding our coverage and seeking reliable property inspection vendors across the U.S. As part of our network, you will get access to consistent orders, streamlined tools, and fast payments—all from one powerful platform.
          </p>
          <hr className="my-6 border-b-4 border-blue-600 max-w-3/4 items-center" />
          <Link  href='/vendors' className="self-start bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition text-xl">
            Join the Network
          </Link>
        </div>

        {/* Image Section */}
        <Image
          className="w-[500px] mx-auto my-4"
          src={'/map.png'}
          alt="Service Area Map"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}

export default Map;
