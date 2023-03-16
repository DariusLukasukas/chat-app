import { NavLink } from "react-router-dom";

function SignUp() {
  return (
    <NavLink to="/signup">
      <button className="rounded-lg bg-white py-2 px-4  text-black ring-1 ring-white ring-offset-0 hover:rounded-lg hover:bg-black hover:text-white hover:ring-white">
        Sign up
      </button>
    </NavLink>
  );
}

export default SignUp;
