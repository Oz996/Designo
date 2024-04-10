import { Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home from "./pages/Home";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/webdesign" element={<WebDesign />} />
          <Route path="/appdesign" element={<AppDesign />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
