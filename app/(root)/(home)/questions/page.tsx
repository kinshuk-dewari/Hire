const Questions = () => {
    return (
      <section className="flex size-full flex-col gap-10 text-white">
        <h1 className="text-3xl font-bold">Questions</h1>
  
        <div className="bg-[#171717] p-4 rounded-md">
          <div className="relative flex flex-row items-start justify-between"> 
              <div className="text-start text-[#979797]">
                <p className="text-2xl text-[#F5F5F7] pb-4 font-bold capitalize">.</p>
              </div>
              <div className="absolute h-10 w-72  min-w-[200px] ">
                <select
                  className="peer p-2 h-full w-full rounded-[7px] border border-gray-300 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-300">
                  <option className="text-black" value="brazil">Data Structure and Algoritms </option>
                  <option className="text-black" value="bucharest">Front-End Developer </option>
                  <option className="text-black" value="bucharest">Back-End Developer </option>
                  <option className="text-black" value="bucharest">Software Developer I </option>
                </select>
                <label
                  className="before:content[' '] after:content[' '] text-white pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Select A Language
                </label>
              </div>
              <div className="absolute h-10 left-[26rem] w-72  max-w-[180px] ">
                <select
                  className="peer p-2 h-full w-full rounded-[7px] border border-gray-300 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-300 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-300">
                  <option className="text-black" value="brazil"> 0</option>
                  <option className="text-black" value="bucharest">1</option>
                  <option className="text-black" value="bucharest">2 </option>
                  <option className="text-black" value="bucharest">3 </option>
                  <option className="text-black" value="bucharest">3+ </option>
                </select>
                <label
                  className="before:content[' '] after:content[' '] text-white pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Select Years of Experience
                </label>
              </div>
            
              
          </div>
          <div className="text-start text-[#979797] pt-6">
          <p className="text-3xl font-extrabold bg-white top-[40%] md:left-[32%] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block  text-transparent bg-clip-text">Data Structures and Algorithm</p>
           
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
                  {/* Question 1 */}
              <div className="pt-2 text-base">
                <h1 className="font-extrabold text-green-500"> Theoritical Question :</h1>
                <p className="text-base">1. What is Hashing ?</p>
                <div className="p-1 text-sm">
                  <p className="text-[#979797]"> 
                    a. Ask about what is hashing and its examples 
                  </p>
                  <p className="text-[#979797]"> 
                    b. Give a question that uses hashing 
                  </p>
                  <p className="text-[#979797]"> 
                    c. Hash map in C++ ,etc.
                  </p>
                </div>
                
              </div>
              {/* Question 2 */}
              <div className="pt-2 text-base">
                {/* <h1 className="font-extrabold">Question 2 :</h1> */}
                <p className="text-base">2. What are Binary Trees ?</p>
                <div className="text-sm">
                  <p className="text-[#979797]"> 
                    a. Ask about what are Binary Trees 
                  </p>
                  <p className="text-[#979797]"> 
                    b. Difference between perfect and skew binary trees ?
                  </p>
                  <p className="text-[#979797]"> 
                    c. Give example of tree traversals and types ?
                  </p>
                  <p className="text-[#979797]"> 
                    d. What is BST and do you search in BST ?
                  </p>
                </div>
                
              </div>
              {/* Question 3 */}
              <div className="pt-2 text-base">
                {/* <h1 className="font-extrabold">Question 3 :</h1> */}
                <p className="text-base">3. What are Segement trees ?</p>
                <div className="text-sm">
                  <p className="text-[#979797]"> 
                    a. Definition and examples. 
                  </p>
                  <p className="text-[#979797]"> 
                    b. Give a question on it .
                  </p>
                  <p className="text-[#979797]"> 
                    c. What are red black trees ?
                  </p>
                </div>
                
              </div>
              
            </div>

            <div>
              <div className="pt-2 text-base">
                <h1 className="font-extrabold text-green-500">Coding Question :</h1>
                <p className="text-base">Two Sum </p>
                <div className="text-sm text-[#979797]">
                  <p className="">Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.</p>
                  <p className="">You may assume that each input would have exactly one solution, and you may not use the same element twice.</p>
                  <p className="">You can return the answer in any order.</p>
                  <div className="bg-black rounded-md p-2">
                    <p className="">Example 1:</p>
                    <p className="">Input: nums = [2,7,11,15], target = 9 <br /> Output: [0,1] <br /> Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</p>
                  </div>
                  <span><br /></span>
                  <div className="bg-black rounded-md p-2">
                    <p className="">Example 2:</p>
                    <p className="">Input: nums = [3,2,4], target = 6 <br /> Output: [1,2] </p>  
                  </div>
                              
                </div>
                
              </div>
            </div>
            <div className="text-sm">
            <h1 className="font-extrabold text-base pb-2  text-green-500">Behavioral Question :</h1>
              <p>1. <span className="text-[#979797]"> When you’re working with a large number of customers, it’s tricky to deliver excellent service to them all. How do you go about prioritizing your customers’ needs?</span></p>
              <p>2. <span className="text-[#979797]"> Tell me about a time when you had to work on a project with unclear responsibilities.</span></p>
              <p>3. <span className="text-[#979797]"> Tell me about a time you were wrong.</span></p>
            </div>
          </div>
         
        </div>
      </section>
    );
  };
  
  export default Questions;
  