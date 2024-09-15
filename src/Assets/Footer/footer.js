import "./footer.css";
import logo from "../images/logo-bookmark-footer.svg";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-up">
          <p>35,000+ ALREADY JOINED</p>
          <div className="date">
            <h4>Stay up-to-date with what we're doing</h4>
          </div>
          <div className="footer-inputs">
            <div>
              <input placeholder="Enter your email address" type="email" />
              <button>
                <p>Contact Us</p>
              </button>
            </div>
          </div>
        </div>
        <div className="footer-down">
          <div>
            <div className="footer-down-left">
              <ul>
                <li>
                  <h4>SHADRACK M...</h4>
                </li>
                <li className="footer-hide" >
                  <p>FEATURES</p>
                </li>
                <li className="footer-hide" >
                  <p>PRICING</p>
                </li>
                <li className="footer-hide" >
                  <p>CONTACT</p>
                </li>
              </ul>
            </div>
            <div className="footer-down-right">
              <img src={facebook} />
              <img src={twitter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
