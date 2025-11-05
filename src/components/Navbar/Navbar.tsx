'use client'
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const router = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");

  const handleNavClick = (href: string) => {
    const offcanvasEl = document.getElementById("offcanvasNavbar");
    if (offcanvasEl) {
      const instance = (window as any).bootstrap?.Offcanvas.getInstance(offcanvasEl)
        || new (window as any).bootstrap.Offcanvas(offcanvasEl);
      instance.hide();

      offcanvasEl.addEventListener('hidden.bs.offcanvas', () => {
        router(href);
      }, { once: true });
    } else {
      router(href);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router("/");
  };

  return (
    <nav className={`navbar ${styles.container}`}>
      <div className={`container-fluid ${styles.containerFluid}`}>
        <div className={styles.menu}>
          <a className={`navbar-brand ${styles.logo}`} href="/">
            <img className={styles.img} src="logo.png" alt="" />
          </a>
          <ul>
            {isAuthenticated ? (
              <>
                <li><Link className={styles.link} to="/models">Models</Link></li>
                <li><Link className={styles.link} to="/shop">Visit Online Shop</Link></li>
                <li><Link className={styles.link} to="/design">Interior Design</Link></li>
                <li><Link className={styles.link} to="/blog">Blog</Link></li>
              </>
            ) : null}
          </ul>
        </div>

        <div className={styles.menu}>
          <ul>
            {isAuthenticated ? (
              <li style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px"
              }}>
                <li><Link className={styles.link1} to="/basket"><FontAwesomeIcon icon={faBasketShopping}/></Link></li>
                <button className={styles.link1} onClick={handleLogout}

                >Logout</button>                
              </li>
            ) : (
              <>                
                <li><Link className={styles.link1} to="/">Sign In</Link></li>
                <li><Link className={styles.link1} to="/signup">Sign Up</Link></li>
              </>
            )}
          </ul>
        </div>

        <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}
        className={styles.menuicon}>
          <Link className={`${styles.link1} ${styles.menuicon2}`} to="/basket"><FontAwesomeIcon icon={faBasketShopping}/></Link>
          <button
          className={`navbar-toggler ${styles.menuicon}`}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${styles.icon}`}></span>          
        </button>
        </div>

        <div
          className={`offcanvas offcanvas-top ${styles.sidebar}`}
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className={`offcanvas-header ${styles.headers}`}>
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <a className={`navbar-brand ${styles.logo}`} href="/">
                <img className={styles.img} src="preview.png" alt="logo" />
              </a>
            </h5>
            <div className={styles.header}>
              <ul>
                {isAuthenticated ? (
                  <li>
                    <button className={styles.link} onClick={handleLogout}
                      style={{
                        border: "0",
                        backgroundColor: "transparent"
                      }}
                    >Logout</button>
                  </li>
                ) : (
                  <>
                    <li><Link className={styles.link} to="/" onClick={() => handleNavClick("/signin")}>Sign In</Link></li>
                    <li><Link className={styles.link} to="/signup" onClick={() => handleNavClick("/signup")}>Sign Up</Link></li>
                  </>
                )}
              </ul>              
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav align-items-start">
              <li className="nav-item">
                <Link className={`nav-link active ${styles.tag}`} to="/models" onClick={() => handleNavClick("/models")}>Models</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.tag}`} to="/shop" onClick={() => handleNavClick("/shop")}>Visit Online Shop</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.tag}`} to="/design" onClick={() => handleNavClick("/design")}>Interior Design</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.tag}`} to="/blog" onClick={() => handleNavClick("/blog")}>Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
