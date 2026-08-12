import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const user = localStorage.getItem("amazon_user");

  const submit = (e) => {
    e.preventDefault();
    localStorage.setItem("amazon_user", email);
    navigate("/");
  };

  return (
    <div className="page narrow">
      <div className="panel-box">
        <h2 className="page-title">Sign in</h2>
        {user && <p style={{ fontSize: 13, color: "#007600" }}>Currently signed in as {user}</p>}
        <form onSubmit={submit}>
          <div className="form-field">
            <label>Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-field">
            <label>Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="btn" type="submit">Continue</button>
        </form>
        <p style={{ fontSize: 12, color: "#565959", marginTop: 12 }}>
          Demo sign in — any email and password will work.
        </p>
        <p style={{ fontSize: 13, marginTop: 16 }}>
          New to Amazon Clone?{" "}
          <Link to="/register" style={{ color: "#007185" }}>Create your account</Link>
        </p>
      </div>
    </div>
  );
}
