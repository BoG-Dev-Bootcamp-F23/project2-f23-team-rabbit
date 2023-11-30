import AllAnimals from "@/components/AllAnimals";
import AllTrainingLogs from "@/components/AllTrainingLogs";
import AllUsers from "@/components/AllUsers";
import Animals from "@/components/Animals";
import Sidebar from "@/components/Sidebar";
import TitleBar from "@/components/TitleBar";
import TrainingLogs from "@/components/TrainingLogs";
import styles from "@/styles/Dashboard.module.css";
import { useState } from "react";

export default function dashboard() {
    
    const [ currTab, setCurrTab ] = useState("training");
    
    
    function displayTab() {
        if (currTab === "training") {
            return <TrainingLogs />
        } else if (currTab === "animals") {
            return <Animals />
        } else if (currTab === "allTraining") {
            return <AllTrainingLogs />
        } else if (currTab === "allAnimals") {
            return <AllAnimals />
        } else if (currTab === "allUsers") {
            return <AllUsers />
        }
    }

    return (
        <div>
            <TitleBar loggedIn={true} />
            <div className= {styles.mainBody}>
                <Sidebar currTab={currTab} setCurrTab={setCurrTab}/>
                <div className={styles.tabContent}>{displayTab()}</div>
            </div>
        </div>
    )
}
