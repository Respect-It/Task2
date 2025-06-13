import { useState } from "react";
export default function Cubes() {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://m.media-amazon.com/images/I/51IFiSD+kCL._AC_SY300_SX300_.jpg"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://m.media-amazon.com/images/I/51IFiSD+kCL._AC_SY300_SX300_.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">MoKo Case htmlFor iPad (A16)</p>
            <p className="subtitle is-6">@IOS</p>
            <br />
            <h4>
              <b>Price=</b>
              <u>999.00PKR</u>
            </h4>
            <br />
            <button className="button">Add To Cart</button>
          </div>
        </div>

        <div className="content">
          1th Generation 11 Inch 2025, iPad 10th Generation 10.9 inch 2022, Slim
          Stand Protective Cover with Hard PC Translucent Back Shell Cover,
          Support Touch ID, Navy Blue<a>@IOS</a>
          <br />
          <br />
          <h4>
            <b>Rating</b>
          </h4>
          </div>
        </div>
      </div>
  );
}
