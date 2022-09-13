import { useState } from "react";
import Navigation from "./components/Navigation";
import ProductCarousel from "./components/ProductCarousel";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      images: [
        "/images/image-product-1.jpg",
        "/images/image-product-2.jpg",
        "/images/image-product-3.jpg",
        "/images/image-product-4.jpg",
      ],
      thumbnail: [
        "/images/image-product-1-thumbnail.jpg",
        "/images/image-product-2-thumbnail.jpg",
        "/images/image-product-3-thumbnail.jpg",
        "/images/image-product-4-thumbnail.jpg",
      ],
      company: "sneaker company",
      price: 250,
      discount: 50,
      quantity: 3,
      description: `These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they'll withstand everything the
      weather can offer.`,
    },
  ]);
  const [cartItems, setCartItems] = useState([{ product_id: 1, quantity: 3 }]);

  function addToCart(productId, quantity) {
    let newCart = [...cartItems, { product_id: productId, quantity: quantity }];
    setCartItems(newCart);
  }

  function removeFromCart(productId) {
    let newCart = [...cartItems].filter(item => item.product_id !== productId);
    setCartItems(newCart);
  }
  return (
    <main>
      <Navigation cartItems={cartItems} product={products} removeFromCart={removeFromCart}/>
      <ProductCarousel />
      <ProductDetails product={products[0]} addToCart={addToCart} />
    </main>
  );
}

export default App;
