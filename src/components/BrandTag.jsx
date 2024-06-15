import React from "react";

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
          <img
            src={image}
            alt="logo"
            style={{
              width: "100%",
            }}
          />
        </div>
        <div
          style={{
            fontSize: "1.1rem",
            fontWeight: "bolder",
            textAlign: "center",
            marginTop: "1rem",
            width: "10rem",
          }}
        >
          {name}
        </div>
      </div>
    </>
  );
}

export default BrandTag;
