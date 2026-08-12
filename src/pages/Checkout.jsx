import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { rupees } from "@/data";

export default function Checkout({ cart, placeOrder }) {
  const navigate = useNavigate();
  const [address, setAddress] = useState({ name: "", street: "", city: "", pincode: "" });

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const delivery = subtotal > 5000 || subtotal === 0 ? 0 : 49;

  if (cart.length === 0) {
    return (
      <div className="empty">
        <h2>Nothing to check out</h2>
        <p><Link to="/products" style={{ color: "#007185" }}>Add some products first</Link></p>
      </div>
    );
  }

  const submit = (e) => {
    e.preventDefault();
    placeOrder(address, subtotal + delivery);
    navigate("/orders");
  };

  return (
    <div className="page">
      <form className="split" onSubmit={submit}>
        <div className="panel-box">
          <h2 className="page-title">Delivery Address</h2>
          <div className="form-field">
            <label>Full name</label>
            <input required value={address.name} onChange={(e) => setAddress({ ...address, name: e.target.value })} />
          </div>
          <div className="form-field">
            <label>Street address</label>
            <textarea required rows={2} value={address.street} onChange={(e) => setAddress({ ...address, street: e.target.value })} />
          </div>
          <div className="form-field">
            <label>City</label>
            <input required value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} />
          </div>
          <div className="form-field">
            <label>PIN code</label>
            <input required value={address.pincode} onChange={(e) => setAddress({ ...address, pincode: e.target.value })} />
          </div>

          <h2 className="page-title" style={{ marginTop: 24 }}>Order Summary</h2>
          {cart.map((item) => (
            <div className="summary-row" key={item.id}>
              <span>{item.name} × {item.qty}</span>
              <span>{rupees(item.price * item.qty)}</span>
            </div>
          ))}
        </div>

        <div className="panel-box">
          <div className="summary-row"><span>Subtotal</span><span>{rupees(subtotal)}</span></div>
          <div className="summary-row"><span>Delivery</span><span>{delivery === 0 ? "FREE" : rupees(delivery)}</span></div>
          <div className="summary-total"><span>Total</span><span>{rupees(subtotal + delivery)}</span></div>
          <button className="btn" type="submit">Place Order</button>
          <p style={{ fontSize: 12, color: "#565959", marginTop: 10 }}>
            Demo checkout — no real payment is taken.
          </p>
        </div>
      </form>
    </div>
  );
}