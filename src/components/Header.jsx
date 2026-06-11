import { useState, useRef, useEffect } from "react";
import { SearchIcon, ChevronDownIcon, CalendarIcon } from "./Icons";
import Logo from "./Logo";
import { Theme } from "@/components/ui/theme";
import { searchSortOptions } from "../data/mockData";

const initialAdvancedSearch = {
  words: "",
  author: "",
  dateFrom: "",
  dateTo: "",
  bestOnly: false,
  sort: "desc",
};

export default function Header({
  onSearch,
  onAdvancedSearch,
  onLogin,
  onRegister,
  onHome,
}) {
  const [query, setQuery] = useState("");
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [advanced, setAdvanced] = useState(initialAdvancedSearch);
  const advancedRef = useRef(null);

  useEffect(() => {
    if (!advancedOpen) return;

    const handleClickOutside = (e) => {
      if (advancedRef.current && !advancedRef.current.contains(e.target)) {
        setAdvancedOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [advancedOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, "baslik");
  };

  const handleAdvancedChange = (field, value) => {
    setAdvanced((prev) => ({ ...prev, [field]: value }));
  };

  const handleAdvancedSubmit = () => {
    onAdvancedSearch(advanced);
    setAdvancedOpen(false);
  };

  const handleAdvancedCancel = () => {
    setAdvancedOpen(false);
  };

  const openAdvanced = () => {
    setAdvanced((prev) => ({ ...prev, words: query }));
    setAdvancedOpen((open) => !open);
  };

  return (
    <header className="header">
      <div className="header-top-bar" />
      <div className="header-inner">
        <a
          href="/"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            onHome();
          }}
        >
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
            <div className="search-type-dropdown" ref={advancedRef}>
              <button
                type="button"
                className={`search-type-btn ${advancedOpen ? "search-type-btn--open" : ""}`}
                onClick={openAdvanced}
                aria-label="gelişmiş arama"
                aria-expanded={advancedOpen}
                aria-haspopup="dialog"
              >
                <ChevronDownIcon />
              </button>

              {advancedOpen && (
                <div className="search-advanced-panel">
                  <div className="search-advanced-form">
                    <label className="search-advanced-field">
                      <span className="search-advanced-label">kelimeler</span>
                      <input
                        type="text"
                        className="search-advanced-input"
                        value={advanced.words}
                        onChange={(e) => handleAdvancedChange("words", e.target.value)}
                      />
                    </label>

                    <label className="search-advanced-field">
                      <span className="search-advanced-label">yazar</span>
                      <input
                        type="text"
                        className="search-advanced-input"
                        value={advanced.author}
                        onChange={(e) => handleAdvancedChange("author", e.target.value)}
                      />
                    </label>

                    <div className="search-advanced-field">
                      <span className="search-advanced-label">ne zaman</span>
                      <div className="search-advanced-dates">
                        <label className="search-date-wrap">
                          <input
                            type="text"
                            className="search-advanced-input search-date-input"
                            placeholder="gg.aa.yyyy"
                            value={advanced.dateFrom}
                            onChange={(e) => handleAdvancedChange("dateFrom", e.target.value)}
                          />
                          <span className="search-date-icon" aria-hidden="true">
                            <CalendarIcon />
                          </span>
                        </label>
                        <label className="search-date-wrap">
                          <input
                            type="text"
                            className="search-advanced-input search-date-input"
                            placeholder="gg.aa.yyyy"
                            value={advanced.dateTo}
                            onChange={(e) => handleAdvancedChange("dateTo", e.target.value)}
                          />
                          <span className="search-date-icon" aria-hidden="true">
                            <CalendarIcon />
                          </span>
                        </label>
                      </div>
                    </div>

                    <label className="search-advanced-checkbox">
                      <input
                        type="checkbox"
                        checked={advanced.bestOnly}
                        onChange={(e) => handleAdvancedChange("bestOnly", e.target.checked)}
                      />
                      <span>güzelinden olsun</span>
                    </label>

                    <label className="search-advanced-field">
                      <span className="search-advanced-label">sıralama şekli</span>
                      <div className="search-advanced-select-wrap">
                        <select
                          className="search-advanced-select"
                          value={advanced.sort}
                          onChange={(e) => handleAdvancedChange("sort", e.target.value)}
                        >
                          {searchSortOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </label>

                    <div className="search-advanced-actions">
                      <button
                        type="button"
                        className="search-advanced-submit"
                        onClick={handleAdvancedSubmit}
                      >
                        mükemmel ara
                      </button>
                      <button
                        type="button"
                        className="search-advanced-cancel"
                        onClick={handleAdvancedCancel}
                      >
                        boşver
                      </button>
                    </div>
                  </div>
                </div>
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
          <Theme
            variant="switch"
            size="sm"
            themes={["dark", "light"]}
            className="header-theme-switch"
          />
        </div>
      </div>
    </header>
  );
}
