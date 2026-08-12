import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { products, rupees } from "@/data";

export default function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return (
      <div className="empty">
        Product not found. <Link to="/products">Browse all products</Link>
      </div>
    );
  }

  const buyNow = () => {
    addToCart(product, qty);
    navigate("/checkout");
  };

  return (
    <div className="page">
      <div className="detail">
        <img src={product.image} alt={product.name} />

        <div>
          <h1>{product.name}</h1>
          <div className="rating">
            {"★".repeat(Math.round(product.rating))}
            <span>{product.rating} out of 5</span>
          </div>
          <div className="price">{rupees(product.price)}</div>
          <p className="desc">{product.description}</p>
          <p style={{ fontSize: 14, color: "#007600" }}>In stock · Free delivery</p>

          <div className="qty-row">
            <span style={{ fontSize: 14 }}>Quantity:</span>
            <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
            <span>{qty}</span>
            <button className="qty-btn" onClick={() => setQty(qty + 1)}>+</button>
          </div>

          <div className="detail-actions">
            <button className="btn" onClick={() => addToCart(product, qty)}>Add to Cart</button>
            <button className="btn btn-orange" onClick={buyNow}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}