import { useEffect, useState } from "react";import styles from "@/styles/UserCard.module.css";

export default function UserCard({ user }) {
    return (
        <div className={styles.user}>
            <div className={styles.userInfo}>
            <div className={styles.userInfoLeft}>
                        <div className={styles.userLogo}>
                            <b className={styles.firstLetter}>{user.fullName?.charAt(0).toUpperCase()}</b>
                        </div>
                    </div>
                <div className={styles.text}>
                    <div className={styles.fullName}>{user.fullName}</div>
                    <div>{user.admin ? 'Admin' : 'User'}</div>
                </div>
            </div>
        </div>
    );
}
