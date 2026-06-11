import { useState } from "react";
import { HeartIcon, MinusBoxIcon, DotsIcon, AvatarPlaceholder } from "./Icons";

export default function EntryItem({
  entry,
  showTopicTitle = false,
  onTopicClick,
  liked,
  onLike,
}) {
  const [expanded, setExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const displayContent =
    entry.truncated && !expanded && entry.fullContent
      ? entry.content
      : entry.fullContent && expanded
        ? entry.fullContent
        : entry.content;

  return (
    <article className="entry">
      {showTopicTitle && entry.topicTitle && (
        <h1 className="entry-topic-title">
          <button type="button" onClick={() => onTopicClick?.(entry.topicTitle)}>
            {entry.topicTitle}
          </button>
        </h1>
      )}

      <div className="entry-body">
        <p>{displayContent}</p>
        {entry.truncated && entry.fullContent && !expanded && (
          <button type="button" className="read-more" onClick={() => setExpanded(true)}>
            devamını okuyayım
          </button>
        )}
      </div>

      <div className="entry-footer">
        <div className="entry-vote-pill">
          <button
            type="button"
            className={`vote-btn ${liked ? "liked" : ""}`}
            onClick={() => onLike(entry.id)}
            aria-label="beğen"
          >
            <HeartIcon filled={liked} />
          </button>
          <span className="vote-separator" aria-hidden="true">
            |
          </span>
          <button type="button" className="vote-btn" aria-label="beğenme">
            <MinusBoxIcon />
          </button>
        </div>

        <div className="entry-footer-right">
          <div className="entry-menu">
            <button
              type="button"
              className="menu-btn-circle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="seçenekler"
            >
              <DotsIcon size={16} />
            </button>
            {menuOpen && (
              <ul className="entry-menu-dropdown">
                <li>
                  <button type="button">şikayet et</button>
                </li>
                <li>
                  <button type="button">entry'yi kopyala</button>
                </li>
                <li>
                  <button type="button">yazarın tüm entry'leri</button>
                </li>
              </ul>
            )}
          </div>

          <div className="entry-profile">
            <div className="entry-info">
              <a href="#" className="entry-author" onClick={(e) => e.preventDefault()}>
                {entry.author}
              </a>
              <a href="#" className="entry-date" onClick={(e) => e.preventDefault()}>
                {entry.date}
              </a>
            </div>
            <AvatarPlaceholder />
          </div>
        </div>
      </div>
    </article>
  );
}
