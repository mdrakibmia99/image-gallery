import { createBrowserRouter } from "react-router-dom";
import NotFound404 from "../pages/NotFound404";
import { Suspense, lazy } from "react";
import Loading from "../components/Loading/Loading";
const HomeApp = lazy(() => import("../components/Gallery"));
const router = createBrowserRouter([
    {
      path: "/",
      element:<Suspense fallback={<Loading />}>
        <HomeApp/>
      </Suspense>,
    },
    {
      path: "*",
      element: <NotFound404 />,
    },
  ]);
  export default router