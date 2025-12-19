import { useNavigate } from "react-router-dom";
import "./../Styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Engine Parts', image: '/Images/engine.jpg', category: 'Engine' },
    { name: 'Battery', image: '/Images/battery.jpg', category: 'Batteries' },
    { name: 'Electrical', image: '/Images/sparkplug.jpg', category: 'Electrical' },
    { name: 'Filters', image: '/Images/airfilter.jpg', category: 'Filters' },
    { name: 'Tires & Wheels', image: '/Images/tyre.jpg', category: 'Tires' },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Premium Auto Parts for Every Vehicle</h1>
          <p className="hero-subtitle">Quality parts, competitive prices, and expert service you can trust</p>
          <button className="hero-cta" onClick={() => navigate('/shop')}>Shop Now</button>
        </div>
        <div className="hero-image">
          <img src="/Images/Dashboard.png" alt="Auto Parts" />
        </div>
      </section>

      {/* Brand Intro */}
      <section className="brand-intro">
        <h2>About AutoParts Pro</h2>
        <p>Your trusted partner for quality automotive parts since 2020. We specialize in premium, reliable parts that keep your vehicle running smoothly.</p>
      </section> 

      {/* Product Categories */}
      <section className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card" onClick={() => navigate(`/shop?category=${category.category}`)}>
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </section>


      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Find Your Parts?</h2>
        <p>Browse our extensive catalog or contact our experts for personalized assistance</p>
        <div className="cta-buttons">
          <button onClick={() => navigate('/shop')} className="cta-primary">Browse Catalog</button>
          <button onClick={() => navigate('/contact')} className="cta-secondary">Contact Expert</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
