import { Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home from "./pages/Home";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicDesign from "./pages/GraphicDesign";
import About from "./pages/About";
import Locations from "./pages/Locations";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/webdesign" element={<WebDesign />} />
          <Route path="/appdesign" element={<AppDesign />} />
          <Route path="/graphicdesign" element={<GraphicDesign />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
