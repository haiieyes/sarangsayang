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
