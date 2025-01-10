import React, { useState } from "react";
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div id="login-container" className="w-screen h-screen flex items-center justify-center  bg-slate-600">
            <div className="flex flex-col items-center">
                <img src={logo} className="h-44" alt="" />
                <form onSubmit={handleSubmit} className="flex flex-col gap-7 items-center">
                    {/* Email Input */}
                    <div>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="border border-white rounded-lg h-10 w-96 placeholder:text-white bg-transparent px-2 caret-white outline-white text-white"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border border-white rounded-lg h-10 w-96 placeholder:text-white bg-transparent px-2 caret-white outline-white text-white"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="btn-grad"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
