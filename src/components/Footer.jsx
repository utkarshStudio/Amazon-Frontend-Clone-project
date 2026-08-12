import { Link } from "react-router-dom";
import logoImg from "@/assets/amazon_logo_cropped.png";

export default function Footer() {
  return (
    <footer>
      <button className="foot-panel1" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Back to Top
      </button>

      <div className="foot-panel2">
        <ul>
          <p>Get to Know Us</p>
          <Link to="/products">Careers</Link>
          <Link to="/products">Blog</Link>
          <Link to="/products">About Amazon</Link>
          <Link to="/products">Investor Relations</Link>
          <Link to="/categories/Electronics">Amazon Devices</Link>
          <Link to="/products">Amazon Science</Link>
        </ul>

        <ul>
          <p>Make Money with Us</p>
          <Link to="/products">Sell products on Amazon</Link>
          <Link to="/products">Become an Affiliate</Link>
          <Link to="/products">Advertise Your Products</Link>
          <Link to="/categories/Books">Self-Publish with Us</Link>
          <Link to="/products">Amazon Hub</Link>
        </ul>

        <ul>
          <p>Amazon Payment Products</p>
          <Link to="/checkout">Amazon Business Card</Link>
          <Link to="/checkout">Shop with Points</Link>
          <Link to="/checkout">Reload Your Balance</Link>
          <Link to="/checkout">Currency Converter</Link>
        </ul>

        <ul>
          <p>Let Us Help You</p>
          <Link to="/login">Your Account</Link>
          <Link to="/orders">Your Orders</Link>
          <Link to="/checkout">Shipping Rates</Link>
          <Link to="/orders">Returns</Link>
          <Link to="/products">Help</Link>
        </ul>
      </div>

      <div className="foot-panel3">
        <Link to="/"><img src={logoImg} alt="Amazon" className="logo" /></Link>
      </div>

      <div className="foot-panel4">
        <div className="pages">
          <Link to="/products">Conditions of Use</Link>
          <Link to="/products">Privacy Notice</Link>
          <Link to="/products">Your Ads Privacy Choices</Link>
        </div>
        <div className="copyright">© 1996–2023, Amazon.com, Inc. or its affiliates</div>
      </div>

      <p className="disclaimer">
        Disclaimer: This website is a student project made for educational purposes only.
        It is not affiliated with or endorsed by Amazon.
      </p>
    </footer>
  );
}
