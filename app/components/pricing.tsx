import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Flat Fee Listing",
    price: "$549",
    description: "A simple option for sellers who want strong exposure while staying in control.",
    features: [
      "MLS Exposure",
      "Realtor.com & Zillow",
      "Max Photos on MLS",
      "Yard Sign & Lockbox",
    ],
    cta: "Get Started",
    href: "/contact",
    featured: false,
  },
  {
    name: "Full Service Listing",
    price: "$549",
    priceNote: "+ 1.5% at Closing",
    description: "Full support from pricing to closing with guidance through the entire process.",
    features: [
      "Pro Photography",
      "Market Analysis",
      "Negotiation Support",
      "Contract to Close Guidance",
    ],
    cta: "Talk to Us",
    href: "/contact",
    featured: true,
  },
];

function Pricing() {
  return (
    <section className="w-full bg-white py-20 px-6 mt-12 mb-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Listing Options
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the level of support that fits your goals and budget.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden rounded-2xl border p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.featured
                  ? "border-blue-700 ring-1 ring-blue-700/20"
                  : "border-gray-200"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-blue-700 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-6 h-1 w-16 rounded-full bg-blue-700" />

              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                {plan.name}
              </h3>

              <div className="mt-5">
                <div className="text-4xl font-bold tracking-tight text-gray-900">
                  {plan.price}
                </div>
                {plan.priceNote && (
                  <p className="mt-2 text-sm font-medium text-gray-500">
                    {plan.priceNote}
                  </p>
                )}
              </div>

              <p className="mt-5 text-base leading-7 text-gray-600">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-700">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-700" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link href={plan.href}>
                  <Button
                    className={`h-12 w-full rounded-none text-base font-semibold ${
                      plan.featured
                        ? "bg-blue-700 text-white hover:bg-blue-800"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;