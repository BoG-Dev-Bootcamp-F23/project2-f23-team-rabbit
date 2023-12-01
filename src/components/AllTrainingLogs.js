import React, { useState, useEffect } from "react";
import TrainingLogCard from "./TrainingLogCard";
import styles from "@/styles/TrainingLogs.module.css";

export default function AllTrainingLogs() {
    const [trainingLogs, setTrainingLogs] = useState([]);

    useEffect(() => {
        getTrainingData();
    }, []);

    async function getTrainingData() {
        try {
            const response = await fetch('/api/admin/training');
            const data = await response.json();

            setTrainingLogs(data);
        } catch (error) {
            console.error('Error fetching training log data:', error);
        }
    }


    return (
        <div className={styles.display}>
            <div style={{width : "100%"}}>
                    <div className={styles.header}>
                        <h1>All Training Logs</h1>
                    </div>
                    <div className={styles.cardDisplays}>
                        {trainingLogs.map(log => (
                            <TrainingLogCard {...log}  all={true} key={JSON.stringify(log)} />
                        ))}
                    </div>
                </div>
        </div>
    );
}
