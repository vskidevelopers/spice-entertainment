/* eslint-disable react/prop-types */

export default function HeroBanner({ album }) {
  return (
    <div
      className="w-full md:h-80 h-64 relative flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${album?.image})` }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Album Name - Centered */}
      <div className="relative text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold">{album?.albumName}</h1>
      </div>
    </div>
  );
}
