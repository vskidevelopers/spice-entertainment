import MusicCard from "@/components/MusicCard";
import React from "react";

function Music() {
  const musicList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className=" w-full flex flex-wrap justify-between pt-16 px-20">
      {musicList.map((i) => (
        <div key={i} className="w-1/2 my-4">
          <MusicCard />
        </div>
      ))}
    </div>
  );
}

export default Music;
