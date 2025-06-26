import { useContext } from "react";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { CartContext } from "../App.jsx";

export default function Cards({ product }) {
  const { cart, setCart } = useContext(CartContext);

  const truncateText = (text, maxLength) =>
    text.length <= maxLength ? text : text.slice(0, maxLength) + "...";

  const handleAddToCart = () => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="card-image"
          loading="lazy"
        />
      </div>

      <div className="card-body">
        <Link to={`/product/${product.id}`} className="card-title-link">
          <h3 className="card-title">{product.title}</h3>
        </Link>

        <p className="card-price">
          PKR <span>{product.price.toFixed(2)}</span>
        </p>

        <p className="card-description">{truncateText(product.description, 120)}</p>

        <div className="card-footer">
          <div className="rating-wrapper" aria-label={`Rating: ${product.rating.rate} out of 5`}>
            <Rating readonly initialValue={product.rating.rate} allowFraction size={20} />
            <span className="rating-count">({product.rating.count})</span>
          </div>

          <button className="btn-add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
