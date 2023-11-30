import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Sidebar.module.css';
import { useAuth } from '@/contexts/useAuth';
import router from 'next/router';

export default function Sidebar(props) {
    const {currTab, setCurrTab} = props
    const { fullName, admin, setAdmin} = useAuth();
    console.log(admin);

    const handleLogout = () => {
        // clearAuth();
        if (admin) {
            setAdmin(false);
        }
        router.push('/loginPage');
    };

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
                            <b className={styles.firstLetter}>{fullName?.charAt(0).toUpperCase()}</b>
                        </div>
                    </div>
                    <div className={styles.userInfoRight}>
                        <div className={styles.userName}>
                            <div>{fullName}</div>
                        </div>
                        {admin ? (
                            <div className={styles.userIdentifier}>Admin</div>
                        ) : (
                            <div>User</div>
                        )}
                    </div>
                </div>

                <button className={styles.logoutButton} onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div> 
    )
}