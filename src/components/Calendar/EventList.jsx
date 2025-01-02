import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EventList = ({ selectedDate, events, updateEvent, deleteEvent, addEvent }) => {
  const [editingEventIndex, setEditingEventIndex] = useState(null);
  const [editedEvent, setEditedEvent] = useState({
    name: "",
    description: "",
    startTime: "",
    endTime: "",
  });
  const [error, setError] = useState(""); // Error message for invalid input
  const [warning, setWarning] = useState(""); // Warning message for overlapping events

  const startEditing = (index, event) => {
    setEditingEventIndex(index);
    setEditedEvent({ ...event });
    setError(""); // Clear any previous errors
    setWarning(""); // Clear any previous warnings
  };

  // Function to check if the event times are valid
  const checkForOverlappingEvents = (startTime, endTime) => {
    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);

    // Check if end time is greater than start time
    if (end <= start) {
      return "End time cannot be earlier than or equal to start time.";
    }

    // Check for any overlaps with existing events
    const overlappingEvents = events.filter((event) => {
      const eventStart = new Date(`1970-01-01T${event.startTime}:00`);
      const eventEnd = new Date(`1970-01-01T${event.endTime}:00`);

      return (
        (start >= eventStart && start < eventEnd) ||
        (end > eventStart && end <= eventEnd) ||
        (start <= eventStart && end >= eventEnd)
      );
    });

    // If there are overlapping events, return a warning message
    if (overlappingEvents.length > 0) {
      return "Warning: There are overlapping events.";
    }

    return ""; // No error, no warning
  };

  // Function to handle save (for both adding and editing events)
  const handleSave = () => {
    const overlapError = checkForOverlappingEvents(
      editedEvent.startTime,
      editedEvent.endTime
    );

    // If there's an error (e.g., invalid time or overlap), display it and prevent saving
    if (overlapError) {
      setError(overlapError); // Show error message
      setWarning(""); // Clear any warning when there's an error
      return;
    }

    // If no error, proceed to save the event
    if (editingEventIndex !== null) {
      updateEvent(editingEventIndex, editedEvent); // Update existing event
    } else {
      addEvent(editedEvent); // Add new event
    }

    // Clear warnings and reset state after saving
    setEditingEventIndex(null);
    setWarning(""); // Clear warning after saving
    setError(""); // Clear any error after saving
    setEditedEvent({
      name: "",
      description: "",
      startTime: "",
      endTime: "",
    });
  };

  // Handle changes to the event times and reset error when the user changes time
  const handleTimeChange = (field, value) => {
    setEditedEvent((prevState) => {
      const newState = { ...prevState, [field]: value };
      // Clear the error when times are updated
      setError("");
      return newState;
    });
  };

  // If no date is selected, display a message
  if (!selectedDate) {
    return <p className="text-gray-500">Please select a date to view events.</p>;
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">
        Events on {selectedDate.toDateString()}
      </h3>
      {error && <p className="text-red-600">{error}</p>} {/* Display error message */}
      {warning && <p className="text-yellow-600">{warning}</p>} {/* Display warning */}

      {events.length > 0 ? (
        <ul className="mt-2 space-y-2">
          {events.map((event, index) => (
            <li
              key={index}
              className="p-2 border border-gray-300 rounded-md shadow-sm"
            >
              {editingEventIndex === index ? (
                <div className="space-y-2">
                  <Input
                    value={editedEvent.name}
                    onChange={(e) =>
                      setEditedEvent({ ...editedEvent, name: e.target.value })
                    }
                    placeholder="Event Name"
                  />
                  <Textarea
                    value={editedEvent.description}
                    onChange={(e) =>
                      setEditedEvent({
                        ...editedEvent,
                        description: e.target.value,
                      })
                    }
                    placeholder="Event Description"
                  />
                  <Input
                    type="time"
                    value={editedEvent.startTime}
                    onChange={(e) =>
                      handleTimeChange("startTime", e.target.value)
                    }
                    placeholder="Start Time"
                  />
                  <Input
                    type="time"
                    value={editedEvent.endTime}
                    onChange={(e) =>
                      handleTimeChange("endTime", e.target.value)
                    }
                    placeholder="End Time"
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleSave}>Save</Button>
                    <Button
                      variant="secondary"
                      onClick={() => setEditingEventIndex(null)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="font-medium">{event.name}</p>
                  <p className="text-sm text-gray-500">{event.description}</p>
                  <p className="text-sm text-gray-500">
                    {event.startTime} - {event.endTime}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Button onClick={() => startEditing(index, event)}>
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => deleteEvent(index)}
                    >
                      Delete
                    </Button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No events for this date.</p>
      )}
    </div>
  );
};

export default EventList;
