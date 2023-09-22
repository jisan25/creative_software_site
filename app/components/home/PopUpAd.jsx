"use client";
import { useEffect, useState } from "react";

const PopUpAd = () => {
  const maxTime = 3;
  let totalTime;

  const [showedTime, setShowedTime] = useState(totalTime);
  const [popup, setPopUp] = useState(false);
  useEffect(() => {
    setPopUp(true);
    togglePopUp();

    if (localStorage.getItem("showedTime")) {
      totalTime = localStorage.getItem("showedTime");
    } else {
      localStorage.setItem("showedTime", 0);
      totalTime = localStorage.getItem("showedTime");
    }
  }, []);

  const removePopUp = () => {
    document.querySelector(".popup").style.display = "none";
    setPopUp(false);
    localStorage.setItem("showedTime", totalTime + 1);
    setShowedTime(totalTime + 1);
  };

  const togglePopUp = () => {
    window.addEventListener("load", () => {
      if (showedTime < maxTime) {
        document.querySelector(".popup").style.display = "block";
      }
    });
  };

  return (
    <>
      {popup && showedTime < maxTime && (
        <>
          <div class="pop-up-transparent-bg"></div>
          <div class="popup">
            <button onClick={removePopUp} className="popup-btn" id="close">
              &times;
            </button>
            <img
              src="/img/promotion.png"
              alt="promotion"
              style={{ height: "262px", width: "692px" }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default PopUpAd;
