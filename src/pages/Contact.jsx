import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h2 className="fs-1 fw-bold text-dark text-uppercase">
          contact section
        </h2>
        <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
          <div className="left bg-dark"></div>
          <FontAwesomeIcon icon={faStar} color="black" />
          <div className="right bg-dark"></div>
        </div>
        <form className="w-75">
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              userName
            </label>
            <input
              type="text"
              className="input-group border-0 border-bottom"
              id="exampleInputName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              userEmail
            </label>
            <input
              type="email"
              className="input-group border-0 border-bottom"
              id="exampleInputEmail"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAge" className="form-label">
              userAge
            </label>
            <input
              type="text"
              className="input-group border-0 border-bottom"
              id="exampleInputAge"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword" className="form-label">
              userPassword
            </label>
            <input
              type="password"
              className="input-group border-0 border-bottom"
              id="exampleInputPassword"
            />
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
