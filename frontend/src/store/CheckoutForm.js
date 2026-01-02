import { create } from "zustand";

const useUserStore = create((set) => ({
  userName: "",
  email: "",
  fullName: '',
  mobile:0,

  setuserName: (name) => set({ userName: name }),
  setEmail: (email) => set({ email: email }),
  setFullname:(fullname)=>set({fullName:fullname}),
setMobileNumber:(mobileno)=>set({mobile:mobileno}),


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

  fetchPrice: async () => {
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
