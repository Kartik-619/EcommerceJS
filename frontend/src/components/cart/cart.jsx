import { useEffect, useState } from "react";
import useUserStore from "./../../store/userStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { userName, cart } = useUserStore();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!cart || cart.length === 0) {
      setCartItems([]);
      return;
    }

    const fetchProducts = async () => {
      try {
        const responses = await Promise.all(
          cart.map((item) =>
            axios.get(`http://localhost:3007/api/products/${item.productId}`)
          )
        );

        const productsWithQty = responses.map((res, index) => ({
          ...res.data,
          quantity: cart[index].quantity,
        }));

        setCartItems(productsWithQty);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, [cart]);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.basePrice * item.quantity,
    0
  );

  const navigate=useNavigate();
  const CheckOutButton=()=>{
    navigate('/checkout');
  }
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <h1 className="text-4xl font-bold mb-12">
          Welcome <span className="text-zinc-400">{userName || "Guest"}</span>
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-zinc-400">
            Your bag is empty.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 p-6 border border-zinc-800 rounded-2xl bg-zinc-900/40"
                >
                  {/* Image */}
                  <img
                    src={item.images[0]?.url}
                    alt={item.model}
                    className="w-32 h-32 object-cover rounded-xl"
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <p className="text-lg font-semibold">{item.model}</p>
                    <p className="text-sm text-zinc-400 mt-2">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-right font-semibold">
                    ${item.basePrice * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="h-fit sticky top-28 border border-zinc-800 rounded-2xl p-6 bg-zinc-900/60">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="flex justify-between mb-4 text-zinc-300">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>

              <button onClick={CheckOutButton} className="w-full mt-6 py-4 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition">
                Check out & Pay
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
