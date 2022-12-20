import { FaPhoneAlt } from "react-icons/fa"
import {GiRotaryPhone} from "react-icons/gi"
import { FaEnvelope } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import logo from "../footer-logo.png"
// import logo from "../footer-logo.png"

function Footer() {
  return (
    <footer>
      <div className='top-footer'>
        <div className="footer-details">
            <h2>Team Qbasic University</h2>
            <p>Lagos Nigeria</p>
            <p>Ranked 2nd Best Internationally</p>
        </div>
        <div className="footer-contact">
            <div className="number"><FaPhoneAlt />
            <span>+234 81 22334455</span>
            </div>

            <div className="number"><FaPhoneAlt />
            <span>Student Info +234 81 22334455</span>
            </div>

            <div className="number"><GiRotaryPhone size={25} />
            <span>+234 81 223444525</span>
            </div>

            <div className="info-link">
                <a href="./about" className="number">
                    <FaEnvelope />
                    <span>info@teamquickbasic.org</span>
                </a>
            </div>
        </div>
        <div className="footer-service">
            <a href="./about">
            <button className="btn-contact">CONTACT & SERVICE</button>
            </a>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="social-media">
            <a href="./about"><FaFacebook /></a>
            <a href="./about"><FaTwitter /></a>
            <a href="./about"> <FaYoutube /></a>
            <a href="./about"> <FaInstagram /></a>  
        </div>
        <div className="quick-links">
            <a href="./about">Current</a>
            <a href="./about">Home page</a>
            <a href="./about">Imprint</a>
            <a href="./about">Privacy</a>
            <a href="./about">Accessibility</a>
        </div>
        <div className="quick-logo">
            <img src={logo} alt="" />
            <div className="logo-text">
                <p>QuickBasic</p>
                <p>University</p>
                <p>International</p>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
