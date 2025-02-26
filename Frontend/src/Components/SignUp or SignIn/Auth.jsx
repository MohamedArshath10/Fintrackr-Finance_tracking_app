import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../Context/authContext';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth(); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      if (isSignUp) {
        localStorage.setItem('username', username); // ✅ Store username
      } else {
        const storedUsername = localStorage.getItem('username');
        if (!storedUsername) {
          alert('No username found. Please sign up first.');
          return;
        }
      }

      login(); 
      navigate('/'); 
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <AuthContainer>
      <AuthBox>
        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <input 
              type="text" 
              placeholder="Username" 
              required 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          )}
          <input 
            type="email" 
            placeholder="Email" 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        </form>
        <ToggleText onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Sign In' : 'Don’t have an account? Sign Up'}
        </ToggleText>
      </AuthBox>
    </AuthContainer>
  );
};

// Styled components (same as before)
const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgba(242, 243, 253, 0.78);
  padding: 1rem;
`;

const AuthBox = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;

  h2 {
    margin-bottom: 1rem;
    color: rgba(34, 34, 96, 0.6);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    background: #1F509A;
    color: white;
    padding: 0.8rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }

  button:hover {
    background: #1b7a8e;
  }
`;

const ToggleText = styled.p`
  margin-top: 1rem;
  color: #2193b0;
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.9rem;
`;

export default Auth;
