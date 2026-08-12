import { products } from "@/data";
import ProductCard from "@/components/ProductCard";

export default function Products({ addToCart }) {
  return (
    <div className="page">
      <h2 className="page-title">All Products ({products.length})</h2>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}