import { Fragment, useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import BridalCardStage from "./components/BridalCardStage";
import VenueCardStage from "./components/VenueCardStage";
import CateringCardStage from "./components/CateringCardStage";
import VideoPhotoCardStage from "./components/VideoPhotoCardStage";
import AVDJCardStage from "./components/AVDJCardStage";
import BerkatCardStage from "./components/BerkatCardStage";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Login from "./components/Login";

function pageChecker(a: string) {
  var html = <h1>ERROR</h1>;
  a === "bridal"
    ? (html = <BridalCardStage />)
    : a === "venue"
    ? (html = <VenueCardStage />)
    : a === "catering"
    ? (html = <CateringCardStage />)
    : a === "videophoto"
    ? (html = <VideoPhotoCardStage />)
    : a === "avdj"
    ? (html = <AVDJCardStage />)
    : a === "berkat"
    ? (html = <BerkatCardStage />)
    : (html = <Homepage />);
  return html;
}

const App = () => {
  const [chosenPage, setValue] = useState("");
  return (
    <Fragment>
      <div
        className="offcanvas offcanvas-end bg-info-subtle"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header d-flex justify-content-end">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body container">
          <div className="position-absolute top-50 start-50 translate-middle">
            <h5
              className="offcanvas-title text-center"
              id="offcanvasRightLabel"
            >
              Welcome Back!
            </h5>
            <br />
            <Login />
          </div>
        </div>
      </div>
      <div className="sticky-top bg-white">
        <br />
        <Header />
        <hr />
        <NavBar chosenPage={chosenPage} setValue={setValue} />
      </div>

      <div className="bg-light">{pageChecker(chosenPage)}</div>
      <Footer />
    </Fragment>
  );
};

export default App;
