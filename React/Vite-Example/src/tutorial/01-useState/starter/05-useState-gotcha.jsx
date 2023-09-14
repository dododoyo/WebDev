import {useState} from 'react';

const UseStateGotcha = () => {
  let [counter,setCounter] = useState(0);
  // console.log(counter);
  const handleClick = () =>{
    setTimeout(() => {
      setCounter((prevState) => {
        return prevState + 1;
      });
    },3000)
    console.log('Clicked');
  }
  return (
    <div>
      <h1>useState "gotcha"</h1>
      <h2>{counter}</h2>
      <button type='button' className='btn' onClick={handleClick}>Increase</button>
    </div>
  );
};

export default UseStateGotcha;
