import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwt');

    if (jwtToken) {
      setIsLoggedIn(true);
      try {
        // Decoding the JWT and setting the user info
        const decodedUser = jwtDecode(jwtToken);  
        setUser(decodedUser);
      } catch (error) {
        console.log('Invalid token');
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
