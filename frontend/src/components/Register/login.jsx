import { useState } from "react";
import useUserStore from "./../../store/userStore";
import axios from "axios";
//keeping password in local state is recommended
//if we store password as a global state variable the chances of getting it leaked increases


const Login=()=>{
    const { userName, email, setuserName, setEmail } = useUserStore();
    const [password,setPassword]=useState('');
    const UserNameHandler=(e)=>{
        setuserName(e.target.value);
    }
    const UserEmailHandler=(e)=>{
        setEmail(e.target.value);
    }
    const UserPasswordHandler=(e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        try{
            const response=await axios.post('http://localhost:3007/login',{
                username:userName,
                email:email,
                password:password
            });      
            alert('Login Successfull!!!');    
            console.log("user logined",response.data);

        }catch(err){
            console.log(err)
        }
    }
    return(
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <form onSubmit={handleSubmit} className="bg-black border-2 border-[#00f0ff] rounded-xl p-8 shadow-[0_0_15px_#00f0ff,0_0_30px_#00f0ff] space-y-6 w-full max-w-md">
                
            <h2 className="text-3xl font-bold text-center text-[#00f0ff] mb-6">
                   Login 
                </h2>
                <input
                type="text"
                placeholder="username"
                value={userName}
                onChange={UserNameHandler}
                className="w-full bg-black border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_10px_#00f0ff] transition-all"
                />
                 <input
                type="email"
                placeholder="email"
                value={email}
                onChange={UserEmailHandler}
                className="w-full bg-black border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_10px_#00f0ff] transition-all"
                />
                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={UserPasswordHandler}
                className="w-full bg-black border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_10px_#00f0ff] transition-all"
                />
 <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00f0ff] to-[#0080ff] text-black font-bold py-3 px-6 rounded-lg hover:shadow-[0_0_20px_#00f0ff] transition-all duration-300 transform hover:-translate-y-1"
                >
                   Login
                </button>            </form>
        </div>
    )
}

export default Login;