import CryptoCoinPanel from "./CryptoCoinPanel";

export default function CryptoTopicHeader({ coin, topicTitle, entryCount }) {
  return (
    <div className="crypto-topic-page-header">
      <div className="crypto-topic-header-top">
        <h1 className="topic-page-title">{topicTitle}</h1>
        <div className="crypto-topic-header-meta">
          {entryCount != null && (
            <span className="crypto-topic-entry-count">{entryCount} entry</span>
          )}
          <a href="#" className="follow-link" onClick={(e) => e.preventDefault()}>
            Takip et: <strong>@sozluk</strong>
          </a>
        </div>
      </div>
      <div className="crypto-topic-sticky">
        <CryptoCoinPanel coin={coin} variant="sticky" />
      </div>
    </div>
  );
}
