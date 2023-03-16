import Login from "./auth/Login";
import SignOut from "./auth/SignOut";
import SignUp from "./auth/SignUp";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { NavLink } from "react-router-dom";
import Chat from "./auth/Chat";

function NavBar() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return null; // Or a loading spinner or message
  }
  if (error) {
    return <>Something went wrong: {error}</>;
  }

  return (
    <>
      <nav className="sticky z-50 flex flex-row items-center justify-between py-4">
        <div className="text-xl font-bold text-neutral-200">
          <NavLink to="/">ChatHub</NavLink>
        </div>
        <div>
          {user ? (
            <div className="flex flex-row">
              <Chat /> <SignOut />
            </div>
          ) : (
            <div>
              <Login /> <SignUp />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
