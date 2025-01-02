const CalendarHeader = ({ currentDate, setCurrentDate }) => {
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <button onClick={handlePrevMonth}>&lt;</button>
      <h2>
        {currentDate.toLocaleString("default", { month: "long" })}{" "}
        {currentDate.getFullYear()}
      </h2>
      <button onClick={handleNextMonth}>&gt;</button>
    </div>
  );
};

export default CalendarHeader;
