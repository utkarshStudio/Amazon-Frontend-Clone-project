# Amazon Clone 🛒

A simple and responsive **Amazon Clone** built as my **1st Year React + Vite + JavaScript project**.

This project was created by **Utkarsh Gupta** to practice React fundamentals, component-based development, routing, state management, responsive UI design, and basic e-commerce functionality.

> **Disclaimer:** This is a student project created for educational purposes only. It is not affiliated with or endorsed by Amazon.

---

## 👨‍💻 About the Project

The **Amazon Clone** is a frontend e-commerce website inspired by the Amazon shopping experience.

It includes a complete shopping flow where users can:

- Browse products
- Search products
- Explore categories
- View product details
- Add products to cart
- Update product quantities
- Remove products
- Create a demo account
- Sign in with demo credentials
- Enter a delivery address
- Place demo orders
- View previous orders
- Use the website on desktop, tablet, and mobile devices

The project focuses on keeping the code **simple, clean, and beginner-friendly** while demonstrating practical React concepts.

---

## ✨ Features

### 🏠 Home Page
- Amazon-style navigation bar
- Search bar
- Delivery location section
- Account and Orders navigation
- Shopping cart
- Responsive mobile menu
- Hero section
- Category shopping boxes
- Today's Deals section
- Electronics best sellers
- Fashion products
- Home & Furniture
- Beauty & Personal Care
- Books, Toys & Games
- Grocery & Sports products
- Footer with multiple navigation sections

### 🔎 Product Search
- Search products using the navigation search bar
- Search by:
  - Product name
  - Category
  - Description
- Displays matching results
- Shows a message when no products are found

### 🛍️ Products
- Product listing page
- Product cards
- Product images
- Product names
- Ratings
- Review counts
- Current price
- M.R.P.
- Discount percentage
- Prime indicator
- Free delivery text
- Add to Cart button

### 📦 Product Details
- Individual product page
- Large product image
- Product name
- Rating
- Price
- Description
- Stock information
- Quantity selector
- Add to Cart
- Buy Now

### 🗂️ Categories
Available categories include:

- Electronics
- Fashion
- Home
- Beauty
- Books
- Grocery
- Toys
- Sports

Users can filter products by category.

### 🛒 Shopping Cart
- View all cart items
- Increase quantity
- Decrease quantity
- Remove products
- Calculate subtotal
- Display total number of items
- Proceed to checkout
- Quick cart dropdown from the navbar

### 💳 Demo Checkout
- Delivery address form
- Name
- Street address
- City
- PIN code
- Order summary
- Subtotal calculation
- Delivery charge calculation
- Free delivery for qualifying orders
- Place Order button

> This is a **demo checkout**. No real payment is processed.

### 📋 Orders
- View placed orders
- Order ID
- Order date
- Total amount
- Delivery address
- Ordered products
- Quantity
- Delivery status

### 🔐 Demo Authentication
Includes:

- Sign In page
- Register page
- Password confirmation
- Basic form validation
- LocalStorage-based demo user
- Navigation after sign in/register

> Authentication is implemented only for learning purposes and is **not a real secure authentication system**.

### 📱 Responsive Design
The UI adapts to different screen sizes with:

- Desktop layout
- Tablet-friendly layouts
- Mobile navigation
- Mobile menu
- Responsive product grids
- Flexible shopping sections
- Responsive cart and checkout pages

---

## 🧩 Project Structure

```text
amazon-clone/
│
├── public/
│
├── src/
│   ├── assets/
│   │   └── amazon_logo_cropped.png
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── ScrollToTop.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Categories.jsx
│   │   ├── SearchResults.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Orders.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── PageNotFound.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── data.js
│   └── style.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## ⚛️ Tech Stack

| Technology | Purpose |
|---|---|
| **React** | Building the user interface |
| **Vite** | Development server and build tool |
| **JavaScript ES6+** | Application logic |
| **React Router** | Page navigation and routing |
| **CSS3** | Styling and responsive design |
| **Lucide React** | Icons |
| **LocalStorage** | Saving cart, orders and demo user data |

---

## 🧠 React Concepts Used

This project helped me practice several React fundamentals:

### Components
The UI is divided into reusable components such as:

- `Header`
- `Footer`
- `ProductCard`
- `ScrollToTop`

### Props

Data and functions are passed between components using props.

Example:

```jsx
<ProductCard
  product={product}
  addToCart={addToCart}
/>
```

### State

React `useState` is used for:

- Cart
- Orders
- Search input
- Mobile menu
- Cart dropdown
- Login forms
- Register forms
- Product quantity

### Effects

`useEffect` is used to synchronize application data with LocalStorage.

### Routing

React Router handles pages such as:

```text
/
 /products
 /product/:id
 /categories
 /categories/:name
 /search
 /cart
 /checkout
 /orders
 /login
 /register
```

### LocalStorage

Cart and order information remain available after refreshing the page.

```text
amazon_cart
amazon_orders
amazon_user
```

---

## 📊 Product Data

The project contains **48 sample products** across multiple categories.

Each product contains information such as:

```js
{
  id,
  name,
  price,
  mrp,
  rating,
  reviews,
  category,
  deal,
  prime,
  image,
  description
}
```

This makes it easy to reuse the same product data across:

- Home page
- Product page
- Search
- Categories
- Cart
- Checkout
- Orders

---

## 🔄 Shopping Flow

```text
Home
  ↓
Browse Products
  ↓
Search / Categories
  ↓
Product Details
  ↓
Add to Cart
  ↓
Shopping Cart
  ↓
Checkout
  ↓
Enter Address
  ↓
Place Order
  ↓
Your Orders
```

---

## 🛒 Cart Logic

The application handles cart operations using React state.

### Add Product

If the product is already in the cart, its quantity increases.

Otherwise, the product is added as a new cart item.

### Change Quantity

Users can increase or decrease the quantity.

If the quantity reaches zero, the item is removed.

### Remove Product

Products can be directly removed from the cart.

### Subtotal

The subtotal is calculated from:

```text
Product Price × Quantity
```

---

## 💾 Data Persistence

The project uses browser LocalStorage instead of a backend database.

This allows the application to preserve:

```text
Cart Data
Order Data
Demo User
```

even after refreshing the browser.

---

## 🎨 UI Design

The design follows an Amazon-inspired layout with:

- Dark navigation bar
- Secondary navigation panel
- Search bar
- Product cards
- Shopping sections
- Amazon-style colors
- Responsive grids
- Hover effects
- Buttons and interactive elements
- Mobile navigation

The styling is written using regular **CSS3** to keep the project easy to understand.

---

## 🖼️ Images

The project uses:

- Local Amazon logo asset
- Online product images
- Online category images
- Hero background image

Product images are represented inside the project data and displayed dynamically through React.

---

## 📦 Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into the project:

```bash
cd amazon-clone
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown by Vite.

---

## 🏗️ Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

---

## 📱 Main Pages

| Page | Purpose |
|---|---|
| Home | Main shopping homepage |
| Products | Complete product listing |
| Product Details | Individual product information |
| Categories | Category-based browsing |
| Search Results | Search products |
| Cart | Manage shopping cart |
| Checkout | Enter address and place order |
| Orders | View previous orders |
| Login | Demo sign-in |
| Register | Demo account creation |
| 404 | Unknown page handling |

---

## 🎯 Project Goals

The main goals of this project were to learn:

- React fundamentals
- Vite project setup
- Component-based development
- Props and state
- React Hooks
- React Router
- Form handling
- LocalStorage
- JavaScript logic
- Responsive CSS
- Reusable components
- Basic e-commerce functionality
- Git and GitHub project management

---

## 🚀 What I Learned

Building this project helped me understand how a frontend application can be divided into reusable components and connected together using routing and state.

I practiced creating:

- Reusable React components
- Dynamic product pages
- Search functionality
- Category filtering
- Shopping cart logic
- Checkout flow
- Order management
- Form handling
- LocalStorage persistence
- Responsive layouts

This project was an important step in my **1st Year journey of learning React and frontend development**.

---

## 🔮 Future Improvements

Possible future improvements include:

- Real backend integration
- Database integration
- Secure authentication
- Real payment gateway
- Product reviews
- Wishlist
- Product filtering and sorting
- Product pagination
- User profiles
- Real order tracking
- Admin dashboard
- API-based product data

---

## 👨‍💻 Author

### Utkarsh Gupta

**B.Tech Computer Science Student**

This project was developed as part of my **1st Year learning journey in React, JavaScript and Web Development**.

---

## ⭐ Project Highlights

```text
⚛️ React + Vite
🛒 E-commerce functionality
🔎 Product search
🗂️ Category filtering
📦 Product details
🛍️ Shopping cart
💳 Demo checkout
📋 Order management
🔐 Demo authentication
💾 LocalStorage
📱 Responsive design
🎨 Amazon-inspired UI
🧩 Reusable components
```

---

## 📄 License

This project is intended for **educational and learning purposes**.

Amazon and its related branding belong to their respective owners.

**Made with React by Utkarsh Gupta ❤️**