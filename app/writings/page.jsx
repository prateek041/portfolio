import Article from './components/article';
import BlogNav from './components/blogNav';
import { Montserrat } from 'next/font/google';

const textFont = Montserrat({
  subsets: ['latin'],
});

export default function Writings() {
  return (
    <div className="overflow-hidden">
      <div
        className={`mt-20 ${textFont.className} flex max-h-[70vh] overflow-y-auto`}
      >
        <BlogNav />
        <Article />
      </div>
    </div>
  );
}
