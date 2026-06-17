import React, { useState } from 'react';

function MailRegister() {
  const [data, setData] = useState({ name: '', email: '', password: '' });

  const validate = (e) => {
    e.preventDefault();
    if (data.name.length < 5) return alert("Name min 5 characters!");
    if (!data.email.includes('@')) return alert("Invalid Email!");
    if (data.password.length < 8) return alert("Password min 8 characters!");
    alert("Form Validated Successfully!");
  };

  return (
    <form onSubmit={validate} style={{ margin: '20px' }}>
      <h3>Register</h3>
      <input type="text" placeholder="Name" onChange={(e) => setData({...data, name: e.target.value})} /><br />
      <input type="email" placeholder="Email" onChange={(e) => setData({...data, email: e.target.value})} /><br />
      <input type="password" placeholder="Password" onChange={(e) => setData({...data, password: e.target.value})} /><br />
      <button type="submit">Register</button>
    </form>
  );
}
export default MailRegister;