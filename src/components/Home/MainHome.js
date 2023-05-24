import video_1 from "../../video/video-1.mp4";
import cushioned from "../../image/cushioned.jpg";
import cushioned3 from "../../image/cushioned-3.jpg";
import "./MainHome.css";
import React from "react";
export default function MainHome() {
  return (
    <div className="Home">
      <div className="video">
        <video control autoPlay muted loop>
          <source src={video_1} type="video/mp4" />
        </video>

        <div className="header-text">
          <h1 className="header-title">Welcome to our store</h1>
          <p className="header-subtitle">Let your home feel the style</p>
        </div>
      </div>

      <div className="box-2">
        <h1>Furniture salon "Dosbol"</h1>
        <p>
          We are your reliable partner in a cozy and stylish environment. In our
          store you will find a wide selection of quality furniture for all
          areas of your home or office.
        </p>
        <p>
          Our goal is to help you realize your dreams of the perfect space. We
          offer a variety of styles and designs to suit different tastes and
          preferences. Whether you are looking for modern minimalist furniture,
          classic elegant style or something unique and original, we have what
          you need.
        </p>
      </div>
      <div className="product-Home">
        <a
          className="product-a cush-1"
          href="/products/willow-ii-slipcovered-bench-queen-sleeper-sofa"
        >
          <img
            className="cushioned dop-product"
            src={cushioned}
            alt="cushioned"
          />
        </a>
        <a className="product-a cush-3" href="/products/hague-mid-century-sofa">
          <img
            className="cushioned-3 dop-product"
            src={cushioned3}
            alt="cushioned-3"
          />
        </a>
      </div>
    </div>
  );
}
