import ad1 from "./images/bridals/ads/ad1.png";
import ad2 from "./images/bridals/ads/ad2.png";
import ad3 from "./images/bridals/ads/ad3.png";

const BridalAds = () => {
  return (
    <div className="bg-light">
      <div
        id="carouselExampleInterval"
        className="container carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={ad1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={ad2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={ad3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default BridalAds;
