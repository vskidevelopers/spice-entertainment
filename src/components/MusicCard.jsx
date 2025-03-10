/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function MusicCard({ track }) {
  return (
    <div className="flex  justify-between">
      <div className="w-80 h-full overflow-clip">
        <img src={track?.image} alt="" />
      </div>

      <div className="flex flex-col justify-between px-6 ">
        <h1 className="text-2xl text-wrap uppercase md:text-4xl font-bold mb-4 ">
          {track?.trackName}
        </h1>
        <Link
          to={track?.id}
          className="px-4 py-2 border border-yellow-800 text-yellow-800 hover:bg-yellow-800 hover:text-white transition duration-300 whitespace-nowrap"
        >
          Stream / Download
        </Link>
      </div>
    </div>
  );
}

export default MusicCard;
