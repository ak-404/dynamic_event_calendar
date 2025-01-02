import { cn } from "@/lib/utils";

const CalendarGrid = ({ currentDate, selectedDate, setSelectedDate }) => {
  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const days = getDaysInMonth(
    currentDate.getMonth(),
    currentDate.getFullYear()
  );

  const firstDayOfWeek = days[0].getDay(); // Day of the week for the 1st date
  const paddedDays = Array.from({ length: firstDayOfWeek }, () => null).concat(
    days
  );

  const isWeekend = (day) => day?.getDay() === 0 || day?.getDay() === 6;
  const isSelected = (day) =>
    selectedDate && day?.toDateString() === selectedDate?.toDateString();
  const isToday = (day) =>
    day?.toDateString() === new Date().toDateString();

  return (
    <div>
      {/* Weekday Names */}
      <div className="grid grid-cols-7 gap-2 mb-2 text-center text-gray-600 font-medium">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2">
        {paddedDays.map((day, index) => (
          <div
            key={index}
            className={cn(
              "p-2 rounded-lg text-center cursor-pointer",
              day
                ? isWeekend(day)
                  ? "bg-red-50 text-red-700"
                  : "bg-blue-50 text-blue-700"
                : "",
              isSelected(day) && "border-2 border-blue-500 bg-blue-100",
              isToday(day) && "border-2 border-green-500 bg-green-100",
              !day && "invisible" // Hide empty padding cells
            )}
            onClick={() => day && setSelectedDate(day)}
          >
            {day?.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
