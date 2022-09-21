import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";
import "../../css/Gallery and galleryDetails.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const HeartCake = () => {
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
            src="/assets/images/heart cake.png"
            alt="heart cake"
          />
          <p className="describeHeartCake">בצק שקדים פריך עם שוקולד</p>
          <p className="priceHeartCake">מחיר: 250 ש"ח</p>
          <Link className="orderH" to="/contact">
            לחץ כאן להזמנת הפריט
          </Link>
          <FontAwesomeIcon className="iconStar" icon={faStar} />
        </div>
      </div>
    </div>
  );
};

export default HeartCake;
