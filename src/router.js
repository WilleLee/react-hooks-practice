import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import UseStateHook from "./routes/UseStateHook";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/hooks/use-state", element: <UseStateHook /> },
]);

export default router;
