import Image from "next/image";


function Info() {
  return (
<div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        {/* Image Section */}
        <Image
          className="w-[500px] mx-auto my-4"
          src={'/compImg.jpg'}
          alt="/"
          width={500}
          height={500}
        />
        {/* Text and Button Section */}
        <div className="flex flex-col justify-center">
          <p className="text-[#1C3D5A] font-bold ">NEXT GENERATION SOFTWARE</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Valuations Services
          </h1>
          <p>
          PrciseVal Capital excels in comprehensive property preservation and inspection services nationwide, encompassing both residential and commercial properties. Our suite of services spans from the initial securing to complete property preservation. To explore our range of offerings, kindly follow the link below. When it comes to inspections, we provide a diverse array, including Drive-By Exterior Inspections and highly detailed BPOs for property valuation and real estate assessments. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
//7G2TBEEB0RN000000
//5YJSA1E67MF452124