import Intro from "./Home/Intro/Intro";
import FB from "./Home/FB/FB";
import Projects from "./Home/Projects/Projects";
import News from "./Home/News/News";
import Footer from "./Home/Footer/Footer";
import Slideshow from "./Home/Slideshow/Slideshow";


function Home() {
  return (
    <>
      <Intro />
      <News />
      <FB />
      <Projects />
      <Slideshow />
      <Footer />
    </>
  );
}

export default Home;
