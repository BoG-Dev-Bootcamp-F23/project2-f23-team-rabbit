// AnimalForm.js
import React, { useState } from "react";
import styles from "@/styles/AnimalForm.module.css";

export default function AnimalForm({ owner, onCancel, onSubmitSuccess }) {
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    breed: "",
    hoursTrained: "",
    profilePictureUrl: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async () => {
    // Create a new animal object with the inputted information and include the owner
    const animalData = {
      ...newAnimal,
      owner: owner,
    };

    try {
      const response = await fetch("/api/animal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(animalData),
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
      console.error("Error creating animal:", error);
      setErrorMessage("An unexpected error occurred.");
    }
  };

  return (
    <div className={styles.formContainer}>
      {/* Input for Name */}
      <div className={styles.formInput}>
        <label className={styles.formLabel}>Animal Name</label>
        <input
          type="text"
          placeholder="Name"
          value={newAnimal.name}
          onChange={(e) =>
            setNewAnimal({ ...newAnimal, name: e.target.value })
          }
        />
      </div>

      {/* Input for Breed */}
      <div className={styles.formInput}>
        <label className={styles.formLabel}>Breed</label>
        <input
          type="text"
          placeholder="Breed"
          value={newAnimal.breed}
          onChange={(e) =>
            setNewAnimal({ ...newAnimal, breed: e.target.value })
          }
        />
      </div>

      {/* Input for Hours Trained */}
      <div className={styles.formInput}>
        <label className={styles.formLabel}>Hours Trained</label>
        <input
          type="text"
          placeholder="Hours Trained"
          value={newAnimal.hoursTrained}
          onChange={(e) =>
            setNewAnimal({ ...newAnimal, hoursTrained: e.target.value })
          }
        />
      </div>

      {/* Input for Profile Picture URL */}
      <div className={styles.formInput}>
        <label className={styles.formLabel}>Profile Picture URL</label>
        <input
          type="text"
          placeholder="Profile Picture URL"
          value={newAnimal.profilePictureUrl}
          onChange={(e) =>
            setNewAnimal({
              ...newAnimal,
              profilePictureUrl: e.target.value,
            })
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
