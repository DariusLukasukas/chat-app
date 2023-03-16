import { HiUser } from "react-icons/hi";
import { auth } from "../firebase";

function ChatMessage(props: any) {
  const { text, uid, photoURL, userName } = props.message;
  const isSentMessage = uid === auth.currentUser?.uid;

  const previousMessage = props.previousMessage;
  const isFirstMessage = !previousMessage;

  // Check if this is the first message or if the previous message was sent by a different user
  const shouldShowProfileImage = isFirstMessage || previousMessage?.uid !== uid;

  return (
    <div
      className={`message ${
        isSentMessage
          ? "flex flex-row-reverse self-end"
          : "flex flex-row self-start"
      } items-center gap-2 text-white`}
    >
      {shouldShowProfileImage &&
        (photoURL ? (
          <img
            src={photoURL}
            alt="profile"
            loading="lazy"
            className="h-9 w-9 self-end rounded-full"
          />
        ) : (
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-neutral-300">
            <HiUser className="mt-2 h-14 w-14 text-neutral-500" />
          </div>
        ))}
      <div>
        <div
          className={`text-sm font-light ${
            isSentMessage ? "text-right" : "text-left"
          } ${shouldShowProfileImage ? "" : "hidden"}`}
        >
          {userName ? userName : "Guest"}
        </div>
        <p
          className={`message ${
            isSentMessage
              ? "w-fit rounded-2xl bg-blue-400"
              : "w-fit rounded-2xl bg-neutral-500"
          }${shouldShowProfileImage ? "" : " mx-10"} max-w-xs break-words p-2`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
export default ChatMessage;
