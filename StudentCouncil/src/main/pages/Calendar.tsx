
import { format, addMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useEffect, useRef, useState } from 'react';
const stucoEvents = [
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2024, 9, 4),
    endDate: new Date(2024, 9, 4),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2024, 9, 11),
    endDate: new Date(2024, 9, 11),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2024, 9, 18),
    endDate: new Date(2024, 9, 18),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2024, 9, 25),
    endDate: new Date(2024, 9, 25),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2024, 10, 8),
    endDate: new Date(2024, 10, 8),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2024, 10, 15),
    endDate: new Date(2024, 10, 15),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2024, 10, 22),
    endDate: new Date(2024, 10, 22),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2024, 10, 29),
    endDate: new Date(2024, 10, 29),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2024, 11, 6),
    endDate: new Date(2024, 11, 6),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2024, 11, 13),
    endDate: new Date(2024, 11, 13),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2024, 11, 20),
    endDate: new Date(2024, 11, 20),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 0, 17),
    endDate: new Date(2025, 0, 17),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 0, 24),
    endDate: new Date(2025, 0, 24),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 0, 31),
    endDate: new Date(2025, 0, 31),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 1, 7),
    endDate: new Date(2025, 1, 7),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 1, 14),
    endDate: new Date(2025, 1, 14),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 1, 21),
    endDate: new Date(2025, 1, 21),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 1, 28),
    endDate: new Date(2025, 1, 28),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 2, 7),
    endDate: new Date(2025, 2, 7),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 2, 21),
    endDate: new Date(2025, 2, 21),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 2, 28),
    endDate: new Date(2025, 2, 28),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 3, 4),
    endDate: new Date(2025, 3, 4),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 2, 14),
    endDate: new Date(2025, 2, 14),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 4, 2),
    endDate: new Date(2025, 4, 2),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 4, 9),
    endDate: new Date(2025, 4, 9),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 4, 16),
    endDate: new Date(2025, 4, 16),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 4, 23),
    endDate: new Date(2025, 4, 23),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 4, 30),
    endDate: new Date(2025, 4, 30),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 5, 6),
    endDate: new Date(2025, 5, 6),
    color:"bg-green-500",
  },
  {
    title: 'Weekly Meeting',
    description: 'Student Council holds weekly meetings where we organize events and discuss multiple topics',
    startDate: new Date(2025, 5, 20),
    endDate: new Date(2025, 5, 20),
    color:"bg-green-500",
  },
]
console.log(stucoEvents)

const eventsThis = [
    {
      title: 'Spirit Week Day 1: Pyjama Day',
      description: 'For the first day of Spirit Week, you will be allowed to wear your Pyjamas!',
      startDate: new Date(2024, 11, 16),
      endDate: new Date(2024, 11, 16),
      color:"bg-red-500",
    },
    {
      title: 'Spirit Week Day 2: PTC, no school for MYP/DP',
      description: "The 17th of December will be Parent Teacher Conferences and MYP/DP Students won't have school",
      startDate: new Date(2024, 11, 17),
      endDate: new Date(2024, 11, 17),
      color:"bg-blue-500",
    },
    {
      title: 'Spirit Week Day 3: Rhyme without Reason',
      description: "For the third day of Spirit Week, students may rhyme without reason, wearing anything that rhymes. Get Creative, plan out poetic costumes with your friends. For example: Joker and Poker, Bumblebee and Christmas Tree",
      startDate: new Date(2024, 11, 18),
      endDate: new Date(2024, 11, 18),
      color:"bg-red-500",
    },
    {
      title: 'Spirit Week Day 4: Teachers and Students SWAP',
      description: "For the fourth day of Spirit Week, students may SWAP outfits with their teachers. That may be something like Mr Stedman's lab coat, or Mr Zamith's undeniable style",
      startDate: new Date(2024, 11, 19),
      endDate: new Date(2024, 11, 19),
      color:"bg-red-500",
    },
    {
      title: 'Spirit Week Day 5: Festive Sweater Day',
      description: "For the fifth day of Spirit Week, students may wear what reminds them of their festivities. Christmas sweaters allowed!",
      startDate: new Date(2024, 11, 20),
      endDate: new Date(2024, 11, 20),
      color:"bg-red-500",
    },
    {
      title: 'First Head Student-Mr Tomalin Meeting',
      description: "The Head Students have their first meeting with our Principal",
      startDate: new Date(2024, 9, 3),
      endDate: new Date(2024, 9, 3),
      color:"bg-purple-500",
    },
    {
      title: 'Head Students meet with Mr Tomalin',
      description: "The Head Students have their first meeting with our Principal",
      startDate: new Date(2024, 11, 2),
      endDate: new Date(2024, 11, 2),
      color:"bg-purple-500",
    },
    {
      title: '🌱 Green Wall Proposal for trial is approved',
      description: "After receiving approval from Mr. Tomalin to start the Green Wall Project with a 5-meter segment of vertical garden, the Student Council can begin constructing the wall near the containers, making it sustainable and worthy of OIS.",
      startDate: new Date(2024, 11, 3),
      endDate: new Date(2024, 11, 3),
      color:"bg-green-500",
    },
    {
      title: 'Election Day',
      description: 'Election Day for all students.',
      startDate: new Date(2024, 8, 24),
      endDate: new Date(2024, 8, 24),
      color:"bg-purple-500",
    },
    {
      title: 'Our First Meeting',
      description: 'The first meeting to kick off the term.',
      startDate: new Date(2024, 8, 27),
      endDate: new Date(2024, 8, 27),
      color:"bg-green-500",
    },
    {
      title: 'Golden Ticket Hunt',
      description: 'Throughout the final week before Halloween, the hunt for Golden Tickets commences, with every ticket being worth a candy prize',
      startDate: new Date(2024, 9, 21),
      endDate: new Date(2024, 9, 25),
      color:"bg-yellow-400",
    },
    {
      title: '🎃👻Halloween',
      description: 'Halloween celebrations with costumes and treats!',
      startDate: new Date(2024, 9, 23),
      endDate: new Date(2024, 9, 23),
      color:"bg-red-500",
    },
    {
      title: 'Valentines Day',
      description: "Valentines Day celebrations when we'll bring back roses!",
      startDate: new Date(2025, 1, 14),
      endDate: new Date(2025, 1, 14),
      color:"bg-red-500",
    },
    {
      title: 'Mid-Term Break',
      description: 'Take a break and recharge during the mid-term break.',
      startDate: new Date(2024, 9, 28),
      endDate: new Date(2024, 9, 31),
      color:"bg-blue-500",
    },
    {
      title: 'Holiday',
      description: "All Saints' Day",
      startDate: new Date(2024, 10, 1),
      endDate: new Date(2024, 10, 1),
      color:"bg-blue-500",
    },
    {
      title: '🍕 Costume Competition Pizza Party',
      description: 'Celebrate with pizza for the winners of the Halloween costume competition.',
      startDate: new Date(2024, 10, 13),
      endDate: new Date(2024, 10, 13),
      color:"bg-yellow-400",
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

  useEffect(() => {
    // Set the URL hash when the component loads
    const currentMonthShort = format(new Date(), 'MMM');
    if (!window.location.hash || window.location.hash !== `#${currentMonthShort}`) {
      window.location.hash = currentMonthShort;
    }
  }, []);
  


  const [activeMonth, setActiveMonth] = useState<string | null>(null);
  const monthRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Initialize month refs
  useEffect(() => {
    months.forEach((month, idx) => {
      console.log(month)
      monthRefs.current[`month-${idx}`] = document.getElementById(`month-${idx}`);
      
    });
    
  }, [months]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        window.scrollTo(0, 0);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.scrollTo(0, 0);
            setActiveMonth(entry.target.id); // Update active month ID
          }
        });
      },
      {
        root: null, // Uses the viewport as the root
        threshold: 0.5, // 50% visibility to consider an element "in view"
      }
    );

    // Observe all month divs
    Object.values(monthRefs.current).forEach((element) => {
      if (element) observer.observe(element);

      window.scrollTo(0, 0);
    });

    return () => {
      observer.disconnect();
    };
  }, [months]);



  return (
    <div>
    <h2 className="text-6xl font-normal mt-8  w-full text-center my-4 mb-8">Calendar</h2>
    <div className="w-full h-5/6 bg-white flex flex-col sm:flex-row p-4 pt-0 px-0 sm:px-3 md:px-8 border-t ">
      
      {/* Month Column */}
      <div className='invisible hidden  md:visible sticky md:flex flex-col text-2xl font-normal border-r'>
        <a href="#Sep"                className='my-2 ml-2 mr-6  font-bold mt-12 hover:text-stone-600'>2024</a>
        <a href="#Sep" id="sep-point" className={`my-2 ml-4  mr-6 ${(activeMonth==="month-0") ? "hover:text-black text-stone-500":'hover:text-stone-600 text-black'}`}>September</a>
        <a href="#Oct" id="oct-point" className={`my-2 ml-4  mr-6 ${(activeMonth==="month-1") ? "hover:text-black text-stone-500":'hover:text-stone-600 text-black'}`}>October</a>
        <a href="#Nov" id="nov-point" className={`my-2 ml-4  mr-6 ${(activeMonth==="month-2") ? "hover:text-black text-stone-500":'hover:text-stone-600 text-black'}`}>November</a>
        <a href="#Dec" id="dec-point" className={`my-2 ml-4  mr-6 ${(activeMonth==="month-3") ? "hover:text-black text-stone-500":'hover:text-stone-600 text-black'}`}>December</a>
        <a href="#Jan"                className='my-2 ml-2  mr-6 hover:text-stone-600 text-2xl font-bold mt-8'>2025</a>
        <a href="#Jan" id="jan-point" className={`my-2 ml-4  mr-6 ${(activeMonth==="month-4") ? "hover:text-black text-stone-500":'hover:text-stone-600 text-black'}`}>January</a>
        <a href="#Feb" id="feb-point" className={`my-2 ml-4  mr-6 ${(activeMonth==="month-5") ? "hover:text-black text-stone-500":'hover:text-stone-600 text-black'}`}>February</a>
        <a href="#Mar" id="mar-point" className={`my-2 ml-4  mr-6 ${(activeMonth==="month-6") ? "hover:text-black text-stone-500":'hover:text-stone-600 text-black'}`}>March</a>
        <a href="#Apr" id="apr-point" className={`my-2 ml-4  mr-6 ${(activeMonth==="month-7") ? "hover:text-black text-stone-500":'hover:text-stone-600 text-black'}`}>April</a>
        <a href="#May" id="may-point" className={`my-2 ml-4  mr-6 ${(activeMonth==="month-8") ? "hover:text-black text-stone-500":'hover:text-stone-600 text-black'}`}>May</a>
        <a href="#Jun" id="jun-point" className={`my-2 ml-4  mr-6 ${(activeMonth==="month-9") ? "hover:text-black text-stone-500":'hover:text-stone-600 text-black'}`}>June</a>

      </div>

      {/* Calendar Grid */}
      <div className="overflow-y-scroll h-75svh  flex-1 p-4 px-0 md:px-2 lg:px-4 pt-0 pl-0">
        <div className="grid grid-cols-7">
          {/* Header row with days of the week */}
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
            <div key={idx} className="h-12 flex items-center justify-center font-medium text-gray-700 text-xl">
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
                  const isLastToFirstOfMonth = format(day, 'd') === '25';
                  const tileBgColor = day.getDay() === 0 || day.getDay() === 6 ? 'bg-stone-50' : 'bg-white';
                  return (
                    <div
                      key={`${month}-${idx}`}
                      className={`min-h-36 flex border-t border-r border-stone-300 flex-col items-end justify-start p-2 pr-1 md:pr-2 hover:bg-stone-50 cursor-pointer ${tileBgColor}`}
                      
                    >
                      <span className="text-md font-normal" id={isLastToFirstOfMonth ? `${format(addMonths(day,1), 'MMM')}` : ((isFirstOfMonth && monthIndex===0) ?"Sep":"")}>
                        {isFirstOfMonth ? `${format(day, 'MMM')} ${format(day, 'd')}` : format(day, 'd')}
                      </span>
                      {getEventsForDate(day).map((event, idx) => {
  const colSpan = getColSpan(event, day);

  return (
    <Dialog key={idx}>
      <DialogTrigger>
        <div className={`${event.color} text-white text-xs sm:text-xs md:text-sm lg:text-xl rounded px-1 md:px-2 py-1 my-1  mr-1 text-wrap justify-start`}>
        <span
          className=""
          style={{ gridColumn: `span ${colSpan}` }}
        >
          {event.title}
        </span>
        </div>
      
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
