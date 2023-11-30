import React from "react";
import styles from "@/styles/TrainingLogCard.module.css";
import { Heebo, Oswald } from "next/font/google";


const oswald = Oswald({ weight: '500', subsets: ["latin"] });
const lighterOswald = Oswald({ weight: '400', subsets: ["latin"] });

const lightHeebo = Heebo({ weight: '400', subsets: ["latin"] })
const midHeebo = Heebo({ weight: '500', subsets: ["latin"] })
const darkHeebo = Heebo({ weight: '700', subsets: ["latin"] })

export default function TrainingLogCard(props) {
    // const { date, title, description, hours, owner, breed, dogName } = props; proper way to do it

    //testing
    const date = "2023/10/20";
    const title = "Complete sit lessons";
    const description = "Lucy finishes the sit lessons very well today. Should give her a treat Lucy finishes the sit lessons very well today. Should give her a treat Lucy finishes the sit lessons very well today. Should give her a treat";
    const hours = 20;
    const owner = "Long Lam";
    const breed = "Golden Retriever"; 
    const dogName = "Lucy";

    //date = "YYYY/MM/DD"
    let month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const year = date.substring(0, 4);

    switch(month) {
        case "01":
            month = "Jan";
            break;
        case "02":
            month = "Feb";
            break;
        case "03":
            month = "Mar";
            break;
        case "04":
            month = "Apr";
            break;
        case "05":
            month = "May";
            break;
        case "06":
            month = "Jun";
            break;
        case "07":
            month = "Jul";
            break;
        case "08":
            month = "Aug";
            break;
        case "09":
            month = "Sep";
            break;
        case "10":
            month = "Oct";
            break;
        case "11":
            month = "Nov";
            break;
        case "12":
            month = "Dec";
            break;
    }

    return (
        <div className={styles.trainingCardContainer}>
            <div className={styles.trainingCardLeft}>
                <div className={styles.trainingCardDate}>
                <p className={`${styles.day} ${oswald.className}`}>{day}</p>
                <p className={`${styles.monthYear} ${lighterOswald.className}`}>{month} - {year}</p>
                </div>
                <div className={styles.trainingCardInfo}>
                    <h2 className={darkHeebo.className}><span className={styles.title}>{title}</span> <span className={`${styles.subInfo} ${midHeebo.className}`}>&#x2022; {hours} hours</span></h2>
                    <p className={`${styles.subInfo} ${midHeebo.className}`} style={{fontSize : "18px"}}>{owner} - {breed} - {dogName}</p>
                    <p className={`${styles.description} ${lightHeebo.className}`}>{description}</p>
                </div>
            </div>
            <div className={styles.trainingCardRight}>
                <img src="/images/trainingLogCardEditButton.png" alt="edit logo" className={styles.editButton}/>
            </div>
        </div>
    );
}