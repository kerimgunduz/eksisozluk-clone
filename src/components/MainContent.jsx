import { Suspense, lazy } from "react";
import EntryItem from "./EntryItem";
import SiteFooter from "./SiteFooter";

const CryptoTopicHeader = lazy(() => import("./CryptoTopicHeader"));

function TopicLoadingState({ title }) {
  return (
    <div className="topic-loading" aria-busy="true" aria-label={`${title} yükleniyor`}>
      <div className="topic-loading__bar" />
      <div className="topic-loading__bar topic-loading__bar--short" />
      <div className="topic-loading__bar" />
    </div>
  );
}

export default function MainContent({
  mode,
  topicData,
  feedEntries,
  onTopicClick,
  likedEntries,
  onLike,
  cryptoCoin,
  isCryptoTopic,
}) {
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

  const entriesLoading = isCryptoTopic && topicData.entries.length === 0;

  return (
    <main className={`main-content${isCryptoTopic ? " main-content--crypto" : ""}`}>
      {isCryptoTopic ? (
        <>
          {cryptoCoin ? (
            <Suspense fallback={<TopicLoadingState title={topicData.title} />}>
              <CryptoTopicHeader
                coin={cryptoCoin}
                topicTitle={topicData.title}
                entryCount={topicData.entries.length || null}
              />
            </Suspense>
          ) : (
            <div className="topic-header">
              <h1 className="topic-page-title">{topicData.title}</h1>
            </div>
          )}
          <div className="crypto-topic-entries">
            {entriesLoading ? (
              <TopicLoadingState title={topicData.title} />
            ) : (
              topicData.entries.map((entry) => (
                <EntryItem
                  key={entry.id}
                  entry={entry}
                  liked={likedEntries.has(entry.id)}
                  onLike={onLike}
                />
              ))
            )}
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
      <SiteFooter />
    </main>
  );
}
