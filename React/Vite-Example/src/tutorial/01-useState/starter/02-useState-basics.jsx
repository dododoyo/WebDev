import { useState } from "react";

const UseStateBasics = () => {

  const [counter,increaseCounter] = useState(0);
  const handleClick = () =>{
    increaseCounter( counter + 1);
  }
  return (
    <div>
      <h2>useState basics - {counter}</h2>
      <button type='button' onClick={handleClick} className='btn'>Increase</button>
    </div>
  );
};

export default UseStateBasics;
