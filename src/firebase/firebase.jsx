// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

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
