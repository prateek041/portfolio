import { getArticle, getArticleNameAndLocation } from '@/utils/fetchPosts';
import { join } from 'path';

export default async function Journey() {
  const postsDirectory = join(process.cwd(), 'writings');
  const series = getArticleNameAndLocation(postsDirectory);

  let personalArticlePath = '';
  Object.entries(series).map(([key, value]) => {
    if (key == 'personal') {
      return value.map((entry) => {
        if (entry.name == 'journey-so-far.md') {
          personalArticlePath = entry.path;
        }
      });
    }
  });

  const { articleHTML } = await getArticle(personalArticlePath);

  return (
    <div
      className="flex flex-col font-light gap-y-4 leading-loose"
      dangerouslySetInnerHTML={{ __html: articleHTML }}
    />
  );
}
