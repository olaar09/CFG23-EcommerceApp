import React, { useContext } from "react";
import "./ProductDetails.css";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { Button, Col, Form, Row } from "react-bootstrap";


function ProductDetails(props) {
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(props.id);

  return (
    <div className="productcard">
      <div>
        {" "}
        <img src={props.image} />
      </div>
      <div className="item__description">
        <h2>{props.title} </h2>
        <p>{props.description}</p>
        <div className="product__price">£{props.price}</div>
        {/* <Link to="/cart"> */}
        { productQuantity > 0 ? 
            <>
              <Form as={Row}>
                <Form.Label column="true" sm="5">In Cart: {productQuantity}</Form.Label>
                <Col sm="2">
                  <Button 
                    sm="2" 
                    className="btn-sm mt-2" 
                    onClick={() => cart.addToCart(props.id)}>+</Button>
                  <Button 
                    sm="2" 
                    className="btn-sm mt-2" 
                    onClick={() => cart.removeFromCart(props.id)}>-</Button>
                </Col>
              </Form>
              <Button 
                variant="danger" 
                onClick={() => cart.deleteFromCart(props.id)} 
                className="mt-5">REMOVE</Button>
            </> 
            :
            <Button 
              type="button" 
              class="btn btn-sm m-auto"
              variant="secondary"
              onClick={() => cart.addToCart(props.id)}>ADD TO CART</Button>
          }
        {/* </Link> */}
      </div>
    </div>
  );
}

export default ProductDetails;
