import { getArticle, getSeriesStructure } from '@/utils/fetchPosts';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'writings');

export async function generateStaticParams() {
  const series = await getSeriesStructure(postsDirectory);

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

  const series = await getSeriesStructure(postsDirectory);

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
    <div
      className="flex flex-col gap-y-4 leading-relaxed max-h-[70vh] overflow-y-auto"
      dangerouslySetInnerHTML={{ __html: articleHTML }}
    />
  );
}
