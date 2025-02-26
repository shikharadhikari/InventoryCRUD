import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {

  //note: used ai for making form and styling it
  const [formData, setFormData] = useState({
    id: "",
    country: "",
    magnitude: "",
    date: "",
  });
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 // this function will create new record
  const handleCreate = (e) => {
    e.preventDefault();
    axios.post('/earthquakes', formData)
      .then(() => {
        setMessage("Record added successfully!");
        setFormData({ id: "", country: "", magnitude: "", date: "" });
      })
      .catch(() => {
        setMessage("Error adding record.");
      });
  };

 // this is for the update ( update function)
  const handleUpdate = (e) => {
    e.preventDefault();
    if (!formData.id) {
      setMessage("Please provide an ID to update.");
      return;
    }

    axios.put(`/earthquakes/${formData.id}`, formData)
      .then(() => {
        setMessage("Record updated successfully!");
        setFormData({ id: "", country: "", magnitude: "", date: "" });
      })
      .catch(() => {
        setMessage("Error updating record.");
      });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", border: "1px solid #ddd", borderRadius: "5px" }}>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label>ID:</label>
        <input 
          type="text" 
          name="id" 
          value={formData.id} 
          onChange={handleChange} 
          required 
        />

        <label>Country:</label>
        <input 
          type="text" 
          name="country" 
          value={formData.country} 
          onChange={handleChange} 
          required 
        />

        <label>Magnitude:</label>
        <input 
          type="number" 
          name="magnitude" 
          value={formData.magnitude} 
          onChange={handleChange} 
          required 
        />

        <label>Date:</label>
        <input 
          type="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange} 
          required 
        />

        <button 
          type="submit" 
          onClick={handleCreate} 
          style={{ padding: "10px", background: "#333", color: "white", border: "none", borderRadius: "5px" }}
        >
          Submit
        </button>

        <button 
          type="button" 
          onClick={handleUpdate} 
          style={{ padding: "10px", background: "darkgreen", color: "white", border: "none", borderRadius: "5px" }}
        >
          Update
        </button>
      </form>

      {message && (
        <p style={{ marginTop: "10px", color: message.includes("successfully") ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Form;
