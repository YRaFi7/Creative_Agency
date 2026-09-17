
import { motion } from "motion/react";
import ShinyText from "./ShinyText";

function Projects() {
  return (
    <section className="projects" id="work">

      <div className="projects-heading">

        <p className="section-small-title">
          SELECTED WORK
        </p>

        <h2 className="projects-title">

          <ShinyText text="Ideas Into" />

          <br />

          <ShinyText text="Experiences" />

        </h2>

      </div>

      <div className="projects-list">

        {/* Project 01 */}

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          <div className="project-number">
            01
          </div>

          <div className="project-info">

            <h3>
              Brand Experience
            </h3>

            <p>
              Branding / Web Design
            </p>

          </div>

          <div className="project-arrow">
            ↗
          </div>

          <div className="project-gallery project-gallery-scroll">

                <div className="project-image">
                    <img src="/images/Br1.jpeg" alt="Brand Experience 1" />
                </div>

                <div className="project-image">
                    <img src="/images/Br2.jpeg" alt="Brand Experience 2" />
                </div>

                <div className="project-image">
                    <img src="/images/Br3.jpeg" alt="Brand Experience 3" />
                </div>

                <div className="project-image">
                    <img src="/images/Br4.jpeg" alt="Brand Experience 4" />
                </div>

                <div className="project-image">
                    <img src="/images/Br5.jpeg" alt="Brand Experience 5" />
                </div>

            </div>

        </motion.div>

        {/* Project 02 */}

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.15,
          }}
        >

          <div className="project-number">
            02
          </div>

          <div className="project-info">

            <h3>
              Digital Platform
            </h3>

            <p>
              UI / UX / Development
            </p>

          </div>

          <div className="project-arrow">
            ↗
          </div>

          <div className="project-gallery project-gallery-scroll">

                <div className="project-image">
                    <img src="/images/Dp1.jpeg" alt="Digital Platform 1" />
                </div>

                <div className="project-image">
                    <img src="/images/Dp2.jpeg" alt="Digital Platform 2" />
                </div>

                <div className="project-image">
                    <img src="/images/Dp3.jpeg" alt="Digital Platform 3" />
                </div>

                <div className="project-image">
                    <img src="/images/Dp4.jpeg" alt="Digital Platform 4" />
                </div>

                <div className="project-image">
                    <img src="/images/Dp5.jpeg" alt="Digital Platform 5" />
                </div>

            </div>

        </motion.div>

        {/* Project 03 */}

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.3,
          }}
        >

          <div className="project-number">
            03
          </div>

          <div className="project-info">

            <h3>
              Creative Campaign
            </h3>

            <p>
              Creative / Digital
            </p>

          </div>

          <div className="project-arrow">
            ↗
          </div>

          <div className="project-gallery project-gallery-scroll">

                <div className="project-image">
                    <img src="/images/Smc1.jpeg" alt="Creative Campaign 1" />
                </div>

                <div className="project-image">
                    <img src="/images/smc2.jpeg" alt="Creative Campaign 2" />
                </div>

                <div className="project-image">
                    <img src="/images/smc3.jpeg" alt="Creative Campaign 3" />
                </div>

                <div className="project-image">
                    <img src="/images/smc4.jpeg" alt="Creative Campaign 4" />
                </div>

                <div className="project-image">
                    <img src="/images/smc6.jpeg" alt="Creative Campaign 5" />
                </div>

                <div className="project-image">
                    <img src="/images/smc7.jpeg" alt="Creative Campaign 6" />
                </div>

            </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Projects;


