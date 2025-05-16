import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"

function Join() {
  return (
    <div className="text-center mb-10 ">
      <h1 className="text-5xl mx-5 mt-10 text-black font-bold py-10">Join Our Network</h1>
      <div className="flex px-24">
      <Card className="w-1/2 p-6 m-4">
      <CardTitle>
      <h2 className="mb-2 text-2xl font-bold text-gray-900">Brokers / Agents</h2>
      </CardTitle>
      <CardContent>
        <p className="mb-6 font-normal text-gray-700 text-xl">
          Join our network as a broker/agent specializing in providing comprehensive property
          evaluations and insights. Collaborate with appraisers to facilitate accurate home
          valuations for clients.
        </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            className="rounded-md font-medium py-3 px-4 text-center"
          >
            Broker Network
          </Button>
        </CardFooter>
      </Card>

      <Card className="w-1/2 p-6 m-4">
      <CardTitle>
      <h2 className="mb-2 text-2xl font-bold text-gray-900">Client</h2>
      </CardTitle>
      <CardContent>
        <p className="mb-6 font-normal text-gray-700 text-xl">
          Join our network as a client seeking reliable and professional property preservation services. Whether you are a homeowner, investor, or property manager, our team ensures your assets remain protected, well-maintained, and compliant with local regulations.
        </p>
        <CardFooter className="flex justify-center">
        <Button
            className="rounded-md font-medium py-3 px-4 text-center"
          >
            Broker Network
          </Button>
        </CardFooter>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}

export default Join;
