import React from "react";
import HeadPhone from "../Images/HeadPhone.png";

function FeaturedCatagories() {
  const data = [
    {
      img: HeadPhone,
      qty: "128 Products",
      Catagory: "Tabletes",
    },
    {
      img: HeadPhone,
      qty: "128 Products",
      Catagory: "Laptops",
    },
    {
      img: HeadPhone,
      qty: "128 Products",
      Catagory: "Laptops",
    },
  ];
  return (
    <div className="heading container">
      <div className="featured-head">
        <h3>Featured Catagories</h3>
        <a href="#" class="link-secondary see-all">
          All Catagories
        </a>
      </div>
      <div className="heading2">
        <div className="row text-center justify-content-around">
        {data.map((elem) => (
          <div key={data.indexOf(elem)} className=" col-xl-3 col-sm-6 mb-5">
            <div className=" catagory-style row thumbnail d-flex justify-content-around">
              <div>
                <h6 className="catagory">{`${elem.Catagory}`}</h6>
                <p className="qty">{`${elem.qty}`}</p>
                <a href="#" class="">
                  Shop now+
                </a>
              </div>
              <div className="empty"></div>
              <img className="catagory-image" src={`${elem.img}`} />
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedCatagories;
