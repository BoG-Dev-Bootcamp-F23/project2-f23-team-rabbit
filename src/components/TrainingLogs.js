import React from "react";
import { useState, useEffect } from "react";
import TrainingLogCard from "./TrainingLogCard";
import TrainingLogsForm from "./TrainingLogsForm";
import styles from "@/styles/TrainingLogs.module.css";

export default function TrainingLogs(props) {
    const [logs, setLogs] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const userID = "6568ace0cb27d20eacc2c222"; ///supposed to be props.userID


  
    const fetchLogs = async () => {
        const response = await fetch(`/api/training?user=${userID}`, {method: "GET"});
        const responseJSON = await response.json();
        setLogs(responseJSON);
    };

    const handleFormSubmitSuccess = () => {
        setShowForm(false);
        fetchLogs(); // Optionally, fetch the updated animal data after submission
    };


    useEffect(() => {
        fetchLogs();
    }, []);

    return (
        <div>
            {showForm ? (
                <TrainingLogsForm 
                    userID={userID} 
                    onCancel={() => setShowForm(false)} 
                    onSubmitSuccess={handleFormSubmitSuccess} 
                />
            ) : (
                <>
                    <div className={styles.header}>
                        <h1>Training Logs</h1>
                        <button 
                            className={styles.createLogButton} 
                            onClick={() => setShowForm(true)}
                        >
                            + Create Log
                        </button>
                    </div>
                    {logs.map((log) => (
                        <TrainingLogCard {...log} key={JSON.stringify(log)} />
                    ))}
                </>
            )}
        </div>
    );
}