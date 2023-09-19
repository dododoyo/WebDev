import React from "react";
import { FiChevronRight, FiChevronLeft, FiChevronsRight } from "react-icons/fi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { shortList, list, longList } from "./data";

function Slide() {
  const [people, setPeople] = React.useState(longList);
  const [currentIndex, setIndex] = React.useState(0);

  const showNext = () => {
    if (currentIndex == people.length - 1) {
      setIndex(0);
    } else {
      setIndex(currentIndex + 1);
    }
  };
  const showPrev = () => {
    if (currentIndex == 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(currentIndex - 1);
    }
  };

  React.useEffect(() => {
    let infSlider = setInterval(() => {
      showNext();
    }, 4000);

    return () => {
      clearInterval(infSlider);
    };
  }, [currentIndex]);

  // const { name, image, title, quote } = people[index];

  return (
    <section className="slider-container">
      {/* <div className="slide">
        <img src={image} alt={name} className="person-img" />
        <h4 className="name">{name}</h4>
        <p className="title">{title}</p>
        <p className="text">{quote}</p>
        <FaQuoteRight className="icon" />
      </div> */}

      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentIndex)}%)`,
              opacity: personIndex === currentIndex ? 1 : 0,
              visibility: personIndex === currentIndex ? "visible" : "hidden",
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}

      <button type="button" className="next" onClick={showNext}>
        <FiChevronRight />
      </button>
      <button type="button" className="prev" onClick={showPrev}>
        <FiChevronLeft />
      </button>
    </section>
  );
}

export default Slide;
