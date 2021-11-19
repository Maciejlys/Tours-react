import React, { useState, useEffect } from "react";
import "./Styles/App.css";
import axios from "axios";
import dataJson from "./data/data.json";
import { Loading } from "./Components/Loading";
import { Error } from "./Components/Error";
import { Tours, Tour } from "./Components/Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [data, setData] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const removeTour = (id: string): void => {
    const newData: Tour[] = data.filter((tour) => tour.id !== id);
    setData(newData);
  };

  // At the beginning it was fetching the data from API but as I was testing alot
  // API wasn't responding very well thats why I moved it to local json file
  // and in case of an error I just load the data from the json file.
  const getData: any = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      const tours = await response.data;
      setData(tours);
    } catch (error) {
      console.log("error, loading data from local storage instead...");
      const stringify = await JSON.stringify(dataJson);
      const parsed = await JSON.parse(stringify);
      setData(parsed);

      // There was an error screen in case API wasn't responding properly
      // but since I moved it to JSON file, there always be some data ready.
      // setIsError(true);

      //I am setting Error to false just to make sure there are no warnings in console
      setIsError(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData(url);
  }, []);

  {
    isError && <Error />;
  }
  {
    isLoading && <Loading />;
  }
  if (data.length === 0 && !isLoading) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => getData()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={data} remove={removeTour} />
    </main>
  );
}

export default App;
