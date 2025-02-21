import HeroImg1 from '../../assets/heroImages/heroImg1.jpeg';
import HeroImg2 from '../../assets/heroImages/heroImg2.jpeg';
import HeroImg3 from '../../assets/heroImages/heroImg3.jpeg';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 w-full pb-0 pt-28">
      <div
        id="carouselExampleDark"
        data-bs-ride="carousel"
        data-bs-theme="dark"
        className="carousel carousel-dark slide relative"
      >
        {/* Indicators */}
        <div className="carousel-indicators absolute bottom-4 flex justify-center space-x-2">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active w-3 h-3 rounded-full bg-gray-500"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            className="w-3 h-3 rounded-full bg-gray-500"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            className="w-3 h-3 rounded-full bg-gray-500"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-interval="10000"
          >
            <img
              src={HeroImg1}
              className="d-block w-full h-[220px] lg:h-[70vh] object-cover "
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={HeroImg2}
              className="d-block w-full h-[220px] lg:h-[70vh] object-cover "
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={HeroImg3}
              className="d-block w-full h-[220px] lg:h-[70vh] object-cover "
              alt="Slide 3"
            />
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          className="carousel-control-prev absolute top-1/2 -translate-y-1/2 left-4"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-gray-500 rounded-full"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-1/2 -translate-y-1/2 right-4"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-gray-500 rounded-full"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;