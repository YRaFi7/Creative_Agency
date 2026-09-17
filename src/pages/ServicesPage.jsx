import { motion } from "motion/react";
import { useState } from "react";
import ShinyText from "../components/ShinyText";

function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      number: "01",
      title: "Web Design",
      description:
        "We create modern and engaging websites that give brands a strong and memorable digital presence.",
      image: "/images/Br1.jpeg",
    },
    {
      number: "02",
      title: "Web Development",
      description:
        "We build fast, responsive and scalable websites using modern technologies.",
      image: "/images/Br1.jpeg",
    },
    {
      number: "03",
      title: "UI / UX Design",
      description:
        "We design intuitive digital experiences that are simple to use and visually engaging.",
      image: "/images/Br1.jpeg",
    },
    {
      number: "04",
      title: "Digital Strategy",
      description:
        "We connect creative ideas with digital strategy to help brands stand out online.",
      image: "/images/Br1.jpeg",
    },
  ];

  return (
    <main className="services-page">

      {/* Services Heading */}

      <section className="services-page-heading">

        <p className="section-small-title">
          WHAT WE DO
        </p>

        <h1>
          <ShinyText text="Our Services" />
        </h1>

      </section>


      {/* Services */}

      <section className="services-interactive-list">

        {services.map((service, index) => {

          const isReverse = index % 2 !== 0;
          const isActive = activeService === service.number;

          return (
            <article
              key={service.number}
              className={`service-interactive ${
                isReverse
                  ? "service-interactive-reverse"
                  : ""
              }`}
              onMouseEnter={() => {
                setActiveService(service.number);
              }}
              onMouseLeave={() => {
                setActiveService(null);
              }}
            >

              <div className="service-interactive-inner">

                {/* Description */}

                <motion.div
                  className="service-interactive-content"
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive
                      ? 0
                      : isReverse
                        ? -80
                        : 80,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >

                  <span className="service-interactive-number">
                    {service.number}
                  </span>

                  <h2>
                    {service.title}
                  </h2>

                  <p>
                    {service.description}
                  </p>

                </motion.div>


                {/* Image */}

                <motion.div
                  className="service-interactive-image"
                  animate={{
                    x: isActive
                      ? isReverse
                        ? 180
                        : -180
                      : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >

                  <img
                    src={service.image}
                    alt={service.title}
                  />

                </motion.div>

              </div>

            </article>
          );
        })}

      </section>

    </main>
  );
}

export default ServicesPage;