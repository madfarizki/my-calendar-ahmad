import React, { ForwardRefExoticComponent, RefAttributes } from "react";
import { Date as DateStyle, Day as DayStyle, Today as TodayStyle } from "./calendar-items.styles";

type ComponentProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
  $gray?: boolean;
};

type CalendarItemsProps = {
  children?: React.ReactNode;
};

type CalendarItems = ForwardRefExoticComponent<
  CalendarItemsProps & RefAttributes<HTMLDivElement>
> & {
  Date: (props: ComponentProps) => JSX.Element;
  Day: (props: ComponentProps) => JSX.Element;
  Today: (props: ComponentProps) => JSX.Element;
  children: React.ReactNode;
};

const CalendarItems = React.forwardRef<HTMLDivElement, CalendarItemsProps>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
}) as CalendarItems;

const Date = (props: ComponentProps) => {
  const { children, ...rest } = props;

  return <DateStyle {...rest}>{children}</DateStyle>;
};

const Day = (props: ComponentProps) => {
  const { children, ...rest } = props;

  return <DayStyle {...rest}>{children}</DayStyle>;
};

const Today = (props: ComponentProps) => {
  const { children, ...rest } = props;

  return <TodayStyle {...rest}>{children}</TodayStyle>;
};

CalendarItems.Date = Date;
CalendarItems.Day = Day;
CalendarItems.Today = Today;

export default CalendarItems;
