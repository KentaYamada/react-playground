import { createBrowserRouter } from "react-router-dom";
import { PageA } from "../pages/pageA";

/**
 * App router
 */
const router = createBrowserRouter([
  { path: "/", element: <PageA /> },
  { path: "/pageA", element: <PageA /> }
]);

export default router;
