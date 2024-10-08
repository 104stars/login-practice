import React, { useEffect } from 'react';
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../../firebase.config";
import { useNavigate } from 'react-router-dom';
import UserDAO from '../dao/UserDAO';
import './Login.css'; // Import the CSS file

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for changes in the authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is logged in, redirect to the dashboard
        navigate('/dashboard');
      }
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      // Use the DAO to add user data to Firestore
      const user = {
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
        createdAt: new Date(),
      };
      await UserDAO.createUser(user);

      // Redirect to the dashboard after successful login
      navigate('/dashboard');
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome</h1>
      <h2>Get started here</h2>
      <button onClick={handleLogin} className='google-button'>
        <img src="/google.svg" alt="" className='google-logo' />
        Login with Google
        </button>
    </div>
  );
}

export default Login;
