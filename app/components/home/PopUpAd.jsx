"use client";
import { useEffect, useState } from "react";

const PopUpAd = () => {
  const [totalTime, setTotalTime] = useState(1);
  const [popup, setPopUp] = useState(false);

  const handlePopUp = () => {
    if (localStorage.getItem("showedTime")) {
      if (localStorage.getItem("showedTime") < 3) {
        return (document.querySelector(".popup").style.display = "block");
      } else {
        setPopUp(false);
        return;
      }
    }
    document.querySelector(".popup").style.display = "block";
  };

  useEffect(() => {
    setPopUp(true);
    handlePopUp();
    if (localStorage.getItem("showedTime")) {
      let timeShow = localStorage.getItem("showedTime");
      setTotalTime(timeShow);
    } else {
      localStorage.setItem("showedTime", 1);
    }
  }, []);

  const removePopUp = () => {
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".pop-up-transparent-bg").style.display = "none";

    setPopUp(false);
    let totalTime = parseInt(localStorage.getItem("showedTime"));
    localStorage.setItem("showedTime", (totalTime += 1));
  };

  return (
    <>
      {totalTime < 3 && (
        <>
          <div className={popup && "pop-up-transparent-bg"}></div>
          <div className="popup">
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
