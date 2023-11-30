import React, { useState } from "react";
import styles from "@/styles/TrainingLogsForm.module.css";

export default function TrainingLogsForm({ userID, onCancel, onSubmitSuccess }) {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
    let buildDate = "";
  const [newTrainingLog, setNewTrainingLog] = useState({
    title: "",
    date: "",
    hours: "",
    description: "",
    animal: ""
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async () => {
    switch (month) {
        case "January":
            setMonth("01");
            break;
        case "February":
            setMonth("02");
            break;
        case "March":
            setMonth("03");
            break;
        case "April":
            setMonth("04");
            break;
        case "May":
            setMonth("05");
            break;
        case "June":
            setMonth("06");
            break;
        case "July":
            setMonth("07");
            break;
        case "August":
            setMonth("08");
            break;
        case "September":
            setMonth("09");
            break;
        case "October":
            setMonth("10");
            break;
        case "November":
            setMonth("11");
            break;
        case "December":
            setMonth("12");
            break;
    }
    buildDate = year + "/" + month + "/" + day;
    // Create a new animal object with the inputted information and include the owner
    const  trainingLog= {
      ...newTrainingLog,
      date: buildDate,
      user: userID,
    };

    try {
      const response = await fetch("/api/training", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(trainingLog),
      });

      if (response.ok) {
        console.log("Reached");
        setErrorMessage("");
        onSubmitSuccess(); // Notify the parent component about the successful creation
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message); // Update the error message
      }
    } catch (error) {
      console.error("Error creating training log:", error);
      setErrorMessage("An unexpected error occurred.");
    }
  };

  return (
    <div className={styles.formContainer}>
      {/* Input for Title */}
      <div className={styles.formInput}>
        <label className={styles.formLabel}>Title</label>
        <input
          type="text"
          placeholder="Title"
          value={newTrainingLog.title}
          onChange={(e) =>
            setNewTrainingLog({ ...newTrainingLog, title: e.target.value })
          }
        />
      </div>

      {/* Input for animal id*/}
      <div className={styles.formInput}>
        <label className={styles.formLabel}>Animal ID</label>
        <input
          type="text"
          placeholder="Animal Id"
          value={newTrainingLog.animal}
          onChange={(e) =>
            setNewTrainingLog({ ...newTrainingLog, animal: e.target.value })
          }
        />
      </div>

      {/* Input for Hours Trained */}
      <div className={styles.formInput}>
        <label className={styles.formLabel}>Hours Trained</label>
        <input
          type="text"
          placeholder="Hours Trained"
          value={newTrainingLog.hours}
          onChange={(e) =>
            setNewTrainingLog({ ...newTrainingLog, hours: e.target.value })
          }
        />
      </div>

      {/* Input for month */}
  <div className={styles.formInput}>
    <label className={styles.formLabel}>Month</label>
    <input
      type="text"
      placeholder="Month"
      value={month}
      onChange={(e) => setMonth(e.target.value)}
    />
  </div>
  {/* Input for day */}
  <div className={styles.formInput}>
    <label className={styles.formLabel}>Day</label>
    <input
      type="text"
      placeholder="Day"
      value={day}
      onChange={(e) => setDay(e.target.value)}
    />
  </div>
  {/* Input for year */}
  <div className={styles.formInput}>
    <label className={styles.formLabel}>Year</label>
    <input
      type="text"
      placeholder="Year"
      value={year}
      onChange={(e) => setYear(e.target.value)}
    />
  </div>

    {/* Input for description */}
    <div className={styles.formInput}>
    <label className={styles.formLabel}>Description</label>
    <input
      type="text"
      placeholder="Description"
      value={newTrainingLog.description}
      onChange={(e) =>
        setNewTrainingLog({ ...newTrainingLog, description: e.target.value })
      }
    />
  </div>

      <button className={styles.formButton} onClick={handleFormSubmit}>
        Save
      </button>
      <button className={styles.formButton} onClick={onCancel}>
        Cancel
      </button>
      {errorMessage && <div className={styles.formError}>{errorMessage}</div>}
    </div>
  );
}
