import { useParams, Link } from "react-router-dom";
import unpluggedBgMobile from "@/assets/images/unplugged-bg-mobile.jpg";
import unpluggedBg2 from "@/assets/images/unplugged-bg2.jpg";
import { useEffect, useState } from "react";
import { useTracksFunctions } from "@/firebase/firebase";

function YoutubeHome() {
  const { id } = useParams();
  console.log("requested music id >> ", id);

  const { fetchTrackById } = useTracksFunctions();
  const [selectedTrack, setSelectedTrack] = useState();

  function transformYoutubeUrl(url) {
    // Input validation: Check if the URL is a valid YouTube URL
    if (!url.startsWith("https://www.youtube.com/watch?v=")) {
      console.error("Invalid YouTube URL format.");
      return null; // Or throw an error; choose based on your error handling strategy.
    }

    // Use replace to modify the URL and return the new URL.
    const embedUrl = url.replace("watch?v=", "embed/");
    return embedUrl;
  }

  const fetchSelectedTrack = async () => {
    const selectedTrackResponse = await fetchTrackById(id);
    if (selectedTrackResponse?.success) {
      const trackData = selectedTrackResponse?.data?.youtube;
      console.log("selected track data url >> ", trackData);
      const embedUrl = transformYoutubeUrl(trackData);

      setSelectedTrack(embedUrl);
    } else {
      console.log("error fetching selected track >> ", selectedTrackResponse);
    }
  };

  useEffect(() => {
    fetchSelectedTrack();
  }, []);

  const [bgImage, setBgImage] = useState(unpluggedBg2);

  useEffect(() => {
    const updateBgImage = () => {
      setBgImage(window.innerWidth < 768 ? unpluggedBgMobile : unpluggedBg2);
    };

    updateBgImage(); // Set initial value
    window.addEventListener("resize", updateBgImage);

    return () => window.removeEventListener("resize", updateBgImage);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-top md:bg-center lg:pt-[10rem]"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {" "}
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50 lg:top-[-9rem]">
        {" "}
        <div className="absolute top-[9rem] md:top-[14rem] w-full max-w-[26rem] md:max-w-[37rem]">
          {" "}
          <div className=" bg-black shadow-lg">
            {" "}
            <div className="relative pb-[56.25%]">
              {" "}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={selectedTrack}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
              ></iframe>{" "}
            </div>{" "}
          </div>{" "}
          <div className="absolute bottom-[-9rem] md:bottom-[-7rem] w-full flex justify-center ">
            <Link to={-1}>
              <button
                className="bg-gradient-to-r from-gray-800 to-black text-center w-48 rounded-2xl h-14 relative text-white text-xl font-semibold group"
                type="button"
              >
                <div className="bg-red-500 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    height="25px"
                    width="25px"
                  >
                    <path
                      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                      fill="#000000"
                    ></path>
                    <path
                      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                      fill="#000000"
                    ></path>
                  </svg>
                </div>
                <p className="translate-x-2">Go Back</p>
              </button>
            </Link>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default YoutubeHome;
