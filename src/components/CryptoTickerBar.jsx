import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Sparkline from "./Sparkline";
import CryptoCoinPanel from "./CryptoCoinPanel";
import {
  formatChangePercent,
  formatCryptoPrice,
  getChartTrendUp,
  isTrendUp,
} from "../hooks/useCryptoMarket";

const DETAIL_WIDTH = 260;
const DETAIL_GAP = 8;
const HIDE_DELAY_MS = 120;

function clampDetailLeft(centerX) {
  const half = DETAIL_WIDTH / 2;
  const padding = 12;
  return Math.min(
    Math.max(centerX, half + padding),
    window.innerWidth - half - padding
  );
}

function CryptoTickerItem({ coin, selected, onCoinSelect }) {
  const wrapRef = useRef(null);
  const hideTimerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [detailPos, setDetailPos] = useState({ top: 0, left: 0 });

  const sparklineData = coin.sparkline_in_7d?.price ?? [];
  const change = coin.price_change_percentage_24h;
  const changeUp = isTrendUp(change);
  const chartUp = getChartTrendUp(coin, sparklineData);

  const updatePosition = useCallback(() => {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    setDetailPos({
      top: rect.bottom + DETAIL_GAP,
      left: clampDetailLeft(rect.left + rect.width / 2),
    });
  }, []);

  const showDetail = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    updatePosition();
    setOpen(true);
  }, [updatePosition]);

  const scheduleHide = useCallback(() => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setOpen(false);
      hideTimerRef.current = null;
    }, HIDE_DELAY_MS);
  }, []);

  const handleClick = () => {
    onCoinSelect?.(coin.id);
  };

  useEffect(() => {
    if (!open) return undefined;

    const handleReposition = () => updatePosition();
    const track = wrapRef.current?.closest(".crypto-ticker-track");

    window.addEventListener("resize", handleReposition);
    window.addEventListener("scroll", handleReposition, true);
    track?.addEventListener("scroll", scheduleHide);

    return () => {
      window.removeEventListener("resize", handleReposition);
      window.removeEventListener("scroll", handleReposition, true);
      track?.removeEventListener("scroll", scheduleHide);
    };
  }, [open, updatePosition, scheduleHide]);

  useEffect(
    () => () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    },
    []
  );

  return (
    <>
      <div
        ref={wrapRef}
        className={`crypto-ticker-item-wrap ${open ? "crypto-ticker-item-wrap--active" : ""} ${selected ? "crypto-ticker-item-wrap--selected" : ""}`}
        onMouseEnter={showDetail}
        onMouseLeave={scheduleHide}
      >
        <button
          type="button"
          className="crypto-ticker-item"
          onClick={handleClick}
          aria-pressed={selected}
          aria-label={`${coin.name} entrylerini aç`}
        >
          <div className="crypto-ticker-meta">
            {coin.image ? (
              <img
                src={coin.image}
                alt=""
                className="crypto-ticker-icon"
                width={16}
                height={16}
              />
            ) : (
              <span className="crypto-ticker-icon-fallback">{coin.symbol.toUpperCase()}</span>
            )}
            <span className="crypto-ticker-price">{formatCryptoPrice(coin.current_price)}</span>
            <span
              className={`crypto-ticker-change ${changeUp ? "crypto-ticker-change--up" : "crypto-ticker-change--down"}`}
            >
              {formatChangePercent(change)}
            </span>
          </div>
          <Sparkline data={sparklineData} positive={chartUp} />
        </button>
      </div>

      {open &&
        createPortal(
          <div
            className="crypto-ticker-detail crypto-ticker-detail--portal"
            style={{ top: detailPos.top, left: detailPos.left }}
            role="tooltip"
            onMouseEnter={showDetail}
            onMouseLeave={scheduleHide}
          >
            <CryptoCoinPanel coin={coin} variant="compact" />
          </div>,
          document.body
        )}
    </>
  );
}

export default function CryptoTickerBar({
  coins,
  loading,
  isLive,
  selectedCoinId,
  onCoinSelect,
}) {
  return (
    <div className="crypto-ticker-wrap">
      <div className="crypto-ticker-bar" aria-label="kripto piyasa verileri">
        <div className="crypto-ticker-label">
          <span className="crypto-ticker-dot" aria-hidden="true" />
          kripto
          {!loading && (
            <span className="crypto-ticker-status">{isLive ? "canlı" : "demo"}</span>
          )}
        </div>

        <div className="crypto-ticker-track">
          <div className="crypto-ticker-scroll">
            {coins.map((coin) => (
              <CryptoTickerItem
                key={coin.id}
                coin={coin}
                selected={selectedCoinId === coin.id}
                onCoinSelect={onCoinSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
