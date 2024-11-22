
import { Button } from "@/components/ui/button"; // Shadcn Button component example


import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths } from "date-fns";
import { useState } from "react";

const Calendar = () => {
    const months = [
      new Date(2024, 8),  // September 2024
      new Date(2024, 9),  // October 2024
      new Date(2024, 10), // November 2024
      new Date(2024, 11), // December 2024
      new Date(2025, 0),  // January 2025
      new Date(2025, 1),  // February 2025
      new Date(2025, 2),  // March 2025
      new Date(2025, 3),  // April 2025
      new Date(2025, 4),  // May 2025
      new Date(2025, 5),  // June 2025
    ];
  
    const renderDays = () => {
      const days = ["M", "T", "W", "T", "F", "S", "S"]; // Full week
      return (
        <div className="grid grid-cols-7 gap-2 text-center font-bold">
          {days.map((day, index) => (
            <div key={index}>{day}</div>
          ))}
        </div>
      );
    };
  
    const renderWeeks = (currentDate: Date) => {
      const monthStart = startOfMonth(currentDate);
      const monthEnd = endOfMonth(currentDate);
      const startDate = startOfWeek(monthStart);
      const endDate = endOfWeek(monthEnd);
  
      const weeks = [];
      let day = startDate;
      let weekIndex = 0;
  
      while (day <= endDate && weekIndex < 4) { // Limit to 4 weeks
        const daysInWeek = [];
        for (let i = 0; i < 7; i++) {
          if (i === 0 || i === 6) { // Render Sunday and Monday with dates
            daysInWeek.push(
              <div className="text-center" key={day.toString()}>
                {format(day, "d")}
              </div>
            );
          } else { // Render lines for other days
            daysInWeek.push(
              <div className="text-center mt-3 border-t border-gray-300 " key={day.toString()} />
            );
          }
          day = addDays(day, 1);
        }
  
        weeks.push(
          <div
            className={`grid grid-cols-7 gap-2 p-2 ${weekIndex % 2 === 0 ? "bg-stone-50" : "bg-white"}`}
            key={day.toString()}
          >
            {daysInWeek}
          </div>
        );
        weekIndex++;
      }
  
      return <div>{weeks}</div>;
    };
  
    return (
      <div className="p-1 max-w-7xl mx-1 grid grid-cols-1 md:grid-cols-5 ">
        {months.map((month, index) => (
          <div key={index} className="px-3">
            <h2 className="text-xl font-bold text-center">{format(month, "MMMM yyyy")}</h2>
            {renderDays()}
            {renderWeeks(month)}
          </div>
        ))}
      </div>
    );
  };
  



const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 align-middle">
        <div className="text-xl font-semibold">OIS Student Council</div>
        <ul className="flex space-x-6 flex-row items-center align-middle">
          <li><a href="#home" className="hover:text-blue-600 ">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#events" className="hover:text-blue-600">Events</a></li>
          <li><Button className="hover:text-blue-600">Contact</Button></li>
        </ul>
      </div>
    </nav>
  );
};

  

const AchievementsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold">Our Achievements</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          <div className="bg-blue-50 p-6 h-72 rounded-full w-72  shadow-md items-center align-middle pt-20">
            <h1 className="text-6xl">1,450€</h1>
            <h3 className="text-xl font-bold text-blue-600">Funds Raised</h3>
          </div>
          <div className="bg-red-50 p-6 h-722 rounded-full  w-72  shadow-md pt-20 items-center align-middle">
          <h1 className="text-6xl">2,120€</h1>
            <h3 className="text-xl font-bold text-red-600">Spent on Student Projects</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

const EventCalendar = () => {
  return (
    <section id="events" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold">Upcoming Events</h2>
        <div className="mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md inline-block">
            <Calendar/>
          </div>
        </div>
      </div>
    </section>
  );
};


const Test = () => {
  return (
    <div>
      <Navbar />
      <AchievementsSection />
      <EventCalendar />
    </div>
  );
};

export default Test;

