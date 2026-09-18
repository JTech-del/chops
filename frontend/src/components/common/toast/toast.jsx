import './toast.css';

function Toast({
  message,
  type = 'success',
  onClose,
}) {
  return (
    <div
      className={`toast toast--${type}`}
      role="status"
      aria-live="polite"
    >
      <span
        className="toast__icon"
        aria-hidden="true"
      >
        {type === 'success' ? '✓' : '!'}
      </span>

      <p className="toast__message">
        {message}
      </p>

      <button
        type="button"
        className="toast__close"
        onClick={onClose}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
}

export default Toast;