/* eslint-disable react/prop-types */
import AlbumSidebarItem from "./AlbumSidebarItem";

function AlbumsSidebar({ albums }) {
  return (
    <div className="w-full flex flex-col">
      <div className="px-4 py-2">
        <h2 className="text-2xl font-bold text-black mb-4 whitespace-nowrap">
          🐐Goat Albums
        </h2>
      </div>
      <div className="flex flex-col">
        {albums.map((album, i) => (
          <div key={i} className="py-2 border-b border-gray-700">
            <AlbumSidebarItem album={album} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumsSidebar;
