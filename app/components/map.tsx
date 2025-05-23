import Image from 'next/image';

function Map() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        {/* Swapped: Text and Button Section */}
        <div className="flex flex-col justify-center">
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold py-6">
            Servicing Areas
          </h1>
          <p className='text-xl'>
            We stand fully equipped to offer our comprehensive services to clients across the United States. With a network of proficient agents and brokers strategically positioned, we are primed to deliver meticulous real estate valuation services in close proximity to your location.
          </p>
          {/* Horizontal Line */}
          <hr className="my-6 border-b-4 border-blue-600 max-w-3/4 items-center" />
          {/* <button className="bg-black text-[#00df9a] hover:text-black hover:bg-[#00df9a] duration-75 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button> */}
        </div>
        {/* Swapped: Image Section */}
        <Image
          className="w-[500px] mx-auto my-4"
          src={'/map.png'}
          alt="/"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default Map;
