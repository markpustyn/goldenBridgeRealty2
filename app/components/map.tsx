import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Map() {
  return (
    <section className="w-full bg-white py-20 px-6 mb-24 mt-12">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="md:text-5xl sm:text-3xl text-[23px] font-bold text-gray-900 mb-4">
          Join Our Nationwide Network
        </h2>

        <p className="text-gray-600 mb-12">
          Become a vendor
        </p>

        <Card className="max-w-3xl mx-auto p-10 md:p-12 shadow-lg rounded">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            We are actively expanding coverage across the U.S. and onboarding real estate brokers.
            As part of our network, you gain access to consistent assignments, simplified reporting tools,
            and fast payments.
          </p>

          <div className="h-1 bg-blue-700 rounded-full mx-auto mb-8 w-1/2" />
          <Link href="/vendors">
          <Button
            className="inline-flex items-center justify-center rounded bg-blue-700 text-white px-8 py-8 text-base md:text-lg transition hover:bg-blue-800"
          >
            Broker Network
          </Button>
          </Link>
        </Card>
        

      </div>
    </section>
  );
}

export default Map;