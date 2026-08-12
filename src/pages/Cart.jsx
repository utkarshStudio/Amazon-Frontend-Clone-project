import { Link, useNavigate } from "react-router-dom";
import { rupees } from "@/data";

export default function Cart({ cart, changeQty, removeFromCart }) {
  const navigate = useNavigate();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="empty">
        <h2>Your Amazon Cart is empty</h2>
        <p><Link to="/products" style={{ color: "#007185" }}>Continue shopping</Link></p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="split">
        <div className="panel-box">
          <h2 className="page-title">Shopping Cart</h2>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <div className="price">{rupees(item.price)}</div>
                <div className="qty-row">
                  <button className="qty-btn" onClick={() => changeQty(item.id, -1)}>−</button>
                  <span>{item.qty}</span>
                  <button className="qty-btn" onClick={() => changeQty(item.id, 1)}>+</button>
                  <button className="link-btn" onClick={() => removeFromCart(item.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="panel-box">
          <div className="summary-row">
            <span>Items ({itemCount})</span>
            <span>{rupees(subtotal)}</span>
          </div>
          <div className="summary-total">
            <span>Subtotal</span>
            <span>{rupees(subtotal)}</span>
          </div>
          <button className="btn" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}