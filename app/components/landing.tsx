import { TextAnimate } from "@/components/magicui/text-animate";


export default function LandingPage() {
    return (
      <main className=" bg-[#1E40AF] text-white px-6 py-20 flex flex-col items-center">
        {/* Hero Section */}
        <section className=" md:max-w-7xl text-center mb-4">
          <h1 className="text-3xl md:text-6xl font-bold mb-10">
            <TextAnimate>Buy, Sell, and Invest with Confidence</TextAnimate>
          </h1>
          <p className="text-lg md:text-xl mb-6">
          Expert guidance, local market knowledge, and personalized support every step of the way.
          </p>
          <div className="border-b-4 border-white w-1/2 mx-auto pt-12">
          
          </div>
        </section>
      </main>
    );
  }