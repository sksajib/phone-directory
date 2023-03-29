import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShowSubscribers from './ShowSubscribers';
import AddSubscriber from './AddSubscriber';
import OrderSummary from './OrderSummary';
import PhoneDirectory from './PhoneDirectory';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><PhoneDirectory/> </React.StrictMode>);
// ReactDOM.createRoot(document.getElementById('root1')).render(
//   <React.StrictMode>
//     <p> 1. Is React a JavaScript library for building user-interfaces?</p>
//     <form className="options">
//    <input type="radio" value="Yes" name="React" id="Yes"/>
//    <label htmlFor='Yes'>Yes</label>
//    <br/>
//    <input type="radio" name="React"value="No" id="No"/>
//    <label htmlFor='No'>No</label></form>
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
