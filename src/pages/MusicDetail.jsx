import React from "react";
import album from "../assets/images/album.jpeg";
import MusicPlatforms from "@/components/MusicPlatforms";

export default function MusicDetail() {
  return (
    <div className="flex w-full justify-center pt-20 h-[95vh]">
      <div className="w-72 flex flex-col">
        <div className="w-full flex justify-center">
          <div className="w-60 h-full rounded-xl">
            <img src={album} alt="image" />
            <h1 className="pt-2">Music Title Example</h1>
          </div>
        </div>
        <div className="pt-4">
          <MusicPlatforms />
        </div>
      </div>
    </div>
  );
}
