import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Sidebar.module.css';

export default function Sidebar(props) {
    const {currTab, setCurrTab} = props
    const admin = true;
    const username = "John";

    return (
        <div className = {styles.sidebar}>
            <div className = {styles.top}>
                <div className={styles.userContainer}>
                    <div 
                        className= {currTab === 'training' ? styles.sidebarTabActive : styles.sidebarTab}
                        onClick={() => setCurrTab('training')}
                    >
                        <Image src="/images/trainingLogLogo.png" width={20} height={20} className={styles.sidebarIcon} />
                        <p>Training logs</p>
                    </div>

                    <div 
                        className= {currTab === 'animals' ? styles.sidebarTabActive : styles.sidebarTab}
                        onClick={() => setCurrTab('animals')}
                    >
                        <Image src="/images/animalsLogo.png" width={20} height={20} className={styles.sidebarIcon} />
                        <p>Animals</p>
                    </div>
                </div>

                {admin && (
                    <div className={styles.adminContainer}>
                        <p className={styles.sidebarHeader}>
                            <b>Admin access</b>
                        </p>
                        
                        <div 
                            className= {currTab === 'allTraining' ? styles.sidebarTabActive : styles.sidebarTab}
                            onClick={() => setCurrTab('allTraining')}
                        >
                            <Image src="/images/allTrainingLogo.png" width={20} height={20} className={styles.sidebarIcon} />
                            <p>All training</p>
                        </div>

                        <div 
                            className= {currTab === 'allAnimals' ? styles.sidebarTabActive : styles.sidebarTab}
                            onClick={() => setCurrTab('allAnimals')}
                        >
                            <Image src="/images/allAnimalsLogo.png" width={20} height={20} className={styles.sidebarIcon} />
                            <p>All animals</p>
                        </div>

                        <div 
                            className= {currTab === 'allUsers' ? styles.sidebarTabActive : styles.sidebarTab}
                            onClick={() => setCurrTab('allUsers')}
                        >
                            <Image src="/images/allUsersLogo.png" width={20} height={20} className={styles.sidebarIcon} />
                            <p>All users</p>
                        </div>
                    </div>
                )}
                
            </div>
            <div className={styles.bottom}>
                <div className={styles.userInfoContainer}>
                    <div className={styles.userInfoLeft}>
                        <div className={styles.userLogo}>
                            <b className={styles.firstLetter}>{username?.charAt(0).toUpperCase()}</b>
                        </div>
                    </div>
                    <div className={styles.userInfoRight}>
                        <p className={styles.userName}>
                            <b>{username}</b>
                        </p>
                        {admin ? <p className={styles.userIdentifier}>Admin</p> : <p>User</p>}
                    </div>
                </div>
            </div>
        </div>               
    )
}