import { useState } from "react";
import { SearchIcon, ChevronDownIcon } from "./Icons";
import Logo from "./Logo";
import { searchTypes } from "../data/mockData";

export default function Header({ onSearch, onLogin, onRegister }) {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("baslik");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, searchType);
  };

  const currentType = searchTypes.find((t) => t.value === searchType);

  return (
    <header className="header">
      <div className="header-top-bar" />
      <div className="header-inner">
        <a href="/" className="logo" onClick={(e) => e.preventDefault()}>
          <Logo height={40} />
        </a>

        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="başlık, #entry, @yazar"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="search-type-dropdown">
              <button
                type="button"
                className="search-type-btn"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-label={`arama türü: ${currentType?.label}`}
              >
                <ChevronDownIcon />
              </button>
              {dropdownOpen && (
                <ul className="search-type-menu">
                  {searchTypes.map((type) => (
                    <li key={type.value}>
                      <button
                        type="button"
                        onClick={() => {
                          setSearchType(type.value);
                          setDropdownOpen(false);
                        }}
                      >
                        {type.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button type="submit" className="search-btn" aria-label="getir">
              <SearchIcon />
            </button>
          </div>
        </form>

        <div className="header-actions">
          <button type="button" className="header-link" onClick={onLogin}>
            giriş
          </button>
          <button type="button" className="header-link" onClick={onRegister}>
            kayıt ol
          </button>
        </div>
      </div>
    </header>
  );
}
