import React from "react";
import { useParams } from "react-router";
import { products } from "../data";
import { Rating } from "react-simple-star-rating";
import { useContext } from "react";
import { CountContext } from "../App";
function DetailPage() {
  const { count, setCount } = useContext(CountContext);
  const { id } = useParams();
  const product = products.find((item) => item.id == id);
const handleClick =() =>{
  setCount(count + 1)
 }
  return (
    <>
      <div className="product-image">
        <img src={product.image} alt="image" />
      </div>
      <div className="detail-product">
        <h2>{product.title}</h2>
        <br />
        <u>
          <p>{product.description}</p>
        </u>
        <br />
        <strong>PKr.{product.price}</strong>
      </div>
      <div>
        <button
          style={{
            display: "block", // Centers the button horizontally
            width: "800px", // Increases the button width
            padding: "15px 30px", // Adds padding inside the button
            margin: "100px auto", // Centers the button vertically and horizontally
            backgroundColor: "#6098ec", // Button background color
            color: "white", // Button text color
            border: "none", // No border
            borderRadius: "25px", // Rounded corners
            fontSize: "16px", // Text size
            fontWeight: "bold", // Bold text
            cursor: "pointer", // Pointer cursor on hover
            boxShadow: "0 4px 6px rgba(3, 3, 3, 0.1)", // Subtle shadow for 3D effect
            transition: "all 0.3s ease", // Smooth transition for hover effects
          }}  onClick={handleClick}
        >
          Add To Cart
        </button>
        <center>
          <Rating
            readonly={true}
            allowFraction={true}
            initialValue={product.rating.rate}
          />
        </center>
      </div>
    </>
  );
}

export default DetailPage;
