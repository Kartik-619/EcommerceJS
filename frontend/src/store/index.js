import {create} from 'zustand'; // ✅ Importing the 'create' function from Zustand to define a global state store

// ✅ Creating a custom hook called 'useMacbookStore' using Zustand
const useMacbookStore=create((set)=>({ // 'set' is a function provided by Zustand to update the state

    color:'#2e2c2e', // ✅ Initial state: 'color' holds the default color value for the MacBook (could be used for UI themes or product selection)

    setColor: (color)=>set({color}), // ✅ Action: 'setColor' is a function that updates the 'color' state using Zustand's 'set' method

    scale:0.08, // ✅ Initial state: 'scale' represents a zoom level, size factor, or any numeric property (e.g., 3D model scale)

    setScale:(scale)=>set({scale}), // ✅ Action: 'setScale' updates the 'scale' value in the store

    reset:()=>set({color:'#2e2c3e',scale:0.08}), // ✅ Action: 'reset' restores both 'color' and 'scale' to their default values

})); // ✅ Zustand wraps this object and returns a custom hook that can be used in components

export default useMacbookStore; // ✅ Exporting the store so it can be imported and used in your React components
