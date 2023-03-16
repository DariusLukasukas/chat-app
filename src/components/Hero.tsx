import { NavLink } from "react-router-dom";
import Phonemockup from "../assets/phone-mockup.svg";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Hero() {
  const [user] = useAuthState(auth);

  return (
    <>
      <div className="grid-row-2 grid gap-10 md:mt-40 md:grid-cols-2">
        {/* LEFT */}
        <div className="z-20 mt-20 h-full max-w-md content-center justify-self-center text-neutral-200 lg:max-w-md">
          <h1 className="mb-5 text-5xl font-bold lg:text-6xl">
            Welcome to ChatHub!
          </h1>

          <p className="text-lg md:text-lg">
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
          <div className="grid h-fit w-full grid-cols-1 justify-items-center">
            <img
              src={Phonemockup}
              alt="Phone Mockup"
              className=" z-10 ml-10 h-fit w-full max-w-xs"
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
