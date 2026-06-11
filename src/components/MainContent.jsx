import EntryItem from "./EntryItem";
import AuthPage from "./AuthPage";
import SiteFooter from "./SiteFooter";

export default function MainContent({
  mode,
  topicData,
  feedEntries,
  onTopicClick,
  likedEntries,
  onLike,
  onAuthSwitch,
}) {
  if (mode === "login" || mode === "register") {
    return <AuthPage type={mode} onSwitch={onAuthSwitch} />;
  }

  if (mode === "feed") {
    return (
      <main className="main-content">
        <div className="feed-header">
          <a href="#" className="follow-link" onClick={(e) => e.preventDefault()}>
            Takip et: <strong>@sozluk</strong>
          </a>
        </div>
        {feedEntries.map((entry) => (
          <EntryItem
            key={entry.id}
            entry={entry}
            showTopicTitle
            onTopicClick={onTopicClick}
            liked={likedEntries.has(entry.id)}
            onLike={onLike}
          />
        ))}
        <SiteFooter />
      </main>
    );
  }

  return (
    <main className="main-content">
      <div className="topic-header">
        <h1 className="topic-page-title">{topicData.title}</h1>
        <a href="#" className="follow-link" onClick={(e) => e.preventDefault()}>
          Takip et: <strong>@sozluk</strong>
        </a>
      </div>
      {topicData.entries.map((entry) => (
        <EntryItem
          key={entry.id}
          entry={entry}
          liked={likedEntries.has(entry.id)}
          onLike={onLike}
        />
      ))}
      <SiteFooter />
    </main>
  );
}
