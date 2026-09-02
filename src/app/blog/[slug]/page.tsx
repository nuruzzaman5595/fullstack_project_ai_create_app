import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "../../../components/SiteFooter";
import SiteHeader from "../../../components/SiteHeader";
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
      <SiteHeader activePage="blog" />
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
      <SiteFooter />
    </main>
  );
}
