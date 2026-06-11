import { RefreshIcon } from "./Icons";
import { gundemTopics } from "../data/mockData";

export default function Sidebar({ selectedTopic, onTopicSelect, onRefresh }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">gündem</h2>
        <button type="button" className="refresh-btn" onClick={onRefresh} aria-label="yenile">
          <RefreshIcon />
        </button>
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
  );
}
