import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">   
        <div className="logo">
          <img src="logoschool.png" alt="logo" />
          <span>Codeschool</span>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Teachers</li>
          <li>Holidays</li>
        </ul>
        <button className="contact-btn">Contact us</button>
      </nav>

      {/* Heading */}
      <header className="main-heading">
        <h1>Hi home</h1>
      </header>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h3>Codeschool</h3>
          <p>Online learning community school for coder kids powered by Silver Oak</p>
        </div>
        <div className="footer-section">
          <h3>Popular Links</h3>
          <ul>
            <li>Home</li>
            <li>Teachers</li>
            <li>Holidays</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Social Profiles</h3>
          <ul>
            <li>YouTube</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h3>Contact us</h3>
          <input type="text" placeholder="Fullname" />
          <input type="email" placeholder="example@mail.com" />
          <textarea placeholder="Message" rows="3"></textarea>
        </div>
      </footer>
    </div>
  );
}

export default App;
