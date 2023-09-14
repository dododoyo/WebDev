import Title from './Title';
import {cardsData} from '../data';

function Tours() {
  return (
  <section className="section" id="tours">
    <Title title='featured' subTitle='tours'/>

    <div className="section-center featured-center">
      {cardsData.map((eachCard) => {
        return (
          <article className="tour-card">
            <div className="tour-img-container">
              <img src={eachCard.img} className="tour-img" alt="" />
              <p className="tour-date">{eachCard.date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{eachCard.title}</h4>
              </div>
              <p>
                {eachCard.text}
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  {eachCard.destination}
                </p>
                <p>{eachCard.daysLeft} days</p>
                <p>from ${eachCard.price}</p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  </section>);
}

export default Tours

