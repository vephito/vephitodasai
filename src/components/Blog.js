import React from 'react';

function Blog() {
  return (
    <section id="blog" className="blog parallax fade-in">
      <h2>Blog</h2>
      <div className="blog-posts">
        <div className="post-preview">
          <h3>Blog Post Title</h3>
          <p>Summary of the blog post...</p>
          <a href="blog-post-link">Read More</a>
        </div>
      </div>
    </section>
  );
}

export default Blog;
