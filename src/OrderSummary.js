import React, { useState } from 'react';

function OrderSummary() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [numIceCreams, setNumIceCreams] = useState(0);
  const [price,setPrice]=useState(0);
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleNumIceCreamsChange = (event) => {
    setNumIceCreams(parseInt(event.target.value));
  };
  const handlePriceChange=(event)=>{
    setPrice(parseInt(event.target.value));
  }
  const totalAmount = numIceCreams * price;

  return (
    <div className='OrderSummary'>
      <label htmlFor="firstName">First Name: </label>
      <input id="firstName" type="text" value={firstName} onChange={handleFirstNameChange} />
      <br />
      <label htmlFor="lastName">Last Name: </label>
      <input id="lastName" type="text" value={lastName} onChange={handleLastNameChange} />
      <br />
      <label htmlFor="numIceCreams">Number of Ice Creams: </label>
      <input id="numIceCreams" type="number" value={numIceCreams} onChange={handleNumIceCreamsChange} />
      <br />
      <label htmlFor="price" >Price: </label>
      <input id="price" type="number" value={price} onChange={handlePriceChange}/>
      <br />
      <br/>
      {firstName && lastName && numIceCreams && price > 0 && (
        <p>Hello {firstName} {lastName}! The total amount you need to pay for {numIceCreams} ice-creams is Rs. {totalAmount}.</p>
      )}
    </div>
  );
}

export default OrderSummary;
