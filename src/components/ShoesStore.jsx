import React, { Component } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";

import products from "../data/data.json";

export default class ShoesStore extends Component {
  state = {
    productDetail: products[0],
  };

  setStateModal = (shoes) => {
    this.setState({
      productDetail: shoes,
    });
  };

  render() {
    return (
      <div>
        <div>
          <img
            className="img-fluid"
            src="https://storage.pixteller.com/designs/designs-images/2020-12-21/05/sport-shoes-sale-banner-1-5fe0c471dbecb.png"
            style={{ width: "100%", backgroundSize: "cover" }}
          />
        </div>
        <h2 className="text-center my-5">SHOES STORE</h2>
        <ProductList
          setStateModal={this.setStateModal}
          productsData={products}
        />
        <Modal content={this.state.productDetail} />
      </div>
    );
  }
}
