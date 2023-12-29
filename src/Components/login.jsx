import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-row-reverse ">
      <Link
        className="px-4 py-2 bg-cyan-600 rounded-xl hover:bg-cyan-800"
        href={"/api/auth/login"}
      >
        Log in
      </Link>
    </div>
  );
};

export default Login;
