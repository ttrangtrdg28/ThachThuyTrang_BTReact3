import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <img className="img-fluid" src={this.props.item.image} alt="" />
          <h5 className="card-title">{this.props.item.name}</h5>
          <p className="card-text">${this.props.item.price}</p>
        </div>
        <div className="card-footer text-muted">
          <button
            onClick={() => {
              this.props.setStateModal(this.props.item);
            }}
            class="btn btn-success"
            type="button"
            id="cart"
            data-toggle="modal"
            data-target="#shoesDetailPopup"
          >
            View Detail
          </button>
        </div>
      </div>
    );
  }
}
