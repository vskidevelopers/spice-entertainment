/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useMerchFunctions, useUploadImage } from "@/firebase/firebase";
import { useState } from "react";

import { useForm } from "react-hook-form";

export default function AddMerchForm({ merchType }) {
  const { uploadImage, imageURL } = useUploadImage();
  const { addMerchRecord } = useMerchFunctions();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [, setImageUploaded] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        console.log(` uploading a ${merchType} image...`);
        const uploadResult = await uploadImage(file);
        if (uploadResult?.status === "success") {
          console.log("merch image uploaded successfully");
          setImageUploaded(true);
        } else {
          console.error("merch image upload failed.");
        }
      } catch (error) {
        console.error("An error occurred during merch image upload: ", error);
      }
    } else {
      console.error("No merch image selected.");
    }
  };

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
  console.log(formattedDate);

  const onSubmit = async (data) => {
    console.log("submit data >> ", data);
    setLoading(true);

    try {
      if (imageURL != null) {
        const merchData = {
          ...data,
          image: imageURL,
          createdAt: formattedDate,
        };
        const addMerchByTypeResponse = await addMerchRecord(
          merchData,
          merchType
        );
        console.log("add_merch_by_type_response >> ", addMerchByTypeResponse);
        reset();
        setLoading(false);
      } else {
        console.log("image is not uploaded yet.");
        console.log("merch_image_url >> ", imageURL);
      }
    } catch (error) {
      console.error("An error occurred: ", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <ScrollArea className="h-[80vh]">
        <Card className="w-full max-w-sm  ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardHeader>
              <CardDescription>
                Fill out the details below to add a new merch product. (
                {merchType})
              </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-4">
              {/* Product Image */}
              <div className="grid gap-2">
                <label htmlFor="productImage">Product Image</label>
                <input
                  id="productImage"
                  type="file"
                  onChange={handleImageUpload}
                />
                {errors.productImage && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* Product Name */}
              <div className="grid gap-2">
                <label htmlFor="productName">Product Name</label>
                <input
                  id="productName"
                  type="text"
                  placeholder="Product Name"
                  {...register("productName", { required: true })}
                />
                {errors.productName && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* Price */}
              <div className="grid gap-2">
                <label htmlFor="price">Price</label>
                <input
                  id="price"
                  type="number"
                  step="0.01"
                  placeholder="Price"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* Discount Price (Optional) */}
              <div className="grid gap-2">
                <label htmlFor="discountPrice">Discount Price (Optional)</label>
                <input
                  id="discountPrice"
                  type="number"
                  step="0.01"
                  placeholder="Discount Price"
                  {...register("discountPrice")}
                />
              </div>

              {/* Description */}
              <div className="grid gap-2">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  placeholder="Product Description"
                  {...register("description", { required: true })}
                />
                {errors.description && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* Colors */}
              <div className="grid gap-2">
                <label htmlFor="colors">Colors (comma-separated)</label>
                <input
                  id="colors"
                  type="text"
                  placeholder="e.g. Red, Blue, Black"
                  {...register("colors", { required: true })}
                />
                {errors.colors && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* Is Featured Product */}
              <div className="grid gap-2">
                <label className="flex items-center">
                  <input type="checkbox" {...register("featured")} />
                  <span className="ml-2">Mark as Featured Product</span>
                </label>
              </div>
            </CardContent>

            <CardFooter>
              <button
                className="border border-sky-500 rounded w-full py-2 hover:bg-sky-500"
                type="submit"
              >
                {loading ? "Submitting..." : "Submit Product"}
              </button>
            </CardFooter>
          </form>
        </Card>
      </ScrollArea>
    </div>
  );
}
