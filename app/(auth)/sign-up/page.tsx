import SignUpForm from "@/components/form/SignUpFrom";

const page = () => {
  return (
    
    <div className='w-screen h-screen bg-[#171717] flex items-center justify-center'>
      <div className='bg-blue-100 rounded-md max-w-4xl p-4'>
        <SignUpForm />
      </div>
    </div>
  );
};

export default page;