import "./News.css";

function News() {
  const text =
    "No current news updates. Stay tuned for the latest information!";

  return (
    <section className="News-container">
      <div className="News-bar">
        <div className="News-marquee">
          <div className="News-track">
            <span className="News-span">{text}</span>
            <span className="News-span">{text}</span>
          </div>

          <div className="News-track">
            <span className="News-span">{text}</span>
            <span className="News-span">{text}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;