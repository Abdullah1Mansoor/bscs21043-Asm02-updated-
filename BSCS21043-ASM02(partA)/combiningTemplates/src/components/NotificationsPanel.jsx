
import { Bell } from 'react-feather';

const NotificationsPanel = () => {
  return (
    <div className="card">
      <h3>Notifications</h3>
      <ul>
        <li><Bell /> New message from Admin</li>
        <li><Bell /> Update: System maintenance scheduled</li>
        <li><Bell /> Reminder: Complete your profile</li>
      </ul>
    </div>
  );
};

export default NotificationsPanel;
