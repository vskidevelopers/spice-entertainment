/* eslint-disable react/prop-types */
import {
  FaApple,
  FaSpotify,
  FaYoutube,
  FaEnvelope,
  FaItunesNote,
  FaAmazon,
} from "react-icons/fa";
import { SiTidal } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const platforms = [
  {
    name: "Apple Music",
    icon: <FaApple className="text-red-500" />,
    action: "Play",
    badge: "Coming Soon",
  },
  {
    name: "Spotify",
    icon: <FaSpotify className="text-green-500" />,
    action: "Play",
    badge: "Coming Soon",
  },
  {
    name: "YouTube Music",
    icon: <FaYoutube className="text-red-600" />,
    action: "Play",
    badge: "Recommended",
  },
  {
    name: "Email",
    icon: <FaEnvelope className="text-gray-500" />,
    action: "Join",
    badge: "Coming Soon",
  },
  {
    name: "TIDAL",
    icon: <SiTidal className="text-black" />,
    action: "Play",
    badge: "Coming Soon",
  },
  {
    name: "iTunes Store",
    icon: <FaItunesNote className="text-purple-500" />,
    action: "Download",
    badge: "Coming Soon",
  },
  {
    name: "Amazon Music",
    icon: <FaAmazon className="text-blue-500" />,
    action: "Play",
    badge: "Coming Soon",
  },
];

const MusicPlatforms = ({ music }) => {
  console.log("music values from platforms >> ", music);

  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 py-4 max-w-96 rounded-lg shadow-lg">
      {platforms?.map((platform, index) => {
        console.log("platform >> ", platform);
        console.log("index >> ", index);

        return (
          <div
            key={index}
            className="relative flex items-center justify-between px-2 py-3 border-b border-gray-700 last:border-none"
          >
            <div className="flex items-center">
              <div className="mr-3 text-2xl">{platform.icon}</div>
              <span className="text-white">{platform.name}</span>
            </div>
            <button
              onClick={
                platform?.name === "YouTube Music"
                  ? () => navigate(`youtube/${music?.id}`)
                  : () => console.log("action == ", platform?.action)
              }
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition duration-300"
            >
              {platform.action}
            </button>
            <span
              className={`absolute -top-2 -right-9 px-1 py-0.5 text-xs rounded ${
                platform.badge === "Recommended"
                  ? "bg-green-500 text-white"
                  : "bg-gray-500 text-white hidden"
              }`}
            >
              {platform.badge}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default MusicPlatforms;
