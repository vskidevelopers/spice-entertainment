import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import backgroundImage from "../assets/images/album.jpeg";
export default function MusicCarousel() {
  const music = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
          {music.map((data, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 flex flex-col items-center justify-center">
                <div
                  className="h-60 w-60 bg-green-700 flex w-full justify-center items-center"
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h1 className="text-xl text-white">{data}</h1>
                </div>
                <button className="px-4 py-2 mt-2 border border-yellow-800 text-white hover:bg-yellow-800 hover:text-white transition duration-300">
                  Stream / Download
                </button>
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
