import { Link } from "react-router-dom";
import album from "../assets/images/album.jpeg";
function MusicCard() {
  return (
    <div className="flex  justify-between">
      <div className="h-80 w-full overflow-clip">
        <img src={album} alt="" />
      </div>

      <div className="flex flex-col justify-between px-6 py-9">
        <h1 className="text-4xl text-wrap uppercase md:text-6xl font-bold mb-4 ">
          Music Title
        </h1>
        <Link
          to="1"
          className="px-4 py-2 border border-yellow-800 text-yellow-800 hover:bg-yellow-800 hover:text-white transition duration-300"
        >
          Stream / Download
        </Link>
      </div>
    </div>
  );
}

export default MusicCard;
