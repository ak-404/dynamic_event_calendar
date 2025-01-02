export const validateEvent = (event) => {
  const { name, startTime, endTime } = event;

  if (!name || !startTime || !endTime) return "All fields are required.";
  if (new Date(`1970-01-01T${endTime}`) <= new Date(`1970-01-01T${startTime}`)) {
    return "End time must be after start time.";
  }
  return null;
};
