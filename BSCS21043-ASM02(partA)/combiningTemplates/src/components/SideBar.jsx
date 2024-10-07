// Navbar.js

import { FaBell, FaEnvelope, FaUserCircle } from 'react-icons/fa'; // Import icons from react-icons
import './Sidebar.css'; // Adjust the path based on your project structure

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1>Analytics Dashboard</h1>
      </div>
      <div className="navbar-icons">
        <div className="icon-container">
          <FaEnvelope className="navbar-icon" title="Messages" />
        </div>
        <div className="icon-container">
          <FaBell className="navbar-icon" title="Notifications" />
        </div>
        <div className="icon-container">
          <FaUserCircle className="navbar-icon" title="Profile" />
        </div>
        <div className="user-profile">
          <img
            src="https://via.placeholder.com/40" // Replace with the actual user image URL
            alt="User"
            className="profile-pic"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
