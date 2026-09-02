import Link from "next/link";

export default function Contact() {
  return (
    <main className="site-shell inner-page">
      <header className="site-header">
        <Link className="wordmark" href="/">Mara Chen<span>.</span></Link>
        <nav aria-label="Primary navigation">
          <Link className="nav-link" href="/">Home</Link>
          <Link className="nav-link" href="/blog">Blog</Link>
          <Link className="nav-link active" href="/contact">Contact</Link>
        </nav>
      </header>
      <section className="page-heading">
        <p className="eyebrow">Let&apos;s make something clear</p>
        <h1>Have a good<br /><em>idea?</em></h1>
      </section>
      <section className="contact-layout">
        <div>
          <p className="large-copy">Tell me what you&apos;re working on, what feels stuck, or where you&apos;d like to go next.</p>
          <a className="email-link" href="mailto:hello@marachen.studio">hello@marachen.studio <span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact-details">
          <div><span>Available for</span><strong>Brand identities<br />Digital products<br />Editorial projects</strong></div>
          <div><span>Find me elsewhere</span><strong><a href="https://www.linkedin.com">LinkedIn ↗</a><br /><a href="https://www.instagram.com">Instagram ↗</a></strong></div>
        </div>
      </section>
      <footer className="site-footer"><span>© 2026 Mara Chen</span><span>Made with curiosity</span></footer>
    </main>
  );
}
