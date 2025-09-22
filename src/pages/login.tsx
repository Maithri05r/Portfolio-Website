// import React from "react";

// function Login() {
//   return <div>login</div>;
// }

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  // const navigate = useNavigate();

  const handleLoginValidate = () => {
    let invalid = true;
    if (!email) {
      setEmailError("email required");
      invalid = false
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Enter a valid email address");
        invalid = false;
      }
    }
    if (!password) {
      // setEmailError("password required");
      setPasswordError(true)
      invalid = false
    }
  }

  const loginApiCall = (e: React.FormEvent) => {
    e.preventDefault();

    if (handleLoginValidate()) {
      console.log("Calling API with:", { email, password });
    } else {
      console.log("Validation failed:", { emailError, passwordError });
    }
  };
  // useEffect(()=>{
  //   if (loggedIn) {
  //     navigate("/home")
  //   }
  // },[])



  // const consoleFunction =(e:any)=>{
  //    e.preventDefault();
  //   console.log("Error in seperate function", emailError);
  // }




  return (
    // <div className="flex justify-center items-center overflow-hidden bg-gray-900">
    // <div className="bg-gray-800 shadow-lg rounded-2xl p-8">
    <div className="flex justify-center items-center">
      <div className="bg-gray-800 shadow-lg rounded-2xl p-8 w-[450px] mt-28">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-200 text-left">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-200 bg-gray-900 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              title="Enter a valid email address (e.g., user@example.com)"
              onFocus={() => setEmailError("")}
            />
            {/* <span>{emailError}</span> */}
            {emailError && (<span className="text-red-500 text-sm mt-1 block text-left">{emailError}  </span>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-200 text-left">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-200 bg-gray-900 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              title="Enter the valid password"
              onFocus={() => setPasswordError(false)}
            />{passwordError && <span className="text-red-500 text-sm mt-1 block text-left">Password required</span>}
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded w-full"

            onClick={loginApiCall}
          >
            Login
          </button>

        </form>
        <div className="text-center mt-4">
          <div className="text-sm text-gray-200 hover:underline">
            Forgot password?
          </div>
        </div>
        <div className="text-center mt-2 text-sm text-gray-200">
          Don’t have an account?{" "}
          <div onClick={() => navigate("/signup")} className="text-blue-400 font-medium hover:from-blue-600 hover:underline">
            Sign up
          </div>
        </div>
      </div>
    </div>
  );
};



export default Login;
