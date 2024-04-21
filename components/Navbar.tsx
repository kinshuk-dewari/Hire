import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import MobileNav from './MobileNav';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import UserNav from './UserNav';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10 shadow-xl">
      <Link href="/" className="flex items-center gap-1">
        <div className='rounded-md overflow-hidden'>
          <Image
            src="/icons/logo.jpeg"
            width={54}
            height={54}
            alt="unstop hire logo"
            className="max-sm:size-10"
          />
        </div>
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          HIRE
        </p>
        
      </Link>
      <div className="flex flex-between gap-5 md:block">
        {session?.user ? (
          <UserNav />
           ):(
          <Link className='text-white text-sm md:text-xl font-bold w-fit md:w-6 bg-blue-500 p-2 rounded-md' href='/sign-in'>
            Sign In
          </Link>
        )}
         

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
