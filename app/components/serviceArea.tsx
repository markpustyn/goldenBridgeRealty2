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

export default function ServiceArea() {
  return (
    <section className="bg-white text-gray-900 w-full py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Service Area
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Supporting North & South Carolina Homeowners
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            With offices located in Charlotte, NC
          </p>
        </div>


      </div>
    </section>
  );
}