import {
  FaApple,
  FaSpotify,
  FaYoutube,
  FaEnvelope,
  FaItunesNote,
  FaAmazon,
} from "react-icons/fa";
import { SiTidal } from "react-icons/si";

const platforms = [
  {
    name: "Apple Music",
    icon: <FaApple className="text-red-500" />,
    action: "Play",
  },
  {
    name: "Spotify",
    icon: <FaSpotify className="text-green-500" />,
    action: "Play",
  },
  {
    name: "YouTube Music",
    icon: <FaYoutube className="text-red-600" />,
    action: "Play",
  },
  {
    name: "Email",
    icon: <FaEnvelope className="text-gray-500" />,
    action: "Join",
  },
  { name: "TIDAL", icon: <SiTidal className="text-black" />, action: "Play" },
  {
    name: "iTunes Store",
    icon: <FaItunesNote className="text-purple-500" />,
    action: "Download",
  },
  {
    name: "Amazon Music",
    icon: <FaAmazon className="text-blue-500" />,
    action: "Play",
  },
];

const MusicPlatforms = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      {platforms.map((platform, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-2 border-b border-gray-700 last:border-none"
        >
          <div className="flex items-center">
            <div className="mr-3 text-2xl">{platform.icon}</div>
            <span className="text-white">{platform.name}</span>
          </div>
          <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition duration-300">
            {platform.action}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MusicPlatforms;
