import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useCustomization } from "../Context/Context";
import "./controlAvatar.css";

const AvatarControl = () => {
  const { cloth, setCloth } = useCustomization();
  const [showButtons, setShowButtons] = useState(null);
  const changeButton = (buttonId) => {
    if (showButtons === buttonId) {
      setShowButtons(null);
    } else {
      setShowButtons(buttonId);
    }
  };
  return (
    <div className="control-Avatar">
      <div className="arrow">
        {showButtons === "arrowBtn" ? (
          <a href="#" className="back-title">
            Back to Dashboard
          </a>
        ) : null}
        <Icon
          className="icon"
          icon="ic:sharp-keyboard-arrow-left"
          color="white"
          onMouseMove={() => changeButton("arrowBtn")}
        />
      </div>
      <div className="sub-control">
        <>
          {showButtons == "tshirtBtn" ? (
            <div className="control-item control-outfit-img">
              <img
                src="./images/outfit/outfits2.png"
                className={`item ${cloth === 1 ? "item--active" : ""}`}
                onClick={() => setCloth(1)}
              />
              <img
                src="./images/outfit/outfits3.png"
                className={`item ${cloth === 2 ? "item--active" : ""}`}
                onClick={() => setCloth(2)}
              />
            </div>
          ) : null}
          <img
            src="./images/icons/t-shirt.png"
            onClick={() => changeButton("tshirtBtn")}
          />
        </>
      </div>
      <div className="save">
        <img src="./images/icons/save.png" />
      </div>
    </div>
  );
};

export default AvatarControl;
