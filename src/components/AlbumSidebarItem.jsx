import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function AlbumSidebarItem({ album }) {
  return (
    <Link to={`albums/${album?.id}`}>
      <div className="w-full flex py-4 px-4 border-b bg-gray-700 hover:bg-gray-300">
        {/* Image div */}
        <div>
          <img src={album?.image} alt="album image" className="w-6 h-auto" />
        </div>
        {/* album name div */}
        <div>
          <h2 className="text-lg font-bold px-2 whitespace-nowrap">
            {album?.albumName}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default AlbumSidebarItem;
