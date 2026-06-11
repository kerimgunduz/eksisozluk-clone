import { useState, useRef, useEffect, forwardRef } from "react";
import { GearIcon } from "./Icons";
import { gundemTopics, gundemPersonalizeTags } from "../data/mockData";

const Sidebar = forwardRef(function Sidebar({ selectedTopic, onTopicSelect }, ref) {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [tags, setTags] = useState(gundemPersonalizeTags);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!settingsOpen) return;

    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setSettingsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [settingsOpen]);

  const toggleTag = (label) => {
    setTags((prev) =>
      prev.map((tag) =>
        tag.label === label ? { ...tag, active: !tag.active } : tag
      )
    );
  };

  return (
    <div className="sidebar-slot">
    <aside className="sidebar" ref={ref}>
      <div className="sidebar-header" ref={headerRef}>
        <h2 className="sidebar-title">gündem</h2>
        <button
          type="button"
          className={`refresh-btn ${settingsOpen ? "refresh-btn--open" : ""}`}
          onClick={() => setSettingsOpen((open) => !open)}
          aria-label="gündem ayarları"
          aria-expanded={settingsOpen}
        >
          <GearIcon />
        </button>

        {settingsOpen && (
          <div className="gundem-personalize">
            <p className="gundem-personalize-title">gündeminizi kişiselleştirin:</p>
            <div className="gundem-tags">
              {tags.map((tag) => (
                <button
                  key={tag.label}
                  type="button"
                  className={`gundem-tag ${tag.active ? "gundem-tag--active" : ""}`}
                  onClick={() => toggleTag(tag.label)}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <ul className="topic-list">
        {gundemTopics.map((topic) => (
          <li key={topic.id}>
            <button
              type="button"
              className={`topic-item ${selectedTopic === topic.title ? "active" : ""}`}
              onClick={() => onTopicSelect(topic.title)}
            >
              <span className="topic-title">{topic.title}</span>
              <small>{topic.count}</small>
            </button>
          </li>
        ))}
      </ul>
    </aside>
    </div>
  );
});

export default Sidebar;
