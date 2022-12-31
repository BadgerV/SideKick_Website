import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ServicesPage from "./pages/Services/Services_page";
import Industries from "./pages/Industries/Industries";
import AboutUs from "./pages/AboutUs/AboutUs";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="industries" element={<Industries />} />
          <Route path="about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
