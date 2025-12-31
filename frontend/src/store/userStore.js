import { create } from "zustand";

const useUserStore = create((set) => ({
  userName: "",
  email: "",
  cart: [],

  setuserName: (name) => set({ userName: name }),
  setEmail: (email) => set({ email: email }),
  logout: () => set({ userName: "", email: "", cart: [] }),

  setCart: (cartItems) => set({ cart: cartItems }),

  addToCart: async (productId) => {
    try {
      const res = await fetch("http://localhost:3007/api/addtocart", {
        method: "POST",
        credentials: "include", // send cookies (JWT)
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = await res.json();
      console.log(data);
      set({ cart: data.cart ||[] }); // sync store with backend
    } catch (err) {
      console.error(err);
    }
  },

//  removeFromCart: async (productId) => {
  //  try {
  //    const res = await fetch("http://localhost:3007/cart/remove", {
  //      method: "POST",
  //      credentials: "include",
  //      headers: { "Content-Type": "application/json" },
  //      body: JSON.stringify({ productId }),
  //    });
//
  //    const data = await res.json();
  //    set({ cart: data.cart });
  //  } catch (err) {
  //    console.error(err);
  //  }
  //},

  fetchCart: async () => {
    try {
      const res = await fetch("http://localhost:3007/api/cart", {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      set({ cart: data.cart ||[] }); // sync store with backend
    } catch (err) {
      console.error(err);
    }
  },
}));

export default useUserStore;
