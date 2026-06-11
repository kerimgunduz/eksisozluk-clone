import { useState, useCallback, useRef } from "react";
import { useScrollRouting } from "./hooks/useScrollRouting";
import useCryptoMarket from "./hooks/useCryptoMarket";
import Header from "./components/Header";
import CryptoTickerBar from "./components/CryptoTickerBar";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import SideGutterBackground from "./components/SideGutterBackground";
import {
  defaultFeedEntries,
  getTopicEntries,
  gundemTopics,
  searchSortOptions,
} from "./data/mockData";
import {
  getCryptoTopicTitle,
  getCryptoIdFromTitle,
  isCryptoTopic,
} from "./data/cryptoTopics";

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState(
    "beyaz show'da oğuzhan koç'a yapılan şaka"
  );
  const [selectedCryptoId, setSelectedCryptoId] = useState(null);
  const [mode, setMode] = useState("feed");
  const [activeNav, setActiveNav] = useState("gündem");
  const [likedEntries, setLikedEntries] = useState(new Set());
  const [searchResult, setSearchResult] = useState(null);
  const sidebarRef = useRef(null);
  const { coins, loading: cryptoLoading, isLive: cryptoLive } = useCryptoMarket();

  useScrollRouting(sidebarRef);

  const topicData = searchResult || getTopicEntries(selectedTopic);
  const activeCryptoCoin =
    selectedCryptoId != null
      ? coins.find((coin) => coin.id === selectedCryptoId) ?? null
      : null;

  const goHome = () => {
    setMode("feed");
    setSearchResult(null);
    setSelectedCryptoId(null);
    setActiveNav("gündem");
  };

  const handleTopicSelect = (title) => {
    setSelectedTopic(title);
    setSelectedCryptoId(getCryptoIdFromTitle(title));
    setMode("topic");
    setSearchResult(null);
    setActiveNav("gündem");
  };

  const handleCryptoSelect = useCallback((coinId) => {
    const title = getCryptoTopicTitle(coinId);
    setSelectedTopic(title);
    setSelectedCryptoId(coinId);
    setMode("topic");
    setSearchResult(null);
    setActiveNav("gündem");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNavClick = (label) => {
    setActiveNav(label);
    if (label === "gündem") {
      goHome();
    } else if (label === "debe") {
      setMode("topic");
      setSelectedTopic("nesrin cavadzade");
      setSelectedCryptoId(null);
      setSearchResult(null);
    } else if (label === "#kripto") {
      handleCryptoSelect("bitcoin");
    } else if (label.startsWith("#")) {
      const topic = label.replace("#", "").trim();
      const match = gundemTopics.find((t) =>
        t.title.toLowerCase().includes(topic.toLowerCase())
      );
      handleTopicSelect(match ? match.title : topic);
    } else {
      handleTopicSelect(label);
    }
  };

  const handleSearch = (query, type) => {
    if (!query.trim()) return;
    const lower = query.toLowerCase();
    const match = gundemTopics.find((t) => t.title.toLowerCase().includes(lower));
    if (match) {
      handleTopicSelect(match.title);
    } else {
      setSearchResult({
        title: query,
        entries: [
          {
            id: Date.now(),
            author: "arama sonucu",
            date: "11.06.2026 12:00",
            content: `"${query}" için ${type} aramasında sonuç bulunamadı.`,
            truncated: false,
            hasSeyler: false,
          },
        ],
      });
      setMode("topic");
      setSelectedCryptoId(null);
    }
  };

  const handleAdvancedSearch = ({
    words,
    author,
    dateFrom,
    dateTo,
    bestOnly,
    sort,
  }) => {
    const query = words.trim() || author.trim();
    if (!query) return;

    const sortLabel =
      searchSortOptions.find((option) => option.value === sort)?.label || sort;
    const filters = [];
    if (author.trim()) filters.push(`yazar: ${author.trim()}`);
    if (dateFrom || dateTo) {
      filters.push(`tarih: ${dateFrom || "..."} – ${dateTo || "..."}`);
    }
    if (bestOnly) filters.push("güzelinden olsun");

    setSearchResult({
      title: words.trim() || author.trim(),
      entries: [
        {
          id: Date.now(),
          author: author.trim() || "arama sonucu",
          date: "11.06.2026 12:00",
          content: `"${query}" için gelişmiş arama sonuçları${filters.length ? ` (${filters.join(", ")}, sıralama: ${sortLabel})` : ` (sıralama: ${sortLabel})`}.`,
          truncated: false,
          hasSeyler: false,
        },
      ],
    });
    setMode("topic");
    setSelectedCryptoId(null);
  };

  const handleLike = useCallback((id) => {
    setLikedEntries((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return (
    <div className="app">
      <SideGutterBackground />
      <div className="site-header">
        <Header
          onSearch={handleSearch}
          onAdvancedSearch={handleAdvancedSearch}
          onLogin={() => setMode("login")}
          onRegister={() => setMode("register")}
          onHome={goHome}
        />
        <Navigation activeNav={activeNav} onNavClick={handleNavClick} />
      </div>
      <CryptoTickerBar
        coins={coins}
        loading={cryptoLoading}
        isLive={cryptoLive}
        selectedCoinId={selectedCryptoId}
        onCoinSelect={handleCryptoSelect}
      />

      <div className="layout">
        <Sidebar
          ref={sidebarRef}
          selectedTopic={selectedTopic}
          onTopicSelect={handleTopicSelect}
        />
        <MainContent
          mode={mode}
          topicData={topicData}
          feedEntries={defaultFeedEntries}
          onTopicClick={handleTopicSelect}
          likedEntries={likedEntries}
          onLike={handleLike}
          onAuthSwitch={setMode}
          cryptoCoin={activeCryptoCoin}
          isCryptoTopic={isCryptoTopic(selectedTopic)}
        />
      </div>
    </div>
  );
}
