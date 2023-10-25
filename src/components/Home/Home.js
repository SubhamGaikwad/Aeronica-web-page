import React from "react";
import Banner from "../Banner/Banner";

import Vision from "../Vision/Vision";
import Clients from "../Clients/Clients";
import Product from "../Product/Product";
import Services from "../Services/Services";
const Home = () => {
  return (
    <div>
      <Banner />
      <Vision />
      <Product />
      <Services />
      <Clients />
    </div>
  );
};

export default Home;
