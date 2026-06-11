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

export const cryptoTopicsData = {
  "bitcoin": {
    "title": "bitcoin",
    "coinId": "bitcoin",
    "entries": [
      {
        "id": 2001,
        "author": "satoshi fan club",
        "date": "11.06.2026 08:00",
        "content": "21 milyon tavanı olan tek varlık bu. her halving'de aynı tartışma: 'bu sefer bitti mi?' diyorlar, sonra bir sene sonra pişmanlık tweetleri geliyor. zincir üstü veriye bak, uzun vadeli tutanlar hâlâ kazanıyor.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2002,
        "author": "lazer gozluklu analist",
        "date": "10.06.2026 09:07",
        "content": "etf akışları piyasayı kurumsallaştırdı ama volatilite bitmedi. 5 dakikalık grafikte dünya yıkılıyormuş gibi hissettirip haftaya yeni ath diyenler aynı kişiler.",
        "truncated": true,
        "hasSeyler": false,
        "fullContent": "etf akışları piyasayı kurumsallaştırdı ama volatilite bitmedi. 5 dakikalık grafikte dünya yıkılıyormuş gibi hissettirip haftaya yeni ath diyenler aynı kişiler. bitcoin trade etmek değil, bitcoin biriktirmek daha az stresli. soğuk cüzdanda tutup unutmak en iyi strateji olabilir."
      },
      {
        "id": 2003,
        "author": "fiat is a shitcoin",
        "date": "09.06.2026 10:14",
        "content": "merkez bankası para basarken sen enflasyonu kabul edip btc'ye 'balon' diyemezsin. en azından arzı şeffaf. banka hesabındaki tl'nin arz tablosunu göster bakalım.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2004,
        "author": "halving bekleyen",
        "date": "08.06.2026 11:21",
        "content": "halving sonrası madenci satış baskısı azalır diye bekliyorduk, piyasa yine sürpriz yaptı. makroekonomi her şeyi ezer.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2005,
        "author": "soğuk cüzdan abi",
        "date": "07.06.2026 12:28",
        "content": "hardware wallet aldım, seed'i metal plağa yazdım. paranoia mı? belki. ama borsa hack'i haberini okuyunca haklı çıktım.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2006,
        "author": "lightning deneyicisi",
        "date": "06.06.2026 13:35",
        "content": "lightning ile kahve ödedim, fee 1 santim. banka kartı utandı. ancak kanal açmak teknik bilgi istiyor.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2007,
        "author": "on-chain dedektif",
        "date": "05.06.2026 14:42",
        "content": "whale alert hesabını takip ediyorum, büyük transfer görünce twitter'a koşuyorum. çoğu borsa içi transfermiş yine.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2008,
        "author": "beyaz kağıt okuyucu",
        "date": "04.06.2026 15:49",
        "content": "2008 whitepaper'ı her yıl bir kez okuyorum, her seferinde farklı cümle çarpıyor. satoshi kim sorusu hâlâ açık.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2009,
        "author": "21 milyon klübü",
        "date": "03.06.2026 16:56",
        "content": "21 milyon dolunca ne olacak diye soranlara: scarcity zaten fiyat motoru, madenci fee'ye geçecek.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2010,
        "author": "hash rate takipçisi",
        "date": "02.06.2026 17:03",
        "content": "hash rate rekor kırıyor, ağ güvenliği tartışması kapanmış sayılır. enerji tartışması devam eder.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2011,
        "author": "block reward avcısı",
        "date": "01.06.2026 18:10",
        "content": "block reward yarıya inince madenciler kapandı mı diye bakıyorum, hayır. zorluk ayarı denge sağlıyor.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2012,
        "author": "taproot meraklısı",
        "date": "31.05.2026 19:17",
        "content": "taproot sonrası gizlilik ve verimlilik arttı, çoğu kullanıcı fark etmedi bile. altyapı sessizce güçleniyor.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2013,
        "author": "mining rig emekçisi",
        "date": "30.05.2026 08:24",
        "content": "evde mining denedim, elektrik faturası kârı yedi.",
        "truncated": true,
        "hasSeyler": false,
        "fullContent": "evde mining denedim, elektrik faturası kârı yedi. öğrenildi. artık sadece spot alıyorum, mining hobi olarak pahalı."
      },
      {
        "id": 2014,
        "author": "borsa degil cüzdan",
        "date": "29.05.2026 09:31",
        "content": "borsada tutmak ile cüzdanda tutmak arasında psikolojik uçurum var. 'not your keys not your coins' boş slogan değil.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2015,
        "author": "orange pill dağıtıcı",
        "date": "11.06.2026 10:38",
        "content": "arkadaşıma orange pill verdim, üç ay sonra bana grafik attı. dönüşüm yavaş ama oluyor.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2016,
        "author": "s2f chartçı",
        "date": "10.06.2026 11:45",
        "content": "stock to flow modeli tutmadı ama uzun vade hikâyesi hâlâ ayakta. modeller değil protokol kalır.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2017,
        "author": "kimlik gizleyen",
        "date": "09.06.2026 12:52",
        "content": "kyc vermeden btc almak zorlaşıyor, p2p pazarları geri geldi. privacy pahalılaşıyor.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2018,
        "author": "node operator",
        "date": "08.06.2026 13:59",
        "content": "kendi node'um var, mempool'u kendim doğruluyorum. gurur duyuyorum, disk alanı da gidiyor.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2019,
        "author": "utxo sayan",
        "date": "07.06.2026 14:06",
        "content": "utxo sayısı artıyor, küçük cüzdanlar birikiyor demek. dağılım sağlıklı görünüyor.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2020,
        "author": "cypherpunk ruhu",
        "date": "06.06.2026 15:13",
        "content": "cypherpunk manifestoyu okuyunca btc sadece coin değil hareket. felsefe satın alıyorsun bir nevi.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2021,
        "author": "kripto arkeolog",
        "date": "05.06.2026 16:20",
        "content": "2013'ten kalma forum postları okuyorum, aynı argümanlar dönüyor. tarih tekerrür ediyor.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2022,
        "author": "babalardan kalma hodler",
        "date": "04.06.2026 17:27",
        "content": "babam 2017'de almış unutmuş, 2021'de hatırladı. nesil farkı, şans faktörü de var tabii.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2023,
        "author": "etf izleyici",
        "date": "03.06.2026 18:34",
        "content": "spot etf giriş çıkışları günlük haber oldu, kurumsal dönem başladı. perakende hâlâ var ama pay küçülüyor mu?",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2024,
        "author": "mempool gözcüsü",
        "date": "02.06.2026 19:41",
        "content": "mempool doluyken fee spike oluyor, acil transfer yapma o saatlerde. sabır tasarruf sağlar.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2025,
        "author": "fiat exit plan",
        "date": "01.06.2026 08:48",
        "content": "fiat'tan çıkış planım: maaşın yüzde onu düzenli btc, üç yıldır devam. dca disiplin ister.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2026,
        "author": "blockchain notları",
        "date": "31.05.2026 09:55",
        "content": "blockchain'e bakmadan fiyat konuşmak eksik analiz. on-chain metrikler ücretsiz.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2027,
        "author": "btc maksimalist",
        "date": "30.05.2026 10:02",
        "content": "btc maksimalist olmak moda değil, alternatifleri denedikten sonra gelen sonuç bazen.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2028,
        "author": "yarım btc kulübü",
        "date": "29.05.2026 11:09",
        "content": "yarım btc hedefi koydum, uzun yol. küçük birikimler birikir.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2029,
        "author": "sovereign individual",
        "date": "11.06.2026 12:16",
        "content": "sovereign individual kitabını okuyunca btc'nin yeri netleşti. devlet para birimi riski.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2030,
        "author": "halving partisi",
        "date": "10.06.2026 13:23",
        "content": "halving partisi yapıp sonra düşüşte ağlayanları gördüm. volatilite eğlence paketi.",
        "truncated": false,
        "hasSeyler": false
      }
    ]
  },
  "ethereum": {
    "title": "ethereum",
    "coinId": "ethereum",
    "entries": [
      {
        "id": 2101,
        "author": "gas fee kurbanı",
        "date": "11.06.2026 08:00",
        "content": "nft mintlemek için 80 dolar gas verdim, eser 30 dolara satıldı. ethereum kullanmak bazen lüks tüketim gibi.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2102,
        "author": "defi çiftçisi",
        "date": "10.06.2026 09:07",
        "content": "merge'den sonra enflasyon düştü, stake edenler düzenli gelir görüyor.",
        "truncated": true,
        "hasSeyler": false,
        "fullContent": "merge'den sonra enflasyon düştü, stake edenler düzenli gelir görüyor. ama unutmayın akıllı kontrat riski hâlâ var. aprs %20 diye girdiğin protokol ertesi gün exploit yiyebilir. dyor yapmadan girme."
      },
      {
        "id": 2103,
        "author": "vitalik okuyucusu",
        "date": "09.06.2026 10:14",
        "content": "ethereum sadece coin değil, programlanabilir bir katman. o yüzden hikâye anlatırken 'eth fiyatı' demek eksik kalıyor.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2104,
        "author": "layer2 göçmeni",
        "date": "08.06.2026 11:21",
        "content": "arbitrum'a taşındım, aynı uygulama onda üçte bir fee. mainnet sadece büyük işlemler için kaldı.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2105,
        "author": "nft mintleyen",
        "date": "07.06.2026 12:28",
        "content": "opensea hype'ı bitti ama nft altyapısı duruyor. utility nft arayışı devam.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2106,
        "author": "smart contract avcısı",
        "date": "06.06.2026 13:35",
        "content": "yeni çıkan token kontratını okumadan girme, rug klasik. honeypot tuzağına dikkat.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2107,
        "author": "stake eden emekli",
        "date": "05.06.2026 14:42",
        "content": "stake ettim çekemiyorum mu diye sordum, kilitleme yok rahat. getiri makul.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2108,
        "author": "mev kovalayan",
        "date": "04.06.2026 15:49",
        "content": "sandwich attack yedim, slippage ayarını sıkı tutun. mev oyunu retail için zor.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2109,
        "author": "eip takipçisi",
        "date": "03.06.2026 16:56",
        "content": "eip takvimine bakıyorum, protokol güncellemeleri fiyatı etkiler. teknik takip şart.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2110,
        "author": "uniswap likiditeci",
        "date": "02.06.2026 17:03",
        "content": "uniswap v3'de likidite sağladım, impermanent loss gerçek. matematiği anlamadan girme.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2111,
        "author": "dao oy kullanan",
        "date": "01.06.2026 18:10",
        "content": "dao oylamasına katıldım, quorum tutmadı boşa gitti. katılım düşük olunca karar çıkmıyor.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2112,
        "author": "rollup meraklısı",
        "date": "31.05.2026 19:17",
        "content": "zk rollup mu optimistic mi tartışması bitmiyor. ikisi de yaşayacak gibi.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2113,
        "author": "eth deney laboratuvarı",
        "date": "30.05.2026 08:24",
        "content": "testnette denedim mainnette param gitti, klasik hata. adres kontrolü hayat kurtarır.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2114,
        "author": "gas tracker",
        "date": "29.05.2026 09:31",
        "content": "gas 20 gwei altına inince işlem yapıyorum, sabır tasarruf sağlar.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2115,
        "author": "erc20 koleksiyoner",
        "date": "11.06.2026 10:38",
        "content": "airdrop avcısı oldum, bir sürü cüzdan açtım, sonuç belirsiz. sybil filtresi artıyor.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2116,
        "author": "merge sonrası nesil",
        "date": "10.06.2026 11:45",
        "content": "merge'i izlerken heyecandan uyuyamadım, tarihi gündü. proof of stake geçişi tamamlandı.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2117,
        "author": "l2 bridge kullanan",
        "date": "09.06.2026 12:52",
        "content": "bridge hack haberi gelince l2'deki paramı çıkardım. köprü riski ciddi.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2118,
        "author": "solidity öğrencisi",
        "date": "08.06.2026 13:59",
        "content": "solidity tutorial bitirdim, hello world kontrat deploy ettim. bug bounty hedefi.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2119,
        "author": "eth global izleyici",
        "date": "07.06.2026 14:06",
        "content": "ethglobal demo günlerinde proje fikirleri coşuyor. geliştirici enerjisi yüksek.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2120,
        "author": "restaking tartışmacı",
        "date": "06.06.2026 15:13",
        "content": "restaking tartışması güvenlik mi ek risk mi, henüz net değil. yeni primitive dikkat ister.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2121,
        "author": "blob space okuyucu",
        "date": "05.06.2026 16:20",
        "content": "blob space ile l2 fee düşecek deniyor, bekleyip göreceğiz. kullanıcı fayda görmeli.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2122,
        "author": "validator queue",
        "date": "04.06.2026 17:27",
        "content": "validator kuyruğu uzayınca stake gecikmesi yaşandı. talep yüksek.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2123,
        "author": "eth btc flippening",
        "date": "03.06.2026 18:34",
        "content": "flippening yine ertelendi, btc dominance inatçı. eth ekosistem büyüse de.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2124,
        "author": "base chain deneyen",
        "date": "02.06.2026 19:41",
        "content": "base'de deneme yaptım, coinbase ekosistemi hızlı büyüyor. merkezileşme eleştirisi var.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2125,
        "author": "gas limit tartışmacı",
        "date": "01.06.2026 08:48",
        "content": "gas limit artışı tartışması miner validator dengesini oynatır. ölçeklenme siyasi.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2126,
        "author": "ens domain sahibi",
        "date": "31.05.2026 09:55",
        "content": "ens domain aldım, web3 kimliğim oldu. yenileme fee unutma.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2127,
        "author": "flash loan kurbanı",
        "date": "30.05.2026 10:02",
        "content": "flash loan ile arbitraj denedim, başaramadım. botlar daha hızlı.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2128,
        "author": "eth denver hayranı",
        "date": "29.05.2026 11:09",
        "content": "ethdenver'dan döndüm, kartvizit yerine farcaster profili verdiler.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2129,
        "author": "lido staker",
        "date": "11.06.2026 12:16",
        "content": "lido ile liquid staking pratik ama merkezileşme endişesi tartışılıyor.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2130,
        "author": "proto danksharding",
        "date": "10.06.2026 13:23",
        "content": "proto-danksharding okuyorum, teknik ama önemli. gelecek upgrade.",
        "truncated": false,
        "hasSeyler": false
      }
    ]
  },
  "solana": {
    "title": "solana",
    "coinId": "solana",
    "entries": [
      {
        "id": 2201,
        "author": "tps meraklısı",
        "date": "11.06.2026 08:00",
        "content": "hız konusunda gerçekten fark ediyor. cüzdan açıp swap yapmak birkaç saniye. ama geçmişteki kesintileri unutmamak lazım.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2202,
        "author": "meme coin avcısı",
        "date": "10.06.2026 09:07",
        "content": "yeni token çıkıyor, 10 dakika içinde ya moon ya rug. solana ekosistemi eğlenceli ama uyku uyumuyorsun.",
        "truncated": true,
        "hasSeyler": false,
        "fullContent": "yeni token çıkıyor, 10 dakika içinde ya moon ya rug. solana ekosistemi eğlenceli ama uyku uyumuyorsun. bir gece uyuyup uyanınca portföyün yarısı gitmiş olabiliyor. sadece kaybetmeyi göze aldığın parayla oyna."
      },
      {
        "id": 2203,
        "author": "validator notları",
        "date": "09.06.2026 10:14",
        "content": "ağ durdu haberi gelince twitter çöktü, klasik. uptime istatistikleri iyileşti ama.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2204,
        "author": "phantom cüzdan",
        "date": "08.06.2026 11:21",
        "content": "phantom ile mobile'de rahat, ux iyi. seed backup unutma.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2205,
        "author": "jupiter swapper",
        "date": "07.06.2026 12:28",
        "content": "jupiter en iyi aggregator, route buluyor. slippage ayarla.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2206,
        "author": "sol summer veteran",
        "date": "06.06.2026 13:35",
        "content": "sol summer 2021'i özleyenler burada mı? o dönem herkes validator oldu.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2207,
        "author": "outage hatırlayan",
        "date": "05.06.2026 14:42",
        "content": "outage haberinde panik satış yapanlar pişman oldu mu? genelde toparlanıyor ama güven sarsılıyor.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2208,
        "author": "nft compress",
        "date": "04.06.2026 15:49",
        "content": "compressed nft ile ucuz mint denedim, ilginç teknoloji. depolama verimli.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2209,
        "author": "raydium likidite",
        "date": "03.06.2026 16:56",
        "content": "raydium'da likidite koydum, apr cazip ama impermanent loss var.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2210,
        "author": "sol mobile",
        "date": "02.06.2026 17:03",
        "content": "sol mobile cüzdan telefonla entegre, gelecek mi emin değilim.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2211,
        "author": "firedancer bekleyen",
        "date": "01.06.2026 18:10",
        "content": "firedancer çıkınca client çeşitliliği artacak deniyor. tek client riski azalır.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2212,
        "author": "priority fee ayarlayan",
        "date": "31.05.2026 19:17",
        "content": "priority fee vermezsen işlem pending kalıyor yoğun saatte. jito tip işe yarıyor.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2213,
        "author": "saga telefon",
        "date": "30.05.2026 08:24",
        "content": "saga telefon alan var mı gerçekten, pahalı deney. crypto phone hype.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2214,
        "author": "pump fun gözlemci",
        "date": "29.05.2026 09:31",
        "content": "pump fun akışı izlemek sosyal medya gibi oldu. dikkat dağıtıcı.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2215,
        "author": "solana pay deneyen",
        "date": "11.06.2026 10:38",
        "content": "solana pay ile pos denemesi yapan dükkan gördüm. adoption yavaş ama var.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2216,
        "author": "helius rpc",
        "date": "10.06.2026 11:45",
        "content": "rpc değiştirdim hız arttı, altyapı önemli. ücretsiz rpc limitli.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2217,
        "author": "marinade stake",
        "date": "09.06.2026 12:52",
        "content": "marinade ile liquid stake, pratik. unstake süresine bak.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2218,
        "author": "wormhole kullanan",
        "date": "08.06.2026 13:59",
        "content": "wormhole bridge geçmişi tartışmalı ama kullanılıyor. miktar küçük tut.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2219,
        "author": "sol degen",
        "date": "07.06.2026 14:06",
        "content": "degen season'da her gün yeni ticker. disiplin yoksa batarsın.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2220,
        "author": "block time fan",
        "date": "06.06.2026 15:13",
        "content": "400ms block time marketing değil hissediliyor. retail için iyi.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2221,
        "author": "jito tip veren",
        "date": "05.06.2026 16:20",
        "content": "jito tip verince işlem öne geçti, mempool oyunu burada da var.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2222,
        "author": "solana hft",
        "date": "04.06.2026 17:27",
        "content": "botlar hft yapıyor retail zorlanıyor. front-run riski.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2223,
        "author": "community mod",
        "date": "03.06.2026 18:34",
        "content": "discord modu olmak sol ekosistemde stresli. scam dm yağmur.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2224,
        "author": "sol atlas okuyucu",
        "date": "02.06.2026 19:41",
        "content": "solana docs okuyunca rust öğrenmek şart gibi. entry barrier yüksek.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2225,
        "author": "break point izleyici",
        "date": "01.06.2026 08:48",
        "content": "breakpoint konferansından hype gelir, fiyat oynar. haber trade dikkat.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2226,
        "author": "tensor nft",
        "date": "31.05.2026 09:55",
        "content": "tensor nft marketplace hacmi artıyor mu takip ediyorum.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2227,
        "author": "drift protocol",
        "date": "30.05.2026 10:02",
        "content": "drift protocol perp denedim, likidasyon dikkat.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2228,
        "author": "sol incinerator",
        "date": "29.05.2026 11:09",
        "content": "sol incinerator ile scam token temizledim, fee küçük.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2229,
        "author": "bonk holder",
        "date": "11.06.2026 12:16",
        "content": "bonk community aktif, meme coin ama ekosistem etkisi oldu.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2230,
        "author": "sol network status",
        "date": "10.06.2026 13:23",
        "content": "network status twitter hesabını takip et, outage anında bilgi.",
        "truncated": false,
        "hasSeyler": false
      }
    ]
  },
  "binancecoin": {
    "title": "bnb",
    "coinId": "binancecoin",
    "entries": [
      {
        "id": 2301,
        "author": "bsc survivor",
        "date": "11.06.2026 08:00",
        "content": "bnb ile bsc'de işlem yapmak ucuz, evet. ama merkezileşme eleştirisi de boş değil. binance'ın gölgesinde büyüyen ekosistem.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2302,
        "author": "launchpad takipçisi",
        "date": "10.06.2026 09:07",
        "content": "ieo dönemlerinde bnb tutmak mantıklı geliyordu, şimdi her yeni proje aynı hikâyeyi satıyor.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2303,
        "author": "fee discount hesaplayıcı",
        "date": "09.06.2026 10:14",
        "content": "komisyon indirimi için bnb tutuyorsan aslında borsaya sadakat primi ödüyorsun.",
        "truncated": true,
        "hasSeyler": false,
        "fullContent": "komisyon indirimi için bnb tutuyorsan aslında borsaya sadakat primi ödüyorsun. matematiği yap, bazen indirim bile kâr sayılmıyor. küçük hacimde bnb almak anlamsız olabiliyor."
      },
      {
        "id": 2304,
        "author": "cz timeline",
        "date": "08.06.2026 11:21",
        "content": "regülasyon haberleri bnb'yi oynatıyor, borsa tokeni riski. coğrafi kısıtlamalar artıyor.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2305,
        "author": "pancakeswap user",
        "date": "07.06.2026 12:28",
        "content": "pancakeswap hâlâ en çok kullanılan dex bsc'de. v3 geçişi oldu mu bak.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2306,
        "author": "binance earn",
        "date": "06.06.2026 13:35",
        "content": "earn'de flexible locked karışık, faiz cazip. counterparty risk unutma.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2307,
        "author": "bsc scan okuyucu",
        "date": "05.06.2026 14:42",
        "content": "bscscan'da kontrat okumadan approve verme. unlimited approve tehlikeli.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2308,
        "author": "opbnb deneyen",
        "date": "04.06.2026 15:49",
        "content": "opbnb l2 denemesi fee daha da düşük. ekosistem genişliyor.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2309,
        "author": "bnb chain validator",
        "date": "03.06.2026 16:56",
        "content": "validator olmak için stake eşiğine bakın. merkezileşme yüksek pool'larda.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2310,
        "author": "launchpool farmer",
        "date": "02.06.2026 17:03",
        "content": "launchpool'da tarla yapıyorum düşük risk gibi. yine de token dump edebilir.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2311,
        "author": "megadrop avcısı",
        "date": "01.06.2026 18:10",
        "content": "megadrop yeni projeler dağıtıyor, kuralları oku. sybil engeli var.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2312,
        "author": "binance card",
        "date": "31.05.2026 19:17",
        "content": "binance card türkiye'de durumu değişken, takip et.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2313,
        "author": "futures dikkat",
        "date": "30.05.2026 08:24",
        "content": "futures kaldıraçlı oynama bnb'de de aynı risk. likidasyon hızlı.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2314,
        "author": "safu inanan",
        "date": "29.05.2026 09:31",
        "content": "safu sloganı esprili ama hack geçmişi unutulmamalı. borsada tutma süresi minimize.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2315,
        "author": "bnb burn takipçisi",
        "date": "11.06.2026 10:38",
        "content": "quarterly burn haberi gelince kısa vadeli pump olur. kalıcı mı tartışılır.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2316,
        "author": "compliance tartışmacı",
        "date": "10.06.2026 11:45",
        "content": "compliance baskısı artınca delist dalgası gelir. hangi coin next?",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2317,
        "author": "alpha token avcısı",
        "date": "09.06.2026 12:52",
        "content": "binance alpha yeni listing avcıları için. erken gir çık.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2318,
        "author": "binance academy",
        "date": "08.06.2026 13:59",
        "content": "academy içerikleri başlangıç için iyi. ileri seviye sınırlı.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2319,
        "author": "vip seviye meraklı",
        "date": "07.06.2026 14:06",
        "content": "vip seviye fee indirimi büyük hacimde anlamlı. retail fark etmez.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2320,
        "author": "bsc meme avcısı",
        "date": "06.06.2026 15:13",
        "content": "bsc meme coinleri hızlı doğar hızlı ölür. rugpull klasik.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2321,
        "author": "bridge bnb",
        "date": "05.06.2026 16:20",
        "content": "bridge ile eth'den bsc'ye geçtim, fee düşük. köprü riski var.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2322,
        "author": "trust wallet",
        "date": "04.06.2026 17:27",
        "content": "trust wallet seed'i kimseyle paylaşma. fake support dolandırıcı.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2323,
        "author": "binance square",
        "date": "03.06.2026 18:34",
        "content": "binance square feed'i gürültülü ama bilgi var. sinyal gürültüden ayır.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2324,
        "author": "lista dao",
        "date": "02.06.2026 19:41",
        "content": "lista dao lending denedim. faiz oranları değişken.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2325,
        "author": "bsc gas düşük",
        "date": "01.06.2026 08:48",
        "content": "bsc gas 3 gwei'i görünce mutlu oldum. eth mainnet'e göre cennet.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2326,
        "author": "bnb vault",
        "date": "31.05.2026 09:55",
        "content": "bnb vault otomatik birikim, pratik. faiz bnb cinsinden.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2327,
        "author": "auto invest",
        "date": "30.05.2026 10:02",
        "content": "auto invest dca gibi, disiplin sağlar.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2328,
        "author": "binance p2p",
        "date": "29.05.2026 11:09",
        "content": "p2p ile tl'den bnb aldım, dolandırıcıya dikkat. escrow kullan.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2329,
        "author": "dual investment",
        "date": "11.06.2026 12:16",
        "content": "dual investment structured product, risk anla.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2330,
        "author": "bsc rug detective",
        "date": "10.06.2026 13:23",
        "content": "bsc'de rug detective olmak full time iş. honeypot scan şart.",
        "truncated": false,
        "hasSeyler": false
      }
    ]
  },
  "ripple": {
    "title": "xrp",
    "coinId": "ripple",
    "entries": [
      {
        "id": 2401,
        "author": "sec davası izleyicisi",
        "date": "11.06.2026 08:00",
        "content": "yıllardır dava gündemde, xrp topluluğu her karar sonrası kutlama yapıyor. regülasyon netleşene kadar fiyat haber odaklı kalır.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2402,
        "author": "bankacı kökenli yazar",
        "date": "10.06.2026 09:07",
        "content": "swift alternatifi olma iddiası eskiden daha güçlü anlatılıyordu. yine de cross-border pilot projeler devam ediyor.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2403,
        "author": "topluluk veteranı",
        "date": "09.06.2026 10:14",
        "content": "2017'den beri 'bankalar geliyor' diyenleri tanırım. ama sabırlı kalanlar için xrp hâlâ ilk 10'da.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2404,
        "author": "xrp ledger dev",
        "date": "08.06.2026 11:21",
        "content": "xrpl consensus farklı, mining yok. enerji tartışması btc'ye göre farklı.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2405,
        "author": "rlusd meraklısı",
        "date": "07.06.2026 12:28",
        "content": "rlusd stablecoin duyurusu xrp ekosistemini büyütür mü? regülasyonlu stable ilgi çeker.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2406,
        "author": "ripple odası",
        "date": "06.06.2026 13:35",
        "content": "ripple odası lobici güç, sektör ilişkileri. siyasi risk de var.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2407,
        "author": "xrapid hatırlayan",
        "date": "05.06.2026 14:42",
        "content": "xrapid pilotları unutuldu mu, hâlâ referans var. utility gerçek mi spekülasyon mu tartışılır.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2408,
        "author": "hodor 2017",
        "date": "04.06.2026 15:49",
        "content": "hodor memesi xrp tarihinin parçası. community kültürü güçlü.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2409,
        "author": "xrp army",
        "date": "03.06.2026 16:56",
        "content": "xrp army twitter'da gürültülü ama sadık. echo chamber riski.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2410,
        "author": "escrow unlock takip",
        "date": "02.06.2026 17:03",
        "content": "escrow unlock takvimine bakıyorum arz baskısı tartışması. schedule şeffaf.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2411,
        "author": "judge torres fan",
        "date": "01.06.2026 18:10",
        "content": "torres kararı sonrası borsalar relist etti. likidite arttı.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2412,
        "author": "cross border ödeme",
        "date": "31.05.2026 19:17",
        "content": "cross border ödeme hızlı ama banka entegrasyonu yavaş. kurumsal satış döngüsü uzun.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2413,
        "author": "xumm cüzdan",
        "date": "30.05.2026 08:24",
        "content": "xumm ile self custody kolay. qr ödeme pratik.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2414,
        "author": "xrpl nft",
        "date": "29.05.2026 09:31",
        "content": "xrpl üzerinde nft denemesi yaptım, fee düşük.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2415,
        "author": "xrp debatçı",
        "date": "11.06.2026 10:38",
        "content": "xrp centralization tartışması bitmiyor. validator listesi incele.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2416,
        "author": "regülasyon okuyucu",
        "date": "10.06.2026 11:45",
        "content": "regülasyon netleşince kurumsal ilgi artar deniyor. belirsizlik fiyatı baskılıyor.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2417,
        "author": "xrp chartçı",
        "date": "09.06.2026 12:52",
        "content": "grafikte üçgen mi wedge mi her gün yeni analiz. teknik analiz yanıltır bazen.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2418,
        "author": "bank partnership",
        "date": "08.06.2026 13:59",
        "content": "bank partnership haberi pump yaratır, doğrulanana kadar bekle. marketing vs gerçek.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2419,
        "author": "xrp node",
        "date": "07.06.2026 14:06",
        "content": "node kurmak düşük maliyetli. katılım teşvik edilir.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2420,
        "author": "xrp tip bot",
        "date": "06.06.2026 15:13",
        "content": "tip bot ile xrp gönderdim eğlenceli. mikro ödeme use case.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2421,
        "author": "xrp ledger amm",
        "date": "05.06.2026 16:20",
        "content": "amm xrpl'e geldi dex'i güçlendirdi. uniswap benzeri ama farklı.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2422,
        "author": "xrp escrow",
        "date": "04.06.2026 17:27",
        "content": "escrow mekanizması arz yönetimi için. ripple'a güven meselesi.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2423,
        "author": "xrp listing",
        "date": "03.06.2026 18:34",
        "content": "yeni borsa listing'i kısa vadeli hareket. kalıcı etki tartışılır.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2424,
        "author": "xrp bear survivor",
        "date": "02.06.2026 19:41",
        "content": "bear market survivor xrp tuttu ve bekledi. psikolojik test.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2425,
        "author": "xrp utility",
        "date": "01.06.2026 08:48",
        "content": "utility odaklı coin mi spekülasyon mu hâlâ tartışılıyor. use case bankacılık.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2426,
        "author": "ripple net",
        "date": "31.05.2026 09:55",
        "content": "ripple net ödeme ağı genişliyor mu haberleri takip.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2427,
        "author": "xrp kimlik",
        "date": "30.05.2026 10:02",
        "content": "xrp kimlik tartışması toplulukta duyarlı konu.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2428,
        "author": "xrp ledger hooks",
        "date": "29.05.2026 11:09",
        "content": "hooks özelliği smart contract benzeri, gelişme var.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2429,
        "author": "xrp community fund",
        "date": "11.06.2026 12:16",
        "content": "community fund projeleri destekliyor, ekosistem.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2430,
        "author": "xrp ledger explorer",
        "date": "10.06.2026 13:23",
        "content": "ledger explorer ile işlem doğruladım, şeffaf.",
        "truncated": false,
        "hasSeyler": false
      }
    ]
  },
  "dogecoin": {
    "title": "dogecoin",
    "coinId": "dogecoin",
    "entries": [
      {
        "id": 2501,
        "author": "much wow",
        "date": "11.06.2026 08:00",
        "content": "şaka coin diye başladı, ciddi portföylerde yer edindi. fundamentals az ama likidite var, topluluk var.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2502,
        "author": "elon timeline kurbanı",
        "date": "10.06.2026 09:07",
        "content": "bir mavi kuş emojisi atınca %15 yükselmesi normal mi? normal değil ama doge'de oluyor. risk yönetimi olmadan girmeyin.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2503,
        "author": "kabosu anısı",
        "date": "09.06.2026 10:14",
        "content": "meme kültürünün kripto versiyonu. teknik analiz yaparken kendini ciddiye alma.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2504,
        "author": "doge tip master",
        "date": "08.06.2026 11:21",
        "content": "reddit tip botları eski günler. nostalji güzel.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2505,
        "author": "shiba vs doge",
        "date": "07.06.2026 12:28",
        "content": "shiba ile kıyaslayanlar her gün. farklı community farklı vibe.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2506,
        "author": "doge mining 2014",
        "date": "06.06.2026 13:35",
        "content": "2014 mining denemesi gpu ile. elektrik faturası şaka değildi.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2507,
        "author": "doge community",
        "date": "05.06.2026 14:42",
        "content": "community en güçlü yan, toxicity düşük. eğlence ön planda.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2508,
        "author": "doge chart meme",
        "date": "04.06.2026 15:49",
        "content": "teknik analiz doge'de ciddiye alınmamalı bazen. meme faktörü baskın.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2509,
        "author": "doge to the moon",
        "date": "03.06.2026 16:56",
        "content": "to the moon sloganı buradan çıktı sayılır. kültür export.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2510,
        "author": "doge inflation",
        "date": "02.06.2026 17:03",
        "content": "enflasyonlu arz var ama yıllık oran düştü. sonsuz arz yok artık sınırlı enflasyon.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2511,
        "author": "doge payment",
        "date": "01.06.2026 18:10",
        "content": "birkaç dükkan doge kabul ediyor hâlâ. adoption niş.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2512,
        "author": "doge whale watch",
        "date": "31.05.2026 19:17",
        "content": "whale wallet hareketi twitter'a düşer. panik gereksiz çoğu zaman.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2513,
        "author": "doge reddit",
        "date": "30.05.2026 08:24",
        "content": "reddit r/dogecoin hâlâ aktif. meme paylaşım merkezi.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2514,
        "author": "doge faucet",
        "date": "29.05.2026 09:31",
        "content": "faucet'tan ilk doge'mu aldım nostalji. o günler bitti.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2515,
        "author": "doge charity",
        "date": "11.06.2026 10:38",
        "content": "jamaica bobsled charity unutulmaz. crypto ile hayır örneği.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2516,
        "author": "doge core dev",
        "date": "10.06.2026 11:45",
        "content": "core dev gönüllü çalışıyor ilginç model. bitcoin fork kökeni.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2517,
        "author": "doge merge mining",
        "date": "09.06.2026 12:52",
        "content": "merge mining litecoin ile. teknik detay.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2518,
        "author": "doge paper hands",
        "date": "08.06.2026 13:59",
        "content": "paper hands diye satanlar pişman oldu mu? meme coin volatil.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2519,
        "author": "doge diamond",
        "date": "07.06.2026 14:06",
        "content": "diamond hands meme'i doge ile özdeş. kültürel miras.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2520,
        "author": "doge festival",
        "date": "06.06.2026 15:13",
        "content": "dogecoin festival etkinlikleri var mı hâlâ? community buluşması.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2521,
        "author": "doge twitter",
        "date": "05.06.2026 16:20",
        "content": "twitter'da doge army aktif. hashtag gücü.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2522,
        "author": "doge baba",
        "date": "04.06.2026 17:27",
        "content": "baba coin diye aldıranlar oldu maalesef. finansal tavsiye değil eğlence.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2523,
        "author": "doge analiz",
        "date": "03.06.2026 18:34",
        "content": "analiz yaparken gülmek serbest. stres azaltır.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2524,
        "author": "doge hodl",
        "date": "02.06.2026 19:41",
        "content": "hodl yazısı profil fotoğrafında. identity marker.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2525,
        "author": "doge fun",
        "date": "01.06.2026 08:48",
        "content": "fun olarak tutmak en sağlıklısı. hayat kurtarır.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2526,
        "author": "doge rocket",
        "date": "31.05.2026 09:55",
        "content": "rocket emoji kullanımı zorunlu gibi hissettiriyorlar bazen.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2527,
        "author": "doge meme lord",
        "date": "30.05.2026 10:02",
        "content": "meme lord olmak doge community'de unvan.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2528,
        "author": "doge such profit",
        "date": "29.05.2026 11:09",
        "content": "such profit very wow eski format hâlâ güldürüyor.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2529,
        "author": "doge veteran 2014",
        "date": "11.06.2026 12:16",
        "content": "2014 veteran'ım diyenler var, saygı duyulur.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2530,
        "author": "doge tipping tuesday",
        "date": "10.06.2026 13:23",
        "content": "tipping tuesday geleneği vardı, güzel tradisyon.",
        "truncated": false,
        "hasSeyler": false
      }
    ]
  },
  "cardano": {
    "title": "cardano",
    "coinId": "cardano",
    "entries": [
      {
        "id": 2601,
        "author": "peer review bekleyen",
        "date": "11.06.2026 08:00",
        "content": "yavaş gelişiyor ama akademik yaklaşım ciddi. 'yayın yok mu' diye soranlara github commit grafiğini gösteriyorum.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2602,
        "author": "staking notları",
        "date": "10.06.2026 09:07",
        "content": "ada stake etmek kolay, dondurma yok. getiri makul ama fiyat performansı son dönemde zayıf kaldı.",
        "truncated": true,
        "hasSeyler": false,
        "fullContent": "ada stake etmek kolay, dondurma yok. getiri makul ama fiyat performansı son dönemde zayıf kaldı. teknoloji ile fiyat her zaman aynı hızda gitmiyor. uzun vade düşünüyorsan izlemeye devam."
      },
      {
        "id": 2603,
        "author": "hydra meraklısı",
        "date": "09.06.2026 10:14",
        "content": "ölçeklenme çözümleri gecikmeli gelse de ekosistem büyüyor. afrika tarafındaki kullanım örnekleri underrated.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2604,
        "author": "charles stream",
        "date": "08.06.2026 11:21",
        "content": "hydra layer2 testnet sonuçları umut verici. tps artışı hedef.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2605,
        "author": "ada delegator",
        "date": "07.06.2026 12:28",
        "content": "charles yayın açınca ada oynar mı hâlâ? community etkileşimi yüksek.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2606,
        "author": "plutus öğrencisi",
        "date": "06.06.2026 13:35",
        "content": "delegasyon yaparken pool margin fee bak. küçük fark birikir.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2607,
        "author": "cardano africa",
        "date": "05.06.2026 14:42",
        "content": "plutus öğrenmek zor ama güvenli kontrat hedefi. haskell barrier.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2608,
        "author": "midnight bekleyen",
        "date": "04.06.2026 15:49",
        "content": "midnight privacy chain bekleniyor. zk hype.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2609,
        "author": "catalyst voter",
        "date": "03.06.2026 16:56",
        "content": "catalyst oylamasına proje gönderdim. treasury dağıtımı demokratik.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2610,
        "author": "ada wallet",
        "date": "02.06.2026 17:03",
        "content": "yoroi eternl cüzdan karşılaştırması yapıyorum. ux farkları var.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2611,
        "author": "eutxo anlayan",
        "date": "01.06.2026 18:10",
        "content": "eutxo modeli bitcoin'den farklı kavram. öğrenme eğrisi.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2612,
        "author": "cardano summit",
        "date": "31.05.2026 19:17",
        "content": "summit duyuruları hype yaratır. roadmap takip.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2613,
        "author": "ada bear",
        "date": "30.05.2026 08:24",
        "content": "bear market ada tutanlar sabırlı. diamond hands test.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2614,
        "author": "iohk blog",
        "date": "29.05.2026 09:31",
        "content": "iohk blog teknik okuyunca anlaşılıyor. marketing değil research.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2615,
        "author": "ada native token",
        "date": "11.06.2026 10:38",
        "content": "native token mint ettim ada ile. low fee.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2616,
        "author": "cardano dex",
        "date": "10.06.2026 11:45",
        "content": "sundae minswap dex hacmi artıyor mu? likidite düşük olabilir.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2617,
        "author": "ada stake pool",
        "date": "09.06.2026 12:52",
        "content": "stake pool seçerken uptime önemli. missed block ceza.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2618,
        "author": "alonzo sonrası",
        "date": "08.06.2026 13:59",
        "content": "alonzo smart contract çağı başladı. geç kaldık mı tartışması bitti mi?",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2619,
        "author": "ada chart",
        "date": "07.06.2026 14:06",
        "content": "grafikte uzun süre yatay ada. birikim dönemi mi?",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2620,
        "author": "cardano git",
        "date": "06.06.2026 15:13",
        "content": "github commit sayısı ciddi. developer activity metrik.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2621,
        "author": "ada community",
        "date": "05.06.2026 16:20",
        "content": "community toxic değil sakin. farklı vibe.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2622,
        "author": "voltaire faz",
        "date": "04.06.2026 17:27",
        "content": "voltaire on-chain governance geliyor. drep delegasyonu yeni.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2623,
        "author": "ada drep",
        "date": "03.06.2026 18:34",
        "content": "drep delegasyonu yeni kavram, öğreniyoruz.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2624,
        "author": "cardano nft",
        "date": "02.06.2026 19:41",
        "content": "cardano nft projeleri sessiz ama var.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2625,
        "author": "ada uzun vade",
        "date": "01.06.2026 08:48",
        "content": "uzun vade düşünüyorsan izlemeye devam. sabır cardano'da erdem.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2626,
        "author": "ouroboros okuyucu",
        "date": "31.05.2026 09:55",
        "content": "ouroboros protokolü okuyunca güven artıyor. formal verification.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2627,
        "author": "ada halving yok",
        "date": "30.05.2026 10:02",
        "content": "halving yok ada'da, arz schedule farklı.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2628,
        "author": "cardano hydra head",
        "date": "29.05.2026 11:09",
        "content": "hydra head kavramı teknik ama ölçeklenme anahtarı.",
        "truncated": false,
        "hasSeyler": false
      },
      {
        "id": 2629,
        "author": "ada governance",
        "date": "11.06.2026 12:16",
        "content": "governance oylamasına katılmak vatandaşlık gibi.",
        "truncated": false,
        "hasSeyler": true
      },
      {
        "id": 2630,
        "author": "shelley era",
        "date": "10.06.2026 13:23",
        "content": "shelley era'dan beri stake ediyorum. alışkanlık oldu.",
        "truncated": false,
        "hasSeyler": false
      }
    ]
  }
};

export function getCryptoTopicData(coinId) {
  return cryptoTopicsData[coinId] ?? null;
}

export function getCryptoTopicByTitle(title) {
  const coinId = getCryptoIdFromTitle(title);
  if (!coinId) return null;
  return cryptoTopicsData[coinId];
}
