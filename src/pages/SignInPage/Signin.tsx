import { useNavigate, Link } from "react-router-dom";
import styles from "./Signin.module.css";
import { useState } from "react";

export default function SignIn() {

  const path = process.env.NODE_ENV === "production" ? "/bmwstore" : "";

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setError("No registered user found. Please Sign Up.");
      return;
    }

    const user = JSON.parse(storedUser);
    if (email === user.email && password === user.password) {
      localStorage.setItem("token", "fake-token");
      navigate("/models");
    } else {
      setError("Email or password is incorrect");
    }
  };

  return (
    <div className={styles.signinWrapper}>
      <div className={`d-flex ${styles.sign}`}>
        <form
          className="form-signin p-4"
          style={{ maxWidth: "400px", width: "100%" }}
          onSubmit={handleSignIn}
        >
          <div className="text-center mb-4">
            <img className="mb-3" src={`${path}/preview.png`} alt="Logo" width="72" height="72" />
            <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>

            <Link to="/signup" style={{ textDecoration: "none" }}>Sign Up</Link>
          </div>

          <div className="mb-3">
            <a href="#" style={{ textDecoration: "none", color: "darkblue" }}>Forget a Password?</a>
          </div>

          <button className="w-100 btn btn-lg btn-secondary" type="submit">
            Sign in
          </button>

          <p className="mt-5 mb-3 text-muted text-center">© 2017-2025</p>
        </form>
      </div>
    </div>
  );
}
