import AlbumsSidebar from "@/components/AlbumsSidebar";

import MusicGrid from "@/components/MusicGrid";
import { useTracksFunctions } from "@/firebase/firebase";
import { useEffect, useState } from "react";

function Music() {
  const { getAllTrackRecords, getAllAlbumRecords } = useTracksFunctions();
  const [tracks, setTracks] = useState([]);
  const [albums, setAlbums] = useState([]);

  const fetchTracks = async () => {
    const tracksResponse = await getAllTrackRecords();
    const albumsResponse = await getAllAlbumRecords();
    if (tracksResponse?.success && albumsResponse?.success) {
      console.log("tracks data >> ", tracksResponse?.data);
      console.log("albums data >> ", albumsResponse?.data);
      const tracksData = tracksResponse?.data;
      const albumsData = albumsResponse?.data;
      setTracks(tracksData);
      setAlbums(albumsData);
      console.log("track data selected >> ", tracksData);
      console.log("album data selected >> ", albumsData);
    } else {
      console.log("Error fetching tracks >> ", tracksResponse?.message);
    }
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 w-full min-h-screen pt-20">
      <div className="sm:col-span-1 text-white p-4 order-2 sm:order-1">
        <AlbumsSidebar albums={albums} />
      </div>
      <div className="sm:col-span-4 order-1 sm:order-2">
        <MusicGrid tracks={tracks} />
      </div>
    </div>
  );
}

export default Music;
