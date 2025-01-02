import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AddEventModal = ({ setShowModal, handleAddEvent }) => {
  const [eventDetails, setEventDetails] = useState({
    name: "",
    description: "",
    startTime: "",
    endTime: "",
  });

  const handleSubmit = () => {
    handleAddEvent(eventDetails);
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4">Add Event</h2>

        {/* Title Field */}
        <div className="mb-4">
          <label htmlFor="event-title" className="block text-sm font-medium text-gray-700 mb-1">
            Event Title
          </label>
          <Input
            id="event-title"
            value={eventDetails.name}
            onChange={(e) =>
              setEventDetails({ ...eventDetails, name: e.target.value })
            }
            placeholder="Enter event title"
          />
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label htmlFor="event-description" className="block text-sm font-medium text-gray-700 mb-1">
            Event Description
          </label>
          <Textarea
            id="event-description"
            value={eventDetails.description}
            onChange={(e) =>
              setEventDetails({ ...eventDetails, description: e.target.value })
            }
            placeholder="Enter event description"
          />
        </div>

        {/* Start and End Time Fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="start-time" className="block text-sm font-medium text-gray-700 mb-1">
              Start Time
            </label>
            <Input
              id="start-time"
              type="time"
              value={eventDetails.startTime}
              onChange={(e) =>
                setEventDetails({ ...eventDetails, startTime: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="end-time" className="block text-sm font-medium text-gray-700 mb-1">
              End Time
            </label>
            <Input
              id="end-time"
              type="time"
              value={eventDetails.endTime}
              onChange={(e) =>
                setEventDetails({ ...eventDetails, endTime: e.target.value })
              }
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-2">
          <Button onClick={() => setShowModal(false)} variant="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Add Event</Button>
        </div>
      </div>
    </div>
  );
};

export default AddEventModal;
