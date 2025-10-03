'use client';

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function VendorSignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    vendorType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Submit logic here
  };

  return (
    <div className="min-h-screen bg-white px-4 pt-48 pb-16">
      {/* Info Section */}
      <div className="max-w-4xl mx-auto mb-16 space-y-6 text-center">
        <h1 className="text-4xl font-bold text-blue-700">Vendor Resource Center</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          At <strong>Blue Grid Valuations</strong>, we’re building more than a platform—we’re creating a partnership. The Vendor Resource Center offers all the tools, training, and tech you need to succeed in today’s fast-moving inspection world.
        </p>
        <div className="bg-blue-100 rounded-lg p-6 text-left space-y-4">
          <ul className="list-disc list-inside text-gray-800 text-lg">
            <li>Modern, mobile-first dashboard interface</li>
            <li>Step-by-step video training modules</li>
            <li>Downloadable inspection & compliance resources</li>
            <li>Automatic job tracking and real-time status updates</li>
            <li>Ongoing product updates with improved workflow tools</li>
          </ul>
          <p className="text-gray-700 text-lg">
            Whether you're just starting out or scaling your operation, Blue Grid Valuations equips you with what you need—every step of the way.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 shadow-xl border border-blue-100">
          <CardContent className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-blue-900">Sign Up as a Vendor</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="mb-2">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="mb-2">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="mb-2">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-2">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <Label htmlFor="location" className="mb-2">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="City, State"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="vendorType" className="mb-2">Vendor Type</Label>
                  <select
                    id="vendorType"
                    name="vendorType"
                    value={formData.vendorType}
                    onChange={handleChange}
                    className="w-full border border-input rounded-md px-3 py-2 text-sm"
                    required
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    <option value="inspector">Real Estate Agent</option>
                    <option value="appraiser">Appraiser</option>
                    <option value="contractor">Contractor</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="message" className="mb-2">Message (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your services, coverage area, or experience..."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full text-lg">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
