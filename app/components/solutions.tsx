import { FaRegClipboard, FaHome, FaRegBuilding, FaSearchLocation } from 'react-icons/fa';
import { TextAnimate } from "@/components/magicui/text-animate";
import Link from 'next/link';

export default function Solutions() {
  return (
    <section className="bg-white text-gray-900 px-6 py-32 flex flex-col items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Solutions List */}
        
        {/* Text Section */}
      <div className="flex flex-col justify-center w-full px-4">
        <h2 className="md:text-4xl text-3xl font-bold mb-6">
          Solutions We Offer
        </h2>
          <p className="text-md md:text-xl leading-relaxed mb-8">
            We deliver property condition reports that support AVM+PCR solutions for Credit Unions and Banks across the U.S. Our secure platform focuses exclusively on timely accurate inspections completed by a trusted nationwide vendor network to strengthen valuation workflows and meet compliance requirements.
          </p>
        <Link
          href="/contact"
          className="self-start bg-blue-600 text-white px-10 py-3 rounded-md hover:bg-blue-700 transition text-xl"
        >
          Get Started
        </Link>
      </div>
        <div className="p-6 w-full md:p-8">
          <div className="grid grid-cols-1 gap-8 text-[16px] md:text-[22px]">
            <div className="flex items-center space-x-6">
              <div className="bg-blue-100 rounded-full p-3">
                <FaRegClipboard size={32} className="text-blue-600" />
              </div>
            <TextAnimate animation="slideRight" by="character">
                Property Condition Reports (PCR)
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

      </div>
    </section>
  );
}