import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  const { pathname } = useLocation();
  const pageName = pathname.substring(1);

  return (
    <div className="page narrow empty" style={{ maxWidth: 560 }}>
      <h1 style={{ fontSize: 64, margin: 0, color: "#cc0c39", fontWeight: 700 }}>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The page <strong>"{pageName}"</strong> could not be found in this application.
      </p>
      <Link to="/" className="btn" style={{ display: "inline-block", marginTop: 16, width: "auto" }}>
        Go to Homepage
      </Link>
    </div>
  );
}
