import { useState } from "react";
import axios from "axios";


const Register = () => {
    const [usernamee, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // Added for confirmation

    const UserNameHandler = (e) => {
        setUsername(e.target.value);
    };

    const UserEmailHandler = (e) => {
        setUserEmail(e.target.value);
    };

    const UserPasswordHandler = (e) => {
        setPassword(e.target.value);
    };

    const ConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit =async (e) => {
        e.preventDefault();
        if(password!=confirmPassword){
            alert('The password does not match in both fields');
            return;
        }
        try{
            const response= await axios.post('http://localhost:3007/register',{
                username:usernamee,
                email:userEmail,
                password:password
            },
        );  
            console.log("user registered",response.data);
        }catch(err){
            console.log('registeration error',err);
           
        }
    }
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <form 
                onSubmit={handleSubmit} 
                className="relative bg-black border-2 border-[#00f0ff] rounded-xl p-8 shadow-[0_0_15px_#00f0ff,0_0_30px_#00f0ff] space-y-6 w-full max-w-md"
            >
                <h2 className="text-3xl font-bold text-center text-[#00f0ff] mb-6">
                    Create Account
                </h2>
                
                <input
                    type="text"
                    placeholder="Username"
                    value={usernamee}
                    onChange={UserNameHandler}
                    className="w-full bg-black border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_10px_#00f0ff] transition-all"
                />
                
                <input
                    type="email"
                    placeholder="Email"
                    value={userEmail}
                    onChange={UserEmailHandler}
                    className="w-full bg-black border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_10px_#00f0ff] transition-all"
                />
                
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={UserPasswordHandler}
                    className="w-full bg-black border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_10px_#00f0ff] transition-all"
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={ConfirmPasswordHandler}
                    className="w-full bg-black border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#00f0ff] focus:shadow-[0_0_10px_#00f0ff] transition-all"
                />
                
                {/* ✅ FIXED: Button is now in normal flow with proper styling */}
                <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00f0ff] to-[#0080ff] text-black font-bold py-3 px-6 rounded-lg hover:shadow-[0_0_20px_#00f0ff] transition-all duration-300 transform hover:-translate-y-1"
                >
                    Sign Up
                </button>

                <div className="text-center mt-4">
                    <p className="text-gray-400">
                        Already have an account?{" "}
                        <a href="/login" className="text-[#00f0ff] hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;