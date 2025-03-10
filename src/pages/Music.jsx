import MusicCard from "@/components/MusicCard";
import { useTracksFunctions } from "@/firebase/firebase";
import { useEffect, useState } from "react";

function Music() {
  const { getAllTrackRecords } = useTracksFunctions();
  const [tracks, setTracks] = useState([]);

  const fetchTracks = async () => {
    const tracksResponse = await getAllTrackRecords();
    if (tracksResponse?.success) {
      console.log("tracks data >> ", tracksResponse?.data);
      const tracksData = tracksResponse?.data;
      setTracks(tracksData);
      console.log("track data selected >> ", tracksData);
    } else {
      console.log("Error fetching tracks >> ", tracksResponse?.message);
    }
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  return (
    <div className=" w-full flex flex-wrap justify-between pt-20 px-20 min-h-screen">
      {tracks.map((track, i) => (
        <div key={i} className="w-full md:w-1/2 my-4">
          <MusicCard track={track} />
        </div>
      ))}
    </div>
  );
}

export default Music;
