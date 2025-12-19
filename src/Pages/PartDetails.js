import { useParams, useNavigate } from "react-router-dom";
import "./../Styles/PartDetails.css";

const PartDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const parts = [
    { id: 1, name: "Engine Oil Filter", price: 450, image: "/Images/airfilter.jpg", category: "Filters", partNumber: "EF-001", stockQuantity: 25, description: "High-quality engine oil filter for optimal engine performance and protection." },
    { id: 2, name: "Batteries", price: 1200, image: "/Images/battery.jpg", category: "Batteries", partNumber: "BT-002", stockQuantity: 15, description: "High-performance automotive batteries for reliable vehicle starting power." },
    { id: 3, name: "Spark Plugs", price: 800, image: "/Images/sparkplug.jpg", category: "Electrical", partNumber: "SP-003", stockQuantity: 30, description: "High-performance spark plugs for improved engine efficiency and fuel economy." },
    { id: 4, name: "Car Battery", price: 3500, image: "/Images/battery.jpg", category: "Electrical", partNumber: "CB-004", stockQuantity: 8, description: "Long-lasting car battery with excellent cold cranking performance." },
    { id: 5, name: "Tire Set", price: 8000, image: "/Images/tyre.jpg", category: "Tires", partNumber: "TS-005", stockQuantity: 12, description: "Complete tire set with superior grip and durability for all weather conditions." },
    { id: 6, name: "Engine Parts", price: 2500, image: "/Images/engine.jpg", category: "Engine", partNumber: "EP-006", stockQuantity: 5, description: "Essential engine components for maintenance and repair operations." }
  ];

  const part = parts.find(p => p.id === parseInt(id));
  
  if (!part) return <div className="error">Part not found</div>;

  return (
    <div className="part-details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back to Parts
      </button>

      <div className="part-details">
        <div className="part-image-section">
          <img
            src={part.image || '/Images/download.png'}
            alt={part.name}
            className="main-image"
          />
        </div>

        <div className="part-info-section">
          <h1>{part.name}</h1>
          <p className="part-number">Part Number: {part.partNumber}</p>
          <p className="category">Category: {part.category}</p>
          <p className="price">₹{part.price}</p>
          
          <div className="stock-info">
            <span className={`stock-status ${part.stockQuantity > 0 ? 'in-stock' : 'out-stock'}`}>
              {part.stockQuantity > 0 ? `In Stock (${part.stockQuantity} available)` : 'Out of Stock'}
            </span>
          </div>

          <div className="description">
            <h3>Description</h3>
            <p>{part.description || 'High-quality automotive part designed for optimal performance and durability.'}</p>
          </div>

          <div className="specifications">
            <h3>Specifications</h3>
            <ul>
              <li>Brand: Premium Quality</li>
              <li>Warranty: 1 Year</li>
              <li>Material: High-grade materials</li>
              <li>Compatibility: Universal fit</li>
              <li>Installation: Professional recommended</li>
            </ul>
          </div>




        </div>
      </div>
    </div>
  );
};

export default PartDetails;