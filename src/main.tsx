import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./post/components/App/App";
import "@fontsource/roboto";
import "./styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
