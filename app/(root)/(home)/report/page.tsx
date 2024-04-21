import Image from "next/image";

const PreviousPage = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Candidate Report</h1>

      <div className="bg-[#171717] p-4 rounded-md">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-row  p-2 items-start justify-between"> 
                <Image
                  src="/images/profile.jpeg"
                  alt="profile pictuer of the user"
                  width={160}
                  height={160}
                  className="rounded-full"
                  loading = 'lazy'
                  />            
                <div className="text-start text-[#979797] p-2">
                  <p className="text-2xl text-[#F5F5F7] pb-2 font-bold">Kinshuk Dewari</p>
                  <p className="text-base">Graphic Era Hill University, Dehradun</p>
                  <p className="text-base">B.Tech in Computer Science </p>
                  <p className="text-base">CGPA of 8.30/10</p>
                </div>
            </div>
            <div className="text-start capitalize text-[#979797] p-2">
              <p className="text-base">role :</p>
              <p className="text-3xl font-extrabold bg-white top-[40%] md:left-[32%] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block  text-transparent bg-clip-text">Software  development  intern</p>
              
              <p className="text-base">interviewer review : </p>
              <p className="text-lg normal-case text-green-500 pb-2 font-bold">Worthy,skilled, and a techinical genius. Answered almost all the questions and came up with new ways of solving the given questions. </p>
            </div>
            
        </div>
            
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Coding Question*/}
          <div>
            <div className="pt-4">
              <h1 className="font-extrabold">Coding Question :</h1>
              <p className="text-xl">Two Sum </p>
              <div className="p-1 pb-4">
                <p className="text-base text-[#979797] pb-2">Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.</p>
                <p className="text-base text-[#979797]">You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.</p>
              </div>
              <div className="bg-black rounded-md p-2">
                <p className="text-base text-[#F5F5F7]">Example 1:</p>
                <p className="text-base text-[#979797]">Input: nums = [2,7,11,15], target = 9 <br /> Output: [0,1] <br /> Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</p>                
              </div>
              <span className="p-1"> </span>
              <div className="bg-black rounded-md p-2">
                <p className="text-base text-[#F5F5F7]">Example 2:</p>
                <p className="text-base text-[#979797]">Input: nums = [3,2,4], target = 6 <br /> Output: [1,2] </p>
              </div>
              
              <div className="w-full text-[#979797] text-sm pt-4 flex justify-between items-center">
                <p>0</p>
                <p>2.5</p>
                <p>5</p>
                <p>7.5</p>
                <p>10</p>
              </div>
              <div className="relative w-full overflow-hidden h-2 rounded-md bg-amber-50">
                <div className="absolute w-[96%] h-2 rounded-md   bg-green-950"></div>
              </div>
              {/* Check boxes */}
              <div className="w-full flex items-center justify-between">
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                  Brute Force
                  </label>
                </div> 
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                    Optimizations
                  </label>
                </div> 
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                    All Test Cases
                  </label>
                </div> 

              </div>
            </div>
          </div>
          {/* Theoritical Question */}
          <div>
            <div className="pt-4">
              <h1 className="font-extrabold">Introduction :</h1>
              <p className="text-base">1. Tell me something about yourself.</p>
              <div className="w-full text-[#979797] text-xs flex justify-between items-center">
                <p>0</p>
                <p>2.5</p>
                <p>5</p>
                <p>7.5</p>
                <p>10</p>
              </div>
              <div className="relative w-full overflow-hidden h-2 rounded-md bg-amber-50">
                <div className="absolute w-[98%] h-2 bg-green-900"></div>
              </div>
              {/* Check boxes
              <div className="w-full flex text-sm items-center justify-between">
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                  Definition
                  </label>
                </div> 
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                    Example
                  </label>
                </div> 
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                    Question
                  </label>
                </div> 
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                    Optimization
                  </label>
                </div> 

              </div> */}
            </div>
            <div className="pt-4">
              {/* <h1 className="font-extrabold">Introduction :</h1> */}
              <p className="text-base">2. What is your favourite project and why?</p>
              <div className="w-full text-[#979797] text-xs flex justify-between items-center">
                <p>0</p>
                <p>2.5</p>
                <p>5</p>
                <p>7.5</p>
                <p>10</p>
              </div>
              <div className="relative w-full overflow-hidden h-2 rounded-md bg-amber-50">
                <div className="absolute w-[88%] h-2 bg-green-600"></div>
              </div>
              {/* Check boxes
              <div className="w-full flex text-sm items-center justify-between">
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                  Definition
                  </label>
                </div> 
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                    Example
                  </label>
                </div> 
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                    Question
                  </label>
                </div> 
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                    Optimization
                  </label>
                </div> 

              </div> */}
            </div>
            <div className="pt-4">
              <h1 className="font-extrabold">Questions :</h1>
              <p className="text-xl">1. What is Hashing ?</p>
              <div className="w-full text-[#979797] text-xs flex justify-between items-center">
                <p>0</p>
                <p>2.5</p>
                <p>5</p>
                <p>7.5</p>
                <p>10</p>
              </div>
              <div className="relative w-full overflow-hidden h-2 rounded-md bg-amber-50">
                <div className="absolute w-[82%] h-2 bg-green-500"></div>
              </div>
              {/* Check boxes */}
              <div className="w-full flex text-sm items-center justify-between">
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                  Definition
                  </label>
                </div> 
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                    Example
                  </label>
                </div> 
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                    Question
                  </label>
                </div> 
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                    Optimization
                  </label>
                </div> 

              </div>
            </div>
            {/* Question 2 */}
            <div className="pt-4">
              {/* <h1 className="font-extrabold">Question 2 :</h1> */}
              <p className="text-xl">2. What are Binary Tree ?</p>
              <div className="w-full text-[#979797] text-xs flex justify-between items-center">
                <p>0</p>
                <p>2.5</p>
                <p>5</p>
                <p>7.5</p>
                <p>10</p>
              </div>
              <div className="relative w-full overflow-hidden h-2 rounded-md bg-amber-50">
                <div className="absolute w-[96%] h-2 bg-green-800"></div>
              </div>
              {/* Check boxes */}
              <div className="w-full flex items-center text-sm justify-between">
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                  Definition
                  </label>
                </div> 
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                    Example
                  </label>
                </div> 
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                    BST
                  </label>
                </div> 
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                    Search in BST
                  </label>
                </div> 

              </div>
            </div>
            {/* Question 3 */}
            <div className="pt-4">
              {/* <h1 className="font-extrabold">Question 3 :</h1> */}
              <p className="text-xl">3. What are Segment Tree ?</p>
              <div className="w-full text-xs text-[#979797] flex justify-between items-center">
                <p>0</p>
                <p>2.5</p>
                <p>5</p>
                <p>7.5</p>
                <p>10</p>
              </div>
              <div className="relative w-full overflow-hidden h-2 rounded-md bg-amber-50">
                <div className="absolute w-[30%] h-2  bg-red-600"></div>
              </div>
              {/* Check boxes */}
              <div className="w-full text-sm flex items-center justify-between">
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                  Definition
                  </label>
                </div> 
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                    Example
                  </label>
                </div> 
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                    Question
                  </label>
                </div> 
                <div className="inline-flex items-center">
                  <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                    <input type="checkbox"
                      className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-600 checked:bg-green-600 checked:before:bg-green-600 hover:before:opacity-10"
                      id="check" />
                    <span
                      className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                  <label className="mt-px font-light text-[#979797] cursor-pointer select-none" htmlFor="check">
                    Red Black Trees
                  </label>
                </div> 

              </div>
            </div>
          </div>
          
        </div>
        
        

      </div>

    </section>
  );
};

export default PreviousPage;
