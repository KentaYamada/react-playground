import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/a",
        element: <h2>Hello World</h2>
    }
]);

export { router };