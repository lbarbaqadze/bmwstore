import styles from "./Carousel.module.css";

export default function Carousel() {

    const path = process.env.NODE_ENV === "production" ? "/bmwstore" : "";

    return (
        <div id="myCarousel" className="carousel slide mb-3" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={`${path}/carousel-images/img1.jpg`} className={`d-block w-100 ${styles.carouselImage}`} alt="Slide 1" />
                    <div className="carousel-caption text-start">
                        <h1>Precision</h1>
                        <p className="opacity-75">Experience the ultimate blend of performance, innovation in every BMW design</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={`${path}/carousel-images/img2.jpg`} className={`d-block w-100 ${styles.carouselImage}`} alt="Slide 2" />
                    <div className="carousel-caption">
                        <h1>Elegance</h1>
                        <p>Sleek lines, refined details, and a driving experience crafted for perfection</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={`${path}/carousel-images/img3.jpg`} className={`d-block w-100 ${styles.carouselImage}`} alt="Slide 3" />
                    <div className="carousel-caption text-end">
                        <h1>Power</h1>
                        <p>Dynamic engineering meets bold design to deliver unmatched performance and style</p>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
