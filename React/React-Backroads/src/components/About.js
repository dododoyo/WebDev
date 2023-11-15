import aboutImage from '../images/about.jpeg';
import Title from './Title';


function About() {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImage} className="about-photo" alt="awesome beach" />
        </div>

        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Welcome to our tour and travel company. We are dedicated to
            providing you with the best travel experiences, tailored to your
            preferences. Our team of experts works tirelessly to ensure that
            your journey is smooth and memorable.
          </p>
          <p>
            With years of experience in the travel industry, we understand the
            intricacies of planning the perfect trip. We take care of all the
            details, so you can focus on enjoying your adventure. From exotic
            destinations to local gems, we've got you covered.
          </p>

          <a href="#about" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}

export default About