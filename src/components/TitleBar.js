import React from "react";
import styles from "@/styles/TitleBar.module.css";

export default function TitleBar(props) {
  let { loggedIn } = props; //change maybe for useContext hook

  return (
    <div className={styles.titleBarContainer}>
      <div className={styles.titleBarLeft}>
        <img
          src="/images/appLogo.png"
          alt="app logo"
          className={styles.appLogo}
        />
        <h1>Progress</h1>
      </div>
      {loggedIn ? (
        <div className={styles.titleBarRight}>
          <div className={styles.titleBarSearch}>
            <img
              src="/images/searchLogo.png"
              alt="search logo"
              className={styles.titleBarSearchLogo}
            />
            <input
              type="text"
              placeholder="Search"
              className={styles.titleBarSearchBar}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
