import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="w-full max-w-md bg-gray-900 text-white rounded-2xl shadow-2xl p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "Welcome Back ☕" : "Create New Account "}
        </h2>

        {/* Form */}
        <form className="space-y-4">

          {!isLogin && (
            <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          )}

          <input type="email"placeholder="Email" className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500" />

          <input type="password"placeholder="Password"className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"/>

          {!isLogin && (
            <input type="password" placeholder="Confirm Password"className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
          )}
          <button  type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-semibold py-3 rounded-md transition"   >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-gray-400 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)} className="text-yellow-500 hover:underline ml-2"  >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
