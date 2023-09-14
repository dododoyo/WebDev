import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  // console.log(props.destinations);
  const { destinations, removeElement} = props;
  return (
    <main>
          <div className="title">
            <h2>Our Tours</h2>
            <div className="underline"></div>
          </div>

          <ul>
            {destinations.map((eachDestination) => {
              return (
                <li key={eachDestination.id}>
                  <Tour
                    eachDestination={eachDestination}
                    removeElement={removeElement}
                  />
                </li>
              );
            })}
          </ul>
    </main>
  );
};

export default Tours;
