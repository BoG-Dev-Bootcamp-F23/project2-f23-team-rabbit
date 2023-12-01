// pages/create-account.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/CreateAccount.module.css';
import { useAuth } from '@/contexts/useAuth';
import Image from 'next/image';
import TitleBar from '@/components/TitleBar';

const CreateAccountPage = () => {
  const router = useRouter();
//   const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
//   const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState('');
  const { admin, setAdmin, fullName, setFullName } = useAuth();

  const handleSignUp = async () => {
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError('Password and Confirm Password do not match');
      return;
    }

    // Perform user creation using backend code (replace with your actual API endpoint)
    try {
      console.log(admin ? "admin": "user");
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password, admin: admin.toString() }),
      });

      console.log(response.status)
      if (response.status === 200) {
        // User creation successful, route to the Training Logs Dashboard
        router.push('/dashboard');
      } else {
        // User creation unsuccessful, display error message
        const data = await response.json();
        setError(data.error || 'Failed to create user. Please try again.');
      }
    } catch (error) {
      console.error('Error during user creation:', error);
      setError('Failed to create user. Please try again.');
    }
  };

  return (
    <>
    <TitleBar loggedIn={false} />
    <div className={styles.container}>
      <div>
        <h1 className={styles.h1}>Create Account</h1>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={styles.inputField}
          />
        </div>
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
        <div className={styles.formGroup}>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          <label>
            <input
              type="checkbox"
              checked={admin}
              onChange={() => setAdmin(!admin)}
            />
            Admin access
          </label>
        </div>
        <button
          type="button"
          onClick={handleSignUp}
          className={styles.button}
        >
          Sign Up
        </button>
      </form>
      <p>
        Already have an account?{' '}
        <a className={styles.logIn} href="/loginPage">Sign In</a>
      </p>
      <Image src="/images/quarterCircle.png" width={200} height={200} alt={"Quarter circle"} className={styles.circle} />
    </div>
    </>
  );
};

export default CreateAccountPage;
