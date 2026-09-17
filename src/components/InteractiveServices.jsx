import { motion } from "motion/react";
import { useState } from "react";
import ShinyText from "./ShinyText";

function InteractiveServices() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      number: "01",
      title: "Web Design",
      description:
        "We build modern, responsive, and high-performance websites that help businesses create a strong digital presence. From sleek corporate websites to interactive web applications, we combine clean design, smooth functionality, and reliable technology to deliver digital experiences that are built around your business goals.",
      image: "/images/WD1.jpeg",
    },
    {
      number: "02",
      title: "Full Stack Development",
      description:
        "We develop complete, end-to-end digital solutions that bring the front end, back end, and database together seamlessly. Our full-stack development services cover everything from intuitive user interfaces and powerful server-side systems to secure APIs and database integration, creating scalable and reliable web applications tailored to your business needs.",
      image: "/images/FD.jpeg",
    },
    {
      number: "03",
      title: "UI / UX Design",
      description:
        "We design intuitive, engaging, and visually compelling digital experiences that put users at the center. From wireframes and prototypes to polished interfaces and seamless user journeys, we combine creativity, usability, and thoughtful design to create digital products that are easy to use and built to make an impact.",
      image: "/images/ui.jpeg",
    },
    {
      number: "04",
      title: "Digital Marketing",
      description:
        "We help brands grow their online presence, reach the right audience, and turn digital interactions into meaningful results. From social media and search marketing to content and performance campaigns, we create data-driven strategies that build visibility, engagement, and long-term growth.",
      image: "/images/DM.jpeg",
    },
  ];

  return (
    <section className="services-page" id="services">

      {/* Services Heading */}

      <div className="services-page-heading">

        <p className="section-small-title">
          WHAT WE DO
        </p>

        <h1>
          <ShinyText text="Our Services" />
        </h1>

      </div>


      {/* Services List */}

      <div className="services-interactive-list">

        {services.map((service, index) => {

          const isReverse = index % 2 !== 0;
          const isActive =
            activeService === service.number;

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

      </div>

    </section>
  );
}

export default InteractiveServices;