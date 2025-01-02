import { useState, useEffect } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import EventList from "./EventList";
import AddEventModal from "./AddEventModal";
import { Button } from "@/components/ui/button";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, date: selectedDate.toDateString() }]);
    setShowModal(false);
  };

  const updateEvent = (index, updatedEvent) => {
    const updatedEvents = [...events];
    updatedEvents[index] = { ...updatedEvent, date: events[index].date };
    setEvents(updatedEvents);
  };

  const deleteEvent = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
  };

  const downloadEvents = () => {
    const json = JSON.stringify(events, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "events.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  const filteredEvents = events.filter(
    (event) => event.date === selectedDate?.toDateString()
  );

  return (
    <div className="p-6 bg-background rounded-lg shadow-md max-w-3xl mx-auto">
      <CalendarHeader
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <CalendarGrid
        currentDate={currentDate}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <EventList
        selectedDate={selectedDate}
        events={filteredEvents}
        updateEvent={updateEvent}
        deleteEvent={deleteEvent}
        addEvent={handleAddEvent}
      />
      {showModal && (
        <AddEventModal
          setShowModal={setShowModal}
          handleAddEvent={handleAddEvent}
          selectedDate={selectedDate}
        />
      )}
      <div className="flex justify-between mt-4">
        <Button onClick={() => setShowModal(true)}>Add Event</Button>
        <Button variant="secondary" onClick={downloadEvents}>
          Download Events
        </Button>
      </div>
    </div>
  );
};

export default Calendar;
