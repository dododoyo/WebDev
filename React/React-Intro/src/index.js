import React from "react";
import ReactDOM from "react-dom/client";

// link to local CSS
import "./styles.css";
import {books} from './books';
import Book from './Book';

// props will only be displayed if they are actually provided.
  
const BookList = () => {
  
  /*We can pass variable into components children in react the variable can  */
  const newBooks = books.map((eachBook) => {
    return (
      <Book {...eachBook} key={eachBook.id} id = {eachBook.id}></Book>
    )
  });

  return (
    <React.Fragment>
      <h1 className='titleContent'>Amazon Best Sellers</h1>
      <section className="booklist">
        <div>{newBooks}</div>
      </section>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
