import React, { useState } from 'react';
import './Events.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const events = [
  {
    name: 'Vedanta Meditation',
    date: 'January 15, 2025',
    time: '10:00 AM - 12:00 PM',
    location: 'Spiritual Center, Downtown',
    description: 'Join us for a peaceful morning of meditation and introspection.',
  },
  {
    name: 'Spiritual Talk by Guruji',
    date: 'February 20, 2024',
    time: '5:00 PM - 7:00 PM',
    location: 'Harmony Hall, Uptown',
    description: 'Guruji will share profound insights on living a spiritual life.',
  },
  {
    name: 'Yoga for Inner Peace',
    date: 'March 10, 2024',
    time: '8:00 AM - 10:00 AM',
    location: 'Zen Garden, Riverside',
    description: 'A rejuvenating yoga session focused on relaxation and inner peace.',
  },
];

const Events = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div className="events-container">
      <div className="header">
        <h2 className="events-heading">Upcoming Events</h2>
        
        <button className="calendar-toggle-btn" onClick={toggleCalendar}>
          {showCalendar ? ' Calendar' : 'Calendar'}
        </button>
        
      </div>

      {/* Event list in a vertical stack */}
      <div className="event-list">
        {events.map((event, index) => (
          <div className="event-item" key={index}>
            <div className="event-header">
              <h3 className="event-name">{event.name}</h3>
              <p className="event-date">{event.date}</p>
            </div>
            <div className="event-details">
              <p className="event-time"><strong>Time:</strong> {event.time}</p>
              <p className="event-location"><strong>Location:</strong> {event.location}</p>
              <p className="event-description"><strong>Description:</strong> {event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Calendar */}
      {showCalendar && (
        <div className="calendar-modal" onClick={toggleCalendar}>
          <div className="calendar-popup" onClick={(e) => e.stopPropagation()}>
            <Calendar />
            <button className="close-modal-btn" onClick={toggleCalendar}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
