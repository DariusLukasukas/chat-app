import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import "./index.css";

//  Page Routes
const App = React.lazy(() => import("./routes/HomePage"));
const LoginPage = React.lazy(() => import("./routes/LoginPagePage"));
const LoginEmail = React.lazy(() => import("./routes/LoginEmailPage"));
const SignUpPage = React.lazy(() => import("./routes/SignUpPage"));
const SignUpEmail = React.lazy(() => import("./routes/SignUpEmailPage"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "login/email",
      element: <LoginEmail />,
    },
    {
      path: "chatroom",
      element: <ChatRoom />,
    },
    {
      path: "signup",
      element: <SignUpPage />,
    },
    {
      path: "signup/email",
      element: <SignUpEmail />,
    },
    {
      path: "*",
      element: <App />,
    },
  ],
  {
    basename: "/",
  }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
