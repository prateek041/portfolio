import { getFrontMatterData } from '@/utils/fetchPosts';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const textFont = Montserrat({
  subsets: ['latin'],
});

export default async function BlogHome() {
  const frontMatters = await getFrontMatterData();

  return (
    <div className={`${textFont.className} leading-relaxed`}>
      <div className="flex flex-col gap-y-2">
        {frontMatters.map((item) => {
          return (
            <Link
              className="no-underline max-w-fit"
              href={`/writings/${item.fileName}`}
              key={item.fileName}
            >
              <div className="font-light">
                <h2 className="text-base font-normal">{item.title}</h2>
                <p className="text-xs font-light">{item.date}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
