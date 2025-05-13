import Footer from '../../components/footer/Footer';
import './About.css';


export default function About() {
  return (
    <>
      <div className="hero_area">
        <header className="header_section">
          <div className="container">
            <nav className="navbar">
              <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
              <a className="login-btn" href="/login">Login</a>
            </nav>
          </div>
        </header>
      </div>

      <div className="about-section">
        <div className="container">
          <div className="section-title">
            <p className="subtitle">About Us</p>
            <h1 className="title">Empowering Business Growth with NFC</h1>
            <p className="description">
              Proxym is more than just a digital card—it’s a business growth tool. We are a team of passionate tech professionals who believe NFC technology is the key to unlocking new opportunities. With diverse experience in finance, lighting, corporate services, and tech, we help make sure your networking efforts drive real results.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-box equal-box">
                <h4>Our Mission</h4>
                <p>To power business growth with fast, secure, and user-friendly NFC solutions.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box equal-box">
                <h4>Our Vision</h4>
                <p>To transform how businesses connect using smart, NFC-enabled networking tools.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box equal-box">
                <h4>Our Plan</h4>
                <p>To go beyond business projection—delivering real growth and connectivity.</p>
              </div>
            </div>
          </div>

          <h3 className="subheader">What We Offer</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-box equal-box">
                <h5>Integrated Tech</h5>
                <p>Instant contact sharing via NFC and QR codes.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box equal-box">
                <h5>SMART Card</h5>
                <p>Feature-rich and designed for agile business use.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box equal-box">
                <h5>Contactless</h5>
                <p>Make connections with just a tap or scan.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box equal-box">
                <h5>Eco-Friendly</h5>
                <p>Sustainable, paper-free networking.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box equal-box">
                <h5>Unique Design</h5>
                <p>Clean, minimalist cards that spotlight your brand.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box equal-box">
                <h5>Portable Business</h5>
                <p>Carry and share only what matters.</p>
              </div>
            </div>
          </div>

          <h3 className="subheader">Meet the Team</h3>
          <ul className="team-list">
            <li>Ali Khan</li>
            <li>Nikhil Kumar</li>
            <li>Bhanu Chandar Naira</li>
            <li>Neeraj Lakhotia</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}