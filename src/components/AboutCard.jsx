import { CiDollar } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaSackDollar, FaLandmarkDome } from "react-icons/fa6";

const aboutCards = [
  { id: 1, icon: FaLandmarkDome, title: "10.5K", subtitle: "Sellers active on our site" },
  { id: 2, icon: CiDollar, title: "45.5K", subtitle: "Monthly Product Sale" },
  { id: 3, icon: IoBagHandleOutline, title: "10.5K", subtitle: "Customers active on our site" },
  { id: 4, icon: FaSackDollar, title: "25K", subtitle: "Annual gross sale on our site" },
];

const AboutCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
      {aboutCards.map(({ id, icon: Icon, title, subtitle }) => (
        <div
          key={id}
          className="group flex flex-col items-center border border-gray-200 bg-white shadow-md rounded-lg p-6 cursor-pointer transition duration-500 hover:bg-[#8A33FD] hover:text-white"
        >
          <div className="w-[55px] h-[55px] mb-4 flex items-center justify-center bg-black rounded-full transition duration-300 group-hover:bg-white">
            <Icon className="text-[30px] text-white group-hover:text-[#8A33FD] transition duration-300" />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 transition group-hover:text-white">
            {title}
          </h2>

          <p className="mt-2 text-gray-600 transition group-hover:text-white">
            {subtitle}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutCard;
