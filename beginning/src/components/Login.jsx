import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/User";

export default function Login() {
    const dispatch = useDispatch()
return (
    <div>
        <button
            onClick={()=> {
                dispatch(login({name:'Bobo', age: 30, email: 'bbo@gmail.com'}))
            }}
        >
            Login
        </button>

        <button
            onClick={()=> {
                dispatch(logout())
            }}
        >
            Logout
        </button>


    </div>
)
}