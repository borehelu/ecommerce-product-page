import React, { useState } from "react";

function ProductDetails({ product,addToCart }) {
  const [quantity, setQuantity] = useState(0);
  function decreaseQuantity() {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    } else {
      setQuantity(0);
    }
  }
  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function addToMyCart(e){
    if(quantity > 0){
        addToCart(product.id,quantity);
        e.target.disabled = true;
    }
  }
 
  return (
    <div className="product-details">
      <h3 className="product-company">{product.company}</h3>
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <div className="pricing">
        <div>
          <h2 className="discounted-price">{`$ ${(
            (product.price * product.discount) /
            100
          ).toFixed(2)}`}</h2>
          <p className="discount">{`${product.discount}%`}</p>
        </div>

        <p className="price">{`${product.price.toFixed(2)}`}</p>
      </div>
      <div className="quantity-wrapper">
        <button className="decrease" onClick={decreaseQuantity}>
          <img src="/images/icon-minus.svg" alt="decrease icon" />
        </button>
        <p className="quantity">{quantity}</p>
        <button className="increase" onClick={increaseQuantity}>
          <img src="/images/icon-plus.svg" alt="increase icon" />
        </button>
      </div>
      <button className="add-to-cart" onClick={(e)=>addToMyCart(e)}>
        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
            fill-rule="nonzero"
          />
        </svg>
        Add to cart
      </button>
    </div>
  );
}

export default ProductDetails;
