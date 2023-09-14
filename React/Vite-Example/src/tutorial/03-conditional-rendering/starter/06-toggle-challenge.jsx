import {useState,useEffect} from 'react';

const Alert = () => {
  return <div className='alert alert-danger'>hello world</div>
}

const ToggleChallenge = () => {

  const [tgState,setTgState] = useState(false);


  return (
    <div>
      <h2>toggle challenge</h2>
      <button onClick={() => {
        setTgState(!tgState);
      }} className='btn'>{tgState? 'Hide':'Show'}</button>

      {tgState &&  <Alert/>}
    </div>
  );
  
};

export default ToggleChallenge;
