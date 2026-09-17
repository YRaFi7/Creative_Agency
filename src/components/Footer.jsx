
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">
            CREATIVE
          </div>

          <p>
            We create digital experiences
            that help brands connect,
            grow and stand out.
          </p>
        </div>

        <div className="footer-column">
          <h3>Services</h3>

          <Link to="/services">
            UI / UX Design
          </Link>

          <Link to="/services">
            Web Development
          </Link>

          <Link to="/services">
            React Development
          </Link>

          <Link to="/services">
            Digital Strategy
          </Link>
        </div>

        <div className="footer-column">
          <h3>Explore</h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/work">
            Work
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <a href="mailto:hello@creativeagency.com">
            hello@creativeagency.com
          </a>

          <a href="tel:+919000000000">
            +91 90000 00000
          </a>

          <p>
            Kochi, Kerala
            <br />
            India
          </p>
        </div>
      </div>

      <div className="footer-subscribe">
        <div>
          <h3>Stay Connected</h3>

          <p>
            Get updates about our latest
            projects and digital work.
          </p>
        </div>

        <form className="subscribe-form">
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Your email address"
          />

          <button type="submit">
            Send
          </button>
        </form>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Creative Agency.
          All rights reserved.
        </p>

        <div className="footer-legal">
          <a href="#">
            Privacy Policy
          </a>

          <a href="#">
            Terms & Conditions
          </a>

          <a href="#">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

