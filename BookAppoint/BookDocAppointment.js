import React, { useState } from 'react';

function Form() {
  const [doc, updateDocInfo] = useState('default');
  const handleDropDown = (e) => {
    updateDocInfo(e.target.value);
  };
  return (
    <form>
      <h1>Book a Session</h1>
      <p>Fill in the form below to book a virtual session with your doctor</p>
      <h4>Basic Info</h4>
      <label>
        First Name: <input></input>
      </label>
      <br />
      <label>
        Last Name: <input></input>
      </label>
      <br />
      <label>
        Email: <input></input>
      </label>
      <br />
      <h4>Doctor</h4>
      <select value={doc} onChange={handleDropDown}>
        <option value="default">Select your doctor</option>
        <option value="mel">Dr Melissa Luns</option>
        <option value="sha">Dr Shawn Mendes</option>
        <option value="kel">Dr Kelly Halo</option>
      </select>
      <br />
      <button type="submit">Confirm Booking</button>
    </form>
  );
}
function DoctorInfo() {}
function PostCall() {}
function SuccessCall() {}
function FailureCall() {}
function BookAppointment() {
  //select doc- render when/where
  //on submit- api call + show banner
  //on success- show msg & button
  //on failure- show msg & Try Again button
  return (
    <div>
      <Form />
    </div>
  );
}

export default BookAppointment;
