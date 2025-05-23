import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

function Join() {
  return (
    <section className="w-full bg-blue-800 py-20 px-6 text-white">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Join as a Client
        </h2>
        <p className="text-lg md:text-xl">
          Get access to professional property preservation services. Complete the form below to join our client network.
        </p>
      </div>

      <form className="max-w-2xl mx-auto p-8 text-black space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">
            Full Name
          </label>
          <Input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">
            Email Address
          </label>
          <Input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-1 text-white">
            Company
          </label>
          <Input
            type="text"
            id="company"
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white"
          />
        </div>

        <div className="text-center">
          <Button type="submit" variant="outline" className=" text-white px-6 py-2 rounded-md w-full border-white bg-transparent hover:bg-blue-900 hover:text-white">
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
}

export default Join;