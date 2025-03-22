import { Link } from "react-router-dom";
//import backgroundImage from "../assets/images/infamous.jpeg";
import { useTracksFunctions } from "@/firebase/firebase";
import { useEffect, useState } from "react";

const HomeBanner = () => {
  const [album, setAlbum] = useState({});

  const { getAllAlbumRecords } = useTracksFunctions();

  const shuffleArray = (array) => {
    return array
      .map((item) => ({ item, sort: Math.random() })) // Attach a random sort key
      .sort((a, b) => a.sort - b.sort) // Sort by the random key
      .map(({ item }) => item); // Extract the shuffled items
  };

  const fetchAlbums = async () => {
    const albumsResponse = await getAllAlbumRecords();
    if (albumsResponse?.success) {
      console.log("albums data >> ", albumsResponse?.data);
      const shuffledAlbum = shuffleArray(albumsResponse?.data).slice(0, 1); // Pick first 1
      setAlbum(shuffledAlbum[0]);
      console.log("album data selected >> ", shuffledAlbum);
    } else {
      console.log("Error fetching albums >> ", albumsResponse?.message);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${album?.image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="absolute  text-white p-4 text-center">
          <div className="mb-4 text-gray-300 uppercase">Latest Release</div>
          <h1 className="text-4xl text-wrap uppercase md:text-6xl font-bold mb-4 ">
            {/* Infamous <br /> Gangsta */}
            {album?.albumName}
          </h1>
          <Link
            to={`albums/${album?.id}`}
            className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition duration-300"
          >
            Stream / Download
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
