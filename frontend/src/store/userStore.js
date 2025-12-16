import {create} from 'zustand'; // ✅ Importing the 'create' function from Zustand to define a global state store


const useUserStore=create((set)=>({ // 'set' is a function provided by Zustand to update the state

    userName:'', //
    setuserName: (value)=>set({userName:value}), 
    email:'',
    setEmail:(val)=>set({email:val}),
   
     

})); // ✅ Zustand wraps this object and returns a custom hook that can be used in components

export default useUserStore;