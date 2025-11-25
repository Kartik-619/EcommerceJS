import {create} from 'zustand'; // ✅ Importing the 'create' function from Zustand to define a global state store

// ✅ Creating a custom hook called 'uuseIphoneStor' using Zustand
const useIphoneStore=create((set)=>({ // 'set' is a function provided by Zustand to update the state

    color:'#2e2c2e', // ✅ Initial state: 'color' holds the default color value for the MacBook (could be used for UI themes or product selection)

    setColor: (color)=>set({color}), // ✅ Action: 'setColor' is a function that updates the 'color' state using Zustand's 'set' method

   
    reset:()=>set({color:'#2e2c3e'}), // ✅ Action: 'reset' restores both 'color' 

})); // ✅ Zustand wraps this object and returns a custom hook that can be used in components

export default useIphoneStore;