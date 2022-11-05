# REACT HOOKS PRACTICES AND TUTORIALS IN ZUSTAND.JS

## Overall Goals

This repository of source code aims at having practices in making own react hooks using _useState_ and _useEffect_ methods of the React module as well to learn how to use zustand.js, which is known as a simple-to-use React state manager, and to implement this to real projects.

## Create React App

The dev template for this project is supported by Create React App, which helps start building a React.js application in a quick and simple way as well as offers varied kinds of templates including that of TypeScrip.

To be able to begin with CRA, create-react-app must be installed globally on your computer using the terminal so that you could create your app using npx command.

```
npm install -g create-react-app
npx create-react-app project-name
```

You can find much more on [the official document](https://create-react-app.dev/docs/getting-started).

## Zustand

You can find detailed explanations and tips for Zustand [here](https://github.com/pmndrs/zustand)

First I downloaded zustand by npm.

```
npm install zustand
```

What I did on this project was only to follow the tutorial exactly adding some routes or conditionals that I wanted to try.

Once the module is successfully installed, Zustand state stores can be created by create method, which is the zustand module itself.

```javascript
// ./src/store.js
import create from "zustand";

export const useBearStore = create((set) => ({
  bear: 0,
  incrementBear: () => set((state) => state.bear + 1),
  decrementBear: () => set((state) => state.bear - 1),
}));
```

The sample above is just like the tutorial given by the Zustand document. Here I wanted to add some conditionals to those two dispatches, _incrementBear_ and _decrementBear_, which needs to be handled inside another block scopes.

```javascript
export const useBearStore = create((set) => ({
  bear: 0,
  incrementBear: () =>
    set((state) => {
      if (state.bear < 10) {
        return state.bear + 1;
      } else {
        return state.bear;
      }
    }),
  decrementBear: () =>
    set((state) => {
      if (state.bear > 0) {
        return state.bear - 1;
      } else {
        return state.bear;
      }
    }),
}));
```

Important thing is that the dispatch method must return the next value regarding all the possible conditionals. If, for instance, _the incrementBear_ dispatch does not define any value on the case that the current _state.bear_ is larger than or equals to 10, the system does not thorw any default value implicitly, but an unfavourable error.

Since the _useBearStore_ is exported from the _store.js_, it is possible to import the store separtely to appropriate components. While each of thoses states and dispatches could be called outside individually, I would've liked to have them altogether into the same component, which could be done using the _shallow_ opiton of the zustand module like below.

```javascript
// ./src/rotues/UseZustand.js
import shallow from "zustand/shallow";
import { useBearStore } from "../store";

const UseZustand = () => {
  const { bear, incrementBear, decrementBear } = useBearStore(
    (state) => ({
      bear: state.bear,
      incrementBear: state.incrementBear,
      decrementBear: state.decrementBear,
    }),
    shallow
  );
  return (
    <section>
      <h1>Zustand Tutorials</h1>
      <p>
        you now have {bear === 0 ? "no" : bear} {bear > 1 ? "bears" : "bear"}
      </p>
      <div className="btns">
        <button onClick={incrementBear}>add a bear</button>
        <button onClick={decrementBear}>remove a bear</button>
      </div>
    </section>
  );
};

export default UseZustand;
```

Like above, only by sending shallow as an argument, all the states and dispatches of the same store can be implemented to the componented and utilized.

## React-Router-Dom v6.4.3

React-router-dom is now much simpler.

First thing to do to use react-router-dom on your project is to install the module using npm.

```
npm install react-router-dom
```

Secondly, create _RouterProvider_ component on the top-level of all route components. I, for example, added the _RouterProvider_ on _App.js_ next to _NavBar_ so that all the routes could show the _NavBar_ component.

```javascript
// ./src/App.js
import { RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <main>
      <NavBar />
      <RouterProvider />
    </main>
  );
};

export default App;
```

And here's the thing. RouterProvider component must receive router as its prop, which contains all the information of which routes of this project. Creating a separate file called _router.js_ to manage those routes would be more efficient than have them together with the real component code. Once you state routes the project need using _createBrowserRouter_ method of the _react-router-dom_ module, those should imported to the _App.js_ in this case and sent as prop to the _RouterProvider_.

```javascript
// ./src/router.js
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> }
]);

export default router;
```

```javascript
// ./src/App.js
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
```

Now it is possible to make paths and elements as many as needed on the _router.js_.
