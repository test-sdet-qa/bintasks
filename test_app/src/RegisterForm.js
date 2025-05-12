import React, { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    country: "",
    company: "",
    accepted: false,
  });

  const [modal, setModal] = useState({ show: false, messages: [], success: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]{1,35}(\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9-]{3,35}(\.[a-zA-Z0-9-]{2,})+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8 && password.length <= 16;
  };

  const validateCompany = (company) => {
    const companyRegex = /^[a-zA-Z0-9-]{3,40}$/;
    return companyRegex.test(company);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, company, country, accepted } = formData;

    const errors = [];

    if (!validateEmail(email)) errors.push("Invalid email");
    if (!validatePassword(password)) errors.push("Invalid password");
    if (!validateCompany(company)) errors.push("Invalid Company");
    if (!country) errors.push("Country is required");
    if (!accepted) errors.push("You must accept Terms & Conditions");

    if (errors.length === 0) {
      setModal({ show: true, messages: ["Registration successful!"], success: true });
    } else {
      setModal({ show: true, messages: errors, success: false });
    }
  };

  const closeModal = () => {
    setModal({ ...modal, show: false });
  };

  return (
    <div className="form-container" onClick={closeModal}>
      <form
        onSubmit={handleSubmit}
        className="register-form"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Register</h2>

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">Select a country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
        </select>

        <label>Company</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <div className="checkbox">
          <input
            type="checkbox"
            name="accepted"
            checked={formData.accepted}
            onChange={handleChange}
            required
          />
          <label>I accept Terms & Conditions</label>
        </div>

        <button type="submit">Register</button>
      </form>

      {modal.show && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div
            className={`modal-box ${modal.success ? "success" : "error"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {modal.messages.map((msg, i) => (
              <p key={i}>{msg}</p>
            ))}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;

