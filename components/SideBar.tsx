"use client";

import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";

function SideBar() {
  const { data: session } = useSession();

  const logOut = () => {
    confirm("Are you sure you want to log out?") && signOut();
  };
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/* ModelSelection */}</div>
          {/* Map Through the CharTows */}
        </div>
      </div>
      {session && (
        <img
          onClick={() => logOut()}
          src={session.user?.image!}
          alt="Profile Picture"
          className="h-10 w-10 rounded-full cursor-pointer mx-auto mb-2 border-white border-2 hover:opacity-50"
        />
      )}
    </div>
  );
}

export default SideBar;
