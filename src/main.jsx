import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.jsx";
import AOS from "aos";
import ScrollToTop from "./components/ScrollToTop.jsx";

import "./css/main.css";
import "./css/navbar.css";
import "./css/footer.css";
import "./css/homeHeader.css";
import "./css/homeClass.css";
import "./css/homeAboutUs.css";
import "./css/page.css";
import "./css/faq.css";
import "./css/quiz.css";

import "bootstrap/dist/css/bootstrap.min.css";
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
