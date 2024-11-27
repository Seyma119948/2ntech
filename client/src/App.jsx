import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Teachers from "./pages/Teachers";
import Administrations from "./pages/Administrations";
import Class from "./pages/Class";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/administrations" element={<Administrations />} />
        <Route path="/class" element={<Class />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
