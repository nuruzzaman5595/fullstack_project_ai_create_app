import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((candidate) => candidate.slug === slug);

  if (!post) notFound();

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
      <article className="article-page">
        <Link className="back-link" href="/blog">← Back to journal</Link>
        <header className="article-heading">
          <p className="eyebrow">{post.category} · {post.date}</p>
          <h1>{post.title}</h1>
          <p className="article-excerpt">{post.excerpt}</p>
        </header>
        <div className="article-body">
          {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </article>
      <footer className="site-footer"><span>© 2026 Mara Chen</span><span>Made with curiosity</span></footer>
    </main>
  );
}
