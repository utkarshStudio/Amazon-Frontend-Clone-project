import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "@/data";
import ProductCard from "@/components/ProductCard";

const FALLBACK_IMG =
  "https://placehold.co/600x400/eeeeee/999999.png?text=Image+Unavailable";

const boxes = [
  { title: "Clothes", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80&auto=format&fit=crop", link: "/categories/Fashion" },
  { title: "Health & Personal Care", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&auto=format&fit=crop", link: "/categories/Beauty" },
  { title: "Furniture", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&auto=format&fit=crop", link: "/categories/Home" },
  { title: "Electronics", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80&auto=format&fit=crop", link: "/categories/Electronics" },
  { title: "Beauty Picks", img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80&auto=format&fit=crop", link: "/categories/Beauty" },
  { title: "Pet Care", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&q=80&auto=format&fit=crop", link: "/categories/Grocery" },
  { title: "New Arrivals in Toys", img: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80&auto=format&fit=crop", link: "/categories/Toys" },
  { title: "Sports & Fitness", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80&auto=format&fit=crop", link: "/categories/Sports" },
];

function BoxImage({ src }) {
  const [url, setUrl] = useState(src);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setUrl(src);
    img.onerror = () => setUrl(FALLBACK_IMG);
    img.src = src;
  }, [src]);

  return <div className="box-img" style={{ backgroundImage: `url('${url}')` }} />;
}

function Section({ title, items, addToCart, link }) {
  return (
    <div className="page">
      <div className="section-head">
        <h2 className="page-title">{title}</h2>
        {link && <Link to={link}>See all</Link>}
      </div>
      <div className="product-grid">
        {items.slice(0, 10).map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default function Home({ addToCart }) {
  const byCategory = (c) => products.filter((p) => p.category === c);
  const deals = products.filter((p) => p.deal);

  return (
    <>
      <div className="hero-section">
        <div className="hero-msg">
          <p>
            You are on amazon.com. You can shop on Amazon India for millions of products.{" "}
            <a href="https://www.amazon.in" target="_blank" rel="noreferrer">
              Click here to go to Amazon
            </a>
          </p>
        </div>
      </div>

      {[boxes.slice(0, 4), boxes.slice(4)].map((row, i) => (
        <div className="shop" key={i}>
          {row.map((box) => (
            <div className="box" key={box.title}>
              <div className="box-content">
                <h2>{box.title}</h2>
                <BoxImage src={box.img} />
                <Link to={box.link}>See more</Link>
              </div>
            </div>
          ))}
        </div>
      ))}

      <Section title="Today's Deals" items={deals} addToCart={addToCart} link="/products" />
      <Section title="Best Sellers in Electronics" items={byCategory("Electronics")} addToCart={addToCart} link="/categories/Electronics" />
      <Section title="Fashion Bestsellers" items={byCategory("Fashion")} addToCart={addToCart} link="/categories/Fashion" />
      <Section title="Home & Furniture Essentials" items={byCategory("Home")} addToCart={addToCart} link="/categories/Home" />
      <Section title="Beauty & Personal Care" items={byCategory("Beauty")} addToCart={addToCart} link="/categories/Beauty" />
      <Section title="Books, Toys & Games" items={[...byCategory("Books"), ...byCategory("Toys")]} addToCart={addToCart} link="/categories/Books" />
      <Section title="Fresh Grocery & Sports" items={[...byCategory("Grocery"), ...byCategory("Sports")]} addToCart={addToCart} link="/categories/Grocery" />
    </>
  );
}
