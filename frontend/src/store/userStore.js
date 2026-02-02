import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set, get) => ({
      userName: "",
      email: "",
      cart: [],
      role: "",
      isAuthenticated: false,

      // Setters
      setuserName: (name) => set({ userName: name }),
      setEmail: (email) => set({ email: email }),
      setRole: (role) => set({ role: role }),
      setIsAuthenticated: (auth) => set({ isAuthenticated: auth }),
      
      // Login function (sets all at once)
      login: (userData) => set({
        userName: userData.username,
        email: userData.email,
        role: userData.role,
        isAuthenticated: true
      }),
      
      // Logout function
      logout: () => set({ 
        userName: "", 
        email: "", 
        cart: [], 
        role: "", 
        isAuthenticated: false 
      }),

      setCart: (cartItems) => set({ cart: cartItems }),

      addToCart: async (productId) => {
        try {
          const res = await fetch("http://localhost:3007/api/addtocart", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId }),
          });

          const data = await res.json();
          console.log(data);
          set({ cart: data.cart || [] });
        } catch (err) {
          console.error(err);
        }
      },

      fetchCart: async () => {
        try {
          const res = await fetch("http://localhost:3007/api/cart", {
            method: "GET",
            credentials: "include",
          });

          const data = await res.json();
          console.log(data);
          set({ cart: data.cart || [] });
        } catch (err) {
          console.error(err);
        }
      },
      
      // Helper function to check if user is admin
      isAdmin: () => {
        const state = get();
        return state.isAuthenticated && state.role === "ADMIN";
      },
      
      // Helper to get current user info
      getUserInfo: () => {
        const state = get();
        return {
          userName: state.userName,
          email: state.email,
          role: state.role,
          isAuthenticated: state.isAuthenticated
        };
      }
    }),
    {
      name: "user-storage", // key in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;