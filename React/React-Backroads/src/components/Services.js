import Title from './Title';
import {servicesData} from '../data'

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">

        {servicesData.map((eachService) => {
          return (
            <article className="service">
              <span className="service-icon">
                <i className={eachService.iconClass}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{eachService.service}</h4>

                <p className="service-text">
                  {eachService.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services