/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  query,
  setDoc,
  doc,
  where,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ6Vw50uzWyHWQtkUsdJCt7Jub4maswM8",
  authDomain: "spice-ent.firebaseapp.com",
  projectId: "spice-ent",
  storageBucket: "spice-ent.appspot.com",
  messagingSenderId: "827456851931",
  appId: "1:827456851931:web:04931da31a8001df8561fe",
  measurementId: "G-Y6TDB1D00W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// AUTHENTICATION
export const useAuthenticationFunctions = () => {
  const login = async (email, password) => {
    console.log("logging in ... ");
    console.log("email >> ", email);
    console.log("password >> ", password);

    try {
      // Authenticate the user with the provided email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Optionally perform any additional actions after successful login

      // Return a success message or code
      return {
        success: true,
        message: "Login successful",
        loggedInUser: userCredential.user,
      };
    } catch (error) {
      // Handle authentication errors
      console.error("Login failed", error);

      // Return an error message or code
      return {
        success: false,
        error: error.code,
        message: error.message,
        loggedInUser: null,
      };
    }
  };

  const logout = async () => {
    await signOut(auth);
    localStorage.clear();
  };

  return {
    login,
    logout,
  };
};

// GlobalUploadImageFunction
export const useUploadImage = () => {
  const [imageUploadProgress, setImageUploadProgress] = useState(0);
  const [imageURL, setImageURL] = useState(null);
  const [imageUploadLoading, setImageUploadLoading] = useState(false);

  const uploadImage = async (file, bucketName) => {
    const result = {
      data: null,
      status: "pending",
    };

    console.log("uploading_image >>", file);
    console.log("storage_bucket >>", bucketName);

    // Upload file and metadata to the object 'images/mountains.jpg'
    const metadata = {
      contentType: "image/jpeg",
    };
    const storageRef = ref(storage, bucketName + file.name);

    try {
      setImageUploadLoading(true);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("upload_is " + progress + "% done");
          setImageUploadProgress(parseInt(parseFloat(progress).toFixed(0)));

          switch (snapshot.state) {
            case "paused":
              console.log("upload_is_paused");
              break;
            case "running":
              console.log("upload_is_running");
              break;
          }
        },
        (error) => {
          // Handle errors
          result.status = "error";
          result.error = error;
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log("File available at", downloadURL);
              setImageURL(downloadURL);
              setImageUploadLoading(false);
              // Update the result object with the download URL and status
              result.data = downloadURL;
              result.status = "success";
            })
            .catch((error) => {
              // Handle errors when getting the download URL
              result.status = "error";
              result.error = error;
            });
        }
      );
    } catch (err) {
      // Handle any other errors that may occur
      console.log("the_following_error_occurred >>", err);
      result.status = "error";
      result.error = err;
    }

    return result; // Return the result object
  };

  return { imageUploadProgress, imageURL, imageUploadLoading, uploadImage };
};

// useMusicFunctions

export const useTracksFunctions = () => {
  const addTrackRecord = async (data) => {
    try {
      const newTrackCollectionRef = doc(collection(db, "Tracks"));
      await setDoc(newTrackCollectionRef, data);
      return {
        collection: "Tracks",
        success: true,
        data: data,
        message: `track_added_succesfully`,
      };
    } catch (error) {
      console.log("Error in adding track >>> ", error);
      return {
        collection: "Tracks",
        success: false,
        data: null,
        message: `track_adding_failed ${error}`,
      };
    }
  };

  const addAlbumRecord = async (data) => {
    try {
      const newAlbumCollectionRef = doc(collection(db, "Albums"));
      await setDoc(newAlbumCollectionRef, data);
      return {
        collection: "Albums",
        success: true,
        data: data,
        message: `album_added_succesfully`,
      };
    } catch (error) {
      console.log("Error in adding album >>> ", error);
      return {
        collection: "Albums",
        success: false,
        data: null,
        message: `album_adding_failed ${error}`,
      };
    }
  };

  const getAllTrackRecords = async () => {
    const tracksCollectionRef = collection(db, "Tracks");
    console.log("fetch_all_track_records() initialized ...");
    try {
      const allTracksQuery = query(tracksCollectionRef);
      const allTracksSnapShot = await getDocs(allTracksQuery);
      console.log("all_tracks_snapshot >> ", allTracksSnapShot);

      if (allTracksSnapShot?.empty) {
        console.log("No Tracks Found");
        return {
          collection: "Tracks",
          success: false,
          data: null,
          message: "No Tracks Found",
        };
      } else {
        console.log("all_tracks_snapshot >> ", allTracksSnapShot);
        const allTracksData = allTracksSnapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        return {
          collection: "Tracks",
          success: true,
          data: allTracksData,
          message: `${allTracksData.length} tracks_found`,
          length: allTracksData?.length,
        };
      }
    } catch (error) {
      console.log("Error in getting tracks >>> ", error);
      return {
        collection: "Tracks",
        success: false,
        data: null,
        message: `tracks_fetching_failed ${error}`,
      };
    }
  };

  const getAllAlbumRecords = async () => {
    const albumsCollectionRef = collection(db, "Albums");
    console.log("fetch_all_albums_records() initialized ...");
    try {
      const allAlbumsQuery = query(albumsCollectionRef);
      const allAlbumsSnapShot = await getDocs(allAlbumsQuery);
      console.log("all_albums_snapshot >> ", allAlbumsSnapShot);

      if (allAlbumsSnapShot?.empty) {
        console.log("No Albums Found");
        return {
          collection: "Albums",
          success: false,
          data: null,
          message: "No Albums Found",
        };
      } else {
        console.log("all_albums_snapshot >> ", allAlbumsSnapShot);
        const allAlbumsData = allAlbumsSnapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        return {
          collection: "Albums",
          success: true,
          data: allAlbumsData,
          message: `${allAlbumsData.length} albums_found`,
          length: allAlbumsData?.length,
        };
      }
    } catch (error) {
      console.log("Error in getting albums >>> ", error);
      return {
        collection: "Albums",
        success: false,
        data: null,
        message: `albums_fetching_failed ${error}`,
      };
    }
  };

  // TODO:
  // markAsLatestRelease

  return {
    addTrackRecord,
    addAlbumRecord,
    getAllAlbumRecords,
    getAllTrackRecords,
  };
};

// useMerchFunctions

export const useMerchFunctions = () => {
  const addMerchRecord = async (data, merchType) => {
    try {
      const newMerchCollectionRef = collection(
        db,
        "Merchandise",
        merchType,
        merchType
      );
      const newMerchDoc = doc(newMerchCollectionRef);
      await setDoc(newMerchDoc, data);
      return {
        collection: "Merchandise",
        subCollection: merchType,
        success: true,
        data: data,
        message: `a_new_${merchType}_RECORD_added_succesfully`,
      };
    } catch (error) {
      console.log(`Error in adding a new ${merchType} >>> `, error);
      return {
        collection: "Merchandise",
        subCollection: merchType,
        success: false,
        data: null,
        message: `${merchType}_adding_failed ${error}`,
      };
    }
  };

  const getMerchRecordsByType = async (merchType) => {
    console.log(`getMerchByType(${merchType}) initialized ...`);

    const merchTypeCollectionRef = collection(
      db,
      "Merchandise",
      merchType,
      merchType
    );
    const merchQuery = query(merchTypeCollectionRef);

    const merchTypeSnapshot = await getDocs(merchQuery);

    if (merchTypeSnapshot?.empty) {
      console.log(`No merch exists in the selected category >>> ${merchType}`);
      return {
        success: false,
        data: [],
        message: `No merch exists in the selected Category >> ${merchType}`,
      };
    } else {
      console.log("merchTypeSnapshot from fetchMerch >> ", merchTypeSnapshot);
      const merchData = merchTypeSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return {
        success: true,
        data: merchData,
        message: "Merch exist in the selected category",
      };
    }
  };

  return {
    addMerchRecord,
    getMerchRecordsByType,
  };
};
