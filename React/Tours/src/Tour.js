import React, { useState } from "react";

const Tour = (props) => {
  const { eachDestination, removeElement } = props;
  const { id, name, info, image, price } = eachDestination;
  // console.log(props.eachDestination);
  const [readMore,setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image}></img>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">$ {price}</h4>
        </div>

        {!readMore ? (
          <div>
            <p>{info.substring(0, 200)}</p>
          </div>
        ) : (
          <p>{info}</p>
        )}
        <button onClick={() => setReadMore(!readMore)} className="button">
          {readMore ? "Show Less" : "Read More"}
        </button>

        <button className="delete-btn" onClick={() => removeElement(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
