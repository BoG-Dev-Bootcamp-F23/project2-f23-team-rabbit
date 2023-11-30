import { useEffect, useState } from "react";
import styles from "@/styles/AnimalCard.module.css";
import Image from 'next/image';

export default function AnimalCard ({animal}) {
    

    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [owner, setOwner] = useState('');
    const [hoursTrained, setHoursTrained] = useState('');
    const [profilePicture, setProfilePicture] = useState('');


    return (
        <div class={styles.animal}>
            <div className={styles.animalInfo}>
                <Image
                src={animal.profilePictureUrl}
                width={100}
                height={300}
                alt={`Image of ${animal.name}`}
                />
                <div className={styles.text}>
                    <div className={styles.dog}>{animal.name} - {animal.breed}</div>
                    <p>{animal.owner} • Trained: {animal.hoursTrained} hours</p>
                </div>
            </div>
        </div>
    )

}



