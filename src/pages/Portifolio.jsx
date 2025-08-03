import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { v4 } from "uuid";
import img1 from "../assets/portfolio/1.jpg";
import img2 from "../assets/portfolio/2.jpg";
import img3 from "../assets/portfolio/3.jpg";
import img4 from "../assets/portfolio/4.jpg";
import img5 from "../assets/portfolio/5.jpg";
import img6 from "../assets/portfolio/6.jpg";
import { useState } from "react";
const Portifolio = () => {
  const [model, setModel] = useState(false);
  const [showImage, setShowImage] = useState(null);
  const images = [img1, img2, img3, img4, img5, img6];
  const imagesId = images.map((img) => ({ id: v4(), src: img }));
  function handleClick(img) {
    setShowImage(img.src);
  }
  return (
    <div className="portifolio">
      <div className="container min-vh-100">
        <h2 className="fs-1 fw-bold text-dark text-center text-uppercase my-3">
          portifolio component
        </h2>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <div className="left bg-dark"></div>
          <FontAwesomeIcon icon={faStar} color="black" />
          <div className="right bg-dark"></div>
        </div>
        {model ? (
          <div
            className="model d-flex align-items-center justify-content-center"
            onClick={() => setModel(false)}
          >
            <img
              src={showImage}
              alt=""
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </div>
        ) : (
          <div className="row g-4 mt-4">
            {imagesId.map((img) => (
              <div className="col-md-4" key={img.id}>
                <div
                  className="position-relative wearper-img"
                  onClick={() => {
                    setModel(true);
                    handleClick(img);
                  }}
                >
                  <img src={img.src} alt="" className="w-100" />
                  <div className="img-layer"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portifolio;
