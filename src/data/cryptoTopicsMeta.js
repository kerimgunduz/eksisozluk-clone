export const CRYPTO_COIN_IDS = [
  "bitcoin",
  "ethereum",
  "solana",
  "binancecoin",
  "ripple",
  "dogecoin",
  "cardano",
];

export const cryptoTopicTitles = {
  bitcoin: "bitcoin",
  ethereum: "ethereum",
  solana: "solana",
  binancecoin: "bnb",
  ripple: "xrp",
  dogecoin: "dogecoin",
  cardano: "cardano",
};

export function getCryptoTopicTitle(coinId) {
  return cryptoTopicTitles[coinId] ?? coinId;
}

export function getCryptoIdFromTitle(title) {
  const normalized = title.toLowerCase();
  return Object.entries(cryptoTopicTitles).find(
    ([, topicTitle]) => topicTitle === normalized
  )?.[0];
}

export function isCryptoTopic(title) {
  return getCryptoIdFromTitle(title) != null;
}
