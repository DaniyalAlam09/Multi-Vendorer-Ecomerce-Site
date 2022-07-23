import React, { useEffect, useState } from "react";
import { UilStar } from "@iconscout/react-unicons";
import HeadPhone from "../Images/HeadPhone.png";

function HotCollection() {
  const [visible, setVisible] = useState(4);
  const loadMore = () => {
    setVisible(visible + data.length);
  };

  const data = [
    {
        img: HeadPhone,
        title: "Dell",
        description: "Dell I7",
        price: 50000,
      },
      {
        img: HeadPhone,
        title: "Apple ",
        description: "Macbook 2020",
        price: 50000,
      },
      {
        img: HeadPhone,
        title: "Samsung",
        description: "Samsung Note20 Ultra ",
        price: 50000,
      },
  
      {
        img: HeadPhone,
        title: "JBL",
        description: "Contrller",
        price: 50000,
      },
  
      {
        img: HeadPhone,
        title: "LG",
        description: "LG Smart Tv 4k",
        price: 50000,
      },
      {
        img: HeadPhone,
        title: "Watch ",
        description: "G-shock watch waterprof",
        price: 50000,
      },
      {
        img: HeadPhone,
        title: "Sony",
        description: "Sony Beat Ah100K",
        price: 50000,
      },
  
      {
        img: HeadPhone,
        title: "Apple",
        description: "Airpods Gen 3",
        price: 50000,
      },
  ];
  return (
    <>
      <div className="heading">
        <div className="featured-head">
          <h3>Hot Collection</h3>
          <a href="#" class="link-secondary see-all">
            All Offers
          </a>
        </div>
        <div className="container row  products">
          {data.map((elem) => (
            <div key={data.indexOf(elem)}>
              <div className="tumbnail">
                <img className="product-image rounded" src={`${elem.img}`} />
                <div>
                  <p className="brand-name">{`${elem.title}`}</p>
                  <p className="product-name">{`${elem.description}`}</p>
                  <p className="product-price">{`${elem.price}`}</p>

                </div>
                {/* <button className="button rounded">Add to Cart</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HotCollection;
