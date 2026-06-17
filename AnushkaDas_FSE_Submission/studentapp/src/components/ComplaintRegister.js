import React, { useState } from 'react';

function ComplaintRegister() {
  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const refNumber = Math.floor(Math.random() * 1000000);
    alert(`Complaint Registered! Reference Number: ${refNumber}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <h3>Register Complaint</h3>
      <input type="text" placeholder="Employee Name" onChange={(e) => setName(e.target.value)} required /><br />
      <textarea placeholder="Describe complaint" onChange={(e) => setComplaint(e.target.value)} required /><br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default ComplaintRegister;