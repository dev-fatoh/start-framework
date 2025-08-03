import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <div className="about">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h2 className="fs-1 fw-bold text-light text-uppercase">
          about component
        </h2>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <div className="left bg-light"></div>
          <FontAwesomeIcon icon={faStar} color="white" />
          <div className="right bg-light"></div>
        </div>
        <article className="d-lg-flex gap-3 align-items-center justify-content-center mt-3">
          <p className="text-light">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="text-light">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;
