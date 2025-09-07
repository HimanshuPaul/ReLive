import React from "react";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react"; // Import Clerk hooks

const LoginButton = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="flex gap-3 items-center">
      {/* Clerk profile visible after login */}
      {user ? (
        <div className="scale-110">
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        <button
          onClick={openSignIn}
          className="px-5 py-2 bg-primary hover:bg-primary_dull transition rounded-full font-medium text-white"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default LoginButton;
