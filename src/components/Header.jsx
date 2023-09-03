import React, {useState} from "react";
import {LOGO_URL} from "../utils/constant";
import LOGO_URL from "./assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

//1. Header Component
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return <div className="flex flex-wrap">
        <div>
            <img className="w-[100px]" src={LOGO_URL}/>
        </div>
        <div className="text-slate-600 bg-indigo-200">
            <ul className="flex flex-wrap m-4 p-4">
                <li className="p-4">
                    {onlineStatus === true ? "🟢" : "🔴" }
                </li>
                <li className="p-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="p-4">
                    <Link to="/about">About</Link>
                </li>
                <li className="p-4">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="p-4">
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li className="p-4">Cart</li>
                <button className="login-btn" onClick={() => btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
            </ul>
        </div>
    </div>
}//Header

export default Header;