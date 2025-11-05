import Footer from "../../components/Footer/Footer";

export default function Blog() {
    const path = process.env.NODE_ENV === "production" ? "/bmwstore" : "";

    return (
        <>
            <main className="container">
                
                <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                    <div className="col-lg-6 px-0">
                        <h1 className="display-4 fst-italic">
                            The Art of BMW Design
                        </h1>
                        <p className="lead my-3">
                            Discover the philosophy behind BMW timeless aesthetics — where precision engineering meets bold creativity and passion for perfection.
                        </p>
                        <p className="lead mb-0">
                            <a href="#" className="text-body-emphasis fw-bold">
                                Continue reading...
                            </a>
                        </p>
                    </div>
                </div>
                
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary-emphasis">Innovation</strong>
                                <h3 className="mb-0">The Future of Driving</h3>
                                <div className="mb-1 text-body-secondary">Nov 5, 2025</div>
                                <p className="card-text mb-auto">
                                    Explore how BMW integrates advanced AI systems and sustainability in its latest generation vehicles.
                                </p>
                                <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                                    Continue reading
                                </a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img
                                    src={`${path}/blog-images/bmwal.jpg`}
                                    alt="BMW AI"
                                    width="200"
                                    height="250"
                                    className="bd-placeholder-img"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
                                <h3 className="mb-0">Luxury in Every Line</h3>
                                <div className="mb-1 text-body-secondary">Oct 28, 2025</div>
                                <p className="mb-auto">
                                    From the handcrafted leather seats to sculpted dashboards — BMW interiors redefine modern luxury.
                                </p>
                                <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                                    Continue reading
                                </a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img
                                    src={`${path}/blog-images/luxury1.webp`}
                                    alt="BMW Interior"
                                    width="200"
                                    height="250"
                                    className="bd-placeholder-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row g-5">
                    <div className="col-md-8">
                        <h3 className="pb-4 mb-4 fst-italic border-bottom">Inside BMW Design Studio</h3>

                        <article className="blog-post">
                            <h2 className="display-5 link-body-emphasis mb-1">Where Vision Becomes Form</h2>
                            <p className="blog-post-meta">November 2025 by <a href="#">BMW Design Team</a></p>

                            <p>
                                Every curve, stitch, and detail in a BMW begins as an artistic vision. The design team works closely with engineers to ensure aesthetics serve function — and emotion.
                            </p>
                            <blockquote className="blockquote">
                                <p>“Design is not just what you see — its what you feel when you drive.”</p>
                            </blockquote>

                            <h3>Material Perfection</h3>
                            <ul>
                                <li>Hand-selected premium leather</li>
                                <li>Eco-friendly recycled aluminum trims</li>
                                <li>Custom interior lighting design</li>
                            </ul>
                            <p>
                                These choices reflect BMW commitment to sustainability without compromising elegance or comfort.
                            </p>
                        </article>

                        <article className="blog-post">
                            <h2 className="display-5 link-body-emphasis mb-1">Sculpting Motion</h2>
                            <p className="blog-post-meta">October 2025 by <a href="#">BMW Studio Munich</a></p>
                            <p>
                                The exterior lines of a BMW are crafted to channel air flow, reduce drag, and express pure motion even when standing still. Every surface has a purpose.
                            </p>
                            <ul>
                                <li>Fluid aerodynamic structure</li>
                                <li>Iconic kidney grille evolution</li>
                                <li>Lightweight materials meet power</li>
                            </ul>
                        </article>

                        <nav className="blog-pagination" aria-label="Pagination">
                            <a className="btn btn-outline-primary rounded-pill" href="#">Older</a>
                            <a className="btn btn-outline-secondary rounded-pill disabled" aria-disabled="true">Newer</a>
                        </nav>
                    </div>
                    
                    <div className="col-md-4">
                        <div className="position-sticky" style={{ top: "2rem" }}>
                            <div className="p-4 mb-3 bg-body-tertiary rounded">
                                <h4 className="fst-italic">About BMW Design</h4>
                                <p className="mb-0">
                                    BMW design combines emotion, innovation, and craftsmanship — crafting vehicles that feel alive even before ignition.
                                </p>
                            </div>

                            <div>
                                <h4 className="fst-italic">Recent Features</h4>
                                <ul className="list-unstyled">
                                    <li className="border-top py-3">
                                        <a href="#" className="link-body-emphasis text-decoration-none">The Future of Electric Luxury</a>
                                    </li>
                                    <li className="border-top py-3">
                                        <a href="#" className="link-body-emphasis text-decoration-none">Inside the i Series</a>
                                    </li>
                                    <li className="border-top py-3">
                                        <a href="#" className="link-body-emphasis text-decoration-none">The Story Behind BMW Concept Cars</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-4">
                                <h4 className="fst-italic">Follow BMW</h4>
                                <ol className="list-unstyled">
                                    <li><a href="#">Instagram</a></li>
                                    <li><a href="#">YouTube</a></li>
                                    <li><a href="#">Official BMW.com</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

        </>
    );
}