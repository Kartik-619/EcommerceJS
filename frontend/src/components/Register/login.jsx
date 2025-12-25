import { useState } from "react";
import useUserStore from "./../../store/userStore";
import axios from "axios";
import { useNavigate} from 'react-router-dom';
//keeping password in local state is recommended
//if we store password as a global state variable the chances of getting it leaked increases


const Login=()=>{
    const [inputUserName, setInputUserName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [LoggedIn,setLogin]=useState(false);
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

    const navigate = useNavigate(); 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3007/login', {
                // FIX: Use inputUserName and inputEmail instead of userName and email
                username: inputUserName, 
                email: inputEmail,
                password: password
            });  
            
            const { user } = response.data;
    
            // Update global state with data returned from backend
            setuserName(user.username);
            setEmail(user.email);
            console.log(user.username);
            console.log(user.email);
            alert('Login Successful!!!');    
            setLogin(true);
            navigate('/store');  
    
        } catch(err) {
            console.log(err);
            alert('Login Failed !!!');    
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
                value={inputUserName}
                onChange={(e)=>setInputUserName(e.target.value)}
                className="w-full bg-black border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_10px_#00f0ff] transition-all"
                />
                 <input
                type="email"
                placeholder="email"
                value={inputEmail}
                onChange={(e)=>setInputEmail(e.target.value)}
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