import Values from 'values.js';
import { useState } from 'react';

const Form = () => {
  const [color,setColor] = useState("");
  const [error,setError] = useState(false);
  const [colorList,setColorList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try{

      const colors = new Values(color).all(10);
      console.log(colors);
    }
    catch(error){
      setError(true);
      console.log(error);
    }
      
  }

  return (
    <>
    <section className="container">
      <h2>Color Generator</h2>
      <form className="color-form" onSubmit={handleSubmit}>
        <input type="color" name="color-input" id="color-input" />
        <input type="text" onChange={(e) => {setColor(e.target.value)}} placeholder = "#f15025" value = {color} name="text-input" id="text-input" />

        <button type="submit" className="btn">Submit</button>
      </form>
    </section>

    <section className="colors">

    </section>
    </>
  )
}
export default Form