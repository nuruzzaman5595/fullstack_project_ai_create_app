import Link from "next/link";

const notes = [
  { label: "Selected work", value: "12 projects" },
  { label: "Based in", value: "New York / Remote" },
  { label: "Currently", value: "Open for collaborations" },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <Link className="wordmark" href="/">Mara Chen<span>.</span></Link>
        <nav aria-label="Primary navigation">
          <Link className="nav-link active" href="/">Home</Link>
          <Link className="nav-link" href="/blog">Blog</Link>
          <Link className="nav-link" href="/contact">Contact</Link>
        </nav>
      </header>
      <section className="hero-grid" aria-labelledby="intro-heading">
        <div className="hero-copy">
          <p className="eyebrow">Independent designer &amp; writer</p>
          <h1 id="intro-heading">Ideas made<br /><em>visible.</em></h1>
          <p className="hero-description">I help thoughtful teams turn complex ideas into clear, useful, and memorable digital experiences.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/blog">Read the journal <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract layered paper shapes" role="img">
          <div className="art-sun" />
          <div className="art-card art-card-back" />
          <div className="art-card art-card-front"><span>make room<br />for wonder</span></div>
          <div className="art-caption">A little clarity<br />goes a long way.</div>
        </div>
      </section>
      <section className="intro-strip" aria-label="About Mara">
        <p className="section-label">A bit about me</p>
        <p className="intro-statement">The best work lives where strategy meets feeling. I bring a curious mind, a careful eye, and a fondness for the details people remember.</p>
      </section>
      <section className="notes-grid" aria-label="Profile details">
        {notes.map((note) => <div className="note" key={note.label}><span>{note.label}</span><strong>{note.value}</strong></div>)}
      </section>
      <footer className="site-footer"><span>© 2026 Mara Chen</span><span>Made with curiosity</span></footer>
    </main>
  );
}