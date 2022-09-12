import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

import mealsImg from "../../assets/meals.jpg";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>JuicyMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImg} alt="A table of food" />
      </div>
    </Fragment>
  );
};

export default Header;
