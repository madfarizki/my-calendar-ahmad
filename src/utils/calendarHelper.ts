type CalendarType = {
  prev: number[];
  current: number[];
  next: number[];
};

export default function calendarHelper(currentMonth: number, currentYear: number): CalendarType {
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const lastDayOfPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();
  const lastDayOfCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const calendar: CalendarType = {
    prev: [],
    current: [],
    next: [],
  };

  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    calendar.prev.unshift(lastDayOfPreviousMonth - i);
  }

  for (let day = 1; day <= lastDayOfCurrentMonth; day++) {
    calendar.current.push(day);
  }

  const daysInCurrentMonth = calendar.current.length;
  const remainingDays = 35 - daysInCurrentMonth - calendar.prev.length;

  for (let day = 1; day <= remainingDays; day++) {
    calendar.next.push(day);
  }

  return calendar;
}
