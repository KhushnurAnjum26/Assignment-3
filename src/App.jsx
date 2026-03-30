import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AllApps from "./pages/AllApps";
import AppDetails from "./pages/AppDetails";
import MyInstallation from "./pages/MyInstallation";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/apps", element: <AllApps /> },
  { path: "/apps/:id", element: <AppDetails /> },
  { path: "/installation", element: <MyInstallation /> },
  { path: "*", element: <ErrorPage /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;