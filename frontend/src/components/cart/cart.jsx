import { useEffect, useState } from "react";
import useUserStore from "./../../store/userStore";
import axios from "axios";

const Cart = () => {
  const { userName, cart } = useUserStore();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice,setTotalPrice]=useState('');

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
                className="flex justify-between size-100 items-center p-6 border border-zinc-800 rounded-2xl bg-zinc-900/40"
              >
                
                <div className="flex-col items-center justify-center p-4">
              <img
                src={item.images[0]?.url}
                alt={item.model}
                className="w-full max-w-md object-cover rounded-lg"
              />
              <p className="text-lg pt-10 font-medium">{item.model}</p>
            </div>
                  <div className="flex-col items-center justify-center">
                    
                  <p className="text-sm p-10 text-zinc-400">
                    Quantity: {item.quantity}
                  </p>
                  <p className="pt-10 font-semibold">
                  $  {item.basePrice * item.quantity}
                </p>
                  </div>
                  
              

                
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
