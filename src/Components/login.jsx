import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex flex-row-reverse ">
        <Link
          className="px-4 py-2 bg-cyan-600 rounded-xl hover:bg-cyan-800"
          href={"/api/auth/login"}
        >
          Log in
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Welcome To Weather App</h1>
        <p> Login required to access the website </p>
      </div>
    </div>
  );
};

export default Login;
