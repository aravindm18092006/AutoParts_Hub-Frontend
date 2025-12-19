import React, { useState } from "react";
import "./../Styles/Profile.css";

const Profile = () => {
  const [name, setName] = useState("Aravind");
  const [phone, setPhone] = useState("9876543210");
  const [city, setCity] = useState("Chennai");
  const [message, setMessage] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name || !phone || !city) {
      setMessage("Please fill all fields.");
      return;
    }

    setMessage("Profile updated successfully! (UI only)");
  };

  return (
    <div className="profile-container">
      <h1>My Profile</h1>

      <form className="profile-form" onSubmit={handleUpdate}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Phone:</label>
        <input
          type="text"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>City:</label>
        <input
          type="text"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit" className="update-btn">
          Update Profile
        </button>
      </form>

      {message && <p className="success-msg">{message}</p>}

      <hr />

      <button className="logout-btn" onClick={() => alert("Logout clicked (UI only)")}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
