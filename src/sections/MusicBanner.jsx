import MusicCarousel from "@/components/MusicCarousel";

function MusicBanner() {
  const backgroundImage =
    "https://www.boominatiworldwide.com/files/2022/11/album-1-2157x1440.png";
  return (
    <div
      className=" container mx-auto px-10 py-20 "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center w-sceen text-center">
        <div className="relative flex flex-col justify-center items-center py-10 w-4/5 text-white">
          <div className="w-full md:w-1/2 text-start md:text-center">
            <h2 className="text-nowrap text-rose-500 text-md font-semibold uppercase ">
              Made the Hard WAY!
            </h2>
            <h1 className="text-3xl font-bold capitalize ">
              Browse through our new Stock!
            </h1>
          </div>
          <div className="absolute top-0 left-0 h-full w-full flex justify-end md:justify-end items-center opacity-10">
            <h1 className="text-5xl md:text-9xl font-bold text-nowrap">
              Music
            </h1>
          </div>
        </div>
        <div className="!w-full">
          <MusicCarousel />
        </div>
      </div>
    </div>
  );
}

export default MusicBanner;
