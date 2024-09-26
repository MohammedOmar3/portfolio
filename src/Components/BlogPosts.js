import React, { useEffect, useState } from 'react';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `
      {
        user(username: "OMohammed") {
          publication {
            posts {
              title
              brief
              slug
              coverImage
              dateAdded
            }
          }
        }
      }`;

      const response = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      });

      const json = await response.json();
      setPosts(json.data.user.publication.posts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug} className="post">
          <h2>{post.title}</h2>
          <p>{post.brief}</p>
          <img src={post.coverImage} alt={post.title} />
          <a href={`https://yourblog.hashnode.dev/${post.slug}`}>Read More</a>
          <p>{new Date(post.dateAdded).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;