/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function AlbumCard({ album }) {
  return (
    <Link to={`/albums/${album?.id}`} className="block">
      <div
        className="relative w-full h-64 md:h-72 bg-cover bg-center rounded-lg overflow-hidden group"
        style={{ backgroundImage: `url(${album?.image})` }}
      >
        {/* Black Overlay on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300"></div>

        {/* Album Name */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-lg md:text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {album?.albumName}
          </h2>
        </div>
      </div>
    </Link>
  );
}
