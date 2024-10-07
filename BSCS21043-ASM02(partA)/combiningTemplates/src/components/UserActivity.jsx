import { useState, useEffect } from 'react';
import './UserActivity.css';

const UserActivity = () => {
  const [timeSpent, setTimeSpent] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  // Increment the time spent every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handle clicks and increment click count
  const handleClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <div onClick={handleClick} className="user-activity">
      <h3>User Activity</h3>
      <p>Time Spent on Page: {timeSpent} seconds</p>
      <p>Total Clicks: {clickCount}</p>
    </div>
  );
};

export default UserActivity;
