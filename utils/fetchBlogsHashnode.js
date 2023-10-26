const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function fetcBlogsFromHashnode() {
  let slugs = [];

  let response = await axios.post('https://gql.hashnode.com/', {
    query: `query {
      publication(host:"prateek-singh.hashnode.dev/"){
        posts(first: 10){
          edges{
            node{
              slug
            }
          }
        }
      }
    }`,
  });

  const edges = response.data.data.publication.posts.edges;
  edges.map((edge) => {
    slugs.push(edge.node.slug);
  });

  const markdowns = [];
  await Promise.all(
    slugs.map(async (slug) => {
      const response = await axios.post('https://gql.hashnode.com/', {
        query: `query {
        publication(host:"prateek-singh.hashnode.dev/"){
          post(slug: "${slug}"){
            content{
              markdown
            }
          }
        }
      }`,
      });

      const markdownContent =
        response.data.data.publication.post.content.markdown;

      const filePath = path.join(process.cwd(), 'hashnodeBlogs', `${slug}.md`);
      fs.writeFile(filePath, markdownContent, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('files written successfully');
      });
    })
  );

  console.log(markdowns[0]);
}

fetcBlogsFromHashnode();
