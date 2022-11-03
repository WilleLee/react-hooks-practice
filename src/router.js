import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import UseInputHook from "./routes/UseInputHook";
import UseStateHook from "./routes/UseStateHook";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/hooks/use-state", element: <UseStateHook /> },
  { path: "/hooks/use-input", element: <UseInputHook /> },
]);

export default router;
