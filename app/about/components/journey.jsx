import { getArticle, getBlogs } from '@/utils/fetchPosts';
import { join } from 'path';

export default async function Journey() {
  const postsDirectory = join(process.cwd(), 'writings');
  const series = getBlogs(postsDirectory);

  let personalArticlePath = '';
  Object.entries(series).map(([key, value]) => {
    // console.log('reached here');
    if (key == 'personal') {
      return value.map((entry) => {
        // console.log('this is entry', entry);
        if (entry.name == 'journey-so-far.md') {
          // console.log('reacher here');
          // console.log('this is entry path', entry.path);
          personalArticlePath = entry.path;
        }
      });
    }
  });

  const { articleHTML } = await getArticle(personalArticlePath);

  return (
    <div
      className="flex flex-col gap-y-4 leading-loose"
      dangerouslySetInnerHTML={{ __html: articleHTML }}
    />
  );
}
