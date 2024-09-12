import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';


const firebaseConfig = {
  apiKey: "AIzaSyAx0_jsoroYT73iAso-KZinDDoSZOuDprw",
  authDomain: "nextstore-f5717.firebaseapp.com",
  projectId: "nextstore-f5717",
  storageBucket: "nextstore-f5717.appspot.com",
  messagingSenderId: "205909772325",
  appId: "1:205909772325:web:c4feb9d14bf3b9745397cc"
};

const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
