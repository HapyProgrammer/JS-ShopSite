import React from "react";
import Items from "./components/Images.js";
import "./Style.css";
import { Redirect } from "react-router-dom";

export default ({
  match: {
    params: { id }
  }
}) => {
  const goodId = parseInt(id);
  if (Items[0][goodId]) {
    return (
      <div className="item">
        <div className="image-section">
          <img src={Items[0][goodId].image} alt={Items[0][goodId].name} />
        </div>
        <div className="description-section">
          <h3>{Items[0][goodId].name}</h3> <br />
          <h4>Price: ${Items[0][goodId].price}</h4> <br />
          <p className="green">In Stock</p>
          <br />
          <p>{Items[0][goodId].description}</p>
        </div>
        <div className="buy-section">
          <h1>${Items[0][goodId].price}</h1>
          <br />
          <p>
            Free delivery on orders over <strong>$50</strong>. Pay an extra{" "}
            <strong>$20</strong> for express delivery
          </p>
          <br />
          <div className="bottom-button">
            <button>BUY</button>
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to={{ pathname: "/error" }} />;
  }
};
