import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      userName: '', // Matches the key in your Cart
      email: '',
      cart:[],
      setuserName: (name) => set({ userName: name }), // Ensure this sets 'userName'
      setEmail: (email) => set({ email: email }),
      logout: () => set({ userName: '', email: '' }),
      addToCart: (productId) =>
        set((state) => ({
          cart: [...state.cart, productId],
        })),
    
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((id) => id !== productId),
        })),
    
      clearCart: () => set({ cart: [] }),
    
    }),
    {
      name: 'user-storage', 
    }
  )
);

export default useUserStore;