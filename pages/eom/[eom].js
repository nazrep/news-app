import styles from "../../styles/eom.module.css"
import mainStyles from "../../styles/home.module.css"
import React from "react";
import {Toolbar} from "../../components/toolbar";


export const eom = () => {
  return (
    <div className={styles.pageContainer}>
      <Toolbar/>
      <div className={styles.main}>
        <h2>Employee Of The Month</h2>
        <div className={styles.description}>
          <h3 >
            Maciej Perzankowski
          </h3>
          <h6>Frontend Developer</h6>
          <img
            className={styles.img}
            src="https://avatars.githubusercontent.com/u/43522456?s=400&u=8e84e3f3df4be7b28bc2e3ce878bf866bf6f515d&v=4"
            alt="cool boy"/>
          <p>C00L B0Y</p>
          <div className={mainStyles.toolbarElement} onClick={() => window.location.href = "https://www.linkedin.com/in/maciej-perzankowski/"}><h3>Linkedin</h3></div>
        </div>
      </div>
    </div>
  )
}

export default eom;