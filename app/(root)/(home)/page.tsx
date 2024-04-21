
import Link from "next/link";
const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);
 
  return (    
    <section className="flex size-full flex-col gap-5 text-white">
       <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
        </div>
      {/* <MeetingTypeList  /> */}
      <div className="tracking-widest uppercase text-4xl md:text-6xl xl:text-8xl font-extrabold bg-white bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block  text-transparent bg-clip-text ">Hire </div>
      <div className="  capitalize text-2xl md:text-4xl xl:text-5xl font-extrabold bg-white bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block  text-transparent bg-clip-text ">a virtual interview platform for Unstop</div>
      <div className=" grid grid-cols-2 xl:grid-cols-4 gap-4">
        
        <Link href="/schedule">
          <div className="bg-[#171717] px-4 py-6 text-[#F5F5F7] rounded-md flex flex-col hover:text-[#F5F5F7] border-[1px] border-transparent hover:border-[#F5F5F7] hover:bg-black  items-center justify-center "> 
            <p className="text-2xl pb-2  font-bold">Schedule Meeting <span className="text-2xl font-extrabold">&rarr;</span></p>
            <p className="text-base text-center text-[#979797]">Automataticly schedule the meeting according to the preference of the candidate and the interviewer</p>
          </div>
        </Link>
        <Link href="/questions">
          <div className="bg-[#171717] px-4 py-6 text-[#F5F5F7] rounded-md flex flex-col hover:text-[#F5F5F7] border-[1px] border-transparent hover:border-[#F5F5F7] hover:bg-black  items-center justify-center "> 
            <p className="text-2xl pb-2 font-bold">Questions <span className="text-2xl font-extrabold">&rarr;</span></p>
            <p className="text-base text-center text-[#979797]">Pick experience of the Candidate and the tech stack : topics will be provided accordingly</p>
          </div>
        </Link>
        <Link href="/interview">
          <div className="bg-[#171717] px-4 py-6 text-[#F5F5F7] rounded-md flex flex-col hover:text-[#F5F5F7] border-[1px] border-transparent hover:border-[#F5F5F7] hover:bg-black  items-center justify-center "> 
            <p className="text-2xl pb-2 font-bold">Interview <span className="text-2xl font-extrabold">&rarr;</span></p>
            <p className="text-base text-center text-[#979797] ">Start the interview, A Collabarative platform will be provided to both the Candidate and the Interviewer</p>
          </div>
        </Link>
        <Link href="/report">
          <div className="bg-[#171717] px-4 py-6 text-[#F5F5F7] rounded-md flex flex-col hover:text-[#F5F5F7] border-[1px] border-transparent hover:border-[#F5F5F7] hover:bg-black  items-center justify-center "> 
            <p className="text-2xl pb-2 font-bold">Candidate Report <span className="text-2xl font-extrabold">&rarr;</span></p>
            <p className="text-base text-center text-[#979797]">Based on the performance of the Candidate a detailed report is made, throught Interviwer's feedback</p>
          </div>
        </Link>
        <Link href="/result" className="col-span-2">
          <div className="bg-[#171717] px-4 py-6 text-[#F5F5F7] rounded-md flex flex-col hover:text-[#F5F5F7] border-[1px] border-transparent hover:border-[#F5F5F7] hover:bg-black  items-center justify-center "> 
            <p className="text-2xl pb-2 font-bold">Result <span className="text-2xl font-extrabold">&rarr;</span></p>
            <div className="flex gap-2 text-[#979797] ">
              <p className="text-base ">&#x25BA; Selected</p>
              <p className="text-base ">&#x25BA; Rejected</p>
              <p className="text-base ">&#x25BA; Waiting List</p>
            </div>
          </div>
        </Link>
        <Link href="/" className="col-span-2">
          <div className="bg-[#171717] px-4 py-6 text-[#F5F5F7] rounded-md flex flex-col hover:text-[#F5F5F7] border-[1px] border-transparent hover:border-[#F5F5F7] hover:bg-black  items-center justify-center "> 
            <p className="text-2xl pb-2 font-bold">More Features <span className="text-2xl font-extrabold">&rarr;</span></p>
            <div className="flex gap-2 text-[#979797]">
              <p className="text-base text-center">Here will be future aspect</p>
            </div>
          </div>
        </Link>
        
        
      </div>
    </section>
  );
};

export default Home;
