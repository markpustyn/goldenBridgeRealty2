import { AiOutlineCamera } from "react-icons/ai";
import { BsHousesFill } from "react-icons/bs";
import { FaHouseDamage, FaPencilRuler } from "react-icons/fa";

const About = () => {
  const icons = [AiOutlineCamera, BsHousesFill, FaHouseDamage, FaPencilRuler];
  const titles = ['Inspections', 'BPOs', 'REO', 'Appraisals'];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl py-4">Our Services</h1>
      <div className="flex flex-wrap justify-center">
        {icons.map((Icon, index) => (
          <div key={index} className="m-4 text-center mx-4 sm:mx-8 md:mx-12 lg:mx-20">
            <Icon size={48} />
            <p className="mt-2 text-sm sm:text-base">{titles[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
