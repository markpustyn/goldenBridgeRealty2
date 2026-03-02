import { 
  FaRegClipboard, 
  FaHome, 
  FaRegBuilding, 
  FaSearchLocation,
  FaShieldAlt,
  FaIndustry
} from "react-icons/fa";
import { TextAnimate } from "@/components/magicui/text-animate";
import Link from "next/link";

export default function Solutions() {
  return (
    <section className="bg-white text-gray-900 w-full py-24">
      <div className="w-full px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* Card */}
          {[
              {
              icon: <FaShieldAlt size={32} className="text-blue-700" />,
              title: "Insurance Inspections",
              desc: "Exterior and interior inspection services supporting underwriting and claims workflows."
            },
            {
              icon: <FaRegClipboard size={32} className="text-blue-700" />,
              title: "Property Condition Reports",
              desc: "Condition reports used to support AVMs with detailed property condition insight."
            },
            {
              icon: <FaHome size={32} className="text-blue-700" />,
              title: "Interior Property Inspections",
              desc: "Detailed interior inspections providing accurate documentation of property condition."
            },
            {
              icon: <FaRegBuilding size={32} className="text-blue-700" />,
              title: "Post Disaster Inspections",
              desc: "On site inspections assessing property impact following storms, fires, or natural events."
            },
            {
              icon: <FaSearchLocation size={32} className="text-blue-700" />,
              title: "Occupancy Verification",
              desc: "Verification services confirming property occupancy and current status."
            },
            {
              icon: <FaIndustry size={32} className="text-blue-700" />,
              title: "Commercial Inspections",
              desc: "Scalable inspection solutions for retail, industrial, and multi site commercial assets."
            }
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-blue-100 rounded-lg p-4 mb-6">
                {card.icon}
              </div>

              <h3 className="text-lg md:text-xl font-semibold mb-3">
                <TextAnimate animation="slideRight" by="character">
                  {card.title}
                </TextAnimate>
              </h3>

              <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                {card.desc}
              </p>

              <Link
                href="/contact"
                className="text-blue-700 text-sm font-medium hover:underline"
              >
                Request Sample
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}