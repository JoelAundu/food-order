import React, { Fragment } from "react";

import mealsImg from "../../assets/meals.jpg";
import style from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>JuicyMeals</h1>
        <button>Cart</button>
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImg} alt="A table of food" />
      </div>
    </Fragment>
  );
};

export default Header;
