import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

export const PhotoContext = createContext('')

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PhotoContext.Provider value="Nothing">
      <App />
    </PhotoContext.Provider>
  </StrictMode>
);
