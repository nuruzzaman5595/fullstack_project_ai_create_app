import Link from "next/link";

type SitePage = "home" | "blog" | "contact";

type SiteHeaderProps = {
  activePage: SitePage;
};

const navigation: { label: string; href: string; page: SitePage }[] = [
  { label: "Home", href: "/", page: "home" },
  { label: "Blog", href: "/blog", page: "blog" },
  { label: "Contact", href: "/contact", page: "contact" },
];

export default function SiteHeader({ activePage }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/">Nayon<span>.</span></Link>
      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link
            className={`nav-link${item.page === activePage ? " active" : ""}`}
            href={item.href}
            key={item.page}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
