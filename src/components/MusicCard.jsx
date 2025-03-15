/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function MusicCard({ track }) {
  return (
    <div className="bg-white shadow-md  overflow-hidden">
      <img
        src={track?.image}
        alt={track?.trackName}
        className="w-full h-80 object-cover"
      />
      <div className="p-4 w-full flex flex-col items-center">
        <h1 className="text-2xl uppercase font-bold mb-4">
          {track?.trackName}
        </h1>
        <Link
          to={`/music/${track?.id}`}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300"
        >
          Stream / Download
        </Link>
      </div>
    </div>
  );
}

export default MusicCard;
