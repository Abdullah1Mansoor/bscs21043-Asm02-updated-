// Calendar.js
import './Calender.css';

const Calendar = () => {
  return (
    <div className="card">
      <h3>Calendar</h3>
      <div className="calendar-container">
        <div className="calendar-header">
          <h4>October 2024</h4>
        </div>
        <div className="calendar-grid">
          <div className="calendar-day">Sun</div>
          <div className="calendar-day">Mon</div>
          <div className="calendar-day">Tue</div>
          <div className="calendar-day">Wed</div>
          <div className="calendar-day">Thu</div>
          <div className="calendar-day">Fri</div>
          <div className="calendar-day">Sat</div>
          {/* Add days of the month */}
          {Array.from({ length: 31 }, (_, index) => (
            <div key={index} className="calendar-day">
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
