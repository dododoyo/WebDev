import Values from 'values.js';
import { useState } from 'react';

const Form = () => {
  const [color,setColor] = useState("");
  const [error,setError] = useState(false);
  const [colorList,setColorList] = useState([]);

  const handleChange = (e) => {
      console.log(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className="container">
      <h2>Color Generator</h2>

      <form className="color-form" onSubmit={handleSubmit}>
        <input type="color" name="color-input" id="color-input" />
        <input type="text" onChange={handleChange} placeholder = "#f15025" value = {color} name="text-input" id="text-input" />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  )
}
export default Form