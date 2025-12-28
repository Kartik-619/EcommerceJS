import { useEffect, useState } from "react";
import useUserStore from "./../../store/userStore";
import axios from "axios";

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
        console.log("Cart from Zustand:", cart);

        const responses = await Promise.all(
          cart.map((item) =>
            axios.get(
              `http://localhost:3007/api/products/${item.productId}`
            )
          )
        );

        // merge product data + quantity
        const productsWithQty = responses.map((res, index) => ({
          ...res.data,
          quantity: cart[index].quantity,
        }));

        setCartItems(productsWithQty);
      } catch (err) {
        console.error("Error fetching cart products:", err);
      }
    };

    fetchProducts();
  }, [cart]);

  return (
    <div className="min-h-screen w-full bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <h1 className="text-4xl font-bold mb-10">
          Welcome
          <span className="text-zinc-500"> {userName || "Guest"}</span>
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-zinc-400">
            Your bag is empty.
          </div>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-6 border border-zinc-800 rounded-2xl bg-zinc-900/40"
              >
                <div>
                  <p className="text-lg font-medium">{item.model}</p>
                  <p className="text-sm text-zinc-400">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <p className="font-semibold">
                  ₹{item.basePrice * item.quantity}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
