import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import UseClickHook from "./routes/UseClickHook";
import UseEffectHook from "./routes/UseEffectHook";
import UseInputHook from "./routes/UseInputHook";
import UseStateHook from "./routes/UseStateHook";
import UseTabsHook from "./routes/UseTabsHook";
import UseTitleHook from "./routes/UseTitleHook";
import UseZustand from "./routes/UseZustand";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/hooks/use-state", element: <UseStateHook /> },
  { path: "/hooks/use-input", element: <UseInputHook /> },
  { path: "/hooks/use-tabs", element: <UseTabsHook /> },
  { path: "/hooks/use-effect", element: <UseEffectHook /> },
  { path: "/hooks/use-title", element: <UseTitleHook /> },
  { path: "/hooks/use-click", element: <UseClickHook /> },
  { path: "/use-zustand", element: <UseZustand /> },
]);

export default router;
