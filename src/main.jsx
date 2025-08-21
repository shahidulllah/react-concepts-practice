import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./HomePage.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";

export const PhotoContext = createContext("");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PhotoContext.Provider value="Nothing">
      <RouterProvider router={router}/>
    </PhotoContext.Provider>
  </StrictMode>
);
