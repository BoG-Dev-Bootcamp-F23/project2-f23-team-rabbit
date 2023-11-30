import React from "react";
import { useState, useEffect } from "react";
import TrainingLogCard from "./TrainingLogCard";
import styles from "@/styles/TrainingLogs.module.css";

export default function TrainingLogs(props) {
    const [logs, setLogs] = useState([]);
    const userID = "6568ace0cb27d20eacc2c222"; ///supposed to be props.userID


    const fetchLogs = async () => {
        const response = await fetch(`/api/training?user=${userID}`, {method: "GET"});
        const responseJSON = await response.json();
        setLogs(responseJSON);
    };

    useEffect(() => {
        fetchLogs();
    }, []);

    return (
        <>
            <button className={styles.createLogButton}>+ Create Log</button>
            {console.log(logs)}
            {logs.map((log) => (
                <TrainingLogCard {...log} key={JSON.stringify(log)} />
            )
            )}
        </>
    );
}