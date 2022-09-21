import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";
import "../../css/Gallery and galleryDetails.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const puffs = () => {
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
            src="/assets/images/puffs.png"
            alt="puffs"
          />
          <p className="describePuffs">פחזניות קראמבל במילוי קרם וניל</p>
          <p className="pricepuffs"> מחיר: 4 ש"ח ליח' או 6 יח' ב-20 ש"ח</p>
          <Link className="orderP" to="/contact">
            לחץ כאן להזמנת הפריט
          </Link>
          <FontAwesomeIcon className="iconStar" icon={faStar} />
        </div>
      </div>
    </div>
  );
};

export default puffs;
