
import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

function Home() {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>
        <span>Where Green Meets Life</span>
      </nav>

      <div className="hero-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>
          Bring nature into your home with our beautiful
          collection of indoor plants.
        </p>
        <Link to="/plants" className="get-started-btn">
          Get Started
        </Link>
      </div>

      <AboutUs />

      <footer>
        © 2026 Paradise Nursery. All Rights Reserved.
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
