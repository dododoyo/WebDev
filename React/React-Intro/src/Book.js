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

const Book = ({ title, theImage, author,id, children }) => {
  // console.log(props)
  return (
    <article className="book">
      <h3 className='number'>{`# ${id}`}</h3>
      <img src={theImage} alt={title} />
      <h1>{title}</h1>
      <button>click me</button>
      <h4 style={{ color: "blue", fontSize: "0.95rem", marginTop: "0.5rem" }}>
        {author.toUpperCase()}
      </h4>

      <EventExamples />
      {children}
    </article>
  );
};

export default Book

