import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="img/home.jpg" alt="home" />
        <div className="home__row">
          {/* Product */}
          <Product
            id="1"
            title="EVGA Z12 RGB Gaming Keyboard, RGB Backlit LED, Dedicated Media Keys, Water Resistant"
            img="img/keyboard.jpg"
            price={99.99}
            rating={5}
          />
          {/* Product */}
          <Product
            id="2"
            title="GE Profile Automatic Espresso Machine + Milk Frother | Brew in 90 Seconds | 20 Bar Pump Pressure for Balanced Extraction | Five Adjustable Grind Size Levels | WiFi Connected for Customization | Black"
            img="img/coffee_machine.jpg"
            price={15.99}
            rating={3}
          />
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            id="3"
            title="The Summer I Turned Pretty: Amazon Exclusive Edition"
            img="img/books.jpg"
            price={29.9}
            rating={3}
          />
          {/* Product */}
          <Product
            id="4"
            title="It Happened One Summer: A Novel"
            img="img/it_happened.jpg"
            price={15.99}
            rating={4}
          />
          {/* Product */}
          <Product
            id="5"
            title="Ugly Love: A Novel"
            img="img/ugly_love.jpg"
            price={19.99}
            rating={3}
          />
        </div>
        <div className="home__row">
          {
            /* Product */
            <Product
              id="6"
              title="Gaming Keyboard"
              img="img/curtain.jpg"
              price={13.99}
              rating={5}
            />
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
