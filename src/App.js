import { useState } from "react";
import Navigation from "./components/Navigation";
import ProductCarousel from "./components/ProductCarousel";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [cartItems, setCartItems] = useState([
    {
      name: "Fall Limited Edition Sneakers",
      image: "",
      price: 125,
      quantity: 3,
    },
    {
      name: "Fall Limited Edition Sneakers",
      image: "",
      price: 125,
      quantity: 3,
    }
  ]);
  return (
    <main>
      <Navigation cartItems={cartItems} />
      <ProductCarousel />
      <ProductDetails />
    </main>
  );
}

export default App;

