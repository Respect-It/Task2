import React from "react";
import Navbar from "../components/Navbar";
import { products } from "../data";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((products) => (
            <div className="col-md-4">
              <Cards product={products} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
