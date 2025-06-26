import React from "react";
import { useParams } from "react-router";
import { products } from "../data";
import { Rating } from "react-simple-star-rating";

function DetailPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id == id);

  return (
    <div className="detail-container">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="detail-product">
        <h2>{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <strong className="product-price">PKr.{product.price}</strong>

        <div className="product-actions">
          <button className="add-to-cart-btn">Add To Cart</button>

          <div className="product-rating">
            <Rating readonly={true} allowFraction={true} initialValue={product.rating.rate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
