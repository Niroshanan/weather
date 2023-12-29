import Link from "next/link";
import React from "react";

const UserDetails = ({ user }) => {
  return (
    <div className="flex justify-between">
      {user.name}
      <Link
        className="px-4 py-2 bg-cyan-600 rounded-xl hover:bg-cyan-800"
        href={"/api/auth/logout"}
      >
        Log out
      </Link>
    </div>
  );
};

export default UserDetails;
