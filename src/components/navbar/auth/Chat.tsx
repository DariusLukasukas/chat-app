import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function Chat() {
  return (
    <>
      <NavLink to="/chatroom">
        <button className="flex flex-row items-center justify-center gap-2 py-2 px-4 text-neutral-500 hover:text-white">
          Chatroom
          <HiChatBubbleLeftRight className="h-5 w-5" />
        </button>
      </NavLink>
    </>
  );
}
export default Chat;
