"use client";
import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button";
import {
  Card, CardHeader, CardTitle, CardContent, CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [state, handleSubmit] = useForm("sample");
  if (state.succeeded) {
    return (
      <Card className="w-full max-w-3xl mx-auto p-10 shadow-lg bg-white/90 backdrop-blur rounded-2xl text-center">
        <CardHeader>
          <CardTitle className="text-3xl">Thanks for reaching out</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-600">
          We received your message and will reply soon.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full mx-auto p-8 shadow-lg bg-white/90 backdrop-blur rounded-none">
      <form onSubmit={handleSubmit}>
        <div className="space-y-10 text-left py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="block text-sm font-medium mb-1">First Name</label>
              <Input name="firstName" required placeholder="Frist Name"/>
              <ValidationError prefix="First Name" field="firstName" errors={state.errors} />
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <Input name="lastName" required placeholder="Last Name"/>
              <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="block text-sm font-medium mb-1">Company</label>
              <Input name="company" placeholder="Company" />
              <ValidationError prefix="Company" field="company" errors={state.errors} />
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium mb-1">Phone</label>
              <Input name="phone" type="tel" placeholder="Phone"/>
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input name="email" type="email" required placeholder="Email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <Textarea name="message" className="min-h-[120px]" placeholder="Message" required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          </div>
        <div className="text-center pt-2">
          <Button
            type="submit"
            disabled={state.submitting}
            className="text-white px-6 py-2 rounded-full w-full border-white bg-blue-700"
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Card>
  );
}
