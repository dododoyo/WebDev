const ErrorExample = () => {
  let counter = 0;
  const increaseCount = () => {
    counter += 1;
    console.log(counter);
  }
  
  return (
    <div>
      <h2>useState error example - {counter}</h2>
      <button type='button' className='btn' onClick={increaseCount} >Increase</button>
    </div>
  );
};

export default ErrorExample;
