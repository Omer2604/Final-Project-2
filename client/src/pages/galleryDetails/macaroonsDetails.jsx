import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";
import "../../css/Gallery and galleryDetails.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const macaroons = () => {
  return (
    <div className="container">
      <PageHeader title="על המוצר" subTitle="" />
      <div>
        <div>
          <div></div>
        </div>
        <div className="hoverPics">
          <img
            className="picsDetails"
            src="/assets/images/macaroon.png"
            alt="macaroons"
          />
          <p className="describeMacaroons">
            מקרונים בטעמי פסיפלורה, פטל ופירות יער
          </p>
          <p className="priceMacaroons">מחיר: 5 ש"ח ליחידה</p>
          <Link className="orderM" to="/contact">
            לחץ כאן להזמנת הפריט
          </Link>
          <FontAwesomeIcon className="iconStar" icon={faStar} />
        </div>
      </div>
    </div>
  );
};

export default macaroons;
