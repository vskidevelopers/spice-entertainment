import { useParams } from "react-router-dom";
import MusicPlatforms from "@/components/MusicPlatforms";
import { useEffect, useState } from "react";
import { useTracksFunctions } from "@/firebase/firebase";

export default function MusicDetail() {
  const { id } = useParams();
  const { fetchTrackById } = useTracksFunctions();
  const [selectedTrack, setSelectedTrack] = useState();

  const fetchSelectedTrack = async () => {
    const selectedTrackResponse = await fetchTrackById(id);
    if (selectedTrackResponse?.success) {
      console.log(
        "selected track response from db >>> ",
        selectedTrackResponse
      );

      const trackData = selectedTrackResponse?.data;
      console.log("selected track data >> ", {
        id: selectedTrackResponse?.id,
        ...trackData,
      });
      setSelectedTrack({ id: selectedTrackResponse?.id, ...trackData });
    } else {
      console.log("error fetching selected track >> ", selectedTrackResponse);
    }
  };

  useEffect(() => {
    fetchSelectedTrack();
  }, []);

  return (
    <div
      className="relative flex w-full justify-center pt-20 h-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${selectedTrack?.image})`,
      }}
    >
      {/* Blurred Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg"></div>

      {/* Main Content */}
      <div className="relative w-72 flex flex-col z-10">
        <div className="w-full flex justify-center pt-5">
          <div className="w-60 h-full rounded-xl overflow-hidden">
            <img
              src={selectedTrack?.image}
              alt="Album Cover"
              className="w-full h-full object-cover rounded-xl"
            />
            <h1 className="pt-2 text-white text-center text-xl font-semibold">
              {selectedTrack?.trackName}
            </h1>
          </div>
        </div>
        <div className="py-8">
          <MusicPlatforms music={selectedTrack} />
        </div>
      </div>
    </div>
  );
}
