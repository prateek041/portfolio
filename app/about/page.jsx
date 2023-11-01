import Intro from './components/intro';
import { Montserrat } from 'next/font/google';

const textFont = Montserrat({
  subsets: ['latin'],
});

export default function AboutPage() {
  return (
    <div className={`${textFont.className} text-base mt-16`}>
      <Intro />
    </div>
  );
}
