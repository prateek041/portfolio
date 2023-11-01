import fs from 'fs';
import path, { join } from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';

const pathName = join(process.cwd(), '/writings');

export function getArticleNameAndLocation() {
  const series = fs.readdirSync(pathName);
  const personalBlog = {};

  series.map((entry) => {
    const path = join(pathName, entry);
    const stat = fs.statSync(path);

    if (stat.isDirectory()) {
      const seriesPath = join(pathName, entry);
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

export async function getFrontMatterData() {
  const blogs = getArticleNameAndLocation(pathName);

  let articleFrontMatters = [];
  Promise.all(
    Object.entries(blogs).map(([key, value]) => {
      value.map(async (item) => {
        const frontMatter = await getFrontMatter(item.path);
        const { title, date, description } = frontMatter.data;
        const frontItem = {
          fileName: item.name,
          date,
          title,
          description,
        };
        articleFrontMatters.push(frontItem);
      });
    })
  );
  return articleFrontMatters;
}

export async function getFrontMatter(pathToArticle) {
  const content = fs.readFileSync(pathToArticle, 'utf8');
  const frontMatter = matter(content);

  return frontMatter;
}
