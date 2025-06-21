import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import { AuthProvider } from './component/AuthContext.jsx'
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <App />
    <ToastContainer/>
    </AuthProvider>
  </StrictMode>,
)
