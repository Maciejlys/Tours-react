import React, { FC, useState } from "react";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import { SingleTour as TourType } from "./Tours";

export const Tour: FC<TourType> = ({
  id,
  name,
  info,
  image,
  price,
  remove,
}) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>{isShown ? info : info.substring(0, 150) + "..."}</p>
        <div className="toggle">
          <button onClick={() => setIsShown(!isShown)}>
            {isShown ? (
              <IoIosArrowDropupCircle className="show-info" />
            ) : (
              <IoIosArrowDropdownCircle className="show-info" />
            )}
          </button>
        </div>
        <button
          className="delete-btn"
          onClick={() => {
            remove(id);
          }}>
          Not interested
        </button>
      </footer>
    </article>
  );
};
