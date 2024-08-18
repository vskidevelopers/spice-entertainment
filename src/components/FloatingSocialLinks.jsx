import { FaFacebookF, FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";

export default function FloatingSocialLinks() {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-6 bg-slate-900/20 p-4 rounded-l-lg shadow-lg">
        {/* Top Black Line */}
        <div className="w-px h-28 bg-black"></div>

        {/* Social Icons */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="text-white text-xl hover:text-blue-600" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-white text-xl hover:text-pink-500" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-white text-xl hover:text-red-500" />
        </a>
        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
          <FaSpotify className="text-white text-xl hover:text-green-500" />
        </a>

        {/* Bottom Black Line */}
        <div className="w-px h-28 bg-black"></div>
      </div>
    </div>
  );
}
