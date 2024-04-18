import React, { useEffect, useState } from "react";

import { DATE } from "@/consts/index";
import { getCalendar } from "@/utils/index";
import { getColor } from "@/utils/colors";
import { EventForm } from "@/components/index";
import { Event as TEvent } from "@/components/EventForm";

import { Container, Grid, Title, EventName } from "./calendar.styles";
import CalendarItems from "./components/CalendarItems";

const { DAY_LIST, MONTH_LIST, MONTH_LIST_SHORT } = DATE;

type CalendarType = {
  prev: number[];
  current: number[];
  next: number[];
};

const Calendar = () => {
  const today = new Date();
  const originalYear = today.getFullYear();
  const originalMonth = today.getMonth();
  const originalDate = today.getDate();

  const month = MONTH_LIST[originalMonth];

  const [calendar, setCalendar] = useState<CalendarType>({ prev: [], current: [], next: [] });
  const [events, setEvents] = useState<TEvent[]>(() => {
    const savedEvents = localStorage.getItem("calendarEvents");
    return savedEvents ? JSON.parse(savedEvents) : [];
  });

  const [showForm, setShowForm] = useState(false);
  const [currentDate, setCurrentDate] = useState<string | null>();
  const [editingEvent, setEditingEvent] = useState<TEvent | null>();

  useEffect(() => {
    fillCalendar();
  }, [originalMonth, originalYear]);

  const fillCalendar = () => {
    const newCalendar = getCalendar(originalMonth, originalYear);
    setCalendar(newCalendar);
  };

  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }, [events]);

  const addEvent = (newEvent: TEvent) => {
    const eventDay = events.filter((event) => event.date === newEvent.date);

    if (eventDay.length >= 3) {
      alert("You can only add up to 3 events per day.");
      setShowForm(false);
      return;
    }

    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setShowForm(false);
  };

  const editEvent = (updatedEvent: TEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) => (event.id === updatedEvent.id ? updatedEvent : event))
    );
    setShowForm(false);
    setEditingEvent(null);
  };

  const deleteEvent = (eventId: string) => {
    setEvents((prevEvents) => prevEvents?.filter((event) => event?.id !== eventId));
  };

  const handleDayClick = (day: number, dayType: "prev" | "current" | "next") => {
    const selectedDate = new Date(
      originalYear,
      originalMonth + (dayType === "prev" ? -1 : dayType === "next" ? 1 : 0),
      day
    );

    const selectedDateStr = selectedDate.toLocaleDateString("en-CA");
    const todayStr = today.toLocaleDateString("en-CA");

    if (selectedDateStr < todayStr) {
      alert("You cannot add events to days before today.");
      return;
    }

    setCurrentDate(selectedDateStr);
    setShowForm(true);
  };

  const handleEventClick = (event: TEvent) => {
    setEditingEvent(event);
    setCurrentDate(event?.date);
    setShowForm(true);
  };

  return (
    <Container>
      <Title>
        {month} {originalYear}
      </Title>
      <Grid>
        {DAY_LIST.map((day, idx) => (
          <CalendarItems.Day key={idx}>{day}</CalendarItems.Day>
        ))}
      </Grid>

      <Grid>
        {calendar?.prev?.map((day, idx) => (
          <CalendarItems.Date $gray key={idx}>
            {day}
          </CalendarItems.Date>
        ))}

        {calendar?.current?.map((day, idx) => {
          const isToday = originalDate === day;
          const displayDay = day === 1 ? `${day} ${MONTH_LIST_SHORT[originalMonth]}` : day;

          const dateStr = `${originalYear}-${(originalMonth + 1).toString().padStart(2, "0")}-${day
            .toString()
            .padStart(2, "0")}`;
          const dayEvents = events?.filter((event) => event?.date === dateStr);

          const backgroundColors = [];
          dayEvents.forEach((eventIndex) => {
            const eventColor = getColor(eventIndex);
            backgroundColors.push(eventColor);
          });

          return isToday ? (
            <CalendarItems.Date key={idx} onClick={() => handleDayClick(day, "current")}>
              <CalendarItems.Today>{displayDay}</CalendarItems.Today>
              {dayEvents.map((event, eventIndex) => (
                <EventName
                  key={event?.id}
                  background={getColor(eventIndex)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEventClick(event);
                  }}>
                  {event?.name}
                </EventName>
              ))}
            </CalendarItems.Date>
          ) : (
            <CalendarItems.Date key={idx} onClick={() => handleDayClick(day, "current")}>
              {displayDay}
              {dayEvents.map((event, eventIndex) => (
                <EventName
                  key={event?.id}
                  background={getColor(eventIndex)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEventClick(event);
                  }}>
                  {event?.name}
                </EventName>
              ))}
            </CalendarItems.Date>
          );
        })}

        {calendar?.next?.map((day, idx) => {
          const nextMonthIndex = (originalMonth + 1) % 12;
          const displayDay = day === 1 ? `${day} ${MONTH_LIST_SHORT[nextMonthIndex]}` : day;

          return (
            <CalendarItems.Date $gray key={idx}>
              {displayDay}
            </CalendarItems.Date>
          );
        })}
      </Grid>
      {showForm && currentDate && (
        <EventForm
          date={currentDate}
          event={editingEvent}
          onSave={editingEvent ? editEvent : addEvent}
          onDelete={deleteEvent}
          onCancel={() => {
            setShowForm(false);
            setEditingEvent(null);
          }}
          isOpen={showForm}
        />
      )}
    </Container>
  );
};

export default Calendar;
