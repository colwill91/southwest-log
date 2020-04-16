import React, { Component } from 'react'
import './Product.css';
import { Link } from "react-router-dom";

class Product extends Component {

  render() {

    const { name, text, cost, id } = this.props.item;

    return (
      <div className="product col-xs-12 col-sm-6 col-md-3">
        <span className="product-name">{name}</span>
        <span className="divider"></span>
        <span className="product-text">{text}</span>
        <span className="product-price">£ {cost}</span>
        <Link to={{ pathname: '/product/'+id}} className="button-link">
          <button type="button" className="btn">See Product</button>
        </Link>      
      </div>
    );
  }
}

export default Product;

