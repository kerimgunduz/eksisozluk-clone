import { PenaIcon, DropIcon } from "./Icons";
import { navLinks } from "../data/mockData";

export default function Navigation({ activeNav, onNavClick }) {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        {navLinks.map((link) => (
          <li key={link.label}>
            <button
              type="button"
              className={`nav-link ${activeNav === link.label ? "active" : ""} ${link.isMore ? "nav-more" : ""}`}
              onClick={() => onNavClick(link.label)}
            >
              {link.icon === "pena" && (
                <span className="nav-icon">
                  <PenaIcon size={17} />
                </span>
              )}
              {link.icon === "seyler" && (
                <span className="nav-icon nav-icon-seyler">
                  <DropIcon size={17} />
                </span>
              )}
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
