import React, { useEffect, useState } from "react";

import { DATE } from "@/consts/index";
import { getCalendar } from "@/utils/index";

import { Container, Grid, Title } from "./calendar.styles";
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

  useEffect(() => {
    fillCalendar();
  }, [originalMonth, originalYear]);

  const fillCalendar = () => {
    const newCalendar = getCalendar(originalMonth, originalYear);
    setCalendar(newCalendar);
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

          return isToday ? (
            <CalendarItems.Date key={idx}>
              <CalendarItems.Today>{displayDay}</CalendarItems.Today>
            </CalendarItems.Date>
          ) : (
            <CalendarItems.Date key={idx}>{displayDay}</CalendarItems.Date>
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
    </Container>
  );
};

export default Calendar;
