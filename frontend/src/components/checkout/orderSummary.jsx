import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate=useNavigate();
  const handlePayment=async(e)=>{
    e.preventDefault();
    try{
     // const response=await axios.post("http://localhost:3007/api/uropay/makeorder",{},
 
      //{
        //withCredentials:true,
      //});
      navigate('/uroUpi')
    }catch(err){
      console.error('The payment rout calling error',err);
    }
  }

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3007/api/ordersummary",
          { withCredentials: true }
        );

        setSummary(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load order summary");
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  if (loading) return <p>Loading order summary...</p>;
  if (error) return <p>{error}</p>;

  const { user, summary: totals, items } = summary;

  return (
    <div className="max-w-5xl  mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

      {/* User Info */}
      <div className="mb-4">
        <p className="font-medium">{user.username}</p>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>

      {/* Items */}
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>
              {item.product.model} × {item.quantity}
            </span>
            <span>
              ₹{item.product.basePrice * item.quantity}
            </span>
          </div>
        ))}
      </div>

      <hr className="my-4" />

      {/* Totals */}
      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{totals.subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>₹{totals.tax}</span>
        </div>
        <div className="flex justify-between font-semibold text-base">
          <span>Total</span>
          <span>₹{totals.totalPrice}</span>
        </div>
      </div>

      <button onClick={handlePayment} className="mt-6 w-full bg-black text-white py-3 rounded-lg">
        Proceed to Payment
      </button>
    </div>
  );
};

export default OrderSummary;
