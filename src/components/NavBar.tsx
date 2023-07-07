import React from "react";
import bridalIcon from "./icons/bridal.svg";
import venueIcon from "./icons/venue.svg";
import cateringIcon from "./icons/catering.svg";
import videoPhotoIcon from "./icons/videophoto.svg";
import avdjIcon from "./icons/avdj.svg";
import berkatIcon from "./icons/berkat.svg";

interface Props {
  chosenPage: string;
  setValue: (item: string) => void;
}

const NavBar2 = ({ setValue, chosenPage }: Props) => {
  return (
    <div className="container d-flex justify-content-center">
      <ul className="nav nav-underline d-flex justify-content-evenly">
        <li className="nav-item m-2">
          <a
            className={
              chosenPage === "bridal"
                ? "nav-link active"
                : "nav-link text-body-secondary"
            }
            aria-current="page"
            key="bridals"
            onClick={() => {
              chosenPage = "bridal";
              setValue(chosenPage);
              console.log(chosenPage);
            }}
          >
            <div className="text-center">
              <img src={bridalIcon} height="30" className="text-center" />
            </div>
            <h6>Bridal</h6>
          </a>
        </li>
        <li className="nav-item m-2">
          <a
            className={
              chosenPage === "venue"
                ? "nav-link active"
                : "nav-link text-body-secondary"
            }
            aria-current="page"
            onClick={() => {
              chosenPage = "venue";
              setValue(chosenPage);
              console.log(chosenPage);
            }}
          >
            <div className="text-center">
              <img src={venueIcon} height="30" className="text-center" />
            </div>
            <h6>Venue</h6>
          </a>
        </li>
        <li className="nav-item m-2">
          <a
            className={
              chosenPage === "catering"
                ? "nav-link active"
                : "nav-link text-body-secondary"
            }
            aria-current="page"
            onClick={() => {
              chosenPage = "catering";
              setValue(chosenPage);
              console.log(chosenPage);
            }}
          >
            <div className="text-center">
              <img src={cateringIcon} height="30" className="text-center" />
            </div>
            <h6>Catering</h6>
          </a>
        </li>
      </ul>
      <ul className="nav nav-underline d-flex justify-content-evenly">
        <li className="nav-item m-2">
          <a
            className={
              chosenPage === "videophoto"
                ? "nav-link active"
                : "nav-link text-body-secondary"
            }
            aria-current="page"
            onClick={() => {
              chosenPage = "videophoto";
              setValue(chosenPage);
              console.log(chosenPage);
            }}
          >
            <div className="text-center">
              <img src={videoPhotoIcon} height="30" className="text-center" />
            </div>
            <h6>Video/Photo</h6>
          </a>
        </li>
        <li className="nav-item m-2">
          <a
            className={
              chosenPage === "avdj"
                ? "nav-link active"
                : "nav-link text-body-secondary"
            }
            aria-current="page"
            onClick={() => {
              chosenPage = "avdj";
              setValue(chosenPage);
              console.log(chosenPage);
            }}
          >
            <div className="text-center">
              <img src={avdjIcon} height="30" className="text-center" />
            </div>
            <h6>AV/DJ</h6>
          </a>
        </li>
        <li className="nav-item m-2">
          <a
            className={
              chosenPage === "berkat"
                ? "nav-link active"
                : "nav-link text-body-secondary"
            }
            aria-current="page"
            onClick={() => {
              chosenPage = "berkat";
              setValue(chosenPage);
              console.log(chosenPage);
            }}
          >
            <div className="text-center">
              <img src={berkatIcon} height="30" className="text-center" />
            </div>
            <h6>Berkat</h6>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar2;
