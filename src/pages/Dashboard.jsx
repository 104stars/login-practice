// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { auth } from "../../firebase.config";
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    if (auth.currentUser) {
      setUserEmail(auth.currentUser.email);
    } else {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <h1>You successfully logged in!</h1>
      {userEmail && <p>Welcome, {userEmail}!</p>}
      <button>Log Out</button>
    </div>
  );
}

export default Dashboard;