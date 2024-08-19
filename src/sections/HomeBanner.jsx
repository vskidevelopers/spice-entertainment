import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/infamous.jpeg";

const HomeBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="absolute  text-white p-4 text-center">
          <div className="mb-4 text-gray-300 uppercase">Latest Release</div>
          <h1 className="text-4xl text-wrap uppercase md:text-6xl font-bold mb-4 ">
            Infamous <br /> Gangsta
          </h1>
          <Link
            to="music/1"
            className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition duration-300"
          >
            Stream / Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
