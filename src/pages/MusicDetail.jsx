import album from "../assets/images/album.jpeg";
import MusicPlatforms from "@/components/MusicPlatforms";

export default function MusicDetail() {
  return (
    <div
      className="relative flex w-full justify-center pt-20 h-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${album})`,
      }}
    >
      {/* Blurred Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>

      {/* Main Content */}
      <div className="relative w-72 flex flex-col z-10">
        <div className="w-full flex justify-center pt-5">
          <div className="w-60 h-full rounded-xl overflow-hidden">
            <img
              src={album}
              alt="Album Cover"
              className="w-full h-full object-cover rounded-xl"
            />
            <h1 className="pt-2 text-white text-center text-xl font-semibold">
              Music Title Example
            </h1>
          </div>
        </div>
        <div className="py-8">
          <MusicPlatforms />
        </div>
      </div>
    </div>
  );
}
