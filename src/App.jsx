import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Portifolio from "./pages/Portifolio.jsx";
import About from "./pages/About.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "home", element: <Home title="start framework" /> },
        { path: "about", element: <About /> },

        { path: "portifolio", element: <Portifolio /> },

        { path: "contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
