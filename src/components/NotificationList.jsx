import Notification from "./Notification";

// Component that displays a list of notifications

const NotificationList = ({ notifications, onClearOne, onClearAll }) => {
  return (
    // Card container for styling
    <div className="card shadow p-4 w-100">

          {/* Heading displaying the number of notifications */}
            <h1 >Notifications ({notifications.length})</h1>

      {notifications.length > 0 ? (
        <>
          {notifications.map((notification) => (
            // Render each Notification component with a Clear button
            <Notification key={notification.id} notification={notification} onClear={onClearOne} />
          ))}
          {/* Button to clear all notifications */}
          <button className="btn btn-danger w-100 py-2 rounded mt-3" onClick={onClearAll}>
            Clear All
          </button>
        </>
      ) : (
        // Message to show when there are no notifications
        <p className="text-center text-muted">No notifications available.</p>
      )}
    </div>
  );
};

export default NotificationList;
