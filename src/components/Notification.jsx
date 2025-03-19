const Notification = ({ notification, onClear }) => {
    return (
      <div className="notification list-group-item d-flex justify-content-between align-items-center p-3 mb-2 border border-secondary-subtle rounded bg-white shadow-sm">
        <p className="mb-0">
          <span className="fw-bold me-2">{notification.name}:</span> {notification.message}
        </p>
        <button className="btn btn-danger btn-sm px-3 py-1" onClick={() => onClear(notification.id)}>
          Clear
        </button>
      </div>
    );
  };
  
  export default Notification;