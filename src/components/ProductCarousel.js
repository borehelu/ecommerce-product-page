import React, { useEffect, useState } from "react";

function ProductCarousel() {
  const [active, setActive] = useState(0);

  const productImages = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ];


  

  function nextImage() {
    if(active < productImages.length-1){
        setActive(active=>active + 1);
    }else{
        setActive(0);
    }
    
  }

  function previousImage() {

    if(active > 0){
        setActive(active=>active - 1);
    }else{
        setActive(productImages.length - 1);
    }
    
  }
  return (
    <div className="carousel">
      <div className="carousel-img">
        <img src={productImages[active]} alt="product img" />
      </div>
      <button className="carousel-btn previous" onClick={previousImage}>
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </button>
      <button className="carousel-btn next" onClick={nextImage}>
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default ProductCarousel;
