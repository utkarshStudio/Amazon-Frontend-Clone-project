# Amazon Clone 🛒

A clean and responsive **Amazon-inspired e-commerce frontend** built with **React, Vite, and JavaScript** as my **1st Year project**.

<div align="center">

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-Visit%20Website-orange?style=for-the-badge)](https://euphonious-profiterole-63e20a.netlify.app/)
[![GitHub](https://img.shields.io/badge/💻%20GitHub-View%20Repository-black?style=for-the-badge&logo=github)](https://github.com/utkarshStudio/Amazon-Frontend-Clone-project)

</div>

> **Disclaimer:** This is a student project created for educational purposes only. It is not affiliated with or endorsed by Amazon.

---

## 📌 About the Project

This project is a frontend Amazon-inspired e-commerce website built using React and Vite.

It focuses on practicing React fundamentals while creating a functional shopping experience with product browsing, search, categories, cart management, checkout, authentication, orders, routing, LocalStorage, and responsive design.

---

## ✨ Features

### 🏠 Home Page
- Amazon-inspired navigation
- Search bar
- Delivery location
- Account and Orders
- Shopping cart
- Responsive mobile menu
- Hero section
- Product categories
- Today's Deals
- Best-selling products
- Responsive footer

### 🔎 Product Search
- Search by product name
- Search by category
- Search by description
- Matching search results
- No-results handling

### 🛍️ Products
- Product listing
- Product cards
- Product images
- Ratings and reviews
- Price and MRP
- Discount percentage
- Prime indicator
- Free delivery
- Add to Cart

### 📦 Product Details
- Product image
- Product information
- Rating
- Price
- Description
- Stock information
- Quantity selector
- Add to Cart
- Buy Now

### 🗂️ Categories
- Electronics
- Fashion
- Home
- Beauty
- Books
- Grocery
- Toys
- Sports

### 🛒 Shopping Cart
- Add products
- Increase quantity
- Decrease quantity
- Remove products
- Subtotal calculation
- Item count
- Checkout
- Quick cart dropdown

### 💳 Demo Checkout
- Delivery address
- Name
- Street address
- City
- PIN code
- Order summary
- Delivery charges
- Free delivery calculation
- Place Order

> This is a demo checkout. No real payment is processed.

### 📋 Orders
- Order ID
- Order date
- Total amount
- Delivery address
- Ordered products
- Quantity
- Delivery status

### 🔐 Demo Authentication
- Login
- Registration
- Password confirmation
- Basic form validation
- LocalStorage-based demo user

> Authentication is implemented only for learning purposes and is not a real secure authentication system.

### 📱 Responsive Design
- Desktop
- Tablet
- Mobile
- Responsive navigation
- Responsive product grids
- Responsive cart and checkout

---

## ⚛️ Tech Stack

| Technology | Purpose |
|---|---|
| **React** | User interface |
| **Vite** | Development and build tool |
| **JavaScript ES6+** | Application logic |
| **React Router** | Routing and navigation |
| **CSS3** | Styling and responsive design |
| **Lucide React** | Icons |
| **LocalStorage** | Data persistence |

---

## 🧠 React Concepts Used

- Components
- Props
- `useState`
- `useEffect`
- React Router
- Form handling
- LocalStorage
- Responsive CSS
- Reusable components

---

## 📊 Product Data

The project contains **48 sample products** across different categories.

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

## 📂 Project Structure

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

## 💾 LocalStorage

The application uses browser LocalStorage to preserve:

```text
amazon_cart
amazon_orders
amazon_user
```

This allows cart, order, and demo user data to remain after refreshing the browser.

---

## 🎨 UI Design

The interface includes:

- Dark navigation bar
- Secondary navigation
- Search bar
- Product cards
- Shopping sections
- Amazon-inspired colors
- Responsive grids
- Hover effects
- Mobile navigation

The styling is written using regular **CSS3**.

---

## 📦 Installation

### Clone the repository

```bash
git clone https://github.com/utkarshStudio/Amazon-Frontend-Clone-project.git
```

### Open the project

```bash
cd Amazon-Frontend-Clone-project
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Then open the local URL provided by Vite.

---

## 🏗️ Production Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run ESLint

```bash
npm run lint
```

---

## 📱 Main Pages

| Page | Purpose |
|---|---|
| Home | Main shopping homepage |
| Products | Product listing |
| Product Details | Individual product |
| Categories | Category browsing |
| Search Results | Search products |
| Cart | Manage cart |
| Checkout | Address and order |
| Orders | Previous orders |
| Login | Demo login |
| Register | Demo registration |
| 404 | Unknown page handling |

---

## 🎯 Project Goals

This project was created to practice:

- React fundamentals
- Component-based development
- Props and state
- React Hooks
- React Router
- Form handling
- LocalStorage
- JavaScript
- Responsive CSS
- Reusable components
- E-commerce functionality
- Git and GitHub

---

## 🚀 What I Learned

Building this project helped me understand how a frontend application can be divided into reusable components and connected using routing and state management.

I practiced building:

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

---

## 🔮 Future Improvements

- Backend integration
- Database integration
- Secure authentication
- Real payment gateway
- Product reviews
- Wishlist
- Advanced filtering and sorting
- User profiles
- Real order tracking
- Admin dashboard
- API-based product data

---

## 👨‍💻 Author

### Utkarsh Gupta

**B.Tech Computer Science Student**

This project was developed as part of my **1st Year learning journey in React, JavaScript, and Web Development**.

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
🧩 Reusable Components
```

---

## 🔗 Project Links

<div align="center">

[🚀 Live Demo](https://euphonious-profiterole-63e20a.netlify.app/)

[💻 GitHub Repository](https://github.com/utkarshStudio/Amazon-Frontend-Clone-project)

</div>

---

## 📄 License

This project is intended for **educational and learning purposes**.

Amazon and its related branding belong to their respective owners.

**Made with React by Utkarsh Gupta ❤️**
