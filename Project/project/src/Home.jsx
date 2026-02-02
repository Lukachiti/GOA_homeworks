import Intro from "./Intro/Intro";
import FB from "./FB/FB";
import Projects from "./Projects/Projects";

function Home() {
  return (
    <div style={{ marginTop: "60px" }} className="home-container">
      <Intro />
      <FB />
      <Projects />
    </div>
  );
}

export default Home;
