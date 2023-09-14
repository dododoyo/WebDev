import {useEffect,useState} from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  /**
   * This component registers a scroll event listener on mount and removes it on unmount using the cleanup function.
   * @returns {undefined}
   */
  const RandomComp = () => {
    useEffect(() => { 
      const someFunc = () => {
        //some logic
      };
      window.addEventListener('scroll',someFunc);

      return () => window.removeEventListener('scroll',someFunc);
    },[]);
    return <h1>Random Text</h1>;
  };

  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}>
        Toggle Component
      </button>
      {toggle && <RandomComp />}
    </div>
  );
};

export default CleanupFunction;
