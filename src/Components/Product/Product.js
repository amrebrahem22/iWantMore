import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  render() {
    const { title, price, rating, image } = this.props;
    return (
      <div className="product" style={{width: this.props.autoWidth? 'auto': '100%'}}>
        <div className="product__info">
          <p>{title}</p>
          <div className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </div>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌠</p>
              ))}
          </div>
        </div>
        <img src={image} alt={title} />
        <button>Add to Basket</button>
      </div>
    );
  }
}

export default Product;
