import { PlusIcon } from "@heroicons/react/24/solid";

function NewChat() {
  return (
    <div className="border border-gray-700 chatRow">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
