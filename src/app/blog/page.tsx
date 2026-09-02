import Link from "next/link";
import { posts } from "./posts";

export default function Blog() {
  return (
    <main className="site-shell inner-page">
      <header className="site-header">
        <Link className="wordmark" href="/">Mara Chen<span>.</span></Link>
        <nav aria-label="Primary navigation">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link active" href="/blog">Blog</Link>
          <Link className="nav-link" href="/contact">Contact</Link>
        </nav>
      </header>
      <section className="page-heading blog-heading">
        <p className="eyebrow">The journal</p>
        <h1>Small notes,<br /><em>big feelings.</em></h1>
      </section>
      <section className="post-list" aria-label="Blog posts">
        {posts.map((post, index) => (
          <Link className="post" href={`/blog/${post.slug}`} key={post.slug}>
            <span className="post-number">0{index + 1}</span>
            <div className="post-main"><span className="post-category">{post.category}</span><h2>{post.title}</h2></div>
            <time>{post.date}</time>
            <span className="post-arrow" aria-hidden="true">↗</span>
          </Link>
        ))}
      </section>
      <footer className="site-footer"><span>© 2026 Mara Chen</span><span>Made with curiosity</span></footer>
    </main>
  );
}
