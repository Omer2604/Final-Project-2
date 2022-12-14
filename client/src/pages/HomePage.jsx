import React, { Component } from "react";
import PageHeader from "../components/PageHeader";
import "../css/HomePage.css";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img className="logoHome" src="/assets/images/logo.png" alt="לוגו" />
        <PageHeader title="Eden Cakes" subTitle="!ברוכים הבאים לאתר שלנו" />
        <span>
          <p className="Line1">
            !אז לאחר הרבה זמן סוף סוף האתר הרשמי שלנו עלה לאוויר
          </p>
        </span>
        <p className="Line2">
          באתר זה תוכלו לראות חלק מהמוצרים שלנו, לבצע הזמנות, לראות מתכונים ועוד
        </p>
        <p className="Line3">
          על מנת לשוטט באתר יש להיעזר בסרגל הניווט שנמצא בחלק העליון של הדף
        </p>
        <p className="Line4">!גלישה מהנה</p>
        <a href="alphaphoresDetails">
          <img
            className="pic"
            src="/assets/images/alphaphores.png"
            alt="alphaphores"
          />
        </a>
        <a href="heartCakeDetails">
          <img
            className="pic"
            src="/assets/images/heart cake.png"
            alt="heart cake"
          />
        </a>
        <a href="puffsDetails">
          <img className="pic" src="/assets/images/puffs.png" alt="puffs" />
        </a>
      </React.Fragment>
    );
  }
}

export default HomePage;
