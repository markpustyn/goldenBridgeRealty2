import { TextAnimate } from "@/components/magicui/text-animate";

export default function About() {
  return (
    <div className="bg-white text-gray-900 px-6 flex flex-col items-center pt-48 pb-10">
      <section className="mb-24 text-center max-w-7xl">
        <h2 className="text-5xl md:text-6xl font-semibold mb-12 leading-tight">
          <TextAnimate animation="blurInUp" by="character" once>
            How It Works
            </TextAnimate>
        </h2>
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-3xl font-semibold mb-4">1. Create an Order</h3>
            <p className="text-lg leading-relaxed">
              Submit inspection requests directly through our dashboard.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-4">2. Assign a Vendor</h3>
            <p className="text-lg leading-relaxed">
              Vendors receive order offers based on their service area and choose to accept assignments in real time.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-4">3. Receive Report</h3>
            <p className="text-lg leading-relaxed">
              Get completed reports with status tracking and secure storage.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
