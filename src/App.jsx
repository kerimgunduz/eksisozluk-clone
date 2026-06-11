import { useState, useCallback } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import AuthModal from "./components/AuthModal";
import SideGutterBackground from "./components/SideGutterBackground";
import { defaultFeedEntries, getTopicEntries, gundemTopics } from "./data/mockData";

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState(
    "beyaz show'da oğuzhan koç'a yapılan şaka"
  );
  const [mode, setMode] = useState("feed");
  const [activeNav, setActiveNav] = useState("gündem");
  const [likedEntries, setLikedEntries] = useState(new Set());
  const [authModal, setAuthModal] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [sidebarKey, setSidebarKey] = useState(0);

  const topicData = searchResult || getTopicEntries(selectedTopic);

  const handleTopicSelect = (title) => {
    setSelectedTopic(title);
    setMode("topic");
    setSearchResult(null);
    setActiveNav("gündem");
  };

  const handleNavClick = (label) => {
    setActiveNav(label);
    if (label === "gündem") {
      setMode("feed");
      setSearchResult(null);
    } else if (label === "debe") {
      setMode("topic");
      setSelectedTopic("nesrin cavadzade");
      setSearchResult(null);
    } else if (label.startsWith("#")) {
      const topic = label.replace("#", "");
      const match = gundemTopics.find((t) => t.title.includes(topic));
      if (match) handleTopicSelect(match.title);
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
    }
  };

  const handleLike = useCallback((id) => {
    setLikedEntries((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleRefresh = () => {
    setSidebarKey((k) => k + 1);
  };

  return (
    <div className="app">
      <SideGutterBackground />
      <div className="site-header">
        <Header
          onSearch={handleSearch}
          onLogin={() => setAuthModal("login")}
          onRegister={() => setAuthModal("register")}
        />
        <Navigation activeNav={activeNav} onNavClick={handleNavClick} />
      </div>

      <div className="layout">
        <Sidebar
          key={sidebarKey}
          selectedTopic={selectedTopic}
          onTopicSelect={handleTopicSelect}
          onRefresh={handleRefresh}
        />
        <MainContent
          mode={mode}
          topicData={topicData}
          feedEntries={defaultFeedEntries}
          onTopicClick={handleTopicSelect}
          likedEntries={likedEntries}
          onLike={handleLike}
        />
      </div>

      {authModal && (
        <AuthModal
          type={authModal}
          onClose={() => setAuthModal(null)}
          onSwitch={setAuthModal}
        />
      )}
    </div>
  );
}
