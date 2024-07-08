import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "aos/dist/aos.css";
import Home from "./components/Home";
import PortfolioDetail from "./components/portfolioDetail/PortfolioDetail";
import { useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="font-default">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/portfolio-details"
            element={<PortfolioDetail />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
