import { Routes, Route } from "react-router";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import DutchPage from "./pages/DutchPage";
import JapanPage from "./pages/JapanPage";
import IndependencePage from "./pages/IndependencePage";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/dutch" Component={DutchPage} />
        <Route path="/japan" Component={JapanPage} />
        <Route path="/independence" Component={IndependencePage} />
        <Route path="/quiz" Component={QuizPage} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
