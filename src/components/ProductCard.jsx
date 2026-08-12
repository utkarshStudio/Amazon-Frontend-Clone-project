import { useState } from "react";
import { Link } from "react-router-dom";
import { rupees } from "@/data";

export default function ProductCard({ product, addToCart }) {
  const [added, setAdded] = useState(false);
  const off = product.mrp && product.mrp > product.price
    ? Math.round((product.mrp - product.price) / product.mrp * 100)
    : 0;

  const handleAdd = () => {
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="card">
      <Link to={`/product/${product.id}`} className="card-img-wrap">
        <img className="card-img" src={product.image} alt={product.name} />
      </Link>
      <Link to={`/product/${product.id}`} className="card-name">
        {product.name}
      </Link>
      <div className="rating">
        <span className="stars">{"★".repeat(Math.round(product.rating))}{"☆".repeat(5 - Math.round(product.rating))}</span>
        <span className="num">{product.rating}</span>
        <span className="reviews">({product.reviews})</span>
      </div>
      <div className="price-row">
        {off > 0 && <span className="off">-{off}%</span>}
        <span className="price">{rupees(product.price)}</span>
        {off > 0 && <span className="mrp">M.R.P: {rupees(product.mrp)}</span>}
      </div>
      <p className="prime">{product.prime && <b>✓ prime</b>} FREE Delivery</p>
      <button className={added ? "btn btn-added" : "btn"} onClick={handleAdd}>
        {added ? "Added ✓" : "Add to Cart"}
      </button>
    </div>
  );
}