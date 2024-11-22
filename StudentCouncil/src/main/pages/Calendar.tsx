import React, { useState } from 'react';
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

interface Event {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
}

const eventsThis = [
    {
      title: 'Election Day',
      description: 'Election Day for all students.',
      startDate: new Date(2024, 8, 24),
      endDate: new Date(2024, 8, 24),
    },
    {
      title: 'First Meeting',
      description: 'The first meeting to kick off the term.',
      startDate: new Date(2024, 8, 27),
      endDate: new Date(2024, 8, 27),
    },
    {
      title: 'Halloween',
      description: 'Halloween celebrations with costumes and treats!',
      startDate: new Date(2024, 9, 23),
      endDate: new Date(2024, 9, 23),
    },
    {
      title: 'Mid-Term Break',
      description: 'Take a break and recharge during the mid-term break.',
      startDate: new Date(2024, 9, 28),
      endDate: new Date(2024, 9, 31),
    },
    {
      title: 'Holiday',
      description: "All Saints' Day",
      startDate: new Date(2024, 10, 1),
      endDate: new Date(2024, 10, 1),
    },
    {
      title: 'Pizza Party for Costume Competition Winners',
      description: 'Celebrate with pizza for the winners of the Halloween costume competition.',
      startDate: new Date(2024, 10, 13),
      endDate: new Date(2024, 10, 13),
    },
  ];
  

const Calendar: React.FC = () => {
  const startDate = new Date(2024, 8, 1); // September 2024
  const months = Array.from({ length: 10 }, (_, i) => addMonths(startDate, i)); // 10 months

  const getEventsForDate = (date: Date) =>
    eventsThis.filter(
      event =>
        isSameDay(event.startDate, date) ||
        (event.startDate <= date && event.endDate >= date)
    );
  
  const getColSpan = (event: { startDate: Date; endDate: Date }, date: Date) => {
    const daysBetween = Math.ceil((event.endDate.getTime() - event.startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    const daysFromDate = Math.ceil((event.endDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  
    return Math.min(daysBetween, daysFromDate);
  };
  return (
    <div>
    <h2 className="text-4xl font-bold mt-8 mx-20">Calendar</h2>
    <div className="w-full h-5/6 bg-white flex p-4 px-8">
      

      {/* Calendar Grid */}
      <div className="flex-1 overflow-x-auto p-4">
        <div className="grid grid-cols-7">
          {/* Header row with days of the week */}
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
            <div key={idx} className="h-12 flex items-center justify-center font-medium text-gray-700">
              {day}
            </div>
          ))}

          {/* Days of all months */}
          {months.map((month, monthIndex) => {
            const days = eachDayOfInterval({ start: startOfMonth(month), end: endOfMonth(month) });
            return (
              <div key={monthIndex} id={`month-${monthIndex}`} className="contents">
                {days.map((day, idx) => {
                  const isFirstOfMonth = format(day, 'd') === '1';
                  const tileBgColor = day.getDay() === 0 || day.getDay() === 6 ? 'bg-stone-50' : 'bg-white';
                  return (
                    <div
                      key={`${month}-${idx}`}
                      className={`h-36 flex border-t border-r border-stone-300 flex-col items-end justify-start p-2 hover:bg-stone-50 cursor-pointer ${tileBgColor}`}
                      
                    >
                      <span className="text-md font-normal">
                        {isFirstOfMonth ? `${format(day, 'MMM')} ${format(day, 'd')}` : format(day, 'd')}
                      </span>
                      {getEventsForDate(day).map((event, idx) => {
  const colSpan = getColSpan(event, day);

  return (
    <Dialog key={idx}>
      <DialogTrigger>
        <span
          className="bg-blue-500 text-white text-xl rounded px-2 py-1 my-1 text-justify text-wrap justify-between"
          style={{ gridColumn: `span ${colSpan}` }}
        >
          {event.title}
        </span>
      </DialogTrigger>
      <DialogContent className='w-[400px] '>
        <DialogHeader>
          <DialogTitle className='text-3xl'>{event.title}</DialogTitle>
          <DialogDescription className='text-xl'>{event.description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
})}
                    </div>
                    
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>




    </div></div>
  );
};

export default Calendar;
