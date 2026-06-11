import { useState, useEffect } from "react";
import { CRYPTO_COIN_IDS } from "../data/cryptoTopics";

const COIN_IDS = CRYPTO_COIN_IDS;

const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COIN_IDS.join(",")}&order=market_cap_desc&sparkline=true&price_change_percentage=24h,7d`;

const FALLBACK_DATA = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
    current_price: 97250,
    market_cap: 1920000000000,
    market_cap_rank: 1,
    total_volume: 28500000000,
    high_24h: 98100,
    low_24h: 95800,
    price_change_percentage_24h: 1.84,
    price_change_percentage_7d_in_currency: 4.2,
    ath: 109114,
    ath_change_percentage: -10.87,
    circulating_supply: 19800000,
    sparkline_in_7d: {
      price: [94000, 94800, 95200, 96100, 96800, 97000, 97250],
    },
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    image: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
    current_price: 3420,
    market_cap: 412000000000,
    market_cap_rank: 2,
    total_volume: 15200000000,
    high_24h: 3480,
    low_24h: 3380,
    price_change_percentage_24h: -0.62,
    price_change_percentage_7d_in_currency: -2.1,
    ath: 4878,
    ath_change_percentage: -29.89,
    circulating_supply: 120500000,
    sparkline_in_7d: {
      price: [3480, 3460, 3450, 3440, 3435, 3425, 3420],
    },
  },
  {
    id: "solana",
    symbol: "sol",
    name: "Solana",
    image: "https://assets.coingecko.com/coins/images/4128/small/solana.png",
    current_price: 178.4,
    market_cap: 86000000000,
    market_cap_rank: 5,
    total_volume: 4200000000,
    high_24h: 182,
    low_24h: 174,
    price_change_percentage_24h: 3.21,
    price_change_percentage_7d_in_currency: 8.5,
    ath: 293.31,
    ath_change_percentage: -39.18,
    circulating_supply: 482000000,
    sparkline_in_7d: {
      price: [168, 170, 172, 174, 176, 177, 178.4],
    },
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image: "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
    current_price: 612.5,
    market_cap: 89000000000,
    market_cap_rank: 4,
    total_volume: 1800000000,
    high_24h: 618,
    low_24h: 605,
    price_change_percentage_24h: 0.45,
    price_change_percentage_7d_in_currency: 1.8,
    ath: 788.08,
    ath_change_percentage: -22.28,
    circulating_supply: 145000000,
    sparkline_in_7d: {
      price: [605, 607, 608, 610, 611, 612, 612.5],
    },
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image: "https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png",
    current_price: 2.18,
    market_cap: 125000000000,
    market_cap_rank: 3,
    total_volume: 5100000000,
    high_24h: 2.24,
    low_24h: 2.14,
    price_change_percentage_24h: -1.12,
    price_change_percentage_7d_in_currency: -3.4,
    ath: 3.4,
    ath_change_percentage: -35.88,
    circulating_supply: 57300000000,
    sparkline_in_7d: {
      price: [2.24, 2.22, 2.21, 2.2, 2.19, 2.185, 2.18],
    },
  },
  {
    id: "dogecoin",
    symbol: "doge",
    name: "Dogecoin",
    image: "https://assets.coingecko.com/coins/images/5/small/dogecoin.png",
    current_price: 0.182,
    market_cap: 26800000000,
    market_cap_rank: 8,
    total_volume: 2100000000,
    high_24h: 0.186,
    low_24h: 0.178,
    price_change_percentage_24h: 2.05,
    price_change_percentage_7d_in_currency: 5.2,
    ath: 0.731578,
    ath_change_percentage: -75.12,
    circulating_supply: 147000000000,
    sparkline_in_7d: {
      price: [0.175, 0.176, 0.178, 0.179, 0.18, 0.181, 0.182],
    },
  },
  {
    id: "cardano",
    symbol: "ada",
    name: "Cardano",
    image: "https://assets.coingecko.com/coins/images/975/small/cardano.png",
    current_price: 0.68,
    market_cap: 24100000000,
    market_cap_rank: 9,
    total_volume: 890000000,
    high_24h: 0.695,
    low_24h: 0.672,
    price_change_percentage_24h: -0.88,
    price_change_percentage_7d_in_currency: -1.5,
    ath: 3.09,
    ath_change_percentage: -77.99,
    circulating_supply: 35500000000,
    sparkline_in_7d: {
      price: [0.7, 0.695, 0.69, 0.688, 0.685, 0.682, 0.68],
    },
  },
];

const REFRESH_MS = 60_000;

function downsamplePrices(prices, targetLength = 64) {
  if (!prices?.length) return [];
  if (prices.length <= targetLength) return prices;

  const step = (prices.length - 1) / (targetLength - 1);
  return Array.from({ length: targetLength }, (_, index) => {
    const sourceIndex = Math.round(index * step);
    return prices[sourceIndex];
  });
}

export function formatCryptoPrice(price) {
  if (price == null || Number.isNaN(price)) return "—";

  if (price >= 1000) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });
  }

  if (price >= 1) {
    return price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  });
}

export function formatChangePercent(change) {
  if (change == null || Number.isNaN(change)) return "—";
  const sign = change >= 0 ? "+" : "";
  return `${sign}${change.toFixed(2)}%`;
}

export function formatCompactUsd(value) {
  if (value == null || Number.isNaN(value)) return "—";

  const abs = Math.abs(value);
  if (abs >= 1_000_000_000_000) {
    return `$${(value / 1_000_000_000_000).toFixed(2)}T`;
  }
  if (abs >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(2)}B`;
  }
  if (abs >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }
  if (abs >= 1_000) {
    return `$${(value / 1_000).toFixed(2)}K`;
  }

  return formatCryptoPrice(value);
}

export function formatSupply(value, symbol) {
  if (value == null || Number.isNaN(value)) return "—";

  const formatted = value.toLocaleString("en-US", {
    maximumFractionDigits: value >= 1_000_000 ? 0 : 2,
  });

  return symbol ? `${formatted} ${symbol.toUpperCase()}` : formatted;
}

export function getChange7d(coin) {
  const change =
    coin.price_change_percentage_7d_in_currency ?? coin.price_change_percentage_7d;
  return change != null && !Number.isNaN(change) ? change : null;
}

export function isTrendUp(change) {
  if (change == null || Number.isNaN(change)) return true;
  return change >= 0;
}

export function isSparklineTrendUp(sparklineData = []) {
  if (sparklineData.length < 2) return true;
  return sparklineData[sparklineData.length - 1] >= sparklineData[0];
}

/** Grafik rengi: 7g değişim (detay panelindeki "7g değişim" ile aynı). */
export function getChartTrendUp(coin, sparklineData = []) {
  const change7d = getChange7d(coin);
  if (change7d != null) return change7d >= 0;
  return isSparklineTrendUp(sparklineData);
}

export default function useCryptoMarket() {
  const [coins, setCoins] = useState(FALLBACK_DATA);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchMarket() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("market fetch failed");

        const data = await response.json();
        if (cancelled || !Array.isArray(data) || data.length === 0) return;

        setCoins(
          data.map((coin) => ({
            ...coin,
            price_change_percentage_24h:
              coin.price_change_percentage_24h ??
              coin.price_change_percentage_24h_in_currency?.usd ??
              null,
            price_change_percentage_7d_in_currency:
              coin.price_change_percentage_7d_in_currency ??
              coin.price_change_percentage_7d ??
              null,
            sparkline_in_7d: {
              price: downsamplePrices(coin.sparkline_in_7d?.price ?? []),
            },
          }))
        );
        setIsLive(true);
      } catch {
        if (!cancelled) setIsLive(false);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchMarket();
    const interval = setInterval(fetchMarket, REFRESH_MS);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  return { coins, loading, isLive };
}
