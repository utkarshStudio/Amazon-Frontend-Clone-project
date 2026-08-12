import { useLocation } from "react-router-dom";
import { products } from "@/data";
import ProductCard from "@/components/ProductCard";

export default function SearchResults({ addToCart }) {
  const query = new URLSearchParams(useLocation().search).get("q") || "";
  const q = query.toLowerCase().trim();

  const results = products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );

  return (
    <div className="page">
      <h2 className="page-title">
        {results.length} result{results.length === 1 ? "" : "s"} for "{query}"
      </h2>
      {results.length === 0 ? (
        <div className="empty">No products matched your search. Try "laptop", "beauty" or "chair".</div>
      ) : (
        <div className="product-grid">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}