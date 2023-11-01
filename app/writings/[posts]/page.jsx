import { getArticle, getArticleNameAndLocation } from '@/utils/fetchPosts';
import { join } from 'path';
import { Montserrat } from 'next/font/google';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Link from 'next/link';

const textFont = Montserrat({
  subsets: ['latin'],
});

const postsDirectory = join(process.cwd(), 'writings');

export async function generateStaticParams() {
  const series = getArticleNameAndLocation();

  const articles = [];
  Object.entries(series).map(([key, value]) => {
    value.map((entry) => {
      articles.push(entry.name);
    });
  });

  return articles;
}

export default async function Page({ params }) {
  const articleName = params.posts;

  const series = getArticleNameAndLocation(postsDirectory);

  let article = '';
  await Promise.all(
    Object.entries(series).map(async ([key, value]) => {
      await Promise.all(
        value.map(async (entry) => {
          if (entry.name == articleName) {
            article = await getArticle(entry.path);
          }
        })
      );
    })
  );

  const articleHTML = article.articleHTML
    ? article.articleHTML
    : 'Article not found';

  return (
    <div className={`${textFont.className} flex flex-col gap-y-5`}>
      <Link href="/writings">
        {' '}
        <div className="flex items-center gap-x-1">
          <IoIosArrowRoundBack />
          <p className="text-sm">Back</p>
        </div>
      </Link>
      <div
        className={`flex flex-col gap-y-4 font-light leading-relaxed tracking-wide max-h-[75vh] md:max-h-[70vh] overflow-y-auto`}
        dangerouslySetInnerHTML={{ __html: articleHTML }}
      />
    </div>
  );
}
