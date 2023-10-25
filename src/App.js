import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
// import ProductDetails from "./components/ProductDetails/ProductDetails";
// import ProductCard from "./components/ProductCard/ProductCard";
import Contact from "./components/Contact/Contact";
import ProductDetail1 from "./components/ProductDetail/ProductDetail1";
import ProductDetail2 from "./components/ProductDetail/ProductDetails2";
import Services from "./components/Services/Services";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/PrductDetails",
        element: <ProductDetail1 />,
      },
      {
        path: "/prductDetails",
        element: <ProductDetail2 />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      {/* <Header />
      <Home />
      <Footer /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
