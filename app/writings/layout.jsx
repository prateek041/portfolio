import { Montserrat } from 'next/font/google';
import BlogNav from './components/blogNav';
import { join } from 'path';
import { getSeriesStructure } from '@/utils/fetchPosts';

const textFont = Montserrat({
  subsets: ['latin'],
});

export default async function BlogLayout({ children }) {
  const postsDirectory = join(process.cwd(), 'writings');
  const series = await getSeriesStructure(postsDirectory);
  return (
    <div className={` blog-layout ${textFont.className}`}>
      <div className={`mt-20 ${textFont.className} flex`}>
        <BlogNav series={series} />
        <div>{children}</div>
      </div>
    </div>
  );
}
