import Sparkline from "./Sparkline";
import InteractivePriceChart from "./InteractivePriceChart";
import {
  formatChangePercent,
  formatCompactUsd,
  formatCryptoPrice,
  formatSupply,
  getChange7d,
  getChartTrendUp,
  isTrendUp,
} from "../hooks/useCryptoMarket";

function DetailRow({ label, value, valueClassName = "" }) {
  return (
    <div className="crypto-detail-row">
      <span className="crypto-detail-label">{label}</span>
      <span className={`crypto-detail-value ${valueClassName}`.trim()}>{value}</span>
    </div>
  );
}

export default function CryptoCoinPanel({ coin, variant = "compact" }) {
  if (!coin) return null;

  const sparklineData = coin.sparkline_in_7d?.price ?? [];
  const change24hUp = isTrendUp(coin.price_change_percentage_24h);
  const chartUp = getChartTrendUp(coin, sparklineData);
  const change7d = getChange7d(coin);
  const change7dUp = isTrendUp(change7d);
  const isSticky = variant === "sticky";

  return (
    <div className={`crypto-coin-panel crypto-coin-panel--${variant}`}>
      <div className="crypto-detail-header">
        {coin.image ? (
          <img
            src={coin.image}
            alt=""
            className="crypto-detail-icon"
            width={isSticky ? 36 : 28}
            height={isSticky ? 36 : 28}
          />
        ) : (
          <span className="crypto-detail-icon-fallback">{coin.symbol.toUpperCase()}</span>
        )}
        <div className="crypto-detail-title">
          <span className="crypto-detail-name">{coin.name}</span>
          <span className="crypto-detail-symbol">{coin.symbol.toUpperCase()}</span>
        </div>
        {coin.market_cap_rank != null && (
          <span className="crypto-detail-rank">#{coin.market_cap_rank}</span>
        )}
      </div>

      <div className="crypto-detail-price-row">
        <span className={`crypto-detail-price ${isSticky ? "crypto-detail-price--lg" : ""}`}>
          {formatCryptoPrice(coin.current_price)}
        </span>
        <span
          className={`crypto-detail-change ${change24hUp ? "crypto-ticker-change--up" : "crypto-ticker-change--down"}`}
        >
          {formatChangePercent(coin.price_change_percentage_24h)} (24s)
        </span>
        {isSticky && (
          <span
            className={`crypto-detail-change ${change7dUp ? "crypto-ticker-change--up" : "crypto-ticker-change--down"}`}
          >
            {formatChangePercent(change7d)} (7g)
          </span>
        )}
      </div>

      <div
        className={`crypto-detail-chart ${isSticky ? "crypto-detail-chart--interactive" : ""}`}
      >
        {isSticky ? (
          <InteractivePriceChart data={sparklineData} positive={chartUp} />
        ) : (
          <Sparkline
            data={sparklineData}
            positive={chartUp}
            width={220}
            height={44}
          />
        )}
        <span className="crypto-detail-chart-label">
          son 7 gün ·{" "}
          <span className={change7dUp ? "crypto-ticker-change--up" : "crypto-ticker-change--down"}>
            {formatChangePercent(change7d)}
          </span>
          {isSticky && (
            <span className="crypto-detail-chart-hint"> · grafiğin üzerine gel</span>
          )}
        </span>
      </div>

      <div className={`crypto-detail-grid ${isSticky ? "crypto-detail-grid--wide" : ""}`}>
        <DetailRow label="24s en yüksek" value={formatCryptoPrice(coin.high_24h)} />
        <DetailRow label="24s en düşük" value={formatCryptoPrice(coin.low_24h)} />
        <DetailRow
          label="7g değişim"
          value={formatChangePercent(change7d)}
          valueClassName={change7dUp ? "crypto-ticker-change--up" : "crypto-ticker-change--down"}
        />
        <DetailRow label="piyasa değeri" value={formatCompactUsd(coin.market_cap)} />
        <DetailRow label="24s hacim" value={formatCompactUsd(coin.total_volume)} />
        <DetailRow label="ATH" value={formatCryptoPrice(coin.ath)} />
        <DetailRow
          label="ATH'den"
          value={formatChangePercent(coin.ath_change_percentage)}
          valueClassName={
            isTrendUp(coin.ath_change_percentage)
              ? "crypto-ticker-change--up"
              : "crypto-ticker-change--down"
          }
        />
        <DetailRow
          label="dolaşım"
          value={formatSupply(coin.circulating_supply, coin.symbol)}
        />
      </div>
    </div>
  );
}
