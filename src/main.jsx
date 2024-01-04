import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './estilos.css'

// DENTRO DE ReactDom obtiene el id root que es el id de un div index.html dentro de esto renderiza los componentes
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
