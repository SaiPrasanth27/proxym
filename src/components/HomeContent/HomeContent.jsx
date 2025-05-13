import './HomeContent.css';
import { FaComputer } from "react-icons/fa6";
import { TiBusinessCard } from "react-icons/ti";
import { RiWirelessChargingFill } from "react-icons/ri";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { MdOutlineAddBusiness } from "react-icons/md";

const HomeContent = () => {
  return (
    <div className="cont">
      <p className="section-title">Features</p>

      <div className="features-box">
        <div className="row">
          <div className="softbox">
            <FaComputer  size={60}/>
            <h3>Integrated Tech</h3>
            <p>This site uses NFC technology for contact sharing.</p>
          </div>
          <div className="softbox">
            <TiBusinessCard  size={60}/>
            <h3>Smart Card</h3>
            <p>Many features are packed which makes the business go agile.</p>
          </div>
          <div className="softbox">
            <RiWirelessChargingFill  size={60}/>
            <h3>Contact Less</h3>
            <p>Communication with just a tap or a scan.</p>
          </div>
        </div>

        <div className="row">
          <div className="softbox">
            <FaGlobeAmericas  size={60}/>
            <h3>Eco Friendly</h3>
            <p>Easy on your pocket and super easy towards the environment.</p>
          </div>
          <div className="softbox">
            <FaPencilRuler  size={60}/>
            <h3>Unique Design</h3>
            <p>Easy and simple design which makes your business unique.</p>
          </div>
          <div className="softbox">
            <MdOutlineAddBusiness  size={60}/>
            <h3>Portable Business</h3>
            <p>This helps you to whatever you needed, Card is business.</p>
          </div>
        </div>
      </div>
      <p className="section-title">Our Plans</p>

      <div className="plans-section">
        <div className="plan-box">
          <h3>Professional Plan</h3>
          <ul>
            <li>Client's Name</li>
            <li>Card Color</li>
            <li>Occupation & Details</li>
            <li>Social Media Handles</li>
          </ul>
          <p className="plan-price">$499</p>
        </div>

        <div className="plan-box">
          <h3>Premium Plan</h3>
          <ul>
            <li>Client's Name</li>
            <li>Card Color</li>
            <li>Occupation & Details</li>
            <li>Social Media Handles</li>
            <li>Upload Catalogue/Portfolio</li>
            <li>Company Logo</li>
          </ul>
          <p className="plan-price">$1499</p>
        </div>

        <div className="plan-box">
          <h3>Corporate Plan</h3>
          <ul>
            <li>Company Logo</li>
            <li>Up to 10 cards for company</li>
            <li>Card Color</li>
            <li>Card Template</li>
            <li>Custom Control Panel</li>
            <li>3 cards with name/designation</li>
            <li>1-Year Card Protection</li>
          </ul>
          <p className="plan-price">$4999</p>
        </div>

        <div className="plan-box">
          <h3>Album Frames</h3>
          <ul>
            <li>Card Color</li>
            <li>Card Template</li>
            <li>Name, Occupation, Photo</li>
            <li>Social Media Links</li>
          </ul>
          <p className="plan-price">$499</p>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
