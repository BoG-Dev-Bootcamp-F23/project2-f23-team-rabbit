import React, { useState, useEffect } from "react";
import AnimalCard from './AnimalCard';
import AnimalForm from './AnimalForm';
import styles from "@/styles/Animals.module.css";
import { useAuth } from "@/contexts/useAuth";
import Image from "next/image";

export default function Animals() {
    const [animals, setAnimals] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const { fullName, admin, setAdmin} = useAuth();

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

    const handleFormSubmitSuccess = () => {
        setShowForm(false);
        getAnimalData(); // Optionally, fetch the updated animal data after submission
    };

    return (
        <div className={styles.display}>
            {showForm ? (
                <div>
                    <AnimalForm className={styles.border} owner={fullName} onCancel={() => setShowForm(false)} onSubmitSuccess={handleFormSubmitSuccess} />
                </div>
            ) : (
                <div>
                    <div className={styles.header}>
                        <h1>Animals</h1>
                        <div className={styles.createAnimalButton} onClick={() => setShowForm(!showForm)}>
                            <Image src="/images/add.png" width={20} height={20} className={styles.add}/>
                            Create new
                        </div>
                    </div>
                    <div className={styles.cardDisplays}>
                        {animals
                                .filter(animal => animal.owner === fullName)
                                .map(animal => (
                                    <AnimalCard key={animal._id} animal={animal} />
                                ))}
                    </div>
                </div>
            )}
        </div>
    );
}
