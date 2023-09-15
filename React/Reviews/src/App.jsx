import Review from "../final/src/Review";

const App = () => {
  // console.log(reviews.length);

  return (
    <main>
      <section className="container">

        <div className="title">
          <h2>Our Reviews</h2>
          <div className="title-underline"></div>
        </div>

        <Review/>

      </section>
    </main>
  );
};
export default App;
