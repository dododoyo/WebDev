import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  return (
    <div className="container">
      {people.map((eachPerson) => {
        const { id, name } = eachPerson;
        // console.log(eachPerson)
        const handleEachClick = (id) => {
          const newPeople = people.filter((eachPerson) => eachPerson.id 
          !== id);
          setPeople(newPeople);
        };

        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              style={{ padding: "0.35rem 1rem" }}
              onClick={() => {
                handleEachClick(id);
              }}
            >
              click
            </button>
          </div>
        );
      })}

      <button
        type="button"
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => {
          setPeople([]);
        }}
      >
        remove all
      </button>
    </div>
  );
};

export default UseStateArray;
