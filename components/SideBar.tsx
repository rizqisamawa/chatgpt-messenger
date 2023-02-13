"use client";

import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { collection } from "firebase/firestore";
import ChatRow from "./ChatRow";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, erro] = useCollection(
    session && collection(db, "users", session.user?.email!, "chats")
  );

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
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>

      {session && (
        <div className="flex-col">
          <div className="chatRow justify-center">
            <div className="flex-1 inline-flex gap-2" onClick={() => logOut()}>
              <ArrowRightOnRectangleIcon className="w-5 h-5 text-white" />
              <div className="text-white">Log out</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
