import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import UseInputHook from "./routes/UseInputHook";
import UseStateHook from "./routes/UseStateHook";
import UseTabsHook from "./routes/UseTabsHook";
import UseZustand from "./routes/UseZustand";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/hooks/use-state", element: <UseStateHook /> },
  { path: "/hooks/use-input", element: <UseInputHook /> },
  { path: "/hooks/use-tabs", element: <UseTabsHook /> },
  { path: "/use-zustand", element: <UseZustand /> },
]);

export default router;
