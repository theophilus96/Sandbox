import React from "react";
import "./Home.css";
import Constructionbg from "./assets/constructionbg.jpg";
import Product from "./Product";
import HSLlogo from "./assets/HSLlogo.png";
import KTClogo from "./assets/ktc-civil-engineering-and-construction-squarelogo-1545223477995.png";

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
            price={100}
            image={KTClogo}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="4165190"
            title="HSL construction company"
            price={100}
            image={HSLlogo}
            rating={5}
          />
          <Product
            id="7180451"
            title="HSL construction company"
            price={100}
            image={HSLlogo}
            rating={5}
          />
          <Product
            id="2558920"
            title="HSL construction company"
            price={100}
            image={HSLlogo}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="7147091"
            title="HSL construction company"
            price={100}
            image={HSLlogo}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
