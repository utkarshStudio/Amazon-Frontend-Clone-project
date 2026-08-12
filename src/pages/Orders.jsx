import { Link } from "react-router-dom";
import { rupees } from "@/data";

export default function Orders({ orders }) {
  if (orders.length === 0) {
    return (
      <div className="empty">
        <h2>You have no orders yet</h2>
        <p><Link to="/products" style={{ color: "#007185" }}>Start shopping</Link></p>
      </div>
    );
  }

  return (
    <div className="page">
      <h2 className="page-title">Your Orders</h2>
      {orders.map((order) => (
        <div className="panel-box" key={order.id} style={{ marginBottom: 16 }}>
          <div className="summary-row">
            <span>Order #{order.id} · placed on {order.date}</span>
            <strong>{rupees(order.total)}</strong>
          </div>
          <p style={{ fontSize: 13, color: "#565959" }}>
            Deliver to {order.address.name}, {order.address.street}, {order.address.city} - {order.address.pincode}
          </p>
          {order.items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p style={{ fontSize: 14, margin: 0 }}>Qty: {item.qty} · {rupees(item.price * item.qty)}</p>
                <p style={{ fontSize: 13, color: "#007600" }}>Arriving soon</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}