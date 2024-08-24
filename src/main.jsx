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
import AdminLayout from "./layouts/AdminLayout";
import PrivateRoutes from "./auth/PrivateRoutes";
import Login from "./auth/LogIn";
import { AuthProvider } from "./auth/AuthContext";
import AdminDashboard from "./sections/admin/AdminDashboard";
import AdminMusic from "./sections/admin/AdminMusic";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* userUiRoutes */}
      <Route path="/" element={<UserUi />}>
        <Route index element={<Home />} />
        <Route path="music/:id" element={<MusicDetail />} />
        <Route path="music" element={<Music />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* Admin-Related Routes */}
      <Route element={<PrivateRoutes />}>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />

          <Route path="music" element={<AdminMusic />} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
