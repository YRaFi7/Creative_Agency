import BlurText from "./BlurText";
import GridDistortion from "./GridDistortion";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="grid-distortion-background">
      <GridDistortion
        imageSrc="/code.jpg"
        grid={15}
        mouse={0.5}
        strength={0.8}
        relaxation={0.9}
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