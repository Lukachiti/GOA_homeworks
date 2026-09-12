import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";

// Helper to ensure each visitor has a session key for backend lookup
const getSessionId = () => {
  let id = localStorage.getItem("cart_session_id");
  if (!id) {
    id = "sess_" + Math.random().toString(36).substring(2, 11);
    localStorage.setItem("cart_session_id", id);
  }
  return id;
};

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [orderSuccess, setOrderSuccess] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const sessionId = getSessionId();

  // Load cart from backend on mount
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/cart/${sessionId}`)
      .then((res) => {
        setCartItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch cart:", err);
        setLoading(false);
      });
  }, [sessionId]);

  const updateQuantity = (productId, quantity) => {
    axios
      .post("http://localhost:5000/api/cart/update", {
        sessionId,
        productId,
        quantity,
      })
      .then((res) => setCartItems(res.data.cart))
      .catch((err) => console.error(err));
  };

  const removeFromCart = (productId) => {
    axios
      .post("http://localhost:5000/api/cart/remove", {
        sessionId,
        productId,
      })
      .then((res) => setCartItems(res.data.cart))
      .catch((err) => console.error(err));
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  };

  const handleInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    setSubmitting(true);

    axios
      .post("http://localhost:5000/api/cart/checkout", {
        sessionId,
        customer,
      })
      .then((res) => {
        setOrderSuccess(res.data.orderId);
        setCartItems([]);
        setSubmitting(false);
      })
      .catch((err) => {
        console.error("Checkout failed:", err);
        setSubmitting(false);
      });
  };

  if (loading) {
    return (
      <div className="cart-page-wrapper">
        <Navbar />
        <div className="cart-container">
          <p>Loading cart...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page-wrapper">
      <Navbar />

      <div className="cart-container">
        {orderSuccess ? (
          <div className="cart-card success-card">
            <h2>Order Placed Successfully!</h2>
            <p>
              Your Order ID is: <strong>{orderSuccess}</strong>
            </p>
            <p className="success-subtitle">
              You can track your package progress anytime using this ID.
            </p>
            <Link to="/track" className="cart-continue-btn">
              Track Order
            </Link>
          </div>
        ) : cartItems.length === 0 ? (
          <div className="cart-card empty-cart">
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added any PCs or components yet.</p>
            <Link to="/" className="cart-continue-btn">
              Browse Prebuilds
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-card items-list">
              <h2>Shopping Cart</h2>

              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image || "https://via.placeholder.com/80"}
                    alt={item.name}
                    className="cart-item-img"
                  />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="cart-item-price">${item.price}</p>
                  </div>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="cart-total-row">
                <span>Total:</span>
                <strong>${getTotalPrice().toLocaleString()}</strong>
              </div>
            </div>

            <div className="cart-card checkout-form-card">
              <h2>Checkout Details</h2>
              <p className="form-subtitle">No account required to order</p>

              <form onSubmit={handleCheckout} className="checkout-form">
                <div className="cart-field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={customer.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="cart-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={customer.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="cart-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={customer.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="cart-field">
                  <label htmlFor="address">Shipping Address</label>
                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    value={customer.address}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="cart-submit-btn"
                  disabled={submitting}
                >
                  {submitting ? "Processing..." : "Place Order"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;