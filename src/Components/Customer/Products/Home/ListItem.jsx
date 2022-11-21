import React from "react";
import "./Style.css";

const ListItem = ({
  item: {
    //  coverSrc,
    //  title,
    price,
    //  rating
  },
}) => (
  <div className="listItem-wrap">
    {/* <img src={coverSrc} alt="" className="product-image rounded" />
    <header>
      <h6>{title}</h6>
    </header> */}
    <footer>
      <p>
        <b>Rs{price}</b>
        {/* <span>⭐{rating}</span> */}
      </p>
    </footer>
  </div>
);

export default ListItem;
