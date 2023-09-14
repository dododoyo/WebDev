import { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({
    name:'peter',
    age:24,
    hobby:'read books'
  })

  return (
    <div>
      <h2>useState object example</h2>

      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>Enjoys : {person.hobby}</h2>

      <button type='button' onClick={() => {setPerson({name:'John',age:28,hobby:'Screaming at the computer'})}} className='btn'>Show John</button>
    </div>
  );
};

export default UseStateObject;
