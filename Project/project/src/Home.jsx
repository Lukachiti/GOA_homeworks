import Intro from "./Intro/Intro";
import FB from "./FB/FB";

function Home() {
  return (
    <div style={{ marginTop: "60px" }} className="home-container">
      <Intro />
      <FB />
    </div>
  );
}

export default Home;
