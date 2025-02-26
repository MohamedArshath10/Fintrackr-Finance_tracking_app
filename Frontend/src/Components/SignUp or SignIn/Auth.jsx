import React, { useState } from 'react';
import styled from 'styled-components';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <AuthContainer>
      <AuthBox>
        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        <form>
          {isSignUp && <input type="text" placeholder="Username" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        </form>
        <ToggleText onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Sign In' : 'Don’t have an account? Sign Up'}
        </ToggleText>
      </AuthBox>
    </AuthContainer>
  );
};

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
