import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import Container_1 from './Container_1';
import Container_2 from './Container_2';
import Container_3 from './Container_3';
import Container_4 from './Container_4';
import Container_5 from './Container_5';
import Container_6 from './Container_6';
import Container_7 from './Container_7';
import Container_8 from './Container_8';
import Container_9 from  './Container_9';
import Footer from './Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Container_1 />
    {/* <App /> */}
    <Container_2 />
    <Container_3 />
    <Container_4 />
    <Container_5 />
    <Container_6 />
    <Container_7 />
    <Container_8 />
    <Container_9 />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
