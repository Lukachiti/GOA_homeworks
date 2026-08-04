import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./Support.css";

function Support() {
  const [ticket, setTicket] = useState({
    name: "",
    email: "",
    issueType: "general",
    description: "",
  });

  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(null);
    setError(null);

    axios
      .post("http://localhost:5000/api/support", ticket)
      .then(() => {
        setStatus("Ticket submitted! Our technical support team will contact you soon.");
        setTicket({
          name: "",
          email: "",
          issueType: "general",
          description: "",
        });
      })
      .catch((err) => {
        console.error("Support submission failed:", err);
        setError("Failed to submit ticket. Please check your connection and try again.");
      });
  };

  return (
    <div className="support-page-wrapper">
      <Navbar />

      <div className="support-container">
        <div className="support-card">
          <h2>Support Center</h2>
          <p className="support-subtitle">
            Need help with an order, custom build, or hardware issue? Submit a ticket below.
          </p>

          {status && <div className="ticket-status success">{status}</div>}
          {error && <div className="ticket-status error">{error}</div>}

          <form className="support-form" onSubmit={handleSubmit}>
            <div className="support-field">
              <label htmlFor="name">Your Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={ticket.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="support-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={ticket.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="support-field">
              <label htmlFor="issueType">Issue Category</label>
              <select
                id="issueType"
                name="issueType"
                value={ticket.issueType}
                onChange={handleChange}
              >
                <option value="general">General Inquiry</option>
                <option value="hardware">Hardware / Performance Issue</option>
                <option value="shipping">Order & Shipping Status</option>
                <option value="warranty">Warranty & Repairs</option>
              </select>
            </div>

            <div className="support-field">
              <label htmlFor="description">Describe the Issue</label>
              <textarea
                id="description"
                name="description"
                rows="5"
                placeholder="Please describe what's happening in detail..."
                value={ticket.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="support-submit-btn">
              Submit Ticket
            </button>
          </form>
        </div>

        <div className="navigation-card">
          <h2>Need Quick Answers?</h2>
          <p>
            If you submitted a custom build inquiry instead of a support issue, you can check back on the builder.
          </p>
          <Link to="/customs" className="back-btn">
            Back to Custom PC Builder
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Support;