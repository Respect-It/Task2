import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/Cart" element={<Cart/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
