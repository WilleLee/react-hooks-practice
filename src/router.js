import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import UseClickHook from "./routes/UseClickHook";
import UseConfirmHook from "./routes/UseConfirmHook";
import UseEffectHook from "./routes/UseEffectHook";
import UseFadeinHook from "./routes/UseFadeinHook";
import UseFullscreenHook from "./routes/UseFullscreenHook";
import UseInputHook from "./routes/UseInputHook";
import UseNetworkHook from "./routes/UseNetworkHook";
import UsePageLeaveHook from "./routes/UsePageLeaveHook";
import UsePreventLeaveHook from "./routes/UsePreventLeaveHook";
import UseScrollHook from "./routes/UseScrollHook";
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
  { path: "/hooks/use-confirm", element: <UseConfirmHook /> },
  { path: "/hooks/use-prevent-leave", element: <UsePreventLeaveHook /> },
  { path: "/hooks/use-page-leave", element: <UsePageLeaveHook /> },
  { path: "/hooks/use-fadein", element: <UseFadeinHook /> },
  { path: "/hooks/use-network", element: <UseNetworkHook /> },
  { path: "/hooks/use-scroll", element: <UseScrollHook /> },
  { path: "/hooks/use-fullscreen", element: <UseFullscreenHook /> },
  { path: "/use-zustand", element: <UseZustand /> },
]);

export default router;
