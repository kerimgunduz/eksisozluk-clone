import { useState, useRef, useEffect } from "react";
import { PenaIcon, DropIcon } from "./Icons";
import { navLinks, moreMenuItems } from "../data/mockData";

export default function Navigation({ activeNav, onNavClick }) {
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  useEffect(() => {
    if (!moreOpen) return;

    const handleClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [moreOpen]);

  const handleMoreItemClick = (label) => {
    onNavClick(label);
    setMoreOpen(false);
  };

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {navLinks.map((link) => (
          <li
            key={link.label}
            className={link.isMore ? "nav-more-item" : undefined}
            ref={link.isMore ? moreRef : undefined}
          >
            <button
              type="button"
              className={`nav-link ${activeNav === link.label ? "active" : ""} ${link.isMore ? "nav-more" : ""} ${link.isMore && moreOpen ? "nav-more-open" : ""}`}
              onClick={() => {
                if (link.isMore) {
                  setMoreOpen((open) => !open);
                } else {
                  onNavClick(link.label);
                }
              }}
              aria-expanded={link.isMore ? moreOpen : undefined}
              aria-haspopup={link.isMore ? "menu" : undefined}
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

            {link.isMore && moreOpen && (
              <ul className="nav-more-menu" role="menu">
                {moreMenuItems.map((item) => (
                  <li key={item} role="none">
                    <button
                      type="button"
                      role="menuitem"
                      className="nav-more-menu-item"
                      onClick={() => handleMoreItemClick(item)}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
