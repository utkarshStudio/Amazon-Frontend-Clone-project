import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetails from "@/pages/ProductDetails";
import Categories from "@/pages/Categories";
import SearchResults from "@/pages/SearchResults";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Orders from "@/pages/Orders";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import PageNotFound from "@/pages/PageNotFound";
import ScrollToTop from "@/components/ScrollToTop";

function Shop() {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("amazon_cart") || "[]"));
  const [orders, setOrders] = useState(() => JSON.parse(localStorage.getItem("amazon_orders") || "[]"));

  useEffect(() => {
    localStorage.setItem("amazon_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("amazon_orders", JSON.stringify(orders));
  }, [orders]);

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i));
      }
      return [...prev, { ...product, qty }];
    });
  };

  const changeQty = (id, diff) => {
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + diff } : i)).filter((i) => i.qty > 0)
    );
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const placeOrder = (address, total) => {
    const order = {
      id: Date.now().toString().slice(-6),
      date: new Date().toLocaleDateString("en-IN"),
      items: cart,
      address,
      total,
    };
    setOrders((prev) => [order, ...prev]);
    setCart([]);
  };

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <>
      <Header cartCount={cartCount} cart={cart} changeQty={changeQty} removeFromCart={removeFromCart} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/categories" element={<Categories addToCart={addToCart} />} />
        <Route path="/categories/:name" element={<Categories addToCart={addToCart} />} />
        <Route path="/search" element={<SearchResults addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} changeQty={changeQty} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} placeOrder={placeOrder} />} />
        <Route path="/orders" element={<Orders orders={orders} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Shop />
    </Router>
  );
}

export default App;
