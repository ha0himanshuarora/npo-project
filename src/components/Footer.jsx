import React from "react";
import { Link } from "react-router-dom";
import {
  FaSquareTwitter,
  FaGithub,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>Chandigarh, India</li>
          <li><a href="mailto:ha0himanshuarora@gmail.com">ha0himanshuarora@gmail.com</a></li>
          <li><a href="tel:+916283610806">+91 6283610806</a></li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li>
          <a href="https://github.com/ha0himanshuarora" target="_blank" rel="noopener noreferrer">
            <span>  <FaGithub />  </span>{" "}  
            <span>GitHub</span>
          </a>

          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/himanshu-arora-3621b52b4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaLinkedin />
              </span>{" "}
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
