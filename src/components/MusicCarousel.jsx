import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTracksFunctions } from "@/firebase/firebase";
export default function MusicCarousel() {
  const [musicSliders, setMusicSliders] = useState([]);

  const { getAllTrackRecords } = useTracksFunctions();

  const shuffleArray = (array) => {
    return array
      .map((item) => ({ item, sort: Math.random() })) // Attach a random sort key
      .sort((a, b) => a.sort - b.sort) // Sort by the random key
      .map(({ item }) => item); // Extract the shuffled items
  };

  const fetchTracks = async () => {
    const tracksResponse = await getAllTrackRecords();
    if (tracksResponse?.success) {
      console.log("tracks data >> ", tracksResponse?.data);
      const shufflesTracks = shuffleArray(tracksResponse?.data).slice(0, 9); // Pick first 9
      setMusicSliders(shufflesTracks);
      console.log("track data selected >> ", shufflesTracks);
    } else {
      console.log("Error fetching tracks >> ", tracksResponse?.message);
    }
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  return (
    <div className="px-2 md:px-20 w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {musicSliders?.map((data, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col items-center justify-center">
                <div
                  className=" min-h-80  bg-green-700 flex w-full justify-center items-center"
                  style={{
                    backgroundImage: `url(${data?.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h1 className="text-xl text-white">{data?.trackName}</h1>
                </div>
                <Link
                  to={`/music/${data?.id}`}
                  className="px-4 py-2 mt-2 border border-yellow-800 text-yellow-800 hover:bg-yellow-800 hover:text-white transition duration-300"
                >
                  Stream / Download
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
