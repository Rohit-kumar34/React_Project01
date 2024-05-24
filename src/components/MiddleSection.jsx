import React from "react";

const MiddleSection = () => {
  return (
    <main className="midContainer container">
      <div className="product-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="product-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        <div className="product-shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="" />
            <img src="/images/flipkart.png" alt="" />
          </div>
        </div>
      </div>
      <div className="product-image">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </main>
  );
};

export default MiddleSection;
