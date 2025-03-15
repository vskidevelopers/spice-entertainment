/* eslint-disable react/prop-types */
import MusicCard from "./MusicCard";

function MusicGrid({ tracks }) {
  return (
    <div className="w-full pt-5">
      <div className="text-center">
        <h1 className="text-3xl font-bold">🐐 Goat Music</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {tracks?.map((track, index) => (
          <div key={index} className="w-full">
            <MusicCard track={track} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MusicGrid;
