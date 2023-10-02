import { join } from 'path';
import { getBlogs } from '../../../utils/fetchPosts';

export default function Post() {
  const postsDirectory = join(process.cwd(), 'writings');
  const writings = getBlogs(postsDirectory);
  return (
    <h1>
      These are my writings
      {Object.entries(writings).map(([key, value]) => {
        return (
          <>
            <p key={key}>{key}</p>
            {/* <p key={value}>{value}</p> */}
          </>
        );
      })}
    </h1>
  );
}
