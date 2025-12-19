import React from "react";
import "./../Styles/ViewParts.css";

const ViewParts = () => {
  return (
    <div className="viewparts-container">
      <h1>View Parts</h1>

      <div className="filters-box">
        <h3>Filters</h3>

        <div className="filters">
          <select>
            <option>Category</option>
            <option>Engine</option>
            <option>Tyres</option>
            <option>Batteries</option>
            <option>Lights</option>
            <option>Accessories</option>
          </select>

          <select>
            <option>Condition</option>
            <option>New</option>
            <option>Used</option>
          </select>

          <select>
            <option>Vehicle Type</option>
            <option>Car</option>
            <option>Bike</option>
            <option>Truck</option>
          </select>

          <input type="text" placeholder="City" />
        </div>
      </div>

      <h2 className="parts-title">Available Parts</h2>

      <div className="parts-grid">

        <div className="part-card">
          <div className="image-box"></div>
          <h3>Car Battery</h3>
          <p>₹2800</p>
          <p>Used · Chennai</p>
          <button className="view-btn">View</button>
        </div>

        <div className="part-card">
          <div className="image-box"></div>
          <h3>Bike Headlight</h3>
          <p>₹700</p>
          <p>New · Coimbatore</p>
          <button className="view-btn">View</button>
        </div>

        <div className="part-card">
          <div className="image-box"></div>
          <h3>Car Tyre</h3>
          <p>₹1500</p>
          <p>Used · Madurai</p>
          <button className="view-btn">View</button>
        </div>
      </div>
    </div>
  );
};

export default ViewParts;
