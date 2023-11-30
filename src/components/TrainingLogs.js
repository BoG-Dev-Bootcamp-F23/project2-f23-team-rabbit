import React from "react";
import { useState, useEffect } from "react";
import TrainingLogCard from "./TrainingLogCard";
import TrainingLogsForm from "./TrainingLogsForm";
import styles from "@/styles/TrainingLogs.module.css";
import Image from "next/image";
import { useAuth } from "@/contexts/useAuth";

export default function TrainingLogs(props) {
    const [logs, setLogs] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const {userID, fullName} = useAuth();
    console.log(userID)
    // const userID = "6568ace0cb27d20eacc2c222"; ///supposed to be props.userID


  
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
                    <div className={styles.header} style={{fontFamily: "Heebo, sans-serif"}}>
                        <h1>Training Logs</h1>
                        <div className={styles.createLogButton} onClick={() => setShowForm(true)}>
                            <Image src="/images/add.png" width={20} height={20} className={styles.add}/>
                            Create new
                        </div>
                    </div>
                    <div className={styles.cardContainer}>
                    {logs.map((log) => (
                        <TrainingLogCard {...log} key={JSON.stringify(log)} />
                    ))}
                    </div>
                </>
            )}
        </div>
    );
}