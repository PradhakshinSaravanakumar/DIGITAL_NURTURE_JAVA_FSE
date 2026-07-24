import React from "react";
import "./App.css";

function App() {

  const officeList = [
    {
      name: "DLF Tech Park",
      rent: 55000,
      address: "Chennai",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600"
    },
    {
      name: "RMZ Millenia",
      rent: 75000,
      address: "Bangalore",
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=600"
    },
    {
      name: "Tidel Park",
      rent: 45000,
      address: "Chennai",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600"
    }
  ];

  return (
    <div className="App">

      <h1>Office Space Rental App</h1>

      {officeList.map((office, index) => (

        <div className="card" key={index}>

          <img
            src={office.image}
            alt={office.name}
            width="300"
            height="200"
          />

          <h2>{office.name}</h2>

          <p>
            <strong>Address :</strong> {office.address}
          </p>

          <p>
            <strong>Rent :</strong>

            <span
              style={{
                color: office.rent < 60000 ? "red" : "green",
                fontWeight: "bold"
              }}
            >
              ₹{office.rent}
            </span>

          </p>

        </div>

      ))}

    </div>
  );
}

export default App;