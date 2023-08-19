import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProductList = () => {
    return this.props.productsData.map((product) => {
      return (
        <div key={product.id} className="col-12 col-md-3 col-sm-3 mb-4">
          <ProductItem
            item={product}
            setStateModal={this.props.setStateModal}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="mx-auto my-5" style={{ maxWidth: "70%" }}>
        <div className="row">{this.renderProductList()}</div>
      </div>
    );
  }
}
