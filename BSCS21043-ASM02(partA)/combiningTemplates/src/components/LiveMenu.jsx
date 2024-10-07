import { useState, useEffect } from 'react';
import './LiveMenu.css';

const LiveMenu = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Margherita Pizza', price: '$10', available: true },
    { id: 2, name: 'Chicken Burger', price: '$8', available: true },
    { id: 3, name: 'Caesar Salad', price: '$6', available: false },
    { id: 4, name: 'Pasta Carbonara', price: '$12', available: true },
  ]);

  // Simulate live availability changes using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedMenu = menuItems.map(item => ({
        ...item,
        available: Math.random() > 0.5, // Randomly toggle availability
      }));
      setMenuItems(updatedMenu);
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [menuItems]);

  return (
    <div className="live-menu-container">
      <h2 className="menu-title">Live Restaurant Menu</h2>
      <ul className="menu-list">
        {menuItems.map(item => (
          <li key={item.id} className={`menu-item ${item.available ? 'available' : 'unavailable'}`}>
            <span className="menu-name">{item.name}</span>
            <span className="menu-price">{item.price}</span>
            <span className="menu-status">
              {item.available ? 'Available' : 'Unavailable'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveMenu;
