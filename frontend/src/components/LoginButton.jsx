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
          className="px-5 py-2 bg-primary text-white rounded-full font-medium
                     transition-all duration-300 ease-in-out
                     hover:bg-primary_dull 
                     hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] 
                     active:scale-95 active:shadow-inner"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default LoginButton;
