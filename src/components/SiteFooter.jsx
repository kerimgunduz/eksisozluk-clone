import { siteFooterLinks } from "../data/mockData";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav className="site-footer-nav" aria-label="site bağlantıları">
        {siteFooterLinks.map((link) => (
          <button key={link} type="button" className="site-footer-link">
            {link}
          </button>
        ))}
      </nav>
    </footer>
  );
}
