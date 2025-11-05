import { useNavigate, Link } from "react-router-dom";
import styles from "./Signup.module.css";
import { useState } from "react";

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmpass) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmpass) {
      setError("Passwords do not match");
      return;
    }

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    navigate("/");
    setError('');
  };

  return (

    <div className={styles.signupWrapper}>
      <div className={`d-flex ${styles.signup}`}>
        <form
          className="form-signin p-4"
          style={{ maxWidth: "400px", width: "100%" }}
          onSubmit={handleSignUp}
        >
          <div className="text-center mb-4">
            <img className="mb-3" src="/preview.png" alt="Logo" width="72" height="72" />
            <h1 className="h3 mb-3 fw-normal">Create an Account</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="floatingName">Full Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingEmail">Email address</label>
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

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingConfirmPassword"
              placeholder="Confirm Password"
              value={confirmpass}
              onChange={(e) => setConfirmpass(e.target.value)}
            />
            <label htmlFor="floatingConfirmPassword">Confirm Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="termsCheck" />
              <label className="form-check-label" htmlFor="termsCheck">I agree to Terms</label>
            </div>

            <Link to="/" style={{ textDecoration: "none" }}>Sign In</Link>
          </div>

          <button className="w-100 btn btn-lg btn-secondary" type="submit">Sign Up</button>

          <p className="mt-5 mb-3 text-muted text-center">© 2017-2025</p>
        </form>
      </div>
    </div>
  );
}
