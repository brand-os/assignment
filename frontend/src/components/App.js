import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import TreeInput from './TreeInput';
import TreeDisplay from './TreeDisplay';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/auth/current_user', { withCredentials: true })
      .then(response => {
        setUser(response.data);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? <Navigate to="/tree-input" /> : <Login />} />
          <Route path="/tree-input" element={user ? <TreeInput /> : <Navigate to="/" />} />
          <Route path="/tree-display" element={user ? <TreeDisplay /> : <Navigate to="/" />} />
          {/* Add other routes here as needed */}
          <Route path="*" element={<h1>Page Not Found</h1>} />
          {/* This Route will catch any undefined routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
