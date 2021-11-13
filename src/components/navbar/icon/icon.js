import React from "react";
import cx from "classnames";
import Styles from "./icon.module.css";

const Icon = ({ toggle, setToggle }) => {
  return (
    <div
      className={toggle ? cx(Styles.Menu, Styles.open) : cx(Styles.Menu)}
      onClick={() => {
        setToggle(!toggle);
        console.log(toggle);
        
      }}
    >
      <div className={Styles.Btn}></div>
    </div>
  );
};

export default Icon;