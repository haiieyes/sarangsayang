import { Fragment } from "react";
import bridalList from "./Json/bridal.json";
import Card from "./Card";
import BridalAds from "./BridalAds";

function cardPrinter(a: number) {
  return bridalList.bridalList
    .slice(a, a + 3)
    .map((item) => (
      <Card
        id={item.id}
        name={item.name}
        packageA={item.packageA}
        packageB={item.packageB}
        packageC={item.packageC}
        updatedSince={item.updatedSince}
        photo={item.photo}
        location={item.location}
        email={item.email}
        service={item.service.toString}
      />
    ));
}

const cardStage = () => {
  return (
    <div className="container bg-light">
      <div>
        <br />
        <div>{cardPrinter(0)}</div>
        <div>{cardPrinter(0)}</div>
        <br />
      </div>
    </div>
  );
};

export default cardStage;
