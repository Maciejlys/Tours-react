import React, { FC } from "react";
import { Tour } from "./Tour";

interface ToursProp {
  tours: Tour[];
}

export interface Tour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
}

export const Tours: FC<ToursProp> = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};
