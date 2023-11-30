import TrainingLogCard from "./TrainingLogCard";
import styles from "@/styles/TrainingLogs.module.css";

export default function TrainingLogs() {
    return (
        <>
        <div className={styles.header}>
            <h1>Training Logs</h1>
            <button className= {styles.createLogButton}>+ Create Log</button>
        </div>
        <TrainingLogCard />
        </>
    )
}