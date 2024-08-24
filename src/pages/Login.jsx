import React from 'react';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase.config";
import { useNavigate } from 'react-router-dom';
import UserDAO from '../dao/UserDAO';

function Login() {
  const navigate = useNavigate();

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

      // Redirect to the dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;