import axios from 'axios';
import React, { useState } from 'react';

function Form() {
  let where, when;
  const [formData, handleForm] = useState({
    fname: '',
    lname: '',
    email: '',
    doc: 'default',
    where: '',
    when: '',
  });
  const [inprogress, handleInprogress] = useState(false);
  const [booked, handleBooking] = useState(false);
  const handleFormData = (event) => {
    handleForm({ ...formData, [event.target.name]: event.target.value });
  };

  if (formData.doc !== 'default') {
    where = (
      <div>
        <h4>Where?</h4>
        <input type="radio" value="gmeet" name="where" onChange={handleFormData} />
        Google Meet
        <br /> <input type="radio" value="phone" name="where" onChange={handleFormData} />
        Phone
      </div>
    );
    when = (
      <div>
        <h4>When?</h4>
        <input type="datetime-local" name="when" value={formData.when} onChange={handleFormData} />
      </div>
    );
  }
  const handleCancel = () => {
    handleBooking(false);
    handleForm({
      fname: '',
      lname: '',
      email: '',
      doc: 'default',
      where: '',
      when: '',
    });
  };
  const handleSubmit = async (e) => {
    handleInprogress(true);
    e.preventDefault();
    //get all form data
    try {
      const response = await axios('https://jsonplaceholder.typicode.com/posts', formData);
      if (response) {
        //appointment booked
        handleBooking(true);
        handleInprogress(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {booked ? (
        <div>
          <h1>Appointment Booked Successfully</h1>
          <button onClick={handleCancel}>Cancel Appointment</button>
        </div>
      ) : (
        <div>
          <h1>Book a Session</h1>
          <p>Fill in the form below to book a virtual session with your doctor</p>
          {inprogress ? (
            <h2>Scheduling the Appointment.....</h2>
          ) : (
            <form onSubmit={handleSubmit}>
              <h4>Basic Info</h4>
              <label>
                First Name: <input name="fname" value={formData.fname} onChange={handleFormData}></input>
              </label>
              <br />
              <br />
              <label>
                Last Name: <input name="lname" value={formData.lname} onChange={handleFormData}></input>
              </label>
              <br />
              <br />
              <label>
                Email: <input name="email" value={formData.email} onChange={handleFormData}></input>
              </label>
              <br />
              <h4>Doctor</h4>
              <select name="doc" value={formData.doc} onChange={handleFormData}>
                <option value="default">Select your doctor</option>
                <option value="mel">Dr Melissa Luns</option>
                <option value="sha">Dr Shawn Mendes</option>
                <option value="kel">Dr Kelly Halo</option>
              </select>
              <div>{where}</div>
              <div>{when}</div>
              <br />
              <button type="submit">Confirm Booking</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
function BookAppointment() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default BookAppointment;
