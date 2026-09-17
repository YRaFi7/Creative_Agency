
import { motion } from "motion/react";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-label">
        <p className="section-small-title">
          LET'S WORK TOGETHER
        </p>
      </div>

      <div className="contact-content">

        <motion.h2
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          Have a project
          <br />
          in mind?
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          Tell us about your idea and
          let's create something
          meaningful together.
        </motion.p>

        <motion.a
          href="mailto:hello@creativeagency.com"
          className="contact-button"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: "easeOut",
          }}
        >
          Start a Conversation
          <span>↗</span>
        </motion.a>

      </div>


      {/* Project Form */}

      <motion.div
        className="contact-form-wrapper"
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          amount: 0.15,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >

        <div className="contact-form-heading">

          <p className="section-small-title">
            START A PROJECT
          </p>

          <h3>
            Tell us about
            <br />
            your project.
          </h3>

        </div>


        <form className="contact-form">

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="name">
                Your Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

          </div>


          <div className="form-row">

            <div className="form-group">
              <label htmlFor="company">
                Company / Brand
              </label>

              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your company or brand"
              />
            </div>


            <div className="form-group">
              <label htmlFor="service">
                Service Required
              </label>

              <select
                id="service"
                name="service"
                defaultValue=""
                required
              >
                <option
                  value=""
                  disabled
                >
                  Select a service
                </option>

                <option value="web-design">
                  Web Design
                </option>

                <option value="web-development">
                  Web Development
                </option>

                <option value="ui-ux">
                  UI / UX Design
                </option>

                <option value="digital-strategy">
                  Digital Strategy
                </option>

              </select>
            </div>

          </div>


          <div className="form-group">

            <label htmlFor="budget">
              Project Budget
            </label>

            <select
              id="budget"
              name="budget"
              defaultValue=""
            >
              <option
                value=""
                disabled
              >
                Select your budget
              </option>

              <option value="under-25k">
                Under ₹25,000
              </option>

              <option value="25k-50k">
                ₹25,000 - ₹50,000
              </option>

              <option value="50k-1l">
                ₹50,000 - ₹1,00,000
              </option>

              <option value="1l-plus">
                ₹1,00,000+
              </option>

            </select>

          </div>


          <div className="form-group">

            <label htmlFor="message">
              Tell Us About Your Project
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell us about your project, idea or requirements..."
              required
            ></textarea>

          </div>


          <button
            type="submit"
            className="form-submit"
          >
            Send Project Enquiry
            <span>↗</span>
          </button>

        </form>

      </motion.div>

    </section>
  );
}

export default Contact;

