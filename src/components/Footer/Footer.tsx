'use client'
import { Link } from "react-router-dom";

export default function Footer() {

    const path = process.env.NODE_ENV === "production" ? "/bmwstore" : "";

    return (
        <div className="container">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">

                <div className="col mb-3">
                    <Link
                        to="/"
                        className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
                        aria-label="Bootstrap"
                    >
                        <img src={`${path}/logo.png`} alt="logo" 
                        style={{
                            width: "50px",
                            height: "50px"
                        }} />
                    </Link>
                    <p className="text-body-secondary">© 2025</p>
                </div>

                <div className="col mb-3"></div>


                <div className="col mb-3">
                    <h5>Experience BMW</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <Link to="/" className="nav-link p-0 text-body-secondary">BMW Group</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/" className="nav-link p-0 text-body-secondary">BMW Excellence Group</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/" className="nav-link p-0 text-body-secondary">BMW Motorrad</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/" className="nav-link p-0 text-body-secondary">Charging Network</Link>
                        </li>                        
                    </ul>
                </div>


                <div className="col mb-3">
                    <h5>Quick Links</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <Link to="/" className="nav-link p-0 text-body-secondary">Build your BMW</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/" className="nav-link p-0 text-body-secondary">BMW Financial Services</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/" className="nav-link p-0 text-body-secondary">BMW Safety</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/" className="nav-link p-0 text-body-secondary">EMI Calculator</Link>
                        </li>                        
                    </ul>
                </div>


                <div className="col mb-3">
                    <h5>Contact</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <Link to="/" className="nav-link p-0 text-body-secondary">Find a Dealler</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/features" className="nav-link p-0 text-body-secondary">Careers</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link to="/pricing" className="nav-link p-0 text-body-secondary">Contact Us</Link>
                        </li>                        
                    </ul>
                </div>
            </footer>
        </div>
    );
}
