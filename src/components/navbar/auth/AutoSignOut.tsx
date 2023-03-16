import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import LoginPage from "../../../routes/LoginPagePage";

interface Props {
  timeout?: number;
}

function withAutoSignOut<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & Props> {
  const WrappedComponent: React.FC<P & Props> = ({
    timeout = 10 * 60 * 1000,
    ...props
  }) => {
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
      const timerRef = { current: null as NodeJS.Timeout | null };

      if (user) {
        timerRef.current = setTimeout(() => auth.signOut(), timeout);
      }

      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      };
    }, [user, timeout]);

    if (loading) {
      return null;
    }

    if (user) {
      return <Component {...(props as P)} />;
    }

    return <LoginPage />;
  };

  return WrappedComponent;
}

export default withAutoSignOut;
