'use client'

import Image from "next/image";

function Info() {
  return (
    <section className="w-full bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-gray-100">
                <Image
                  src="/broker.jpg"
                  alt="Agent portrait"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="mt-5 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-900">
                  First Last Name
                </h3>
                <p className="text-blue-700 font-medium mt-1">
                  Licensed Real Estate Broker
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Real Estate Guidance Built on Trust, Experience, and Local Insight
            </h3>

            <div className="space-y-5 text-gray-600 text-sm md:text-lg leading-relaxed">
              <p>
                We believe real estate is more than a transaction. It is a major
                life decision that deserves careful guidance and personal
                attention. Whether you are purchasing your first home, selling a
                property, or exploring investment opportunities, our goal is to
                help you move forward with clarity.
              </p>

              <p>
                Golden Bridge Realty is focused on building lasting relationships
                through honest communication, market expertise, and dependable
                service. We take pride in understanding each client’s goals and
                creating a strategy that fits their needs.
              </p>

              <p>
                From the first conversation to the closing table, we are here to
                provide support, answer questions, and help you make confident
                decisions every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;