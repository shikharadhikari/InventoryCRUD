import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function List() {
  const [datas, setDatas] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('/earthquakes')
      .then((response) => {
        const data = response.data;
        setDatas(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };


  const handleDelete = (id) => {
    axios.delete(`/earthquakes/${id}`)
      .then((response) => {
        setMessage("Record deleted successfully!");
        fetchData();
      })
      .catch((error) => {
        setMessage("Error deleting record.");
      });
  };

  return (
    <div>
      <h2>Earthquake List</h2>
      {message && <p>{message}</p>}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {datas.map((data) => (
          <li key={data.id} style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
            <strong>ID:</strong> {data.id} <br />
            <strong>Country:</strong> {data.country} <br />
            <strong>Magnitude:</strong> {data.magnitude} <br />
            <strong>Date:</strong> {data.date} <br />
            <button onClick={() => handleDelete(data.id)} style={{ padding: "5px", background: "#e74c3c", color: "white", border: "none", borderRadius: "5px" }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
