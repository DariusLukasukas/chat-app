import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

function SignOut() {
  const [signOut, loading, error] = useSignOut(auth);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="rounded-md py-2 pl-4 text-neutral-500 hover:text-white"
    >
      Sign out
    </button>
  );
}

export default SignOut;
