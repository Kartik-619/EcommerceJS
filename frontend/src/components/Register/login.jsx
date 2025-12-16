import { useState } from "react";
import {useUserStore} from "./../../store/userStore";

//keeping password in local state is recommended
//if we store password as a global state variable the chances of getting it leaked increases


const Login=()=>{
    const { userName, email, setUsername, setEmail } = useUserStore();
    const [password,setPassword]=useState('');
    const UserNameHandler=(e)=>{
        setUsername(e.target.value);
    }
    const UserEmailHandler=(e)=>{
        setEmail(e.target.value);
    }
    const UserPasswordHandler=(e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit=()=>{

    }
    return(
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <form onSubmit={handleSubmit} className="bg-black border-2 border-[#00f0ff] rounded-xl p-8 shadow-[0_0_15px_#00f0ff,0_0_30px_#00f0ff] space-y-6 w-full max-w-md">
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
                <button lassName="absolute right-4 top-3.5 text-gray-400 hover:text-gray-300">Login</button>
            </form>
        </div>
    )
}

export default Login;