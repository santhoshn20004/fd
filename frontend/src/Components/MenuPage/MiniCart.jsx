import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Minicart = styled.div`
  position: absolute;
  top: -150px;
  border: 3px solid red;
  z-index: 950;
`;

const handleCheckout = () => {};

function MiniCart() {
  const state = useSelector((state) => state);
  return (
    <Minicart>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img src={state.cart.img_url} alt="res" />
          </div>
          <div className="col-9 text-left"></div>
        </div>
        <div className="row">
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col-9 text-left">
            <h6 className="mt-3 font-weight-bold mb-0">Subtotal</h6>
            <small className="text-muted font-weight-normal">
              Extra charges may apply
            </small>
          </div>
          <div className="col-3 mt-3 text-right mb-3">
            <b> ₹{state.cart.reduce((a, b) => a + b.qty * b.price, 0)}</b>
          </div>

          <div className="col-12 p-2 mt-3">
            <button
              className="btn btn-block btn-lg"
              style={{
                borderRadius: "0px",
                background: "#fc8019",
                color: "white",
              }}
              onClick={handleCheckout}
            >
              <h6 className="mt-2" style={{ background: "#fc8019" }}>
                CHECKOUT
              </h6>
            </button>
          </div>
        </div>
      </div>
    </Minicart>
  );
}

export default MiniCart;
