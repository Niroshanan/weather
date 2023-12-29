import Link from "next/link";
import React from "react";

const UserDetails = ({ user }) => {
  return (
    <div className="grid grid-cols-2 ">
      <div className=" flex items-center">
        <img src={user.picture} alt={user.name} width={50} />
        <h1 className="font-semibold px-2">{user.name}</h1>
      </div>
      <div className="flex flex-row-reverse h-fit">
        <Link
          className="px-4 py-2 bg-cyan-600 rounded-xl hover:bg-cyan-800"
          href={"/api/auth/logout"}
        >
          Log out
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;
