"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function VendorSignupPage() {

  return (
    <div className="min-h-screen px-4 pt-48 pb-16">
      {/* Info Section */}
      <div className="max-w-4xl mx-auto mb-16 space-y-6 text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">
          Join Our Vendor Network
        </h1>
        <div className="p-6 bg-white/70 rounded-xl shadow-sm border border-blue-100 text-left space-y-4">
          <p className="text-gray-800 text-lg leading-relaxed">
            Thank you for your interest in joining the Blue Grid Network.
            At Blue Grid Valuations, we are building a trusted network of
            vendors and real estate professionals who share our commitment
            to precision, reliability, and growth.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            If you are interested in partnering with us, follow the link
            to our application, fill out the required fields, and we’ll
            contact you shortly.
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
          <CardContent className="py-20 flex flex-col items-center justify-center space-y-6">
            <h2 className="text-2xl font-semibold text-white">
              Ready to Get Started?
            </h2>
            <a
              href="https://app.bluegridvaluations.com/broker-sign-up"
              className="mt-4"
            >
              <Button
                variant="outline" 
              
                className="cursor-pointer border-2 border-white text-blue-700 hover:bg-white hover:text-blue-800 font-semibold text-lg px-8 py-3 rounded-full transition-all duration-300"
              >
                Sign Up Now
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
