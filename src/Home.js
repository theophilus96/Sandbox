import React from "react";
import "./Home.css";
import Constructionbg from "./assets/constructionbg.jpg";
import Product from "./Product";
import HSLlogo from "./assets/HSLlogo.png";
import KTClogo from "./assets/ktc-civil-engineering-and-construction-squarelogo-1545223477995.png";
import useFirestore from "./hooks/useFirestore";

function Home() {

  return (
    <div className="home">
      <div className="home__container">
        <img
          src={Constructionbg}
          alt="constructionbg"
          className="home__image"
        ></img>
        <div className="home__row">
          <Product
            id="3915393"
            title="HSL construction company"
            price={100}
            image={HSLlogo}
            rating={5}
          />
          <Product
            id="1465525"
            title="KTC construction company"
            price={200}
            image={KTClogo}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="4165190"
            title="McKinsey & Company"
            price={1000}
            image="https://download.logo.wine/logo/McKinsey_%26_Company/McKinsey_%26_Company-Logo.wine.png"
            rating={5}
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
