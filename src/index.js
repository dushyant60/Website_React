import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyForm from './components/Career/MobileForm';
// import PhoneSignin from './components/Career/PhoneAuth';
// import MyForm from './components/Career/Mobiletest';
// import JobApplicationForm from './components/Career/ApplyJobForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <MyForm/> */}
    {/* <PhoneSignin/> */}
    {/* <JobApplicationForm/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
