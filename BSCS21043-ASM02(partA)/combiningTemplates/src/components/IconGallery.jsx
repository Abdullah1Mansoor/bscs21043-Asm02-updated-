// src/components/IconGallery.jsx

import './IconGallery.css'; // Import your CSS for styling

function IconGallery() {
  const icons = [
    { name: 'Home', icon: 'fas fa-home' },
    { name: 'User', icon: 'fas fa-user' },
    { name: 'Settings', icon: 'fas fa-cog' },
    { name: 'Info', icon: 'fas fa-info-circle' },
    { name: 'Bell', icon: 'fas fa-bell' },
  ];

  return (
    <div className="icon-gallery">
      {icons.map((iconItem, index) => (
        <div className="icon-card" key={index}>
          <i className={iconItem.icon}></i>
          <span>{iconItem.name}</span>
        </div>
      ))}
    </div>
  );
}

export default IconGallery;
