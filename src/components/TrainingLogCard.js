import React from "react";
import { useState, useEffect } from "react";
import styles from "@/styles/TrainingLogCard.module.css";

export default function TrainingLogCard(props) {
    const { date, title, description, hours, user, animal, all } = props;

    const [userById, setUser] = useState({});
    const [animalById, setAnimal] = useState({});


    console.log(user);
    console.log(typeof user);
    //need to fetch user and animal data from database
    //user : string id
    //animal : string id
    const fetchUser = async () => {
        const response = await fetch(`/api/user?userId=${user}`, {method: "GET"});
        const responseJSON = await response.json();
        setUser(responseJSON);
    };
    
    const fetchAnimal = async () => {
        const response = await fetch(`/api/animal?animalId=${animal}`, {method: "GET"});
        const responseJSON = await response.json();
        setAnimal(responseJSON);
    };

    useEffect(() => {
        fetchUser();
        fetchAnimal();
    }, []);



    //date = "YYYY/MM/DD"
    let month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const year = date.substring(0, 4);

    switch (month) {
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
        default:
            console.log("Invalid month");
    }

    return (
        <div className={styles.trainingCardContainer}>
            <div className={styles.trainingCardLeft}>
                <div className={styles.trainingCardDate} style={{fontFamily: "Oswald, sans-serif"}}>
                <p className={`${styles.day}`}>{day}</p>
                <p className={`${styles.monthYear} `}>{month} - {year}</p>
                </div>
                <div className={styles.trainingCardInfo} style={{fontFamily: "Heebo, sans-serif"}}>
                    <h2><span className={styles.title}>{title}</span> <span className={`${styles.subInfo}`}>&#x2022; {hours} hours</span></h2>
                    <p className={`${styles.subInfo}`} style={{fontSize : "18px"}}>{userById.fullName} - {animalById.breed} - {animalById.name}</p>
                    <p className={`${styles.description}`}>{description}</p>
                </div>
            </div>
            <div className={styles.trainingCardRight}>
                {!all && <img src="/images/trainingLogCardEditButton.png" alt="edit logo" className={styles.editButton}/>}
            </div>
        </div>
    );
}