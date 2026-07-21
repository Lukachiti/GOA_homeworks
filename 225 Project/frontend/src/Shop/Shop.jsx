import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./Shop.css";

function Shop() {
  const [prebuilds, setPrebuilds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  


  useEffect(() => {
    axios
      .get("http://localhost:5000/api/prebuilds")
      .then((response) => {
        let data = [];
        if (Array.isArray(response.data)) {
          data = response.data;
        } else if (response.data && Array.isArray(response.data.prebuilds)) {
          data = response.data.prebuilds;
        } else if (response.data && Array.isArray(response.data.products)) {
          data = response.data.products;
        } else if (response.data && Array.isArray(response.data.data)) {
          data = response.data.data;
        } else {
          setError("Received unexpected data format from server.");
        }
        setPrebuilds(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load inventory. Please try again later.");
        setLoading(false);
      });
  }, []);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredAndSortedPrebuilds = prebuilds
    .filter((pc) => {
      const searchLower = searchTerm.toLowerCase();
      const nameMatch = pc.name?.toLowerCase().includes(searchLower);
      const cpuMatch = pc.specs?.cpu?.toLowerCase().includes(searchLower);
      const gpuMatch = pc.specs?.gpu?.toLowerCase().includes(searchLower);
      return nameMatch || cpuMatch || gpuMatch;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });

  if (loading) return <div className="shop-loading">Loading inventory...</div>;
  if (error) return <div className="shop-error">{error}</div>;

  return (
    <>
      <Navbar />

      <div className="hero-section">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>DOMINATE YOUR GAME</h1>
          <p>Hand-crafted prebuilt PCs engineered for peak performance.</p>
        </div>
      </div>

      <div className="shop-page">
        <div className="shop-container">
          <div className="controls-bar">
            <input
              type="text"
              placeholder="Search by name, CPU, or GPU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="default">Sort By: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>

          <h2 className="shop-title">Prebuilt Gaming PCs</h2>

          <div className="inventory-grid">
            {filteredAndSortedPrebuilds.map((pc) => (
              <div key={pc._id || pc.id} className="pc-card">
                <div className="pc-image-wrapper">
                  <img
                    src={
                      pc.image ||
                      "https://via.placeholder.com/400x300?text=PC+Prebuild"
                    }
                    alt={pc.name}
                    className="pc-image"
                  />
                </div>

                <h3 className="pc-name">{pc.name}</h3>
                <p className="pc-price">${pc.price}</p>

                <div className="specs-snapshot">
                  <div>
                    <strong>CPU:</strong> {pc.specs?.cpu}
                  </div>
                  <div>
                    <strong>GPU:</strong> {pc.specs?.gpu}
                  </div>
                  <div>
                    <strong>RAM:</strong> {pc.specs?.ram}
                  </div>
                </div>

                <div className="card-actions">
                  <button
                    onClick={() => toggleExpand(pc._id || pc.id)}
                    className="info-btn"
                  >
                    {expandedId === (pc._id || pc.id)
                      ? "Hide Details ▲"
                      : "More Info ▼"}
                  </button>
                  <button className="cart-btn">Add to Cart</button>
                </div>

                {expandedId === (pc._id || pc.id) && (
                  <div className="expanded-details">
                    <h4>Full Technical Specifications:</h4>
                    <ul>
                      <li>
                        <strong>Storage:</strong> {pc.specs?.storage}
                      </li>
                      <li>
                        <strong>Motherboard:</strong> {pc.specs?.motherboard}
                      </li>
                      <li>
                        <strong>Power Supply:</strong> {pc.specs?.psu}
                      </li>
                      <li>
                        <strong>Case:</strong> {pc.specs?.case}
                      </li>
                      {pc.specs?.cooling && (
                        <li>
                          <strong>Cooling:</strong> {pc.specs?.cooling}
                        </li>
                      )}
                    </ul>
                    {pc.description && (
                      <p className="pc-description">{pc.description}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredAndSortedPrebuilds.length === 0 && (
            <div className="no-results">No prebuilds matched your search.</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Shop;
