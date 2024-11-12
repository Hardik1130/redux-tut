import React from "react";

const Home = () => {
  return (
    <div>
      <div className="add-to-cart">
        <img src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-add-to-cart--icon-design-png-image_1012561.jpg" />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">

        <div className="img-wrapper item">
          <img
            src="https://www.imagineonline.store/cdn/shop/files/iPhone_16_Ultramarine_PDP_Image_Position_1b__en-IN_7b656007-a2cd-4bd9-ac70-7bae97c34a80.jpg?v=1727247799&width=1445"
            alt=""
          />
        </div>

        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>

        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
