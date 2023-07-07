import { Fragment, useState } from "react";
import { Requireable } from "react";

interface Props {
  id: string;
  name: string;
  packageA: number;
  packageB: number;
  packageC: number;
  updatedSince: string;
  photo: string;
  location: string;
  email: string;
  service: object;
}

const Card = ({ photo, name, location, packageA, updatedSince, id }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <Fragment>
      <div className="" key={id}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={photo}
                className="object-fit-xl-contain rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                  <i className="bi bi-geo-alt-fill"> </i> {location}
                </p>
                <hr />
                <p className="card-text">
                  <small>
                    Starts from <strong>${packageA}</strong>
                  </small>
                </p>
                <p className="card-text">
                  <small className="text-body-secondary fw-lighter">
                    Last updated {updatedSince}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
