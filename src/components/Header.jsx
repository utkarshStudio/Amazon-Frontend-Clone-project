import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, MapPin, Search, ShoppingCart, X } from "lucide-react";
import { rupees } from "@/data";
import logoImg from "@/assets/amazon_logo_cropped.png";

export default function Header({ cartCount, cart, changeQty, removeFromCart }) {
  const [term, setTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();
  const items = cart || [];
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const doSearch = (e) => {
    e.preventDefault();
    navigate("/search?q=" + encodeURIComponent(term));
    setMenuOpen(false);
  };

  const go = (path) => {
    setCartOpen(false);
    navigate(path);
  };

  return (
    <header>
      <div className="navbar">
        <Link to="/" className="nav-logo border" aria-label="Amazon">
          <img src={logoImg} alt="Amazon" className="logo" />
        </Link>

        <label className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={22} />
        </label>

        <div className={menuOpen ? "mobile-menu open" : "mobile-menu"} onClick={() => setMenuOpen(false)}>
          <Link to="/products">All Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/login">Sign in</Link>
        </div>

        <div className="nav-address border">
          <p className="add-first">Deliver to</p>
          <div className="add-icon">
            <MapPin size={16} />
            <p className="add-second">India</p>
          </div>
        </div>

        <form className="nav-search" onSubmit={doSearch}>
          <select className="search-select">
            <option>All</option>
          </select>
          <input
            className="search-input"
            type="text"
            placeholder="Search Amazon"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className="search-icon" type="submit" aria-label="Search">
            <Search size={20} />
          </button>
        </form>

        <Link to="/login" className="nav-signin border">
          <p><span>Hello, sign in</span></p>
          <p className="nav-second">Account &amp; Lists</p>
        </Link>

        <Link to="/orders" className="nav-signin border">
          <p><span>Returns</span></p>
          <p className="nav-second">&amp; Orders</p>
        </Link>

        <div className="cart-wrap">
          <div className="nav-cart border" onClick={() => setCartOpen((o) => !o)} style={{ cursor: "pointer" }}>
            <ShoppingCart size={22} />
            <span className="cart-count">{cartCount}</span>
            Cart
          </div>

          {cartOpen && (
            <>
              <div className="cart-backdrop" onClick={() => setCartOpen(false)} />
              <div className="cart-dropdown" onClick={(e) => e.stopPropagation()}>
                <div className="cart-dd-head">
                  <h3>Your Cart ({cartCount})</h3>
                  <button className="link-btn" onClick={() => setCartOpen(false)} aria-label="Close">
                    <X size={18} />
                  </button>
                </div>

                {items.length === 0 ? (
                  <div className="cart-dd-empty">
                    Your cart is empty. <Link to="/products" onClick={() => setCartOpen(false)}>Start shopping</Link>
                  </div>
                ) : (
                  <>
                    <div className="cart-dd-list">
                      {items.map((item) => (
                        <div className="cart-mini-item" key={item.id}>
                          <img src={item.image} alt={item.name} />
                          <div className="info">
                            <p>{item.name}</p>
                            <div className="qty">
                              <button onClick={() => changeQty(item.id, -1)}>−</button>
                              <span>{item.qty}</span>
                              <button onClick={() => changeQty(item.id, 1)}>+</button>
                              <button className="link-btn remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                            <p className="mini-price">{rupees(item.price * item.qty)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="cart-dd-foot">
                      <span>Subtotal</span>
                      <strong>{rupees(subtotal)}</strong>
                    </div>
                    <div className="cart-dd-actions">
                      <button className="btn btn-plain" onClick={() => go("/cart")}>View Cart</button>
                      <button className="btn" onClick={() => go("/checkout")}>Checkout</button>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="panel">
        <Link to="/categories" className="panel-all" style={{ color: "#fff" }}>
          <Menu size={16} /> All
        </Link>
        <div className="panel-ops">
          <p onClick={() => navigate("/products")}>Today's Deals</p>
          <p onClick={() => navigate("/categories")}>Categories</p>
          <p onClick={() => navigate("/orders")}>Your Orders</p>
          <p onClick={() => navigate("/cart")}>Cart</p>
          <p onClick={() => navigate("/login")}>Sign in</p>
        </div>
        <Link to="/categories/Electronics" className="panel-deals" style={{ color: "#fff" }}>
          Shop Deals in Electronics
        </Link>
      </div>
    </header>
  );
}
