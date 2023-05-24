import React from "react";
import "./MainAbout.css";
import CircleIcon from "../../assets/circle-fill.svg";
import About_1 from "../../image/About-1.jpg";

export default function MainAbout() {
  return (
    <div className="company-info">
      <div className="Main-About">
        <div className="about-text">
          <h2>Welcome to Dos-Bol Furniture Store</h2>
          <p>
            Dos-Bol is your ultimate destination for premium furniture
            solutions. We specialize in offering a wide range of high-quality
            furniture for every space and style. Whether you're furnishing your
            home, office, or any other environment, we have the perfect pieces
            to meet your needs.
          </p>
          <p>
            At Dos-Bol, we take pride in curating a diverse collection of
            furniture, carefully selected from renowned manufacturers and
            brands. Our team of experts is dedicated to ensuring that every
            piece of furniture meets our stringent standards of quality,
            durability, and aesthetics.
          </p>
          <p>
            Visit Dos-Bol Furniture Store today and discover the perfect
            furniture pieces to transform your space into a haven of comfort,
            style, and functionality.
          </p>
        </div>
      </div>
      <div className="elementor">
        <div className="block-1">
          <h2>Our team</h2>
          <p>
            We are a team of professional and skilled experts in all domestic
            spheres. We offer a wide range of services and at the same time we
            are always glad to help you with any unconventional household needs:
          </p>
          <div className="box-1">
            <span>
              <img src={CircleIcon} alt="Circle-icon" />
            </span>
            <span>exclusive designs;</span>
          </div>
          <div className="box-1">
            <span>
              <img src={CircleIcon} alt="Circle-icon" />
            </span>
            <span>decor elements</span>
          </div>
          <div className="box-1">
            <span>
              <img src={CircleIcon} alt="Circle-icon" />
            </span>
            <span>textile and interior;</span>
          </div>
          <div className="box-1">
            <span>
              <img src={CircleIcon} alt="Circle-icon" />
            </span>
            <span>enlightenment;</span>
          </div>
          <div className="box-1">
            <span>
              <img src={CircleIcon} alt="Circle-icon" />
            </span>
            <span>modern living rooms;</span>
          </div>
          <div className="box-1">
            <span>
              <img src={CircleIcon} alt="Circle-icon" />
            </span>
            <span>award-winning designers;</span>
          </div>
          <div className="box-1">
            <span>
              <img src={CircleIcon} alt="Circle-icon" />
            </span>
            <span>high-tech.</span>
          </div>
        </div>
        <div className="About-photo">
          <img className="About-1" src={About_1} alt="About" />
        </div>
      </div>
    </div>
  );
}
