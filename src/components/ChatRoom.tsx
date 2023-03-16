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
      <div className="absolute inset-0">
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex h-screen flex-col gap-2">
            <div className="top-0">
              <NavBar />
            </div>
            <main className="scrollbar-track-transperent flex-1 overflow-hidden scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-thumb-rounded-lg scrollbar-h-14">
              <div className="mr-2 flex flex-col gap-y-2 py-2 px-1">
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

            <div className="bottom-0">
              <form
                onSubmit={sendMessage}
                className="flex items-center rounded-2xl bg-white"
              >
                <input
                  value={formValue}
                  onChange={(e) => setFormValue(e.target.value)}
                  placeholder="say something nice"
                  className="max-h-48 w-full resize-none overflow-y-auto rounded-l-2xl py-2 px-3 text-sm text-black outline-none"
                />

                <button type="submit" disabled={!formValue} className="p-4">
                  <FiSend className="h-5 w-5 text-black" />
                </button>
              </form>

              <div className="flex w-full select-none justify-center pb-2 text-xs text-neutral-500">
                Please note that all messages sent in the ChatHub chatroom are
                public and visible to all users. We encourage you to be
                respectful and mindful of others when using ChatHub.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAutoSignOut(ChatRoom);
