import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      userName: '',
      email: '',
      cart: [],

      setuserName: (name) => set({ userName: name }),
      setEmail: (email) => set({ email }),
      logout: () => set({ userName: '', email: '', cart: [] }),

      // ✅ ADD TO CART
      addToCart: (productId) =>
        set((state) => {
          const item = state.cart.find(
            (i) => i.productId === productId
          );

          // CASE 1: product already exists → increment quantity
          if (item) {
            return {
              cart: state.cart.map((i) =>
                i.productId === productId
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }

          // CASE 2: product does not exist → add new item
          return {
            cart: [...state.cart, { productId, quantity: 1 }],
          };
        }),

      // ✅ REMOVE FROM CART
      removeFromCart: (productId) =>
        set((state) => {
          const item = state.cart.find(
            (i) => i.productId === productId
          );

          if (!item) return { cart: state.cart };

          // CASE 1: quantity > 1 → decrement
          if (item.quantity > 1) {
            return {
              cart: state.cart.map((i) =>
                i.productId === productId
                  ? { ...i, quantity: i.quantity - 1 }
                  : i
              ),
            };
          }

          // CASE 2: quantity === 1 → remove item
          return {
            cart: state.cart.filter(
              (i) => i.productId !== productId
            ),
          };
        }),
    }),
    {
      name: 'user-storage',
    }
  )
);

export default useUserStore;
