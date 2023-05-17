import divan from "../../assets/divan.webp";
import "./MainHome.css";
import React from "react";
export default function MainHome() {
  return (
    <div className="Home">
      <div class="hover-text-one">
        <figure class="effect-text-two">
          <img src={divan} alt="divan" />
          <figcaption>
            <h3>welcome to our furniture store Dosbol</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </figcaption>
        </figure>
      </div>
      <h1>Furniture salon "Dos-Bol"</h1>
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
    </div>
  );
}
