import React, { useState } from "react";
import "./../Styles/AddParts.css";

const AddParts = () => {
  const [partName, setPartName] = useState("");
  const [category, setCategory] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleAddPart = (e) => {
    e.preventDefault();

    if (!partName || !category || !vehicleType || !condition || !price || !description || !image) {
      setMessage("Please fill all fields including image.");
      return;
    }

    setMessage("Part added successfully! (UI only)");
  };

  return (
    <div className="addparts-container">
      <h1>Add Part</h1>

      <form className="addparts-form" onSubmit={handleAddPart}>
        
        <label>Part Name:</label>
        <input
          type="text"
          placeholder="Enter part name"
          value={partName}
          onChange={(e) => setPartName(e.target.value)}
        />

        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option>Engine</option>
          <option>Tyres</option>
          <option>Lights</option>
          <option>Batteries</option>
          <option>Accessories</option>
        </select>

        <label>Vehicle Type:</label>
        <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
          <option value="">Select Vehicle Type</option>
          <option>Car</option>
          <option>Bike</option>
          <option>Truck</option>
        </select>

        <label>Condition:</label>
        <select value={condition} onChange={(e) => setCondition(e.target.value)}>
          <option value="">Select Condition</option>
          <option>New</option>
          <option>Used</option>
        </select>

        <label>Price:</label>
        <input
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          placeholder="Enter part description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
        ></textarea>

        <label>Upload Image:</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit" className="addparts-btn">
          Add Part
        </button>
      </form>

      {message && <p className="success-msg">{message}</p>}
    </div>
  );
};

export default AddParts;
