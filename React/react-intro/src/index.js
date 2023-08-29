import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const BookList = () => (
  <section className="booklist">
    <Book /> 
    <Book />
    <Book />
  </section>
);

const Book = () => {
  const title = "A little Life." 
  
  return(
<article className="book">
    <img src="./leafs.jpg" alt="A Little Life" />
    <h1>{title}</h1>
    <h4 style={{ color: "blue", fontSize: "0.95rem", marginTop: "0.5rem" }}>
      Haniya Yanagihara
    </h4>
  </article>);
};

/*const Person = () => <h1>John Doe</h1>;
const Message = () => <h2>Hello World !</h2>*/

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
