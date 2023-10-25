import fs from 'fs';
import { join } from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';

export function getBlogs(dirName) {
  const series = fs.readdirSync(dirName);
  const personalBlog = {};

  series.map((entry) => {
    // console.log('this is entry', entry);
    const path = join(dirName, entry);
    const stat = fs.statSync(path);

    if (stat.isDirectory()) {
      const seriesPath = join(dirName, entry);
      personalBlog[entry] = [];

      const articles = fs.readdirSync(seriesPath);
      articles.map((article) => {
        const articleEntry = {
          name: article,
          path: join(seriesPath, article),
        };
        personalBlog[entry].push(articleEntry);
      });
    }
  });
  return personalBlog;
}

export async function getArticle(path) {
  const data = fs.readFileSync(path, 'utf8');

  const matterResult = matter(data);

  const articleHTML = (
    await remark().use(html).process(matterResult.content)
  ).toString();

  return {
    articleHTML,
  };
}

export async function getSeriesStructure(path) {
  const series = getBlogs(path);
  return series;
}
