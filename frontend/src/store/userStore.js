import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserStore = create(
  persist(
    (set) => ({
      userName: '', // Matches the key in your Cart
      email: '',
      setuserName: (name) => set({ userName: name }), // Ensure this sets 'userName'
      setEmail: (email) => set({ email: email }),
      logout: () => set({ userName: '', email: '' }),
    }),
    {
      name: 'user-storage', 
    }
  )
);

export default useUserStore;