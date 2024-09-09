import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useForm } from "react-hook-form";
import { useUploadImage } from "@/firebase/firebase";
import { useTracksFunctions } from "@/firebase/firebase";

export default function AddTrackForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { uploadImage, imageURL } = useUploadImage();
  const { addTrackRecord } = useTracksFunctions();

  const [loading, setLoading] = useState(false);
  const [, setImageUploaded] = useState(false);
  const [isLatestRelease, setIsLatestRelease] = useState(false);
  const handleToggle = () => {
    setIsLatestRelease(!isLatestRelease);
  };

  //   Date FORMATTING
  const currentDate = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  const formattedDate = currentDate.toLocaleString("en-US", options);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log("data from add-track-form >> ", data);
      if (imageURL != null) {
        const trackData = {
          ...data,
          image: imageURL,
          createdAt: formattedDate,
        };
        // Proceed with form submission
        const addTrackResponse = await addTrackRecord(trackData);
        console.log("add_track()_response >> ", addTrackResponse);
        reset();
        setLoading(false);
      } else {
        console.log("Images are not uploaded yet.");
        console.log("image_url >> ", imageURL);
      }
    } catch (error) {
      setLoading(true);
      console.error("error occured trying to handleSubmit () >>> ", error);
    } finally {
      setLoading(false);
      console.log("finished try-catch () ");
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        console.log("Uploading image...");
        const uploadResult = await uploadImage(file, "trackImages");
        if (uploadResult.status === "success") {
          console.log("Image uploaded successfully");
          setImageUploaded(true);
        } else {
          console.error("Image upload failed.");
        }
      } catch (error) {
        console.error("An error occurred during image upload: ", error);
      }
    } else {
      console.error("No image selected.");
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <ScrollArea className="h-[80vh]">
        <Card className="w-full max-w-sm  ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="text-2xl">Add New Track</CardTitle>
              <CardDescription>
                Fill out the details below to add a new track.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {/* Track Image */}
              <div className="grid gap-2">
                <label htmlFor="trackImage">Track Image</label>
                <input
                  id="trackImage"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                {errors.trackImage && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* Track Name */}
              <div className="grid gap-2">
                <label htmlFor="trackName">Track Name</label>
                <input
                  id="trackName"
                  type="text"
                  placeholder="Track Name"
                  {...register("trackName", { required: true })}
                />
                {errors.trackName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* Artists */}
              <div className="grid gap-2">
                <label htmlFor="artists">Artists</label>
                <input
                  id="artists"
                  type="text"
                  placeholder="Artist Name(s)"
                  {...register("artists", { required: true })}
                />
                {errors.artists && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* Release Date */}
              <div className="grid gap-2">
                <label htmlFor="releaseDate">Release Date</label>
                <input
                  id="releaseDate"
                  type="date"
                  {...register("releaseDate", { required: true })}
                />
                {errors.releaseDate && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* Album */}
              <div className="grid gap-2">
                <label htmlFor="album">Album</label>
                <select id="album" {...register("album")}>
                  <option value="none">None</option>
                  <option value="Album 1">Album 1</option>
                  <option value="Album 2">Album 2</option>
                  <option value="Album 3">Album 3</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              {/* Links */}
              <div className="grid gap-2">
                <label htmlFor="spotify">Spotify Link</label>
                <input
                  id="spotify"
                  type="url"
                  placeholder="Spotify URL"
                  {...register("spotify")}
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="youtube">YouTube Link</label>
                <input
                  id="youtube"
                  type="url"
                  placeholder="YouTube URL"
                  {...register("youtube")}
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="boomplay">Boomplay Link</label>
                <input
                  id="boomplay"
                  type="url"
                  placeholder="Boomplay URL"
                  {...register("boomplay")}
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="audiomac">Audiomack Link</label>
                <input
                  id="audiomac"
                  type="url"
                  placeholder="Audiomack URL"
                  {...register("audiomac")}
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="itunes">iTunes Link</label>
                <input
                  id="itunes"
                  type="url"
                  placeholder="iTunes URL"
                  {...register("itunes")}
                />
              </div>
              <div className="grid gap-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isLatestRelease}
                    onChange={handleToggle}
                    {...register("latestRelease")}
                  />
                  <span className="ml-2">Latest Release</span>
                </label>
              </div>
            </CardContent>
            <CardFooter>
              <button
                className=" border border-sky-500 rounded w-full py-2 hover:bg-sky-500 "
                type="submit"
              >
                {loading ? "Submitting..." : "Submit Track"}
              </button>
            </CardFooter>
          </form>
        </Card>
      </ScrollArea>
    </div>
  );
}
