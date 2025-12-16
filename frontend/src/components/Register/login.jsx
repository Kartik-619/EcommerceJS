import { useState } from "react";
import {useUserStore} from "./../../store/userStore";

const Login=()=>{
    const { userName, email, setUsername, setEmail } = useUserStore();
    const {password,setPassword}=useState('');
    const UserNameHandler=(e)=>{
        setUsername(e.target.value);
    }
    const UserEmailHandler=(e)=>{
        setEmail(e.target.value);
    }
    const UserPasswordHandler=(e)=>{
        setPassword(e.target.value)
    }
    return(
        <div>
            <form>
                <input
                type="text"
                placeholder="username"
                value={userName}
                onChange={UserNameHandler}
                />
                 <input
                type="email"
                placeholder="email"
                value={email}
                onChange={UserEmailHandler}
                />
                <input
                type="email"
                placeholder="email"
                value={password}
                onChange={UserPasswordHandler}
                />
            </form>
        </div>
    )
}

export default Login;