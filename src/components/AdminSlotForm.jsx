function AdminSlotForm({ onAddSlot }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = e.target.date.value;
    const time = e.target.time.value;

    if (!date || !time) {
      alert("Please fill all fields");
      return;
    }

    onAddSlot(date, time);

    e.target.reset();
  };

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "16px",
        background: "#1f2933",
        borderRadius: "8px",
        maxWidth: "500px",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>Admin: Create Slot</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="date"
          type="text"
          placeholder="Date (e.g. 11 Jan 2025)"
          style={inputStyle}
        />

        <input
          name="time"
          type="text"
          placeholder="Time (e.g. 12:00 - 12:30)"
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Add Slot
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default AdminSlotForm;
