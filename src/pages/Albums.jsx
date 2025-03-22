import AlbumCard from "@/components/albumCard";
import { useTracksFunctions } from "@/firebase/firebase";
import { useEffect, useState } from "react";

function Albums() {
  const { getAllAlbumRecords } = useTracksFunctions();
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = async () => {
    const albumsResponse = await getAllAlbumRecords();
    if (albumsResponse?.success) {
      console.log("albums data >> ", albumsResponse?.data);
      const albumsData = albumsResponse?.data;
      setAlbums(albumsData);
      console.log("album data selected >> ", albumsData);
    } else {
      console.log("Error fetching albums >> ", albumsResponse?.message);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto p-4 pt-6 md:p-6">
        <h1 className="text-3xl font-bold mb-4">Albums</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
          {albums?.map((album, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <AlbumCard album={album} />
            </div>
          ))}
        </div>
      </div>
      ;
    </div>
  );
}

export default Albums;
