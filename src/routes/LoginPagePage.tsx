import { Link, Navigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { auth } from "../firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import NavBar from "../components/navbar/NavBar";

function LoginPage() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const signInWithGoogleHandler = () => {
    signInWithGoogle();
  };

  if (error) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <p>Error: {error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="font-semibold text-blue-500 hover:underline hover:underline-offset-2"
        >
          Try again
        </button>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }
  if (user) {
    return <Navigate to="/chatroom" />;
  }

  return (
    <>
      <div className="container mx-auto max-w-7xl px-8">
        <NavBar />
      </div>
      <div className="container mx-auto">
        <div className="flex h-screen">
          <div className="m-auto w-full max-w-xs">
            <div className="-mt-60 flex flex-col items-center justify-center gap-4">
              <h1 className="mb-4 text-3xl font-bold">Log in to ChatApp</h1>

              {/* Log in types */}
              <div className="flex w-full flex-col gap-4">
                <button
                  onClick={signInWithGoogleHandler}
                  className="w-full rounded-md bg-white py-3 font-semibold text-black hover:bg-opacity-80"
                >
                  <div className="flex flex-row items-center justify-center gap-2">
                    <FaGoogle className="h-4 w-4" />
                    <div className="font-semibold">Continue with Google</div>
                  </div>
                </button>
              </div>

              {/* Vertical divider line */}
              <div className="h-px w-full bg-neutral-600"></div>

              {/* Login with Email */}
              <Link
                to="/login/email"
                className="font-semibold text-blue-500 hover:underline hover:underline-offset-2"
              >
                Continue with Email →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
