import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-3 navbar-bg">
      <nav className="container navbar navbar-expand-lg">
        <Link className="navbar-brand fw-bold fs-2 text-white" to="/home">
          START FRAMEWORK
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav gap-2 ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold fs-5" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fs-5 fw-bold text-white"
                to="/portifolio"
              >
                PORTIFOLIO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold fs-5" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
