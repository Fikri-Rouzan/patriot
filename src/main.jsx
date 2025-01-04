import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.jsx";
import AOS from "aos";
import ScrollToTop from "./components/ScrollToTop.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./dist/css/main.css";
import "./dist/css/navbar.css";
import "./dist/css/footer.css";
import "./dist/css/homeHeader.css";
import "./dist/css/homeClass.css";
import "./dist/css/homeAboutUs.css";
import "./dist/css/page.css";
import "./dist/css/faq.css";

import "animate.css";
import "aos/dist/aos.css";

AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);
