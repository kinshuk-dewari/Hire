import { AiFillAudio } from "react-icons/ai";
import { IoVideocam } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";
const Interview = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Interview</h1>

      <div className="w-full h-full flex flex-col md:flex-row gap-4 ">
        {/* Live Meeting  */}
        <div className=" relative rounded-lg flex flex-col justify-center items-center w-full md:w-[60%] bg-[#333232] h-[60vh]">
            <div className=" absolute uppercase text-6xl font-extrabold bg-white top-[40%] md:left-[32%] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block  text-transparent bg-clip-text "> Meeting</div>
          <div className="flex justify-between absolute  bottom-2 w-[100%] p-4"> 
            <div className="p-2 hover:bg-white flex md:gap-2  text-xs md:text-2xl justify-center items-center border-white border-[1px] rounded-md cursor-pointer font-bold hover:text-black">Join meeting <FaLaptopCode /> </div>
            <div className="p-2 hover:bg-white flex md:gap-2  text-xs md:text-2xl justify-center items-center border-white border-[1px] rounded-md cursor-pointer font-bold hover:text-black">Check Audio <AiFillAudio /></div>
            <div className="p-2 hover:bg-white flex md:gap-2  text-xs md:text-2xl justify-center items-center border-white border-[1px] rounded-md cursor-pointer font-bold hover:text-black">Check Video <IoVideocam />  </div>
          </div>
        </div>

        {/* Live Coding  */}
        <div className=" relative rounded-lg flex flex-col justify-center items-center w-full md:w-[40%] bg-[#333232] h-[60vh]">
            <div className=" absolute uppercase text-4xl font-extrabold bg-white top-[40%] text-center md:left-[20%] bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block  text-transparent bg-clip-text "> collaborative
 <br/> Coding</div>
            <div className="absolute h-10 w-72 bottom-4 min-w-[200px] ">
              <select
                className="peer p-2 h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                <option className="text-black" value="brazil">C++</option>
                <option className="text-black" value="bucharest">Java</option>
                <option className="text-black" value="london">Python</option>
                <option className="text-black" value="washington">React</option>
              </select>
              <label
                className="before:content[' '] after:content[' '] text-white pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Select a Language
              </label>
            </div>
        </div>

      </div>
      
    </section>
  );
};

export default Interview;

