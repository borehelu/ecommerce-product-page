import React from "react";

function Cart({ isCartVisible, cartItems, product }) {
  function getProductObject(cartItem){
    return product.filter((product) => product.id === cartItem.product_id)[0];

  }

  console.log(getProductObject(cartItems[0]))

  return (
    <div className={`cart ${isCartVisible ? "show" : "hide"}`}>
      <h3>Cart</h3>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => {
           
          return (
            <div className="list" key={index}>
              <img
                className="product-image"
                src={getProductObject(item).thumbnail[0]}
                alt="product-image"
              />
              <div className="details">
                <p>{getProductObject(item).name}</p>
                <p>
                  <span className="price">
                    {`$${(
                      (getProductObject(item).price *
                        getProductObject(item).discount) /
                      100
                    ).toFixed(2)} `}
                  </span>
                  <span className="quantity">x {item.quantity}</span>{" "}
                  <span className="total">
                    $
                    {(
                      ((getProductObject(item).price *
                        getProductObject(item).discount) /
                        100) *
                      item.quantity
                    ).toFixed(2)}
                  </span>
                </p>
              </div>
              <button className="delete-cart"></button>
            </div>
          );
        })
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
