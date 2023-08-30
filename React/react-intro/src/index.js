import React from "react";
import ReactDOM from "react-dom/client";

// link to local CSS
import "./styles.css";

const books = [
  {
    author: "Jordan Moore",
    title: "Intersting Facts For Curious Minds.",
    theImage:
      "https://images-eu.ssl-images-amazon.com/images/I/71hwUY5ZmxL._AC_UL600_SR600,600_.jpg",
    id: 1,
  },

  {
    author: "Chinua Achebe",
    title: "Things fall apart",
    theImage:
      "https://m.media-amazon.com/images/I/81vlAVbRl3L._AC_UF1000,1000_QL80_.jpg",
    id: 2,
  },

  {
    author: "Bealu Girma",
    title: "Oromay",
    theImage:
      "https://typicalethiopian.com/wp-content/uploads/2022/03/Oromai_cover.png?ezimgfmt=rs:188x279/rscb1/ng:webp/ngcb1",
    id: 3,
  },
];

// props will only be displayed if they are actually provided.

const TheForm = () => {
  const handleInputChange = (e) => {
    console.log(e.target.name );
    // console.log("Here");
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    alert('Form submitted.');
    console.log(e);
  }
  return (
    <section>

      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>

        <input
          onChange={handleInputChange}
          type="text"
          name="example"
          style={{ margin: "1rem 0" }}
        ></input>

        <button
          type="submit"
          name="example"
          style={{ padding: "0.5rem 1rem", margin: "1rem 0.5rem" }}
        >
          Submit
        </button>
      </form>

    </section>
  );
};

const EventExamples = () => {
  const handleButtonClick = () => {
    alert("Book added to cart");
  };
  return (
    <section>
      <button onClick={handleButtonClick}>Add to Cart</button>
    </section>
  );
};

const Book = ({ title, theImage, author, getBook, id, children }) => {
  // console.log(props)
  return (
    <article className="book">
      <img src={theImage} alt={title} />
      <h1>{title}</h1>
      <button onClick={()=>getBook(id)} >click me</button>
      <h4 style={{ color: "blue", fontSize: "0.95rem", marginTop: "0.5rem" }}>
        {author.toUpperCase()}
      </h4>

      <EventExamples />
      {children}
    </article>
  );
};


const BookList = () => {
  // Create a get book function
  
  const getBook = (id) => {
    const foundBook = books.find((eachBook) => eachBook.id === id);
    console.log(foundBook);
  };
  
  /*We can pass variable into components children in react the variable can  */
  const newBooks = books.map((eachBook) => {
    return (
      <Book {...eachBook} key={eachBook.id} getBook={getBook} id = {eachBook.id}></Book>
    )
  });

  return (
    <section className="booklist">
      <TheForm></TheForm>

      <div>{newBooks}</div>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
