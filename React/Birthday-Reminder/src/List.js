import React from 'react';

const List = (props) => {
  // props.people.map((eachPerson) => {
  //   console.log(eachPerson.id);
  // })

  return (
    <>
      <ul>
        {props.people.map((eachPerson) => {
          const {name,age,id,image} = eachPerson;
          return (
            
            <li className="person" key={id}>
              <img src={image} ></img>
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
