import React from "react";
import { useParams } from "react-router";
import { products } from "../data";

function DetailPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id == id);
  return <>
  <div className="product-image">
      <img src={product.image} alt="image" />
      </div>  
      <div className="detail-product">
        <h2>{product.title}</h2>
        <br />
        <u>
          <p>{product.description}</p>
        </u>
        </div>
        </>
 ;
}

export default DetailPage;
