import {
  collection,
  limitToLast,
  orderBy,
  query,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import withAutoSignOut from "./navbar/auth/AutoSignOut";
import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";
import { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import NavBar from "./navbar/NavBar";

type User = {
  uid: string;
  displayName: string;
  photoURL: string;
};

function ChatRoom() {
  const messagesRef = collection(db, "messages");
  const q = query(messagesRef, orderBy("createdAt"), limitToLast(25));

  const [messages] = useCollectionData(q);
  const [formValue, setFormValue] = useState("");

  // Send message to Firestore
  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = auth.currentUser as User;
    const { uid, photoURL } = user;

    if (!formValue.trim()) {
      // Don't send empty message
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        userName: user.displayName,
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL,
      });

      setFormValue("");
    } catch (error) {
      console.error("Error sending message to Firestore: ", error);
    }
  };

  // Scroll to bottom of chat when new message is sent
  const dummy = useRef<HTMLDivElement | null>(null);

  function scrollToBottom() {
    if (dummy.current) {
      (dummy.current as HTMLElement).scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    scrollToBottom();

    // Clean up the scrollToBottom function when the component unmounts
    return () => {
      window.removeEventListener("resize", scrollToBottom);
    };
  }, [messages]);

  return (
    <>
      <div className="container mx-auto px-8">
        <div className="flex h-screen flex-col gap-2">
          <NavBar />

          <main className="scrollbar-track-transperent min-h-[25vh] overflow-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-thumb-rounded-lg scrollbar-h-14">
            <div className="mr-2 flex flex-col gap-y-2 py-2">
              {messages &&
                messages.map((msg, i) => (
                  <ChatMessage
                    key={i}
                    message={msg}
                    previousMessage={i > 0 ? messages[i - 1] : null}
                  />
                ))}
            </div>
            <div ref={dummy}></div>
          </main>

          <form
            onSubmit={sendMessage}
            className="sticky flex w-full flex-row justify-between rounded-2xl bg-white"
          >
            <input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="say something nice"
              className="max-h-48 w-full resize-none overflow-y-auto rounded-l-2xl py-2 px-3 text-black outline-none"
            />

            <button type="submit" disabled={!formValue} className="p-4">
              <FiSend className="h-5 w-5 text-black" />
            </button>
          </form>
          <div className="flex w-full select-none justify-center pb-2 text-xs text-neutral-500">
            Please note that all messages sent in the ChatApp global chatroom
            are public and visible to all users. We encourage you to be
            respectful and mindful of others when using ChatApp.
          </div>
        </div>
      </div>
    </>
  );
}

export default withAutoSignOut(ChatRoom);
