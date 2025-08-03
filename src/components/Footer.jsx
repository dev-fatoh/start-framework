import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faWebAwesome,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row g-3 p-4">
          <div className=" col-md-4 col-sm-12 location text-center">
            <h3 className="text-light text-capitalize">location</h3>

            <p className="text-capitalize text-light">2015 jone daniel drive</p>
            <p className="text-light">clark,MO 65243</p>
          </div>
          <div className=" col-md-4 col-sm-12 around text-center">
            <h3 className="text-uppercase text-light mb-3">around the web</h3>
            <div className="icons d-flex gap-4 align-items-center justify-content-center">
              <FontAwesomeIcon icon={faFacebook} size="xl" color="white" />
              <FontAwesomeIcon icon={faTwitter} size="xl" color="white" />
              <FontAwesomeIcon icon={faLinkedin} size="xl" color="white" />
              <FontAwesomeIcon icon={faWebAwesome} size="xl" color="white" />
            </div>
          </div>
          <div className=" col-md-4 col-sm-12 freelancer text-center">
            <h3 className="text-uppercase text-light">about freelancer</h3>
            <p className="text-light mt-2">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="copy bg-dark text-light text-center p-3">
        <p>Copyright © Your Website 2021</p>
      </div>
    </div>
  );
}
