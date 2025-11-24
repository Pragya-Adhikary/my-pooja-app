import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PaymentPage.css";

interface LocationState {
  pooja?: string;
  amount?: number;
}

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const [amount, setAmount] = useState<number>(state?.amount || 1100);
  const [paymentId, setPaymentId] = useState("");

  const handlePayNow = () => {
    if (!paymentId) {
      alert("Please enter your eSewa/Khalti ID");
      return;
    }

    console.log("Payment Amount:", amount);
    console.log("Payment ID:", paymentId);

    // Add payment API integration here if needed
    alert(`Payment of Rs. ${amount} initiated for ${state?.pooja || "your pooja"}!`);
    navigate("/home");
  };

  return (
    <div className="payment-wrapper">
      <h2 className="payment-title">Payment Confirmation</h2>

      <div className="payment-box">

        {/* LEFT SIDE */}
        <div className="payment-left">
          <h3 className="section-heading">Customer Details</h3>
          <input className="input-field" type="text" placeholder="Name" />
          <input className="input-field" type="text" placeholder="Phone" />
          <input className="input-field" type="email" placeholder="Email" />

          <h3 className="section-heading">Payment Gateways</h3>
          <button className="pay-option">
            <img src="/images/esewa.jpeg" alt="eSewa" />
            eSewa
          </button>
          <button className="pay-option">
            <img src="/images/khalti.jpg" alt="Khalti" />
            Khalti
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="payment-right">
          <h3 className="section-heading">Order Summary</h3>
          {state?.pooja && (
            <div className="summary-row">
              <span>Pooja</span>
              <span>{state.pooja}</span>
            </div>
          )}
          <div className="summary-row">
            <span>Total</span>
            <span>Rs. {amount}</span>
          </div>

          <div className="form-section">
            <label>🆔 eSewa/Khalti ID</label>
            <input
              type="text"
              placeholder="Enter your eSewa or Khalti ID"
              value={paymentId}
              onChange={(e) => setPaymentId(e.target.value)}
              className="input-field"
            />
          </div>

          <button className="pay-now-btn" onClick={handlePayNow}>
            Pay Now
          </button>

          <div className="secure-text">🔒 Your payment is secure</div>
          <div className="secure-box">
            Secured By<br />
            Nepal Rastra Bank <br />
            PCI-DSS Compliant SSL Encryption
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
