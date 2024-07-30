import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import UserUi from "./layouts/UserUi";
import Music from "./pages/Music";
import MusicDetail from "./pages/MusicDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* userUiRoutes */}
      <Route path="/" element={<UserUi />}>
        <Route index element={<Home />} />
        <Route path="music/:id" element={<MusicDetail />} />
        <Route path="music" element={<Music />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
