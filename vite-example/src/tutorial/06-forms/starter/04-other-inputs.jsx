import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];
const OtherInputs = () => {
  const [shipping,setShipping] = useState(false);
  const [selectedFramework,setSelectedFramework] = useState(frameworks[0]);

  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  }
  const handleFrameworks = (e) => {
    console.log(e.target.value);
    setSelectedFramework(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
  return (
    <div>
      
      <form className='form' onSubmit={handleSubmit}>

        <h4>Other Inputs</h4>
        {/* name */}
        
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input type="checkbox" name="shipping" id="shipping" checked={shipping} onChange={handleShipping}/>
        </div>


        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework' className='form-label'>
            Framework
          </label>
          <select name="framework" id="framework" value={selectedFramework} onChange={handleFrameworks}>
            {frameworks.map((eachFramework) => {
              return <option key={eachFramework}>{eachFramework}</option>
            })}
          </select>
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>

      </form>

    </div>
  );
};
export default OtherInputs;
