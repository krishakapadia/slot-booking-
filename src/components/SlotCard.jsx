import "../styles/slotCard.css";

function SlotCard({ date, time, status, onBook }) {
  return (
    <div className="slot-card">
      <h3>{date}</h3>
      <p>{time}</p>

      <span className={`status ${status.toLowerCase()}`}>
        {status}
      </span>

      <button
        disabled={status !== "Available"}
        onClick={onBook}
      >
        {status === "Available" ? "Book Slot" : "Unavailable"}
      </button>
    </div>
  );
}

export default SlotCard;
