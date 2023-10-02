import Navbar from './components/navbar';
import './globals.css';
import { Sansita } from 'next/font/google';

const sansita = Sansita({
  subsets: ['latin'],
  weight: ['400', '700', '900', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'Prateek Singh',
  description: 'Portfolio website of Prateek Singh',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sansita.className} p-14 h-screen bg-[#282A3A]`}>
        <div
          className={`
          border-solid 
          border-l
         border-[#FAF0E6] 
          h-full 
          text-[#FAF0E6]
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
