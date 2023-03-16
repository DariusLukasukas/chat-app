import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ChatRoom from "./components/ChatRoom";
import "./index.css";

// React Routes
import LoginPage from "./routes/LoginPagePage";
import LoginEmail from "./routes/LoginEmailPage";
import SignUpPage from "./routes/SignUpPage";
import SignUpEmail from "./routes/SignUpEmailPage";

//  Page Routes
const router = createHashRouter(
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
