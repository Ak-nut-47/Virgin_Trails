import React from "react";
import "../../assets/CSS_Files/PixelatingImage.css";
import originalImage from "../../assets/Images/original.jpg";
import cartoon from "../../assets/Images/2.jpg";
const PixelatingImage = () => {
  return (
    <div>
      <div>
        <img src={originalImage} alt="Bottom Image" className="base-image" />
      </div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      >
        {" "}
        <img src={cartoon} alt="Top Image" className="pixelated-image" />
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="pixelate">
            <feFlood
              x="0"
              y="0"
              width="100%"
              height="100%"
              flood-color="black"
              result="black"
            />
            <feMorphology
              operator="dilate"
              radius="8"
              in="SourceGraphic"
              result="morph"
            />
            <feColorMatrix
              type="matrix"
              values="0.01 0 0 0 0 0 0.01 0 0 0 0 0 0.01 0 0 0 0 0 1 0"
              in="morph"
              result="colormatrix"
            />
            <feComposite
              in="colormatrix"
              in2="black"
              operator="in"
              result="composite"
            />
            <feMerge>
              <feMergeNode in="composite" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default PixelatingImage;
