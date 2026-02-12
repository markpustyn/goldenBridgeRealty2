"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaRegHandshake } from "react-icons/fa";

export default function VendorSignupPage() {
  return (
    <div className="min-h-screen bg-white px-6 pt-48 pb-24">
      
      {/* Info Section */}
      <div className="text-center max-w-3xl mx-auto pb-20">
        <div className="inline-flex items-center justify-center bg-blue-100 rounded-full p-4 mb-6">
          <FaRegHandshake size={28} className="text-blue-600" />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
          Join Our Vendor Network
        </h1>

        <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
          We are building a trusted network of inspection professionals.
          Submit an application to partner with us and receive structured,
          consistent inspection assignments.
        </p>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto">
        <Card className="border shadow-sm rounded-2xl hover:shadow-md transition">
          <CardContent className="py-20 px-10 flex flex-col items-center text-center space-y-6">
            
            <h2 className="text-2xl md:text-3xl font-semibold text-black">
              Ready to Get Started
            </h2>

            <p className="text-gray-600 max-w-xl leading-relaxed">
              Complete the vendor application and our team will follow up with onboarding details.
            </p>

            <a
              href="https://app.bluegridvaluations.com/broker-sign-up"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="mt-4 px-10 py-6 text-base font-semibold rounded-xl">
                Sign Up Now
              </Button>
            </a>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
