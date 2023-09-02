import React, {useState} from "react";
import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

//1. Header Component
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return <div className="header">
        <div>
            {/* <img src={LOGO_URL}/> */}
        </div>
        <div className="nav-items">
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
            <ul>
                <li>
                    {onlineStatus === true ? "🟢" : "🔴" }
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li className="bg-indigo-900">Cart</li>
                <button className="login-btn" onClick={() => btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
            </ul>
        </div>
    </div>
}//Header

export default Header;