import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./index.css"
const Register = () => {
  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:''
  })

  const handleChange = (e) => {
    const [name, value] = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const userDetails ={
      firstname:formData.firstname,
      lastname:formData.lastname,
      email:formData.email,
      password:formData.password,
    }
    const url = 'http://localhost:8080/auth/register';
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: { 'Content-Type': 'application/json' },
    }
    const response = await fetch(url, options);

  }

  return (
    <div className="register-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <div>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  )
}

export default Register;
