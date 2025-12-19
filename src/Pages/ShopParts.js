import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./../Styles/ShopParts.css";

const ShopParts = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const parts = [
    { id: 1, name: "Engine Oil Filter", price: 450, image: "/Images/airfilter.jpg", category: "Filters", partNumber: "EF-001", stockQuantity: 25 },
    { id: 2, name: "Batteries", price: 1200, image: "/Images/battery.jpg", category: "Batteries", partNumber: "BT-002", stockQuantity: 15 },
    { id: 3, name: "Spark Plugs", price: 800, image: "/Images/sparkplug.jpg", category: "Electrical", partNumber: "SP-003", stockQuantity: 30 },
    { id: 4, name: "Car Battery", price: 3500, image: "/Images/battery.jpg", category: "Electrical", partNumber: "CB-004", stockQuantity: 8 },
    { id: 5, name: "Tire Set", price: 8000, image: "/Images/tyre.jpg", category: "Tires", partNumber: "TS-005", stockQuantity: 12 },
    { id: 6, name: "Engine Parts", price: 2500, image: "/Images/engine.jpg", category: "Engine", partNumber: "EP-006", stockQuantity: 5 },
    { id: 7, name: "Air Filter", price: 350, image: "/Images/airfilter.jpg", category: "Filters", partNumber: "AF-007", stockQuantity: 20 },

  ];

  const categories = ["All", "Engine", "Batteries", "Electrical", "Filters", "Tires"];

  const filteredParts = selectedCategory === "All" 
    ? parts 
    : parts.filter(part => part.category === selectedCategory);

  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1>Shop Auto Parts</h1>
        <p>Find genuine parts for your vehicle</p>
      </div>

      <div className="filters">
        <h3>Filter by Category:</h3>
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="parts-grid">
        {filteredParts.map((part) => (
          <div key={part.id} className="part-card">
            <img
              src={part.image}
              alt={part.name}
              className="part-image"
            />
            <div className="part-info">
              <h3>{part.name}</h3>
              <p className="part-number">Part #: {part.partNumber}</p>
              <p className="category">{part.category}</p>
              <p className="price">₹{part.price}</p>
              <p className="stock">Stock: {part.stockQuantity}</p>
              <button
                className="view-details-btn"
                onClick={() => navigate(`/part/${part.id}`)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredParts.length === 0 && (
        <div className="no-parts">No parts found in this category</div>
      )}
    </div>
  );
};

export default ShopParts;