import {useState} from 'react';
import text from './data';

const App = () => {
  const [number,setNumber] = useState(1);
  const [paragraphs,setParagraphs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(number);

    if (amount > 8){amount=8;}
    if (amount < 1){amount=1;}

    setParagraphs(text.slice(0,amount));
    return ;
  }

  return (
    <main>
      <section className="section-center">
        <h4>Are you tired of Lorem Ipsum ?</h4>

        <form action="" className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="paragraphs">Paragraphs:</label>
          <input
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            type="number"
            name="paragraphs"
            min="0"
            step="1"
            max="8"
            value={number}
            id="paragraphs"
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>

        <article className="lorem-text">
          {paragraphs.map((eachParagraph, index) => {
            return <p key={index}>{eachParagraph}</p>;
          })}
        </article>
      </section>
    </main>
  );
};
export default App;
