import React, { useState, useEffect } from "react";
import "./../Styles/EditParts.css";

const EditParts = () => {
  const [partName, setPartName] = useState("");
  const [category, setCategory] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setPartName("Car Headlight");
    setCategory("Lights");
    setVehicleType("Car");
    setCondition("Used");
    setPrice("1500");
    setDescription("Used car headlight in good condition.");
  }, []);

  const handleUpdatePart = (e) => {
    e.preventDefault();

    if (!partName || !category || !vehicleType || !condition || !price || !description) {
      setMessage("Please fill all fields.");
      return;
    }

    setMessage("Part updated successfully! (UI only)");
  };

  return (
    <div className="edit-container">
      <h1>Edit Part</h1>

      <form className="edit-form" onSubmit={handleUpdatePart}>
        <label>Part Name:</label>
        <input
          type="text"
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
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button type="submit">Update Part</button>
      </form>

      {message && <p className="edit-message">{message}</p>}
    </div>
  );
};

export default EditParts;
