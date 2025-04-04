import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import DEMO_CONTACTS from '../data/demoContacts';

export const AuthContext = createContext();

const DEMO_MODE = window.location.hostname === 'danieltuan11.github.io';
const DEMO_USER = { username: 'admin' };
const DEMO_TOKEN = 'demo-token';

const DEMO_CREDENTIALS = {
  username: 'admin',
  password: 'password123'
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        if (DEMO_MODE) {
          if (token === DEMO_TOKEN) {
            setIsAuthenticated(true);
            setUser(DEMO_USER);
          } else {
            localStorage.removeItem('token');
          }
          setLoading(false);
        } else {
          setAuthToken(token);
          const res = await axios.get('/api/auth/verify');
          if (res.data.valid) {
            setIsAuthenticated(true);
            setUser(res.data.user);
          } else {
            localStorage.removeItem('token');
            setAuthToken(null);
          }
          setLoading(false);
        }
      } catch (err) {
        console.error('Auth verification error:', err);
        localStorage.removeItem('token');
        setAuthToken(null);
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common['x-auth-token'] = token;
    } else {
      delete axios.defaults.headers.common['x-auth-token'];
    }
  };

  const login = async (username, password) => {
    setError(null);
    try {
      if (DEMO_MODE) {
        if (username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password) {
          localStorage.setItem('token', DEMO_TOKEN);
          setIsAuthenticated(true);
          setUser(DEMO_USER);
          return true;
        } else {
          setError('Invalid credentials');
          return false;
        }
      } else {
        const res = await axios.post('/api/auth/login', { username, password });
        localStorage.setItem('token', res.data.token);
        setAuthToken(res.data.token);
        const verifyRes = await axios.get('/api/auth/verify');
        setIsAuthenticated(true);
        setUser(verifyRes.data.user);
        return true;
      }
    } catch (err) {
      setError(
        err.response && err.response.data.message
          ? err.response.data.message
          : 'Login failed'
      );
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    setIsAuthenticated(false);
    setUser(null);
  };

  const getContactData = async (username = 'daniel') => {
    if (DEMO_MODE) {
      return DEMO_CONTACTS[username] || null;
    } else {
      try {
        const res = await axios.get(`/api/contact/${username}`);
        return res.data;
      } catch (err) {
        console.error('Error fetching contact data:', err);
        return null;
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        error,
        login,
        logout,
        getContactData,
        demoMode: DEMO_MODE,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};