import { Fragment, useState } from "react";
import logo from "./images/logo1.png";

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <Fragment>
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex justify-content-start flex-grow-1">
          <a className="navbar-brand">
            <img
              src={logo}
              className="img-thumbnail border-0"
              width={70}
              alt="Sarang Sayang"
            />
          </a>
        </div>
        <div className="flex-grow-1">
          <ul className="nav d-flex justify-content-end">
            <a
              className="nav-link align-self-center"
              aria-current="page"
              href="#"
            >
              <button type="button" className="btn btn-outline-info btn-sm">
                Become a Vendor
              </button>
            </a>
            <a className=" nav-link text-secondary align-self-center" href="#">
              <i
                className={
                  isHovering
                    ? "display-6 text-info bi bi-people-fill"
                    : "display-6 bi bi-people"
                }
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              ></i>
            </a>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
