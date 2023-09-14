import Item from './Person';
import React from 'react';

const List = ({ people,removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} removePerson={removePerson} />;
      })}
    </div>
  );
};

export default React.memo(List);
