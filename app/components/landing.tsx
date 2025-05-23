import { TextAnimate } from "@/components/magicui/text-animate";


export default function LandingPage() {
    return (
      <main className=" bg-white text-gray-900 px-6 py-30 flex flex-col items-center border-t-12 border-gray-500">
        {/* Hero Section */}
        <section className="max-w-7xl text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-10">
            <TextAnimate>Streamline Property Inspections</TextAnimate>
          </h1>
          <p className="text-lg md:text-xl mb-6">
          Manage vendors, reduce turnaround time, lower operational costs, and stay compliant—all in one platform.
          </p>
          <div className="border-b-4 border-blue-600 w-1/2 mx-auto pt-12">
          
          </div>
            {/* <Button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Join Waitlist
            </Button> */}
        </section>
      </main>
    );
  }