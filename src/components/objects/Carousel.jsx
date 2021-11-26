import background from "../../img/background.png";
import background2 from "../../img/background2.png";
import background3 from "../../img/background3.png";

const Carousel = () => {
    return (
        <>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="display-2">Bootstrap</h1>
                            <h3>Complete Website Layout</h3>
                            <button className="btn btn-outline-light btn-lg">
                                VIEW DEMO
                            </button>
                            <button className="btn btn-primary btn-lg">
                                Get Started!
                            </button>
                        </div>
                        <img
                            className="d-block w-100"
                            src={background}
                            alt="First slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src={background2}
                            alt="Second slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src={background3}
                            alt="Third slide"
                        />
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    );
};

export default Carousel;
