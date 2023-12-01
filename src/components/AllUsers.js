// AllUsers.js
import React, { useState, useEffect } from 'react';
import UserCard from '@/components/UserCard';
import styles from '@/styles/AllUsers.module.css';

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const [currTab, setCurrTab] = useState('allUsers');

  useEffect(() => {
    // Fetch users data
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/admin/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={styles.display}>
      <div>
        <div className={styles.header}>
          <h1>All Users</h1>
        </div>
        <div style={{width: "100%"}}>
        <div className={styles.cardDisplays}>
          {/* Display users data using UserCard */}
          {users.map(user => (
            <UserCard key={user._id} user={user} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
