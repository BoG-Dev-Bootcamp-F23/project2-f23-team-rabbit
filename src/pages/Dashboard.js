import AllAnimals from "@/components/AllAnimals";
import AllTrainingLogs from "@/components/AllTrainingLogs";
import AllUsers from "@/components/AllUsers";
import Animals from "@/components/Animals";
import Sidebar from "@/components/Sidebar";
import TitleBar from "@/components/TitleBar";
import TrainingLogs from "@/components/TrainingLogs";
import styles from "@/styles/Dashboard.module.css";
import { useState } from "react";

import styles from "@/styles/Dashboard.module.css";

export default function Dashboard() {
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
            <TitleBar />
            <div className= {styles.mainBody}>
                <Sidebar currTab={currTab} setCurrTab={setCurrTab}/>
                {displayTab()}
            </div>
        </div>
    )
}