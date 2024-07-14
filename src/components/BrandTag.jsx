import React from "react";
import Reveal from "./Reveal";
import SlideIn from "./SlideIn";

function BrandTag({ image, name }) {
  return (
    <>
      <div
        style={{
          display: "inline-block",
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "10rem",
            height: "10rem",
            objectFit: "contain",
            overflow: "hidden",
            borderRadius: "50%",
          }}
        >
          <SlideIn>
            <img
              src={image}
              alt="logo"
              style={{
                width: "100%",
              }}
            />
          </SlideIn>
        </div>
        <Reveal>
          <div
            style={{
              fontSize: "1.1rem",
              fontWeight: "bolder",
              textAlign: "center",
              paddingTop: "1rem",
              width: "10rem",
            }}
          >
            {name}
          </div>
        </Reveal>
      </div>
    </>
  );
}

export default BrandTag;
