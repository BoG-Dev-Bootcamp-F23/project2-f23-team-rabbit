// pages/index.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Login.module.css';
import { useAuth } from '@/contexts/useAuth';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUserID, setAdmin, setFullName } = useAuth();

  async function handleLogin(email, password, router){
    try {
      const response = await fetch('/api/user/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      
      const data = await response.json();

      console.log(data.fullName);

      if (response.status === 200) {
        setUserID(data.userID);  // Update this line
        setAdmin(data.admin);
        setFullName(data.fullName);
        router.push('/dashboard');
      } else {
        // If login is unsuccessful, set an error message
        setError('Invalid email or password');
      }
      
    } catch (error) {
      console.error('Error during login:', error);
      setError('User does not exist!');
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.h1}>Login</h1>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <button
          type="button"
          onClick={() => handleLogin(email, password, router)}
          className={styles.button}
        >
          Login
        </button>

      </form>
      <p>
        Don't have an account? <a className={styles.signUp} href="/create-account">Sign Up</a>
      </p>
    </div>
  );
};

