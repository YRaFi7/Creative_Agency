import BlurText from "./BlurText";
import Prism from "./Prism";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="prism-background">
        <Prism
          height={2.2}
          baseWidth={4.5}
          animationType="3drotate"
          timeScale={0.35}
          glow={1}
          noise={0.25}
          bloom={0.8}
          scale={3.6}
          suspendWhenOffscreen={true}
        />
      </div>

      <div className="hero-content">

        <p className="hero-small-text">
          CREATIVE DIGITAL AGENCY
        </p>

        <BlurText
          text="We Create Digital Experiences"
          delay={200}
          animateBy="letters"
          direction="bottom"
          className="hero-title"
        />

        <p className="hero-description">
          We design modern websites
          and digital experiences
          that help brands stand out.
        </p>

        <button className="hero-button">
          Start a Project
        </button>

      </div>

    </section>
  );
}

export default Hero;