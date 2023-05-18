import divan from "../../assets/divan.webp";
import cushioned from "../../image/cushioned.jpg";
import cushioned3 from "../../image/cushioned-3.jpg";
import "./MainHome.css";
import React from "react";
export default function MainHome() {
  return (
    <div className="Home">
      <h1>Furniture salon "Dos-Bol"</h1>
      
      <div className="header1">
      <img className="dop-product header-image" src={divan} alt="Header background" />

        <div className="header-text">
          <h1 className="header-title">Welcome to our store</h1>
          <p className="header-subtitle">you can buy home furniture from us</p>
        </div>
      </div>

      <p>
        When choosing furniture in Bishkek, in search of modern and reliable
        upholstered furniture or cabinet furniture, take a look at our furniture
        store in Karakol. We will be glad to see you in our furniture showroom
        at the address: KR, Karakol, highway - Isa Kuchukova at the intersection
        of Tynystanov. Furniture salon "Dos-Bol". Our showroom presents Polish,
        Russian and Belarusian furniture manufacturers. All factories with which
        we work have proven themselves in the markets of Eastern and Western
        Europe. We select suppliers who have established themselves as reliable
        manufacturers. The furniture of which is distinguished by functionality
        and environmental safety.
      </p>
      <div className="product-Home">
        <a href="/products/willow-ii-slipcovered-bench-queen-sleeper-sofa">
          <img
            className="cushioned dop-product"
            src={cushioned}
            alt="cushioned"
          />
        </a>
        <a href="/products/hague-mid-century-sofa">
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
