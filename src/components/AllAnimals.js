import React, { useState, useEffect } from "react";
import AnimalCard from './AnimalCard';
import styles from "@/styles/Animals.module.css";

export default function AllAnimals() {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        getAnimalData();
    }, []);

    async function getAnimalData() {
        try {
            const response = await fetch('/api/admin/animals');
            const data = await response.json();

            setAnimals(data);
        } catch (error) {
            console.error('Error fetching animal data:', error);
        }
    }


    return (
        <div className={styles.display}>
            <div style={{width: "100%"}}>
                    <div className={styles.header}>
                        <h1>All Animals</h1>
                    </div>
                    <div style={{width: "100%"}}>
                        <div className={styles.cardDisplays}>
                            {animals.map(animal => (
                                <AnimalCard key={animal._id} animal={animal} />
                            ))}
                        </div>
                    </div>
                </div>
        </div>
    );
}
