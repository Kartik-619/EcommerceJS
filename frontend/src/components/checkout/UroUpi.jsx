import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const UroUpi = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { qrCode, upiString, orderId, amount } = state || {};

  const [reference, setReference] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!qrCode || !orderId) {
    return <p className="text-center mt-10">Invalid payment session</p>;
  }

  const submitReference = async () => {
    if (!reference.trim()) {
      setError("UPI Reference Number is required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await axios.patch(
        "http://localhost:3007/api/uropay/update",
        {
          orderId,
          referenceNumber: reference,
        },
        { withCredentials: true }
      );

      navigate("/payment-status", {
        state: { orderId },
      });

    } catch (err) {
      setError("Failed to submit reference number");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">

        <h2 className="text-xl font-semibold text-center mb-4">
          Pay via UPI
        </h2>

        {/* QR Code */}
        <div className="flex justify-center">
          <img src={qrCode} alt="UPI QR" className="w-64 h-64" />
        </div>

        {/* Amount */}
        <p className="text-center text-lg font-medium mt-3">
          Amount: ₹{amount}
        </p>

        {/* UPI String */}
        <div className="mt-4 text-xs bg-gray-100 p-2 rounded break-all">
          {upiString}
        </div>

        <button
          className="w-full mt-2 text-sm text-blue-600"
          onClick={() => navigator.clipboard.writeText(upiString)}
        >
          Copy UPI Link
        </button>

        {/* Reference Input */}
        <input
          type="text"
          placeholder="Enter UPI Reference Number"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          className="w-full border rounded p-2 mt-4"
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          onClick={submitReference}
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded mt-4"
        >
          {loading ? "Submitting..." : "I Have Paid"}
        </button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Payment confirmation may take a few seconds.
        </p>

      </div>
    </div>
  );
};

export default UroUpi;
