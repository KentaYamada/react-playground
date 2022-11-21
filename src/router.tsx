import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import App from "./App";
import PageA from "./pages/pageA";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageA/>
    },
    {
        path: "/a",
        element: <h2>Hello World</h2>
    }
]);

export { router };