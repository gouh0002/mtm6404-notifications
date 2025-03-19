import { useState } from 'react';
import data from './notifications.js';
import NotificationList from "./components/NotificationList";
import './App.css';

// Main App component
function App() {
    // State to manage notifications list
  const [notifications, setNotifications] = useState(data);

  // Function to remove a single notification by ID
  const clearOneNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };
  // Function to remove all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="justify-content-center align-items-center bg-light">
      <div className="container w-80 justify-content-center">
        <NotificationList
          notifications={notifications}
          onClearOne={clearOneNotification}
          onClearAll={clearAllNotifications}
        />
      </div>
    </div>
  );
}

export default App;