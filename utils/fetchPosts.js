import fs from 'fs';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'writings');

// get all slugs
export function getPostSlugs() {
  posts = fs.readdirSync(postsDirectory);
  return posts;
}

// get all blogs

// get a blog by slug (id)
