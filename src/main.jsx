import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import {BrowserRouter} from "react-router-dom";
import {initializeApp} from "firebase/app";

// Datos del firebase que voy a usar
const firebaseConfig = {
  apiKey: "AIzaSyDgwxF1TB__xMiKKFIUe-RM2GEUG5pkQUc",
  authDomain: "schnau-zaar.firebaseapp.com",
  projectId: "schnau-zaar",
  storageBucket: "schnau-zaar.appspot.com",
  messagingSenderId: "687096956424",
  appId: "1:687096956424:web:dd64941ad2d849aa89b3bd"
};

const app = initializeApp(firebaseConfig);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
