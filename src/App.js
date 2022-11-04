import { RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import router from "./router";

const App = () => {
  return (
    <main>
      <NavBar />
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
