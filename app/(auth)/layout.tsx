import Navbar from '@/components/Navbar';
import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className="relative">
      <Navbar />     
        
        <section className="">
          <div className="">{children}</div>
        </section>
          
      
    </main>
)
};

export default AuthLayout;