import { useState } from "react";
import SlotCard from "./components/SlotCard";
import AdminSlotForm from "./components/AdminSlotForm";

function App() {
  const [slots, setSlots] = useState([
    {
      id: 1,
      date: "10 Jan 2025",
      time: "10:00 - 10:30",
      status: "Available",
    },
    {
      id: 2,
      date: "10 Jan 2025",
      time: "10:30 - 11:00",
      status: "Available",
    },
  ]);

  const handleBookSlot = (id) => {
    const updatedSlots = slots.map((slot) =>
      slot.id === id ? { ...slot, status: "Booked" } : slot
    );
    setSlots(updatedSlots);
  };

  const handleAddSlot = (date, time) => {
    const newSlot = {
      id: Date.now(),
      date,
      time,
      status: "Available",
    };

    setSlots([...slots, newSlot]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Smart Slot Booking System</h1>

      <AdminSlotForm onAddSlot={handleAddSlot} />

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {slots.map((slot) => (
          <SlotCard
            key={slot.id}
            date={slot.date}
            time={slot.time}
            status={slot.status}
            onBook={() => handleBookSlot(slot.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
