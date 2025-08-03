import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Portifolio from "./pages/Portifolio.jsx";
import About from "./pages/About.jsx";

import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout.jsx";

function App() {
  const router = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
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
