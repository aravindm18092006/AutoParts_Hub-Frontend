import React, { useState } from "react";
import "./../Styles/DeleteParts.css";

const DeleteParts = () => {
  const [partId, setPartId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();

    if (!partId) {
      setMessage("Please enter Part ID or Name.");
      return;
    }

    setMessage(`Part "${partId}" deleted successfully! (UI only)`);
    setPartId("");
  };

  return (
    <div className="delete-container">
      <h1>Delete Part</h1>

      <form className="delete-form" onSubmit={handleDelete}>
        <label>Part ID / Name:</label>
        <input
          type="text"
          placeholder="Enter Part ID or Name"
          value={partId}
          onChange={(e) => setPartId(e.target.value)}
        />

        <button type="submit">Delete Part</button>
      </form>

      {message && <p className="delete-message">{message}</p>}
    </div>
  );
};

export default DeleteParts;
