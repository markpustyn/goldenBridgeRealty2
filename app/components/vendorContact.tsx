"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function VendorSignupPage() {
  const [state, handleSubmit] = useForm("xeorlgzr"); // your Formspree form id

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-white px-4 pt-48 pb-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-10 shadow-xl border border-blue-100 text-center">
            <h2 className="text-3xl font-bold mb-2 text-blue-900">Thanks for signing up</h2>
            <p className="text-gray-600">We will reach out soon.</p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 pt-48 pb-16">
      {/* Info Section */}
      <div className="max-w-4xl mx-auto mb-16 space-y-6 text-center">
        <h1 className="text-4xl font-bold text-blue-700">Join our Vendor Network</h1>
        <div className="p-6 text-left space-y-4">          
          <p className="text-black text-lg">
            At Blue Grid Valuations, we are building a trusted network of vendors and 
            real estate professionals who share our commitment to precision, reliability, 
            and growth. If you are ready to partner with a company that values quality 
            and innovation, complete our quick application below and we will contact you shortly. 
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 shadow-xl border border-blue-100">
          <CardContent className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-blue-900">Sign Up as a Vendor</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* honeypot and metadata */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="_subject" value="New vendor signup" />
              <input type="hidden" name="source" value="Vendor page" />
              {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="mb-2">Full Name</Label>
                  <Input id="name" name="name" placeholder="Name" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div>
                  <Label htmlFor="company" className="mb-2">Company</Label>
                  <Input id="company" name="company" placeholder="Company" />
                  <ValidationError prefix="Company" field="company" errors={state.errors} />
                </div>

                <div>
                  <Label htmlFor="email" className="mb-2">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Email" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <Label htmlFor="phone" className="mb-2">Phone</Label>
                  <Input id="phone" name="phone" placeholder="(123) 456 7890" />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>

                <div>
                  <Label htmlFor="location" className="mb-2">Location</Label>
                  <Input id="location" name="location" placeholder="City, State" required />
                  <ValidationError prefix="Location" field="location" errors={state.errors} />
                </div>

                <div>
                  <Label htmlFor="vendorType" className="mb-2">Vendor Type</Label>
                  <select
                    id="vendorType"
                    name="vendorType"
                    className="w-full border border-input rounded-md px-3 py-2 text-sm"
                    required
                  >
                    <option value="" disabled>Select type</option>
                    <option value="agent">Real Estate Agent</option>
                    <option value="appraiser">Appraiser</option>
                    <option value="contractor">Contractor</option>
                    <option value="other">Other</option>
                  </select>
                  <ValidationError prefix="Vendor Type" field="vendorType" errors={state.errors} />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="mb-2">Message (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your services, coverage area, or experience"
                  rows={4}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <Button
                type="submit"
                className="w-full text-lg"
                disabled={state.submitting}
              >
                {state.submitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
