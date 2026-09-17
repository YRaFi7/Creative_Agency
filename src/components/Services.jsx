
import SpotlightCard from "./SpotlightCard";

function Services() {
  return (
    <section className="services" id="services">

      <div className="services-heading">

        <p className="section-small-title">
          WHAT WE DO
        </p>

        <h2>
          We Build Digital
          <br />
          Experiences
        </h2>

      </div>


      <div className="services-grid">

        {/* Service 01 */}

        <SpotlightCard spotlightColor="rgba(0, 255, 255, 0.25)">
          <div className="service-card">

            <span className="service-number">
              01
            </span>

            <h3>
              Web Design
            </h3>

            <p>
              Modern and engaging website
              designs that give your brand
              a strong digital presence.
            </p>

          </div>
        </SpotlightCard>


        {/* Service 02 */}

        <SpotlightCard spotlightColor="rgba(0, 255, 255, 0.25)">
          <div className="service-card">

            <span className="service-number">
              02
            </span>

            <h3>
              Web Development
            </h3>

            <p>
              Fast, responsive and scalable
              websites built with modern
              technologies.
            </p>

          </div>
        </SpotlightCard>


        {/* Service 03 */}

        <SpotlightCard spotlightColor="rgba(0, 255, 255, 0.25)">
          <div className="service-card">

            <span className="service-number">
              03
            </span>

            <h3>
              UI / UX Design
            </h3>

            <p>
              Simple and intuitive user
              experiences designed around
              your users and business.
            </p>

          </div>
        </SpotlightCard>


        {/* Service 04 */}

        <SpotlightCard spotlightColor="rgba(0, 255, 255, 0.25)">
          <div className="service-card">

            <span className="service-number">
              04
            </span>

            <h3>
              Digital Strategy
            </h3>

            <p>
              Digital strategies that help
              brands grow, connect and
              stand out online.
            </p>

          </div>
        </SpotlightCard>

      </div>

    </section>
  );
}

export default Services;

