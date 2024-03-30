import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      {children}
      Footer
    </main>
  );
}

export default RootLayout;
