import React, { FC } from "react";
import { Tour } from "./Tour";

interface ToursProp {
  tours: Tour[];
  remove: (id: string) => void;
}

export interface Tour {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
  remove: (id: string) => void;
}

export const Tours: FC<ToursProp> = ({ tours, remove }) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} remove={remove} />;
        })}
      </div>
    </section>
  );
};
