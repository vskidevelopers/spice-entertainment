import AlbumGrid from "@/components/AlbumGrid";
import AlbumsSidebar from "@/components/AlbumsSidebar";
import HeroBanner from "@/components/HeroBanner";
import { useTracksFunctions } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AlbumDetails() {
  const { albumId } = useParams();
  const { fetchAlbumById, getAllAlbumRecords } = useTracksFunctions();

  const [album, setAlbum] = useState();
  const [albums, setAlbums] = useState([]);

  const fetchAlbum = async () => {
    const albumFetchResponse = await fetchAlbumById(albumId);
    const albumsResponse = await getAllAlbumRecords();
    if (albumFetchResponse?.success) {
      console.log("albumFetchResponse >>> ", albumFetchResponse);
      const albumData = {
        ...albumFetchResponse?.data,
        id: albumFetchResponse?.id,
      };
      setAlbum(albumData);

      const albumsData = albumsResponse?.data;
      setAlbums(albumsData);
      console.log("album data selected >> ", albumsData);
    } else {
      console.log("error fetching album details >> ", albumFetchResponse);
    }
  };

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <div className="w-full pt-20">
      <HeroBanner album={album} />
      <div className="w-full flex">
        <div className="w-1/5">
          <AlbumsSidebar albums={albums} />
        </div>
        <div className="w-4/5">
          <AlbumGrid album={album} />
        </div>
      </div>
    </div>
  );
}
