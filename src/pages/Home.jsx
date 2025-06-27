import React from "react";
import { products } from "../data"; 
import Cards from "../components/Cards";

export default function Home() {
  return (
    <div className="home-page-wrapper">
      <div className="product-grid-section">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 col-sm-6 col-xs-12 product-card-column" key={product.id}>
              <Cards product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}