"use client"
import Image from "next/image";
import { useState } from "react";
import { ImFolderDownload } from "react-icons/im";
const Result = () => {
  const [result, setResult] = useState(false);

  const handleClick = () => {
    setResult((result) => !result);
  };
  return (
    <section className="flex size-full flex-col justify-center items-start gap-10 text-white">
      <h1 className="text-3xl font-bold">Result</h1>
      
      <div className="bg-[#171717] w-fit p-2 rounded-md">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="text-start capitalize text-[#979797] p-2">
              <p className="text-base">role :</p>
              <p className="text-3xl font-extrabold bg-white top-[40%] md:left-[32%] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block  text-transparent bg-clip-text">Software  development  intern</p>
              
              <div className="flex flex-row items-start justify-between"> 
                <div className="text-start text-[#979797] pt-2">
                  <p className="text-2xl text-[#F5F5F7] pb-1 font-bold">Kinshuk Dewari</p>
                  <p className="text-base">Graphic Era Hill University, Dehradun</p>
                  <p className="text-base">B.Tech in Computer Science </p>
                  <p className="text-base">CGPA of 8.30/10</p>
                  <div className="text-[#f5f5f7] flex flex-row py-4 items-center justify-start gap-8">attached candidate report <ImFolderDownload className="text-green-500 hover:cursor-pointer"/></div>
                </div>
                <Image
                  src="/images/profile.jpeg"
                  alt="profile pictuer of the user"
                  width={160}
                  height={160}
                  className="rounded-full"
                  loading = 'lazy'
                  />            
              </div>
              <p className="text-base">interviewer review : </p>
              <p className="text-lg normal-case text-green-500 pb-2 ">Worthy, skilled, and a techinical genius. Answered almost all the questions and came up with new ways of solving the given questions. </p>
            </div>
            <div className="text-start capitalize text-[#979797] p-2">
              <p className="text-base">Interview Status :</p>
              <p className="text-3xl font-bold text-green-800 uppercase">Qualified</p>
              
              <div className="flex flex-row items-start justify-between"> 
                <div className="text-start text-[#979797] pt-2 normal-case">
                  <p className="text-2xl text-[#F5F5F7] pb-1 font-bold">Unstop</p>
                  <p className="text-base">We are delighted to tell you that you are selected in the final stage of the competetion Grand Final of Unstop Talent Park - Tech.</p>
                  <p className="text-base pt-2">Congratulation on your journey, </p>
                  <p className="text-base capitalize">team unstop</p>
                  </div>        
              </div>
              </div>
            
        </div>
            
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Coding Question*/}
          <div>
            <div className="pt-4">
              <h1 className="font-extrabold uppercase tracking-wider">Strenghts :</h1>
              <div className="p-4">
                <p className="text-base">1. Well rounded theoritical and practical knowledge. </p>             
                
                <div className="w-full text-[#979797] text-xs flex justify-between items-center">
                  <p>0</p>
                  <p>2.5</p>
                  <p>5</p>
                  <p>7.5</p>
                  <p>10</p>
                </div>
                <div className="relative w-full overflow-hidden h-2 rounded-md bg-amber-50">
                  <div className="absolute w-[96%] h-2 rounded-md   bg-green-900"></div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-base">2. Deep understanding of Computer fundamentals. </p>             
                
                <div className="w-full text-[#979797] text-xs flex justify-between items-center">
                  <p>0</p>
                  <p>2.5</p>
                  <p>5</p>
                  <p>7.5</p>
                  <p>10</p>
                </div>
                <div className="relative w-full overflow-hidden h-2 rounded-md bg-amber-50">
                  <div className="absolute w-[84%] h-2 rounded-md   bg-green-800"></div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-base">3. Excellent Communication skills. </p>             
                
                <div className="w-full text-[#979797] text-xs flex justify-between items-center">
                  <p>0</p>
                  <p>2.5</p>
                  <p>5</p>
                  <p>7.5</p>
                  <p>10</p>
                </div>
                <div className="relative w-full overflow-hidden h-2 rounded-md bg-amber-50">
                  <div className="absolute w-[80%] h-2 rounded-md   bg-green-700"></div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-base">4. Exceptionally good at Development. </p>             
                
                <div className="w-full text-[#979797] text-xs flex justify-between items-center">
                  <p>0</p>
                  <p>2.5</p>
                  <p>5</p>
                  <p>7.5</p>
                  <p>10</p>
                </div>
                <div className="relative w-full overflow-hidden h-2 rounded-md bg-amber-50">
                  <div className="absolute w-[99%] h-2 rounded-md   bg-green-950"></div>
                </div>
              </div>
              
            </div>
          </div>

          <div>
            <div className="pt-4">
              <h1 className="font-extrabold uppercase tracking-wider">Weakness :</h1>
              <div className="p-2">
                <p className="text-base">1. Body language. </p> 
              </div>              
              <div className="p-2">
                <p className="text-base">2. Sommetimes rate of speech is little bit fast </p>    
              </div>
              <div className="p-2">
                <p className="text-base">3. Advanced Data Structures. </p>     
              </div>
              
            </div>
          </div>
          
        </div>
        
        

      </div>
      
    </section>
  );
};

export default Result;
