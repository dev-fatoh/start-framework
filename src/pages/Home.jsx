import User from "../assets/avatar-svgrepo-com.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Home = ({ title }) => {
  return (
    <div className="home">
      <div className="container text-center h-75 d-flex flex-column justify-content-center">
        <img className="w-25 h-25 mx-auto" src={User} alt="user" />
        <h2 className="fs-1 fw-bold text-light text-uppercase">{title}</h2>
        <div className="d-flex w-50 mx-auto justify-content-center align-items-center gap-3">
          <div className="left bg-light"></div>
          <FontAwesomeIcon icon={faStar} color="white" />
          <div className="right bg-light"></div>
        </div>
        <p className="text-light">
          {" "}
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </div>
  );
};

export default Home;
