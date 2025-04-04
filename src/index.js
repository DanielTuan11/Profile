import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom'; // 👈 Thêm dòng này
import { AuthProvider } from './context/AuthContext'; // 👈 Thêm dòng này

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter> {/* 👈 Bao ngoài App */}
      <AuthProvider> {/* 👈 Bao luôn AuthProvider bên trong Router */}
        <App />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
