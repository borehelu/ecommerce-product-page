import React from "react";

function Cart({ isCartVisible, cartItems, product }) {
  const cartList = cartItems.map((item) => (
    <div className="list">
      <img
        className="product-image"
        src="/images/image-product-1-thumbnail.jpg"
        alt="product-image"
      />
      <div className="details">
        <p>{item.name}</p>
        <p>
          <span className="price">${item.price}</span>x{" "}
          <span className="quantity">{item.quantity}</span>{" "}
          <span className="total">${item.price * item.quantity}</span>
        </p>
      </div>
      <button className="delete-cart"></button>
    </div>
  ));
  return (
    <div className={`cart ${isCartVisible ? "show" : "hide"}`}>
      <h3>Cart</h3>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div className="list" key={index}>
            <img
              className="product-image"
              src={product[index].thumbnail[0]}
              alt="product-image"
            />
            <div className="details">
              <p>{product[index].name}</p>
              <p>
                <span className="price">
                  ${product[index].price.toFixed(2)}
                </span>
                x <span className="quantity">{item.quantity}</span>{" "}
                <span className="total">
                  ${(product[index].price * item.quantity).toFixed(2)}
                </span>
              </p>
            </div>
            <button className="delete-cart"></button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}

      {cartItems.length > 0 && (
        <button className="btn checkout-btn">Checkout</button>
      )}
    </div>
  );
}

export default Cart;
