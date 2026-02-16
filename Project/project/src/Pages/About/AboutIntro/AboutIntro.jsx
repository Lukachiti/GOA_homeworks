import aboutGif from "./aboutGif.gif";
import "./AboutIntro.css";
function AboutIntro() {
  return (
    <section className="About-container">
      <aside>
        <h1>About this site!</h1>

        <p>
          Undefined created this site to practice his coding skills and also
          create a useful website to display his clubs diy creations. He made it
          possible for you to try out our creations by giving you a challenge.
        </p>
        <hr></hr>
        <p>So what are you waiting for?</p>
      </aside>

      <img src={aboutGif} alt="About animation" className="about-gif" />
    </section>
  );
}

export default AboutIntro;
