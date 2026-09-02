import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { posts } from "./posts";

export default function Blog() {
  return (
    <main className="site-shell inner-page">
      <SiteHeader activePage="blog" />
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
      <SiteFooter />
    </main>
  );
}
