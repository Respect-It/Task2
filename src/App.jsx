import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import DetailPage from "./pages/DetailPage";
import { createContext, useState } from "react";

export const CartContext = createContext();
export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Product/:id" element={<DetailPage />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  );
}
