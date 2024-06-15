import React from "react";
import "../css/brands.css";
import BrandTag from "./BrandTag";

const data = [
  {
    image: require("../assets/mothers pride.png"),
    name: "Mother’s Pride",
  },
  {
    image: require("../assets/all you need.png"),
    name: "AllYouNeed",
  },
  {
    image: require("../assets/mothers pride.png"),
    name: "The House Of Taya",
  },
  {
    image: require("../assets/yellowspoon.png"),
    name: "YellowSpoon",
  },
  {
    image: require("../assets/foxbox.png"),
    name: "Foxbox jewellery",
  },
  {
    image: require("../assets/Bakecake.png"),
    name: "BakeCakeWithNikks",
  },
  {
    image: require("../assets/eksoot.png"),
    name: "Eksoot",
  },
  {
    image: require("../assets/BP.png"),
    name: "Beyond Physique",
  },
];

function Brands() {
  return (
    <>
      <section className="brands">
        <h1>Brands That I have Worked With</h1>
        <div className="grid-container">
          {data.map((item, index) => {
            return <BrandTag image={item.image} name={item.name} key={index} />;
          })}
          <div className="txt">+ Many More....</div>
        </div>
      </section>
    </>
  );
}

export default Brands;
