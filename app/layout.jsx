import Navbar from './components/navbar';
import './globals.css';
import { Big_Shoulders_Text as Ptext } from 'next/font/google';

const ptext = Ptext({ subsets: ['latin'] });

export const metadata = {
  title: 'Prateek Singh',
  description: 'Portfolio website of Prateek Singh',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ptext.className} p-14 h-screen bg-[#000] z-20`}>
        <div
          className={`
          border-solid 
          border
         border-[#FFDC73] 
          rounded-[50px] 
          h-full 
          text-[#FFDC73]
          flex
          flex-col
          items-center
          `}
        >
          <Navbar />
          <div className="h-full w-11/12">{children}</div>
        </div>
      </body>
    </html>
  );
}
