// pages/index.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Heebo } from 'next/font/google';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'white',
    color: 'black',
    fontFamily: 'Heebo',
    
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const loginStyle = {
      marginTop: '-210px'
      
  }

  const formGroupStyle = {
    marginBottom: '10px',
  };

  const buttonStyle = {
    marginTop: '10px',
  };
  const suStyle = {
      fontWeight: 'bolder'
  }
  const lolStyle = {
      marginTop: '50px'
  }
  const h1Style = {
      fontSize: "40px",
      fontFamily: 'Heebo'
  }

  const handleLogin = async () => {
    // Perform backend verification using an API endpoint
    // Example: const response = await fetch('/api/login', { method: 'POST', body: { email, password } });
    // Check if the login is successful
    // Example: if (response.status === 200) { router.push('/dashboard'); }
    // If unsuccessful, set an error message
    // Example: setError('Invalid email or password');
  };

  return (
    <div style={containerStyle}>
        <div style={loginStyle}>
      <h1 style={h1Style}>Login</h1>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form style={formStyle}>
          <div style={lolStyle}>
        <div style={formGroupStyle}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div style={formGroupStyle}>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleLogin} style={buttonStyle}>
          Login
        </button>
        </div>
      </form>
      <p>
        Don't have an account? <a style={suStyle} href="/create-account">Sign Up</a>
      </p>
      
    </div>
  );
};

export default LoginPage;

