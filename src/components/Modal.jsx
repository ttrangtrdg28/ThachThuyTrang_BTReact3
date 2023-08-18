import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="shoesDetailPopup"
        tabIndex={-1}
        aria-labelledby="shoesDetail"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ maxWidth: "65%" }}>
          <div className="modal-content">
            <div className="modal-header">
              <span id="productID" style={{ display: "none" }} />
              <h5 className="modal-title">{this.props.content.name}</h5>
              <button
                type="button"
                className="close"
                id="btnClose"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row px-5">
                <div className="col-12 col-sm-12 col-md-6 col-xl-6">
                  <img
                    className="img-fluid"
                    src={this.props.content.image}
                    alt=""
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-xl-6">
                  <h3>${this.props.content.price}</h3>
                  <div className="row">
                    <div className="col-12 mt-3">
                      <b>
                        <span>Alias: </span>
                      </b>
                      <span>{this.props.content.alias}</span>
                    </div>
                    <div className="col-12 mt-3">
                      <b>
                        <span>Quantity: </span>
                      </b>
                      <span>{this.props.content.quantity}</span>
                    </div>
                    <div className="col-12 mt-3">
                      <b>
                        <span>Description: </span>
                      </b>
                    </div>
                    <div className="col-12">
                      <span>{this.props.content.description}</span>
                    </div>
                    <div className="col-12 mt-3">
                      <b>
                        <span>Short Description: </span>
                      </b>
                    </div>
                    <div className="col-12">
                      <span>{this.props.content.shortDescription}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
