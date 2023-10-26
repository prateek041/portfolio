import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';

export default function NavItem({ item }) {
  const fileData = fs.readFileSync(item.path, 'utf8');

  const frontMatter = matter(fileData);
  const { title, date } = frontMatter.data;

  const articleName = item.name.substring(0, item.name.lastIndexOf('.'));
  return (
    <Link className="no-underline font-normal" href={`/writings/${item.name}`}>
      <div className="flex flex-col gap-y-0">
        <p className="font-medium">{articleName}</p>
        <p className="text-xs">{date}</p>
      </div>
    </Link>
  );
}
