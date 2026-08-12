import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    localStorage.setItem("amazon_user", email);
    navigate("/");
  };

  return (
    <div className="page narrow">
      <div className="panel-box">
        <h2 className="page-title">Create account</h2>
        {error && <p style={{ fontSize: 13, color: "#cc0c39", marginBottom: 8 }}>{error}</p>}
        <form onSubmit={submit}>
          <div className="form-field">
            <label>Your name</label>
            <input required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-field">
            <label>Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-field">
            <label>Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label>Re-enter password</label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="btn" type="submit">Create your Amazon Clone account</button>
        </form>
        <p style={{ fontSize: 12, color: "#565959", marginTop: 12 }}>
          Demo sign up — any details will work.
        </p>
        <p style={{ fontSize: 13, marginTop: 16 }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#007185" }}>Sign in</Link>
        </p>
      </div>
    </div>
  );
}
