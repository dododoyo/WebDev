import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [destinations, setDestinations] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const theDestinations = await response.json();

      if (response.ok) {
        setDestinations(theDestinations);
      } else {
        setIsError(true);
        setIsLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {

    fetchData();
  }, []);

  const removeElement = (id) => {
    setDestinations(
      destinations.filter((eachDestination) => eachDestination.id !== id)
    );
  };

  if (isLoading) return <Loading />;

  if (isError)
    return (
      <center>
        <h2 style={{ marginTop: "4rem" }}>Something Went Wrong</h2>
      </center>
    );

  return destinations.length ? (
    <Tours destinations={destinations} removeElement={removeElement} />
  ) : (
    <main>
      <div className="title">
        <h2>No Tours Left</h2>
        <div className="underline"></div>
        <button
          className="btn"
          onClick={() => {
            fetchData();
            console.log("button clicked");
            // console.log(theDestinations);
          }}
        >
          Refresh
        </button>
      </div>
    </main>
  );
}

export default App;
