import { FaRegClipboard, FaHome, FaRegBuilding, FaSearchLocation } from 'react-icons/fa';
import { TextAnimate } from "@/components/magicui/text-animate";

export default function Solutions() {
  return (
    <section className="bg-white text-gray-900 px-6 py-32 flex flex-col items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Solutions List */}
        <div className="p-6 w-full md:p-8">
          <div className="grid grid-cols-1 gap-8 text-[16px] md:text-[22px]">
            <div className="flex items-center space-x-6">
              <div className="bg-blue-100 rounded-full p-3">
                <FaRegClipboard size={32} className="text-blue-600" />
              </div>
            <TextAnimate animation="slideRight" by="character">
                Drive-By Exterior Inspections
                </TextAnimate>
            </div>
            <div className="flex items-center space-x-6">
              <div className="bg-blue-100 rounded-full p-3">
                <FaHome size={32} className="text-blue-600" />
              </div>
            <TextAnimate animation="slideRight" by="character">
                Interior Property Inspections
                </TextAnimate>
            </div>
            <div className="flex items-center space-x-6">
              <div className="bg-blue-100 rounded-full p-3">
                <FaRegBuilding size={32} className="text-blue-600" />
              </div>
            <TextAnimate animation="slideRight" by="character">
                Post Disaster Inspections
                </TextAnimate>
            </div>
            <div className="flex items-center space-x-6">
              <div className="bg-blue-100 rounded-full p-3">
                <FaSearchLocation size={32} className="text-blue-600" />
              </div>
            <TextAnimate animation="slideRight" by="character">
                Occupancy Verification
                </TextAnimate>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center w-full px-4">
          <h2 className="md:text-5xl text-3xl font-bold mb-6">
            Solutions We Offer
          </h2>
          <p className="text-md md:text-xl leading-relaxed mb-8">
            Our platform provides a full suite of property inspection and valuation services to support lenders, investors, and property managers across the U.S. With a trusted network of professionals, we ensure timely, accurate, and compliant reporting to help you make better real estate decisions.
          </p>
          <button className="self-start bg-blue-600 text-white px-10 py-2 rounded-md hover:bg-blue-700 transition text-xl">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}