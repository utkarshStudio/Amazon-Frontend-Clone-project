import { useNavigate, useParams } from "react-router-dom";
import { categories, products } from "@/data";
import ProductCard from "@/components/ProductCard";

export default function Categories({ addToCart }) {
  const { name } = useParams();
  const navigate = useNavigate();
  const list = name ? products.filter((p) => p.category === name) : products;

  return (
    <div className="page">
      <h2 className="page-title">Shop by Category</h2>

      <div className="pill-row">
        <button className={!name ? "pill active" : "pill"} onClick={() => navigate("/categories")}>
          All
        </button>
        {categories.map((c) => (
          <button
            key={c}
            className={name === c ? "pill active" : "pill"}
            onClick={() => navigate("/categories/" + c)}
          >
            {c}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <div className="empty">No products in this category yet.</div>
      ) : (
        <div className="product-grid">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}