
import ScrollReveal from "./ScrollReveal";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-label">
        <p className="section-small-title">
          ABOUT US
        </p>
      </div>


      <div className="about-content">

        <ScrollReveal>
          <h2>
            We believe great
            <br />
            digital experiences
            <br />
            make brands
            <br />
            unforgettable.
          </h2>
        </ScrollReveal>


        <div className="about-description">

          <ScrollReveal>
            <p>
              We are a creative digital agency
              focused on building meaningful
              experiences for modern brands.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              From strategy and design to
              development, we bring ideas
              together to create digital
              products that people remember.
            </p>
          </ScrollReveal>

        </div>

      </div>

    </section>
  );
}

export default About;

