import React, { Component } from "react";
import Items from "./components/Images.js";
import "./Style.css";
import { Link } from "react-router-dom";

class StoreMain extends Component {
  constructor(props) {
    super(props);
    this.handleStoreItemIcons = this.handleStoreItemIcons.bind(this);
    this.state = {};
  }

  componentDidMount() {
    this.handleStoreItemIcons();
  }

  handleStoreItemIcons() {
    let storeItemElement = [];
    Items[0].forEach(item => {
      const newElement = (
        <Link
          to={`/StoreItemPage/${item.id}`}
          key={item.id}
          className="item-image"
        >
          <img src={item.image} alt={item.name} height="250" width="250" />
        </Link>
      );
      storeItemElement.push(newElement);
    });
    this.setState({ StoreItemElements: storeItemElement });
  }
  render() {
    return <div className="shop-items">{this.state.StoreItemElements}</div>;
  }
}

export default StoreMain;
