"use client"
import React, { useState } from 'react';

import { Calendar } from "@/components/ui/calendar"
const UpcomingPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <section className="flex flex-col gap-10 items-center justify-center text-white">
      <h1 className="text-3xl font-bold">Schedule Meeting</h1>
      

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      {date && (
        <div className="text-xl mt-4">Selected Date: {date.toDateString()}</div>
      )}
      <div className='p-4 bg-[#171717] text-[#979797] rounded-md w-[40%] text-center text-xl'>
        <p> Both the   
          <span className='text-[#F5F5F7] font-bold'> Interviewer</span> and the 
          <span className='text-[#F5F5F7] font-bold'> Candidate</span> will choose the dates in which 
          <span className='text-[#F5F5F7] font-bold'> they are free</span>  and on the 
          <span className='text-[#F5F5F7] font-bold'> Algorithm will detect</span> on which dates
           <span className='text-[#F5F5F7] font-bold'> both are free</span> and will 
           <span className='text-[#F5F5F7] font-bold'> schedule</span> the interview accordingly</p>
      </div>
    </section>
  );
};


export default UpcomingPage;
