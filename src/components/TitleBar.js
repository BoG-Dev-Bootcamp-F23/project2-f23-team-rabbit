import React from "react";
import { Oswald } from "next/font/google";
import styles from "@/styles/TitleBar.module.css";


const oswald = Oswald({ weight: '500', subsets: ["latin"] });

export default function TitleBar(props) {
    
    let { loggedIn } = props; //change maybe for useContext hook
    
    loggedIn = true; //testing search bar for log in page vs logged in

    return (
        <div className={styles.titleBarContainer}>
            <div className={styles.titleBarLeft}>
                <img src="/images/appLogo.png" alt="app logo" className={styles.appLogo}/>
                <h1 className={oswald.className}>Progress</h1>
            </div>
            <div className={styles.titleBarRight}>
                <div className={styles.titleBarSearch}>
                    {loggedIn && <img src="/images/searchLogo.png" alt="search logo" className={styles.titleBarSearchLogo}/>}
                    {loggedIn && (<input type="text" placeholder="Search" className={styles.titleBarSearchBar}></input>)}
                </div>
            </div>
        </div>
    )
}