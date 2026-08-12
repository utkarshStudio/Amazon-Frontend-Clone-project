const img = (id) => `https://images.unsplash.com/${id}?w=600&q=80&auto=format&fit=crop`;

export const categories = [
  "Electronics",
  "Fashion",
  "Home",
  "Beauty",
  "Books",
  "Grocery",
  "Toys",
  "Sports",
];

export const products = [
  // ---------- Electronics ----------
  { id: 1, name: "Samsung Galaxy S23 Ultra 5G (256GB, Phantom Black)", price: 104999, mrp: 124999, rating: 4.6, reviews: 1203, category: "Electronics", deal: true, prime: true, image: img("photo-1601784551446-20c9e07cdbdb"), description: "Flagship smartphone with a 200MP camera, built-in S Pen, 6.8-inch Dynamic AMOLED display and all-day battery life." },
  { id: 2, name: "Wireless Noise Cancelling Over-Ear Headphones", price: 14999, mrp: 19999, rating: 4.5, reviews: 845, category: "Electronics", deal: true, prime: true, image: img("photo-1505740420928-5e560c06d30e"), description: "Over-ear headphones with active noise cancellation, 30 hours of playback and quick charging." },
  { id: 3, name: "Portable Bluetooth Speaker (Waterproof)", price: 3499, mrp: 4999, rating: 4.3, reviews: 560, category: "Electronics", deal: true, prime: true, image: img("photo-1608043152269-423dbba4e7e1"), description: "Compact waterproof speaker with deep bass and 12 hours of wireless playtime." },
  { id: 4, name: "Smart Fitness Band with Heart Rate Monitor", price: 2999, mrp: 3999, rating: 4.2, reviews: 2100, category: "Electronics", deal: true, prime: true, image: img("photo-1546868871-7041f2a55e12"), description: "Track steps, sleep and heart rate with a colour display and 10-day battery life." },
  { id: 5, name: "UltraBook 14\" Lightweight Laptop (16GB/512GB)", price: 89999, mrp: 99900, rating: 4.7, reviews: 410, category: "Electronics", deal: false, prime: true, image: img("photo-1593642632823-8f785ba67e45"), description: "Thin and light laptop with a stunning display, fast SSD and all-day battery for work on the go." },
  { id: 6, name: "Gaming Laptop RGB Backlit (RTX, 144Hz)", price: 129999, mrp: 149999, rating: 4.6, reviews: 230, category: "Electronics", deal: true, prime: true, image: img("photo-1593642632823-8f785ba67e45"), description: "High-performance gaming laptop with dedicated graphics, 144Hz display and RGB keyboard." },
  { id: 7, name: "Smartwatch Series 8 with GPS", price: 24999, mrp: 29900, rating: 4.4, reviews: 770, category: "Electronics", deal: true, prime: true, image: img("photo-1484704849700-f032a568e944"), description: "Always-on retina display, blood-oxygen sensor, GPS and swim-proof design." },
  { id: 8, name: "Mechanical Keyboard (Hot-Swappable)", price: 5499, mrp: 6999, rating: 4.5, reviews: 980, category: "Electronics", deal: true, prime: true, image: img("photo-1542751371-adc38448a05e"), description: "Tactile mechanical switches, RGB lighting and a sturdy aluminium frame for typing and gaming." },

  // ---------- Fashion ----------
  { id: 9, name: "Women's Pleated Co-ord Set (Blue)", price: 2199, mrp: 3999, rating: 4.2, reviews: 320, category: "Fashion", deal: true, prime: true, image: img("photo-1584998316204-3b1e3b1895ae"), description: "Lightweight pleated top and trouser set, perfect for summer outings and casual workdays." },
  { id: 10, name: "Satin Slip Maxi Dress (Yellow)", price: 1799, mrp: 2999, rating: 4.0, reviews: 210, category: "Fashion", deal: false, prime: true, image: img("photo-1554412933-514a83d2f3c8"), description: "Flowy satin slip dress with adjustable straps and a soft drape for parties and brunches." },
  { id: 11, name: "Everyday Cotton Trousers (Unisex)", price: 1099, mrp: 1799, rating: 4.1, reviews: 540, category: "Fashion", deal: false, prime: true, image: img("photo-1532453288672-3a27e9be9efd"), description: "Breathable cotton trousers with a relaxed fit and deep pockets. Available in multiple shades." },
  { id: 12, name: "Men's Classic Denim Jacket", price: 2499, mrp: 3999, rating: 4.4, reviews: 180, category: "Fashion", deal: true, prime: true, image: img("photo-1551488831-00ddcb6c6bd3"), description: "Timeless denim jacket with a comfortable fit, perfect for layering through the seasons." },
  { id: 13, name: "Lightweight Running Shoes", price: 3499, mrp: 4999, rating: 4.5, reviews: 980, category: "Fashion", deal: true, prime: true, image: img("photo-1542291026-7eec264c27ff"), description: "Cushioned running shoes with breathable mesh and a grippy outsole for everyday training." },
  { id: 14, name: "Leather Strap Analog Watch", price: 4999, mrp: 7999, rating: 4.6, reviews: 410, category: "Fashion", deal: false, prime: true, image: img("photo-1523275335684-37898b6baf30"), description: "Minimalist analog watch with genuine leather strap and water-resistant case." },
  { id: 15, name: "Aviator Sunglasses (UV400)", price: 1299, mrp: 1999, rating: 4.3, reviews: 760, category: "Fashion", deal: true, prime: true, image: img("photo-1523275335684-37898b6baf30"), description: "Classic aviator sunglasses with polarised UV400 lenses and a lightweight metal frame." },
  { id: 16, name: "Waterproof Travel Backpack (30L)", price: 1799, mrp: 2499, rating: 4.4, reviews: 1200, category: "Fashion", deal: true, prime: true, image: img("photo-1553062407-98eeb64c6a62"), description: "Durable 30L backpack with laptop sleeve, USB port and water-repellent fabric." },

  // ---------- Home & Furniture ----------
  { id: 17, name: "Multi-Layer Wooden Trouser Hanger (Pack of 2)", price: 799, mrp: 1299, rating: 4.2, reviews: 220, category: "Home", deal: true, prime: true, image: img("photo-1490481651871-ab68de25d43d"), description: "Space-saving 5-layer hanger for trousers, jeans and scarves. Smooth rods keep clothes crease-free." },
  { id: 18, name: "Minimal Study Desk with Drawer (White)", price: 8999, mrp: 11999, rating: 4.4, reviews: 150, category: "Home", deal: false, prime: true, image: img("photo-1518455027359-f3f8164ba6bd"), description: "Sturdy metal-frame writing desk with a smooth top and a wide storage drawer. Easy to assemble." },
  { id: 19, name: "Velvet Accent Chair (Beige)", price: 11499, mrp: 14999, rating: 4.3, reviews: 95, category: "Home", deal: true, prime: true, image: img("photo-1589779256250-a8743f78f4af"), description: "Soft velvet upholstery with gold-finish legs. Comfortable seating for a study or living room." },
  { id: 20, name: "3-Seater Fabric Sofa (Charcoal Grey)", price: 32999, mrp: 39999, rating: 4.5, reviews: 60, category: "Home", deal: false, prime: true, image: img("photo-1567538096630-e0c55bd6374c"), description: "Spacious 3-seater sofa with high-density foam cushions and a sturdy solid-wood frame." },
  { id: 21, name: "Modern LED Table Lamp (Dimmable)", price: 1499, mrp: 2299, rating: 4.2, reviews: 340, category: "Home", deal: true, prime: true, image: img("photo-1538688525198-9b88f6f53126"), description: "Touch-control dimmable LED lamp with 3 colour temperatures for reading and working." },
  { id: 22, name: "5-Tier Bookshelf (Engineered Wood)", price: 6999, mrp: 8999, rating: 4.3, reviews: 210, category: "Home", deal: false, prime: true, image: img("photo-1583845112203-29329902332e"), description: "Tall open bookshelf with five sturdy shelves and an anti-tip wall anchor included." },
  { id: 23, name: "Drip Coffee Maker (12 Cup)", price: 4999, mrp: 6499, rating: 4.4, reviews: 480, category: "Home", deal: true, prime: true, image: img("photo-1556909114-f6e7ad7d3136"), description: "Brew up to 12 cups with a programmable timer, keep-warm plate and reusable filter." },
  { id: 24, name: "Non-stick Cookware Set (8 Piece)", price: 2999, mrp: 4499, rating: 4.3, reviews: 290, category: "Home", deal: true, prime: true, image: img("photo-1556909114-f6e7ad7d3136"), description: "Complete 8-piece non-stick cookware set with even heat distribution and easy-grip handles." },

  // ---------- Beauty & Personal Care ----------
  { id: 25, name: "Daily Essentials Personal Care Kit", price: 999, mrp: 1599, rating: 4.1, reviews: 540, category: "Beauty", deal: true, prime: true, image: img("photo-1512496015851-a90fb38ba796"), description: "Complete grooming kit with shampoo, toothpaste, toothbrush, deodorant and razor for everyday use." },
  { id: 26, name: "Professional Makeup Kit with Brush Set", price: 2499, mrp: 3999, rating: 4.4, reviews: 320, category: "Beauty", deal: true, prime: true, image: img("photo-1522335789203-aabd1fc54bc9"), description: "Complete makeup kit with lipstick, eyeshadow, nail polish, mascara and a 6-piece brush set." },
  { id: 27, name: "Eau de Parfum Spray (100ml)", price: 2799, mrp: 3499, rating: 4.5, reviews: 410, category: "Beauty", deal: false, prime: true, image: img("photo-1556228720-195a672e8a03"), description: "Long-lasting floral woody fragrance for day and evening wear. Comes in an elegant bottle." },
  { id: 28, name: "Vitamin C Face Serum (30ml)", price: 699, mrp: 999, rating: 4.3, reviews: 980, category: "Beauty", deal: true, prime: true, image: img("photo-1571781926291-c477ebfd024b"), description: "Brightening vitamin C serum with hyaluronic acid for a radiant, hydrated complexion." },
  { id: 29, name: "Spa Bath & Body Gift Set", price: 1499, mrp: 2299, rating: 4.4, reviews: 180, category: "Beauty", deal: false, prime: true, image: img("photo-1556228720-195a672e8a03"), description: "Relaxing gift set with body wash, lotion, scrub and candle for a spa-like pampering at home." },
  { id: 30, name: "Cosmetics Brush Set (12 Piece)", price: 899, mrp: 1399, rating: 4.2, reviews: 230, category: "Beauty", deal: true, prime: true, image: img("photo-1522335789203-aabd1fc54bc9"), description: "Soft synthetic makeup brushes for flawless foundation, blush, contour and eye looks." },

  // ---------- Books ----------
  { id: 31, name: "The Complete Guide to Home Organisation", price: 499, mrp: 699, rating: 4.6, reviews: 410, category: "Books", deal: true, prime: true, image: img("photo-1543002588-bfa74002ed7e"), description: "A practical paperback full of storage ideas, decluttering routines and small-space hacks." },
  { id: 32, name: "Atomic Habits (Paperback)", price: 399, mrp: 599, rating: 4.8, reviews: 2200, category: "Books", deal: true, prime: true, image: img("photo-1544947950-fa07a98d237f"), description: "An easy and proven way to build good habits and break bad ones, by James Clear." },
  { id: 33, name: "Cookbook: Indian Kitchen Favourites", price: 649, mrp: 799, rating: 4.5, reviews: 180, category: "Books", deal: false, prime: true, image: img("photo-1481627834876-b7833e8f5570"), description: "100+ homestyle Indian recipes with step-by-step photos and regional classics." },
  { id: 34, name: "Ruled Notebook Set (Pack of 3)", price: 249, mrp: 399, rating: 4.3, reviews: 540, category: "Books", deal: true, prime: true, image: img("photo-1512820790803-83ca734da794"), description: "A3-size ruled notebooks with 200 pages each, sturdy binding and smooth paper." },
  { id: 35, name: "Sci-Fi Novel Box Set (5 Books)", price: 899, mrp: 1299, rating: 4.7, reviews: 120, category: "Books", deal: false, prime: true, image: img("photo-1512820790803-83ca734da794"), description: "A collector's box set of five bestselling science-fiction novels for hours of adventure." },
  { id: 36, name: "Children's Bedtime Picture Book", price: 349, mrp: 499, rating: 4.4, reviews: 260, category: "Books", deal: true, prime: true, image: img("photo-1543002588-bfa74002ed7e"), description: "A beautifully illustrated picture book perfect for winding down at bedtime." },

  // ---------- Grocery ----------
  { id: 37, name: "Premium Pet Food for Dogs & Cats (5kg)", price: 1899, mrp: 2399, rating: 4.7, reviews: 980, category: "Grocery", deal: true, prime: true, image: img("photo-1565674244283-993fb27a215f"), description: "Balanced nutrition with real protein, vitamins and omega-3 for a shiny coat and healthy digestion." },
  { id: 38, name: "Organic Green Tea Bags (100 Count)", price: 649, mrp: 899, rating: 4.4, reviews: 760, category: "Grocery", deal: true, prime: true, image: img("photo-1606377695906-236fdfcef767"), description: "100% natural green tea leaves, rich in antioxidants. Refreshing and caffeine-light." },
  { id: 39, name: "Instant Coffee Jar (200g)", price: 549, mrp: 699, rating: 4.3, reviews: 410, category: "Grocery", deal: false, prime: true, image: img("photo-1606377695906-236fdfcef767"), description: "Rich and aromatic instant coffee, quick to prepare and full of flavour." },
  { id: 40, name: "Pure Honey (1kg, Raw & Unprocessed)", price: 399, mrp: 549, rating: 4.5, reviews: 320, category: "Grocery", deal: true, prime: true, image: img("photo-1615529182904-14819c35db37"), description: "100% pure raw honey with no added sugar, perfect for daily wellness and cooking." },
  { id: 41, name: "Fresh Fruit Combo (Seasonal)", price: 799, mrp: 999, rating: 4.6, reviews: 150, category: "Grocery", deal: false, prime: true, image: img("photo-1509440159596-0249088772ff"), description: "Hand-picked seasonal fruits delivered fresh — apples, oranges, bananas and more." },
  { id: 42, name: "Roasted Mixed Nuts (500g)", price: 549, mrp: 749, rating: 4.5, reviews: 260, category: "Grocery", deal: true, prime: true, image: img("photo-1509440159596-0249088772ff"), description: "Crunchy roasted almonds, cashews and raisins with no added oil, great for snacking." },

  // ---------- Toys ----------
  { id: 43, name: "Kids Learning Toy Set with Colour Pencils", price: 1299, mrp: 1799, rating: 4.5, reviews: 320, category: "Toys", deal: true, prime: true, image: img("photo-1606092195730-5d7b9af1efc5"), description: "Fun activity set with toy plane, car, colour pencils and shapes to boost creativity in kids aged 3+." },
  { id: 44, name: "Building Blocks Set (500 Pieces)", price: 999, mrp: 1499, rating: 4.6, reviews: 540, category: "Toys", deal: true, prime: true, image: img("photo-1606092195730-5d7b9af1efc5"), description: "Colourful interlocking building blocks that develop creativity and motor skills for ages 6+." },
  { id: 45, name: "Remote Control Stunt Car", price: 1499, mrp: 1999, rating: 4.4, reviews: 180, category: "Toys", deal: false, prime: true, image: img("photo-1611606063065-ee7946f0787a"), description: "2.4GHz RC stunt car with 360° flips, rechargeable battery and rugged off-road tyres." },

  // ---------- Sports ----------
  { id: 46, name: "Anti-Slip Yoga Mat (6mm)", price: 999, mrp: 1599, rating: 4.4, reviews: 540, category: "Sports", deal: true, prime: true, image: img("photo-1571019613454-1cb2f99b2d8b"), description: "Extra-thick eco-friendly yoga mat with a non-slip texture and carry strap." },
  { id: 47, name: "Adjustable Dumbbell Set (20kg)", price: 2499, mrp: 3499, rating: 4.6, reviews: 320, category: "Sports", deal: true, prime: true, image: img("photo-1571019613454-1cb2f99b2d8b"), description: "Space-saving adjustable dumbbells with quick-select weight plates for home workouts." },
  { id: 48, name: "Cushioned Training Shoes", price: 3999, mrp: 5499, rating: 4.5, reviews: 410, category: "Sports", deal: false, prime: true, image: img("photo-1591047139829-d91aecb6caea"), description: "Breathable training shoes with responsive cushioning and a flexible outsole for the gym." },
];

export function rupees(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}
