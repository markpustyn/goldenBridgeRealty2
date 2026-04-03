"use client";

import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Join() {
  const [state, handleSubmit] = useForm("mgvkdyje");

  if (state.succeeded) {
    return (
      <section className="w-full bg-gray-300 py-24 px-6 text-black text-center">
        <h2 className="text-4xl font-bold mb-4">Thank you for joining!</h2>
        <p className="text-lg opacity-90">
          We’ve received your submission and will get back to you soon.
        </p>
      </section>
    );
  }

  return (
    <section className="w-full bg-gray-300 py-20 px-6 text-black">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get In Touch
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-8 text-black space-y-6 "
      >
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-md font-medium mb-1 text-black"
          >
            Email Address
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Company Field */}
        <div>
          <label
            htmlFor="company"
            className="block text-md font-medium mb-1 text-black"
          >
            Company
          </label>
          <Input
            type="text"
            id="company"
            name="company"
            required
            placeholder="Company"
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
          />
          <ValidationError
            prefix="Company"
            field="company"
            errors={state.errors}
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-md font-medium mb-1 text-black"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
            placeholder="Message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button
            type="submit"
            variant="outline"
            disabled={state.submitting}
          className="text-black px-6 py-2 rounded-md w-full border-black bg-transparent hover:bg-gray-600 hover:text-white border-2"
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Join;
