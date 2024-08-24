import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

import { useForm } from "react-hook-form";

import { useUploadImage } from "@/firebase/firebase";
import { useTracksFunctions } from "@/firebase/firebase";

function AddAlbumForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { uploadImage, imageURL } = useUploadImage();
  const { addAlbumRecord } = useTracksFunctions();

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
      console.log("data from add-album-form >> ", data);
      if (imageURL != null) {
        const albumData = {
          ...data,
          image: imageURL,
          createdAt: formattedDate,
        };
        // Proceed with form submission
        const addAlbumResponse = await addAlbumRecord(albumData);
        console.log("add_album()_response >> ", addAlbumResponse);
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
        const uploadResult = await uploadImage(file, "albumImages");
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
              <CardDescription>
                Fill out the details below to add a new album.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {/* Album Image */}
              <div className="grid gap-2">
                <label htmlFor="albumImage">Album Image</label>
                <input type="file" onChange={handleImageUpload} />
                {errors.albumImage && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* Album Name */}
              <div className="grid gap-2">
                <label htmlFor="albumName">Album Name</label>
                <input
                  id="albumName"
                  type="text"
                  placeholder="Album Name"
                  {...register("albumName", { required: true })}
                />
                {errors.albumName && (
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

export default AddAlbumForm;
