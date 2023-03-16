import { NavLink } from "react-router-dom";
import { default as Phonemockup } from "../assets/phone-mockup.svg";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Hero() {
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="mt-5 flex h-[75vh] flex-col items-center justify-between gap-10 px-16 md:flex-row">
        {/* LEFT */}
        <div className="z-20 max-w-sm text-neutral-200 lg:max-w-md">
          <h1 className="mb-5 text-6xl font-bold">Welcome to ChatHub!</h1>
          <p className="text-lg">
            ChatHub is a simple and easy way to join a global chatroom and
            connect with people from around the world. Whether you're looking to
            make new friends, share interesting ideas, or just chat with others,
            ChatHub makes it easy to join the conversation.
          </p>
          {/* CTA button */}
          {user ? (
            <NavLink to="/chatroom">
              <button className="animate-flow relative z-10 mt-5 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 text-base font-medium text-white shadow-lg">
                <span className="block rounded-lg bg-black px-4 py-2 text-white hover:bg-transparent">
                  Join Chatroom
                </span>
              </button>
            </NavLink>
          ) : (
            <NavLink to="/signup">
              <button className="animate-flow relative z-10 mt-5 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-0.5 text-base font-medium text-white shadow-lg">
                <span className="block rounded-lg bg-black px-4 py-2 text-white hover:bg-transparent">
                  Get Started
                </span>
              </button>
            </NavLink>
          )}
        </div>

        {/* RIGHT */}
        <div className="lg:mt-10">
          <div className="grid w-full grid-cols-1 justify-items-center">
            <img
              src={Phonemockup}
              className="z-10 ml-10 h-fit w-full max-w-xs"
            />
            <div className="absolute ml-[10rem] mt-[12rem] h-96 w-96 animate-blob rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 blur-3xl filter transition lg:w-[30rem]"></div>
            <div className="-delay-4000 absolute mr-[10rem] mt-[2rem] h-96 w-72 animate-blob rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 blur-3xl filter transition lg:mt-0"></div>
            <div className="-delay-6000 absolute mt-[25rem] mr-[15em] h-96 w-80 animate-blob rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl filter transition lg:w-[15rem]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
