import './Header.css';
import logo from '/proxym/proxym/src/assets/logo.jpeg';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
    <div className="hero_area">
      <header className="header_section">
        <div className="container">
          <nav className="navbar">
            <div className="navbar-brand">
              <img src={logo} alt="Logo" />
            </div>
            <ul className="navbar-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Link to="/login" className="login-btn">Login</Link>
          </nav>
        </div>
      </header>
      <section className="main">
        <div className="content">
          <h1>
            Welcome To <br />
            <span>Our Services</span>
          </h1>
          <p>
            We specialize in delivering cutting-edge digital transformation services. <br/>
            From software development to agile consulting, Proxym empowers global clients <br/>
            with innovative and scalable IT solutions.
          </p>
          <div className="btn-box">
            <Link to="/contact" className="btn-1">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
        
    </>
  );
};

export default Header;
