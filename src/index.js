import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GeneralInfo } from './components/generalInfo.js'
import { Education } from './components/education.js'
import { Experience } from './components/experience.js'
import './styles/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <GeneralInfo />
    <Education />
    <Experience />
  </React.StrictMode>
);