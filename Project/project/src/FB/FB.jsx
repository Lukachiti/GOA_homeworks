import { useState } from "react";
import "./FB.css";

function FB() {
  return (
    <>
      <section id="Facecontainer" className="FB-container">
        <img
          className="FB-image"
          src="https://grizzlygrowler.org/wp-content/uploads/2023/10/social-media-transparent-background-15-900x609-1.png"
          alt="Facebook Logo"
        />
        <div className="FB-text">
          <h1 className="FB-h1">Social media</h1>
          <p className="FB-p">
            Join us on our Facebook page to stay updated with our latest news,
            projects, and events. Connect with our community and be a part of
            our journey!
          </p>
          <button className="FB-button" onClick={() => {
            window.open("https://www.facebook.com/ekosdrone", "_blank");
          }}>
            See us on Facebook
          </button>
        </div>
      </section>
    </>
  );
}

export default FB;
