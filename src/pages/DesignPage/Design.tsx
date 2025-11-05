import Carousel from "../../components/Carousel/Carousel"
import Footer from "../../components/Footer/Footer";

export default function Design() {

    const path = process.env.NODE_ENV === "production" ? "/bmwstore" : "";

    return (
        <>
            <Carousel />

            <div className="container marketing mt-5">


                <div className="row text-center mb-5">
                    <div className="col-lg-4">
                        <img
                            src={`${path}/design-images/salon1.webp`}
                            alt="Innovation"
                            className="rounded-circle"
                            style={{ width: '140px', height: '140px', objectFit: 'cover' }}
                        />
                        <h2 className="fw-normal mt-3">Steering Wheel</h2>
                        <p>Ergonomic design ensures precise control and ultimate driving feel.</p>
                        <p><a className="btn btn-secondary" href="#">Explore »</a></p>
                    </div>

                    <div className="col-lg-4">
                        <img
                            src={`${path}/design-images/salon2.webp`}
                            alt="Innovation"
                            className="rounded-circle"
                            style={{ width: '140px', height: '140px', objectFit: 'cover' }}
                        />
                        <h2 className="fw-normal mt-3">Dashboard/Console</h2>
                        <p>Sleek interface with intuitive controls for effortless navigation.</p>
                        <p><a className="btn btn-secondary" href="#">Discover »</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img
                            src={`${path}/design-images/salon3.jpg`}
                            alt="Innovation"
                            className="rounded-circle"
                            style={{ width: '140px', height: '140px', objectFit: 'cover' }}
                        />
                        <h2 className="fw-normal mt-3">Leather</h2>
                        <p>Premium leather surfaces crafted for comfort and luxury touch.</p>
                        <p><a className="btn btn-secondary" href="#">Experience »</a></p>
                    </div>
                </div>

                <hr className="featurette-divider" />


                <div className="row featurette mb-5">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">
                            Bold Exterior Design <span className="text-body-secondary">Unforgettable presence.</span>
                        </h2>
                        <p className="lead">Dynamic lines and aggressive proportions create a look thats instantly recognizable on the road.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={`${path}/design-images/salon4.webp`} className="featurette-image img-fluid mx-auto" alt="Bold Exterior Design" />
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette mb-5">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">
                            Interior Elegance <span className="text-body-secondary">Comfort meets style.</span>
                        </h2>
                        <p className="lead">Spacious cabin, premium finishes, and intuitive layout designed for the modern driver.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src={`${path}/design-images/salon5.jpg`} className="featurette-image img-fluid mx-auto" alt="Interior Elegance" />
                    </div>
                </div>

                <hr className="featurette-divider" />

                <div className="row featurette mb-5">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">
                            Advanced Technology <span className="text-body-secondary">Innovation in motion.</span>
                        </h2>
                        <p className="lead">State-of-the-art infotainment, driver assistance, and connectivity for a smarter ride.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={`${path}/design-images/salon6.jpg`} className="featurette-image img-fluid mx-auto" alt="Advanced Technology" />
                    </div>
                </div>

                <hr className="featurette-divider" />
            </div>

            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                            Ultimate BMW Experience
                        </h1>
                        <p className="lead">
                            Discover the perfect blend of performance, luxury, and cutting-edge design. Each BMW is crafted for precision, comfort, and driving pleasure.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" className="btn btn-lg px-4 me-md-2 fw-bold">
                                Explore Models
                            </button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img
                            className="rounded-lg-3"
                            src={`${path}/design-images/luxury3.jpg`}
                            alt="BMW Hero"
                            width="720"
                        />
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}