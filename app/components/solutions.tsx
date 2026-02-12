import { FaRegClipboard, FaHome, FaRegBuilding, FaSearchLocation } from "react-icons/fa";
import { TextAnimate } from "@/components/magicui/text-animate";
import Link from "next/link";

export default function Solutions() {
  return (
    <section className="bg-white text-gray-900 w-full py-24">
      <div className="w-full px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border p-10 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="bg-blue-100 rounded-full p-4 mb-6">
              <FaRegClipboard size={36} className="text-blue-700" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              <TextAnimate animation="slideRight" by="character">
                Property Condition Reports (PCR)
              </TextAnimate>
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Structured exterior reports documenting current property condition with clear photo support.
            </p>
            <Link
              href="/contact"
              className="text-blue-700 text-sm font-medium hover:underline"
            >
              Request Sample
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border p-10 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="bg-blue-100 rounded-full p-4 mb-6">
              <FaHome size={36} className="text-blue-700" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              <TextAnimate animation="slideRight" by="character">
                Interior Property Inspections
              </TextAnimate>
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Detailed interior inspections providing accurate documentation of property condition.
            </p>
            <Link
              href="/contact"
              className="text-blue-700 text-sm font-medium hover:underline"
            >
              Request Sample
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border p-10 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="bg-blue-100 rounded-full p-4 mb-6">
              <FaRegBuilding size={36} className="text-blue-700" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              <TextAnimate animation="slideRight" by="character">
                Post Disaster Inspections
              </TextAnimate>
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              On site inspections assessing property impact following storms, fires, or natural events.
            </p>
            <Link
              href="/contact"
              className="text-blue-700 text-sm font-medium hover:underline"
            >
              Request Sample
            </Link>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-sm border p-10 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="bg-blue-100 rounded-full p-4 mb-6">
              <FaSearchLocation size={36} className="text-blue-700" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              <TextAnimate animation="slideRight" by="character">
                Occupancy Verification
              </TextAnimate>
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Verification services confirming property occupancy and current status.
            </p>
            <Link
              href="/contact"
              className="text-blue-700 text-sm font-medium hover:underline"
            >
              Request Sample
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
