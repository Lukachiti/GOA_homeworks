import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./Customs.css";

function Customs() {
  const [parts, setParts] = useState({
    cpus: [],
    gpus: [],
    ram: [],
    storage: [],
  });

  const [formData, setFormData] = useState({
    cpu: "",
    gpu: "",
    ram: "",
    storage: "",
    notes: "",
  });

  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [requestId, setRequestId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/parts")
      .then((response) => {
        setParts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load parts database:", err);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/customs", formData)
      .then((res) => {
        setSubmitted(true);
        if (res.data.requestId) {
          setRequestId(res.data.requestId);
          const existing = JSON.parse(localStorage.getItem("my_custom_requests") || "[]");
          existing.push(res.data.requestId);
          localStorage.setItem("my_custom_requests", JSON.stringify(existing));
        }
      })
      .catch((err) => {
        console.error("Failed to send custom request:", err);
      });
  };

  if (loading) {
    return (
      <div className="customs-page-wrapper">
        <Navbar />
        <div className="customs-container">
          <p>Loading hardware options...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="customs-page-wrapper">
      <Navbar />

      <div className="customs-container">
        <div className="customs-card">
          <h2>Craft your own unique build!</h2>
          <p className="customs-subtitle">Select your components below</p>

          {submitted ? (
            <div className="customs-status success">
              Your custom request has been sent!
              {requestId && <p><strong>Request ID:</strong> {requestId}</p>}
            </div>
          ) : (
            <form className="customs-form" onSubmit={handleSubmit}>
              <div className="customs-field">
                <label htmlFor="cpu">Processor (CPU)</label>
                <select
                  id="cpu"
                  name="cpu"
                  value={formData.cpu}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select CPU</option>
                  {parts.cpus?.map((cpu, idx) => (
                    <option key={idx} value={cpu}>
                      {cpu}
                    </option>
                  ))}
                </select>
              </div>

              <div className="customs-field">
                <label htmlFor="gpu">Graphics Card (GPU)</label>
                <select
                  id="gpu"
                  name="gpu"
                  value={formData.gpu}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select GPU</option>
                  {parts.gpus?.map((gpu, idx) => (
                    <option key={idx} value={gpu}>
                      {gpu}
                    </option>
                  ))}
                </select>
              </div>

              <div className="customs-field">
                <label htmlFor="ram">Memory (RAM)</label>
                <select
                  id="ram"
                  name="ram"
                  value={formData.ram}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select RAM</option>
                  {parts.ram?.map((ramItem, idx) => (
                    <option key={idx} value={ramItem}>
                      {ramItem}
                    </option>
                  ))}
                </select>
              </div>

              <div className="customs-field">
                <label htmlFor="storage">Storage</label>
                <select
                  id="storage"
                  name="storage"
                  value={formData.storage}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Storage</option>
                  {parts.storage?.map((drive, idx) => (
                    <option key={idx} value={drive}>
                      {drive}
                    </option>
                  ))}
                </select>
              </div>

              <div className="customs-field">
                <label htmlFor="notes">Additional Notes or Requests</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="4"
                  placeholder="Tell us about color preferences, liquid cooling, or specific budget limits..."
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="customs-submit-btn">
                Submit Custom Request
              </button>
            </form>
          )}
        </div>

        <div className="customs-card">
          <h2>Contact us on multiple platforms</h2>
          <ul className="social-media-list">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook: facebook.com/pcmall
              </a>
            </li>
            <li>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                TikTok: tiktok.com/@pcmall
              </a>
            </li>
            <li>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
                WhatsApp: +1 (555) 019-2834
              </a>
            </li>
            <li>
              <a href="https://viber.com" target="_blank" rel="noreferrer">
                Viber: +1 (555) 019-2834
              </a>
            </li>
          </ul>
        </div>

        <div className="customs-navigation-card">
          <h2>Issues with your service?</h2>
          <p>Contact our support team for immediate help</p>
          <Link to="/support" className="customs-nav-btn">
            Report Issue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Customs;