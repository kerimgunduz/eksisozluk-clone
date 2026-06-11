import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const coinConfigs = {
  bitcoin: {
    title: "bitcoin",
    baseId: 2000,
    authors: [
      "satoshi fan club",
      "lazer gozluklu analist",
      "fiat is a shitcoin",
      "halving bekleyen",
      "soğuk cüzdan abi",
      "lightning deneyicisi",
      "on-chain dedektif",
      "beyaz kağıt okuyucu",
      "21 milyon klübü",
      "hash rate takipçisi",
      "block reward avcısı",
      "taproot meraklısı",
      "mining rig emekçisi",
      "borsa degil cüzdan",
      "orange pill dağıtıcı",
      "s2f chartçı",
      "kimlik gizleyen",
      "node operator",
      "utxo sayan",
      "cypherpunk ruhu",
      "kripto arkeolog",
      "babalardan kalma hodler",
      "etf izleyici",
      "mempool gözcüsü",
      "fiat exit plan",
      "blockchain notları",
      "btc maksimalist",
      "yarım btc kulübü",
      "sovereign individual",
      "halving partisi",
    ],
    snippets: [
      [
        "21 milyon tavanı olan tek varlık bu. her halving'de aynı tartışma: 'bu sefer bitti mi?' diyorlar, sonra bir sene sonra pişmanlık tweetleri geliyor. zincir üstü veriye bak, uzun vadeli tutanlar hâlâ kazanıyor.",
        false,
      ],
      [
        "etf akışları piyasayı kurumsallaştırdı ama volatilite bitmedi. 5 dakikalık grafikte dünya yıkılıyormuş gibi hissettirip haftaya yeni ath diyenler aynı kişiler.",
        true,
        " bitcoin trade etmek değil, bitcoin biriktirmek daha az stresli. soğuk cüzdanda tutup unutmak en iyi strateji olabilir.",
      ],
      [
        "merkez bankası para basarken sen enflasyonu kabul edip btc'ye 'balon' diyemezsin. en azından arzı şeffaf. banka hesabındaki tl'nin arz tablosunu göster bakalım.",
        false,
      ],
      [
        "halving sonrası madenci satış baskısı azalır diye bekliyorduk, piyasa yine sürpriz yaptı. makroekonomi her şeyi ezer.",
        false,
      ],
      [
        "hardware wallet aldım, seed'i metal plağa yazdım. paranoia mı? belki. ama borsa hack'i haberini okuyunca haklı çıktım.",
        false,
      ],
      [
        "lightning ile kahve ödedim, fee 1 santim. banka kartı utandı. ancak kanal açmak teknik bilgi istiyor.",
        false,
      ],
      [
        "whale alert hesabını takip ediyorum, büyük transfer görünce twitter'a koşuyorum. çoğu borsa içi transfermiş yine.",
        false,
      ],
      [
        "2008 whitepaper'ı her yıl bir kez okuyorum, her seferinde farklı cümle çarpıyor. satoshi kim sorusu hâlâ açık.",
        false,
      ],
      [
        "21 milyon dolunca ne olacak diye soranlara: scarcity zaten fiyat motoru, madenci fee'ye geçecek.",
        false,
      ],
      [
        "hash rate rekor kırıyor, ağ güvenliği tartışması kapanmış sayılır. enerji tartışması devam eder.",
        false,
      ],
      [
        "block reward yarıya inince madenciler kapandı mı diye bakıyorum, hayır. zorluk ayarı denge sağlıyor.",
        false,
      ],
      [
        "taproot sonrası gizlilik ve verimlilik arttı, çoğu kullanıcı fark etmedi bile. altyapı sessizce güçleniyor.",
        false,
      ],
      [
        "evde mining denedim, elektrik faturası kârı yedi.",
        true,
        " öğrenildi. artık sadece spot alıyorum, mining hobi olarak pahalı.",
      ],
      [
        "borsada tutmak ile cüzdanda tutmak arasında psikolojik uçurum var. 'not your keys not your coins' boş slogan değil.",
        false,
      ],
      [
        "arkadaşıma orange pill verdim, üç ay sonra bana grafik attı. dönüşüm yavaş ama oluyor.",
        false,
      ],
      [
        "stock to flow modeli tutmadı ama uzun vade hikâyesi hâlâ ayakta. modeller değil protokol kalır.",
        false,
      ],
      [
        "kyc vermeden btc almak zorlaşıyor, p2p pazarları geri geldi. privacy pahalılaşıyor.",
        false,
      ],
      [
        "kendi node'um var, mempool'u kendim doğruluyorum. gurur duyuyorum, disk alanı da gidiyor.",
        false,
      ],
      [
        "utxo sayısı artıyor, küçük cüzdanlar birikiyor demek. dağılım sağlıklı görünüyor.",
        false,
      ],
      [
        "cypherpunk manifestoyu okuyunca btc sadece coin değil hareket. felsefe satın alıyorsun bir nevi.",
        false,
      ],
      [
        "2013'ten kalma forum postları okuyorum, aynı argümanlar dönüyor. tarih tekerrür ediyor.",
        false,
      ],
      [
        "babam 2017'de almış unutmuş, 2021'de hatırladı. nesil farkı, şans faktörü de var tabii.",
        false,
      ],
      [
        "spot etf giriş çıkışları günlük haber oldu, kurumsal dönem başladı. perakende hâlâ var ama pay küçülüyor mu?",
        false,
      ],
      [
        "mempool doluyken fee spike oluyor, acil transfer yapma o saatlerde. sabır tasarruf sağlar.",
        false,
      ],
      [
        "fiat'tan çıkış planım: maaşın yüzde onu düzenli btc, üç yıldır devam. dca disiplin ister.",
        false,
      ],
      [
        "blockchain'e bakmadan fiyat konuşmak eksik analiz. on-chain metrikler ücretsiz.",
        false,
      ],
      [
        "btc maksimalist olmak moda değil, alternatifleri denedikten sonra gelen sonuç bazen.",
        false,
      ],
      [
        "yarım btc hedefi koydum, uzun yol. küçük birikimler birikir.",
        false,
      ],
      [
        "sovereign individual kitabını okuyunca btc'nin yeri netleşti. devlet para birimi riski.",
        false,
      ],
      [
        "halving partisi yapıp sonra düşüşte ağlayanları gördüm. volatilite eğlence paketi.",
        false,
      ],
    ],
  },
  ethereum: {
    title: "ethereum",
    baseId: 2100,
    authors: [
      "gas fee kurbanı",
      "defi çiftçisi",
      "vitalik okuyucusu",
      "layer2 göçmeni",
      "nft mintleyen",
      "smart contract avcısı",
      "stake eden emekli",
      "mev kovalayan",
      "eip takipçisi",
      "uniswap likiditeci",
      "dao oy kullanan",
      "rollup meraklısı",
      "eth deney laboratuvarı",
      "gas tracker",
      "erc20 koleksiyoner",
      "merge sonrası nesil",
      "l2 bridge kullanan",
      "solidity öğrencisi",
      "eth global izleyici",
      "restaking tartışmacı",
      "blob space okuyucu",
      "validator queue",
      "eth btc flippening",
      "base chain deneyen",
      "gas limit tartışmacı",
      "ens domain sahibi",
      "flash loan kurbanı",
      "eth denver hayranı",
      "lido staker",
      "proto danksharding",
    ],
    snippets: [
      [
        "nft mintlemek için 80 dolar gas verdim, eser 30 dolara satıldı. ethereum kullanmak bazen lüks tüketim gibi.",
        false,
      ],
      [
        "merge'den sonra enflasyon düştü, stake edenler düzenli gelir görüyor.",
        true,
        " ama unutmayın akıllı kontrat riski hâlâ var. aprs %20 diye girdiğin protokol ertesi gün exploit yiyebilir. dyor yapmadan girme.",
      ],
      [
        "ethereum sadece coin değil, programlanabilir bir katman. o yüzden hikâye anlatırken 'eth fiyatı' demek eksik kalıyor.",
        false,
      ],
      [
        "arbitrum'a taşındım, aynı uygulama onda üçte bir fee. mainnet sadece büyük işlemler için kaldı.",
        false,
      ],
      [
        "opensea hype'ı bitti ama nft altyapısı duruyor. utility nft arayışı devam.",
        false,
      ],
      [
        "yeni çıkan token kontratını okumadan girme, rug klasik. honeypot tuzağına dikkat.",
        false,
      ],
      [
        "stake ettim çekemiyorum mu diye sordum, kilitleme yok rahat. getiri makul.",
        false,
      ],
      [
        "sandwich attack yedim, slippage ayarını sıkı tutun. mev oyunu retail için zor.",
        false,
      ],
      [
        "eip takvimine bakıyorum, protokol güncellemeleri fiyatı etkiler. teknik takip şart.",
        false,
      ],
      [
        "uniswap v3'de likidite sağladım, impermanent loss gerçek. matematiği anlamadan girme.",
        false,
      ],
      [
        "dao oylamasına katıldım, quorum tutmadı boşa gitti. katılım düşük olunca karar çıkmıyor.",
        false,
      ],
      [
        "zk rollup mu optimistic mi tartışması bitmiyor. ikisi de yaşayacak gibi.",
        false,
      ],
      [
        "testnette denedim mainnette param gitti, klasik hata. adres kontrolü hayat kurtarır.",
        false,
      ],
      [
        "gas 20 gwei altına inince işlem yapıyorum, sabır tasarruf sağlar.",
        false,
      ],
      [
        "airdrop avcısı oldum, bir sürü cüzdan açtım, sonuç belirsiz. sybil filtresi artıyor.",
        false,
      ],
      [
        "merge'i izlerken heyecandan uyuyamadım, tarihi gündü. proof of stake geçişi tamamlandı.",
        false,
      ],
      [
        "bridge hack haberi gelince l2'deki paramı çıkardım. köprü riski ciddi.",
        false,
      ],
      [
        "solidity tutorial bitirdim, hello world kontrat deploy ettim. bug bounty hedefi.",
        false,
      ],
      [
        "ethglobal demo günlerinde proje fikirleri coşuyor. geliştirici enerjisi yüksek.",
        false,
      ],
      [
        "restaking tartışması güvenlik mi ek risk mi, henüz net değil. yeni primitive dikkat ister.",
        false,
      ],
      [
        "blob space ile l2 fee düşecek deniyor, bekleyip göreceğiz. kullanıcı fayda görmeli.",
        false,
      ],
      [
        "validator kuyruğu uzayınca stake gecikmesi yaşandı. talep yüksek.",
        false,
      ],
      [
        "flippening yine ertelendi, btc dominance inatçı. eth ekosistem büyüse de.",
        false,
      ],
      [
        "base'de deneme yaptım, coinbase ekosistemi hızlı büyüyor. merkezileşme eleştirisi var.",
        false,
      ],
      [
        "gas limit artışı tartışması miner validator dengesini oynatır. ölçeklenme siyasi.",
        false,
      ],
      [
        "ens domain aldım, web3 kimliğim oldu. yenileme fee unutma.",
        false,
      ],
      [
        "flash loan ile arbitraj denedim, başaramadım. botlar daha hızlı.",
        false,
      ],
      [
        "ethdenver'dan döndüm, kartvizit yerine farcaster profili verdiler.",
        false,
      ],
      [
        "lido ile liquid staking pratik ama merkezileşme endişesi tartışılıyor.",
        false,
      ],
      [
        "proto-danksharding okuyorum, teknik ama önemli. gelecek upgrade.",
        false,
      ],
    ],
  },
  solana: {
    title: "solana",
    baseId: 2200,
    authors: [
      "tps meraklısı",
      "meme coin avcısı",
      "validator notları",
      "phantom cüzdan",
      "jupiter swapper",
      "sol summer veteran",
      "outage hatırlayan",
      "nft compress",
      "raydium likidite",
      "sol mobile",
      "firedancer bekleyen",
      "priority fee ayarlayan",
      "saga telefon",
      "pump fun gözlemci",
      "solana pay deneyen",
      "helius rpc",
      "marinade stake",
      "wormhole kullanan",
      "sol degen",
      "block time fan",
      "jito tip veren",
      "solana hft",
      "community mod",
      "sol atlas okuyucu",
      "break point izleyici",
      "tensor nft",
      "drift protocol",
      "sol incinerator",
      "bonk holder",
      "sol network status",
    ],
    snippets: [
      [
        "hız konusunda gerçekten fark ediyor. cüzdan açıp swap yapmak birkaç saniye. ama geçmişteki kesintileri unutmamak lazım.",
        false,
      ],
      [
        "yeni token çıkıyor, 10 dakika içinde ya moon ya rug. solana ekosistemi eğlenceli ama uyku uyumuyorsun.",
        true,
        " bir gece uyuyup uyanınca portföyün yarısı gitmiş olabiliyor. sadece kaybetmeyi göze aldığın parayla oyna.",
      ],
      [
        "ağ durdu haberi gelince twitter çöktü, klasik. uptime istatistikleri iyileşti ama.",
        false,
      ],
      [
        "phantom ile mobile'de rahat, ux iyi. seed backup unutma.",
        false,
      ],
      [
        "jupiter en iyi aggregator, route buluyor. slippage ayarla.",
        false,
      ],
      [
        "sol summer 2021'i özleyenler burada mı? o dönem herkes validator oldu.",
        false,
      ],
      [
        "outage haberinde panik satış yapanlar pişman oldu mu? genelde toparlanıyor ama güven sarsılıyor.",
        false,
      ],
      [
        "compressed nft ile ucuz mint denedim, ilginç teknoloji. depolama verimli.",
        false,
      ],
      [
        "raydium'da likidite koydum, apr cazip ama impermanent loss var.",
        false,
      ],
      [
        "sol mobile cüzdan telefonla entegre, gelecek mi emin değilim.",
        false,
      ],
      [
        "firedancer çıkınca client çeşitliliği artacak deniyor. tek client riski azalır.",
        false,
      ],
      [
        "priority fee vermezsen işlem pending kalıyor yoğun saatte. jito tip işe yarıyor.",
        false,
      ],
      [
        "saga telefon alan var mı gerçekten, pahalı deney. crypto phone hype.",
        false,
      ],
      [
        "pump fun akışı izlemek sosyal medya gibi oldu. dikkat dağıtıcı.",
        false,
      ],
      [
        "solana pay ile pos denemesi yapan dükkan gördüm. adoption yavaş ama var.",
        false,
      ],
      [
        "rpc değiştirdim hız arttı, altyapı önemli. ücretsiz rpc limitli.",
        false,
      ],
      [
        "marinade ile liquid stake, pratik. unstake süresine bak.",
        false,
      ],
      [
        "wormhole bridge geçmişi tartışmalı ama kullanılıyor. miktar küçük tut.",
        false,
      ],
      [
        "degen season'da her gün yeni ticker. disiplin yoksa batarsın.",
        false,
      ],
      [
        "400ms block time marketing değil hissediliyor. retail için iyi.",
        false,
      ],
      [
        "jito tip verince işlem öne geçti, mempool oyunu burada da var.",
        false,
      ],
      [
        "botlar hft yapıyor retail zorlanıyor. front-run riski.",
        false,
      ],
      [
        "discord modu olmak sol ekosistemde stresli. scam dm yağmur.",
        false,
      ],
      [
        "solana docs okuyunca rust öğrenmek şart gibi. entry barrier yüksek.",
        false,
      ],
      [
        "breakpoint konferansından hype gelir, fiyat oynar. haber trade dikkat.",
        false,
      ],
      [
        "tensor nft marketplace hacmi artıyor mu takip ediyorum.",
        false,
      ],
      [
        "drift protocol perp denedim, likidasyon dikkat.",
        false,
      ],
      [
        "sol incinerator ile scam token temizledim, fee küçük.",
        false,
      ],
      [
        "bonk community aktif, meme coin ama ekosistem etkisi oldu.",
        false,
      ],
      [
        "network status twitter hesabını takip et, outage anında bilgi.",
        false,
      ],
    ],
  },
  binancecoin: {
    title: "bnb",
    baseId: 2300,
    authors: [
      "bsc survivor",
      "launchpad takipçisi",
      "fee discount hesaplayıcı",
      "cz timeline",
      "pancakeswap user",
      "binance earn",
      "bsc scan okuyucu",
      "opbnb deneyen",
      "bnb chain validator",
      "launchpool farmer",
      "megadrop avcısı",
      "binance card",
      "futures dikkat",
      "safu inanan",
      "bnb burn takipçisi",
      "compliance tartışmacı",
      "alpha token avcısı",
      "binance academy",
      "vip seviye meraklı",
      "bsc meme avcısı",
      "bridge bnb",
      "trust wallet",
      "binance square",
      "lista dao",
      "bsc gas düşük",
      "bnb vault",
      "auto invest",
      "binance p2p",
      "dual investment",
      "bsc rug detective",
    ],
    snippets: [
      [
        "bnb ile bsc'de işlem yapmak ucuz, evet. ama merkezileşme eleştirisi de boş değil. binance'ın gölgesinde büyüyen ekosistem.",
        false,
      ],
      [
        "ieo dönemlerinde bnb tutmak mantıklı geliyordu, şimdi her yeni proje aynı hikâyeyi satıyor.",
        false,
      ],
      [
        "komisyon indirimi için bnb tutuyorsan aslında borsaya sadakat primi ödüyorsun.",
        true,
        " matematiği yap, bazen indirim bile kâr sayılmıyor. küçük hacimde bnb almak anlamsız olabiliyor.",
      ],
      [
        "regülasyon haberleri bnb'yi oynatıyor, borsa tokeni riski. coğrafi kısıtlamalar artıyor.",
        false,
      ],
      [
        "pancakeswap hâlâ en çok kullanılan dex bsc'de. v3 geçişi oldu mu bak.",
        false,
      ],
      [
        "earn'de flexible locked karışık, faiz cazip. counterparty risk unutma.",
        false,
      ],
      [
        "bscscan'da kontrat okumadan approve verme. unlimited approve tehlikeli.",
        false,
      ],
      [
        "opbnb l2 denemesi fee daha da düşük. ekosistem genişliyor.",
        false,
      ],
      [
        "validator olmak için stake eşiğine bakın. merkezileşme yüksek pool'larda.",
        false,
      ],
      [
        "launchpool'da tarla yapıyorum düşük risk gibi. yine de token dump edebilir.",
        false,
      ],
      [
        "megadrop yeni projeler dağıtıyor, kuralları oku. sybil engeli var.",
        false,
      ],
      [
        "binance card türkiye'de durumu değişken, takip et.",
        false,
      ],
      [
        "futures kaldıraçlı oynama bnb'de de aynı risk. likidasyon hızlı.",
        false,
      ],
      [
        "safu sloganı esprili ama hack geçmişi unutulmamalı. borsada tutma süresi minimize.",
        false,
      ],
      [
        "quarterly burn haberi gelince kısa vadeli pump olur. kalıcı mı tartışılır.",
        false,
      ],
      [
        "compliance baskısı artınca delist dalgası gelir. hangi coin next?",
        false,
      ],
      [
        "binance alpha yeni listing avcıları için. erken gir çık.",
        false,
      ],
      [
        "academy içerikleri başlangıç için iyi. ileri seviye sınırlı.",
        false,
      ],
      [
        "vip seviye fee indirimi büyük hacimde anlamlı. retail fark etmez.",
        false,
      ],
      [
        "bsc meme coinleri hızlı doğar hızlı ölür. rugpull klasik.",
        false,
      ],
      [
        "bridge ile eth'den bsc'ye geçtim, fee düşük. köprü riski var.",
        false,
      ],
      [
        "trust wallet seed'i kimseyle paylaşma. fake support dolandırıcı.",
        false,
      ],
      [
        "binance square feed'i gürültülü ama bilgi var. sinyal gürültüden ayır.",
        false,
      ],
      [
        "lista dao lending denedim. faiz oranları değişken.",
        false,
      ],
      [
        "bsc gas 3 gwei'i görünce mutlu oldum. eth mainnet'e göre cennet.",
        false,
      ],
      [
        "bnb vault otomatik birikim, pratik. faiz bnb cinsinden.",
        false,
      ],
      [
        "auto invest dca gibi, disiplin sağlar.",
        false,
      ],
      [
        "p2p ile tl'den bnb aldım, dolandırıcıya dikkat. escrow kullan.",
        false,
      ],
      [
        "dual investment structured product, risk anla.",
        false,
      ],
      [
        "bsc'de rug detective olmak full time iş. honeypot scan şart.",
        false,
      ],
    ],
  },
  ripple: {
    title: "xrp",
    baseId: 2400,
    authors: [
      "sec davası izleyicisi",
      "bankacı kökenli yazar",
      "topluluk veteranı",
      "xrp ledger dev",
      "rlusd meraklısı",
      "ripple odası",
      "xrapid hatırlayan",
      "hodor 2017",
      "xrp army",
      "escrow unlock takip",
      "judge torres fan",
      "cross border ödeme",
      "xumm cüzdan",
      "xrpl nft",
      "xrp debatçı",
      "regülasyon okuyucu",
      "xrp chartçı",
      "bank partnership",
      "xrp node",
      "xrp tip bot",
      "xrp ledger amm",
      "xrp escrow",
      "xrp listing",
      "xrp bear survivor",
      "xrp utility",
      "ripple net",
      "xrp kimlik",
      "xrp ledger hooks",
      "xrp community fund",
      "xrp ledger explorer",
    ],
    snippets: [
      [
        "yıllardır dava gündemde, xrp topluluğu her karar sonrası kutlama yapıyor. regülasyon netleşene kadar fiyat haber odaklı kalır.",
        false,
      ],
      [
        "swift alternatifi olma iddiası eskiden daha güçlü anlatılıyordu. yine de cross-border pilot projeler devam ediyor.",
        false,
      ],
      [
        "2017'den beri 'bankalar geliyor' diyenleri tanırım. ama sabırlı kalanlar için xrp hâlâ ilk 10'da.",
        false,
      ],
      [
        "xrpl consensus farklı, mining yok. enerji tartışması btc'ye göre farklı.",
        false,
      ],
      [
        "rlusd stablecoin duyurusu xrp ekosistemini büyütür mü? regülasyonlu stable ilgi çeker.",
        false,
      ],
      [
        "ripple odası lobici güç, sektör ilişkileri. siyasi risk de var.",
        false,
      ],
      [
        "xrapid pilotları unutuldu mu, hâlâ referans var. utility gerçek mi spekülasyon mu tartışılır.",
        false,
      ],
      [
        "hodor memesi xrp tarihinin parçası. community kültürü güçlü.",
        false,
      ],
      [
        "xrp army twitter'da gürültülü ama sadık. echo chamber riski.",
        false,
      ],
      [
        "escrow unlock takvimine bakıyorum arz baskısı tartışması. schedule şeffaf.",
        false,
      ],
      [
        "torres kararı sonrası borsalar relist etti. likidite arttı.",
        false,
      ],
      [
        "cross border ödeme hızlı ama banka entegrasyonu yavaş. kurumsal satış döngüsü uzun.",
        false,
      ],
      [
        "xumm ile self custody kolay. qr ödeme pratik.",
        false,
      ],
      [
        "xrpl üzerinde nft denemesi yaptım, fee düşük.",
        false,
      ],
      [
        "xrp centralization tartışması bitmiyor. validator listesi incele.",
        false,
      ],
      [
        "regülasyon netleşince kurumsal ilgi artar deniyor. belirsizlik fiyatı baskılıyor.",
        false,
      ],
      [
        "grafikte üçgen mi wedge mi her gün yeni analiz. teknik analiz yanıltır bazen.",
        false,
      ],
      [
        "bank partnership haberi pump yaratır, doğrulanana kadar bekle. marketing vs gerçek.",
        false,
      ],
      [
        "node kurmak düşük maliyetli. katılım teşvik edilir.",
        false,
      ],
      [
        "tip bot ile xrp gönderdim eğlenceli. mikro ödeme use case.",
        false,
      ],
      [
        "amm xrpl'e geldi dex'i güçlendirdi. uniswap benzeri ama farklı.",
        false,
      ],
      [
        "escrow mekanizması arz yönetimi için. ripple'a güven meselesi.",
        false,
      ],
      [
        "yeni borsa listing'i kısa vadeli hareket. kalıcı etki tartışılır.",
        false,
      ],
      [
        "bear market survivor xrp tuttu ve bekledi. psikolojik test.",
        false,
      ],
      [
        "utility odaklı coin mi spekülasyon mu hâlâ tartışılıyor. use case bankacılık.",
        false,
      ],
      [
        "ripple net ödeme ağı genişliyor mu haberleri takip.",
        false,
      ],
      [
        "xrp kimlik tartışması toplulukta duyarlı konu.",
        false,
      ],
      [
        "hooks özelliği smart contract benzeri, gelişme var.",
        false,
      ],
      [
        "community fund projeleri destekliyor, ekosistem.",
        false,
      ],
      [
        "ledger explorer ile işlem doğruladım, şeffaf.",
        false,
      ],
    ],
  },
  dogecoin: {
    title: "dogecoin",
    baseId: 2500,
    authors: [
      "much wow",
      "elon timeline kurbanı",
      "kabosu anısı",
      "doge tip master",
      "shiba vs doge",
      "doge mining 2014",
      "doge community",
      "doge chart meme",
      "doge to the moon",
      "doge inflation",
      "doge payment",
      "doge whale watch",
      "doge reddit",
      "doge faucet",
      "doge charity",
      "doge core dev",
      "doge merge mining",
      "doge paper hands",
      "doge diamond",
      "doge festival",
      "doge twitter",
      "doge baba",
      "doge analiz",
      "doge hodl",
      "doge fun",
      "doge rocket",
      "doge meme lord",
      "doge such profit",
      "doge veteran 2014",
      "doge tipping tuesday",
    ],
    snippets: [
      [
        "şaka coin diye başladı, ciddi portföylerde yer edindi. fundamentals az ama likidite var, topluluk var.",
        false,
      ],
      [
        "bir mavi kuş emojisi atınca %15 yükselmesi normal mi? normal değil ama doge'de oluyor. risk yönetimi olmadan girmeyin.",
        false,
      ],
      [
        "meme kültürünün kripto versiyonu. teknik analiz yaparken kendini ciddiye alma.",
        false,
      ],
      [
        "reddit tip botları eski günler. nostalji güzel.",
        false,
      ],
      [
        "shiba ile kıyaslayanlar her gün. farklı community farklı vibe.",
        false,
      ],
      [
        "2014 mining denemesi gpu ile. elektrik faturası şaka değildi.",
        false,
      ],
      [
        "community en güçlü yan, toxicity düşük. eğlence ön planda.",
        false,
      ],
      [
        "teknik analiz doge'de ciddiye alınmamalı bazen. meme faktörü baskın.",
        false,
      ],
      [
        "to the moon sloganı buradan çıktı sayılır. kültür export.",
        false,
      ],
      [
        "enflasyonlu arz var ama yıllık oran düştü. sonsuz arz yok artık sınırlı enflasyon.",
        false,
      ],
      [
        "birkaç dükkan doge kabul ediyor hâlâ. adoption niş.",
        false,
      ],
      [
        "whale wallet hareketi twitter'a düşer. panik gereksiz çoğu zaman.",
        false,
      ],
      [
        "reddit r/dogecoin hâlâ aktif. meme paylaşım merkezi.",
        false,
      ],
      [
        "faucet'tan ilk doge'mu aldım nostalji. o günler bitti.",
        false,
      ],
      [
        "jamaica bobsled charity unutulmaz. crypto ile hayır örneği.",
        false,
      ],
      [
        "core dev gönüllü çalışıyor ilginç model. bitcoin fork kökeni.",
        false,
      ],
      [
        "merge mining litecoin ile. teknik detay.",
        false,
      ],
      [
        "paper hands diye satanlar pişman oldu mu? meme coin volatil.",
        false,
      ],
      [
        "diamond hands meme'i doge ile özdeş. kültürel miras.",
        false,
      ],
      [
        "dogecoin festival etkinlikleri var mı hâlâ? community buluşması.",
        false,
      ],
      [
        "twitter'da doge army aktif. hashtag gücü.",
        false,
      ],
      [
        "baba coin diye aldıranlar oldu maalesef. finansal tavsiye değil eğlence.",
        false,
      ],
      [
        "analiz yaparken gülmek serbest. stres azaltır.",
        false,
      ],
      [
        "hodl yazısı profil fotoğrafında. identity marker.",
        false,
      ],
      [
        "fun olarak tutmak en sağlıklısı. hayat kurtarır.",
        false,
      ],
      [
        "rocket emoji kullanımı zorunlu gibi hissettiriyorlar bazen.",
        false,
      ],
      [
        "meme lord olmak doge community'de unvan.",
        false,
      ],
      [
        "such profit very wow eski format hâlâ güldürüyor.",
        false,
      ],
      [
        "2014 veteran'ım diyenler var, saygı duyulur.",
        false,
      ],
      [
        "tipping tuesday geleneği vardı, güzel tradisyon.",
        false,
      ],
    ],
  },
  cardano: {
    title: "cardano",
    baseId: 2600,
    authors: [
      "peer review bekleyen",
      "staking notları",
      "hydra meraklısı",
      "charles stream",
      "ada delegator",
      "plutus öğrencisi",
      "cardano africa",
      "midnight bekleyen",
      "catalyst voter",
      "ada wallet",
      "eutxo anlayan",
      "cardano summit",
      "ada bear",
      "iohk blog",
      "ada native token",
      "cardano dex",
      "ada stake pool",
      "alonzo sonrası",
      "ada chart",
      "cardano git",
      "ada community",
      "voltaire faz",
      "ada drep",
      "cardano nft",
      "ada uzun vade",
      "ouroboros okuyucu",
      "ada halving yok",
      "cardano hydra head",
      "ada governance",
      "shelley era",
    ],
    snippets: [
      [
        "yavaş gelişiyor ama akademik yaklaşım ciddi. 'yayın yok mu' diye soranlara github commit grafiğini gösteriyorum.",
        false,
      ],
      [
        "ada stake etmek kolay, dondurma yok. getiri makul ama fiyat performansı son dönemde zayıf kaldı.",
        true,
        " teknoloji ile fiyat her zaman aynı hızda gitmiyor. uzun vade düşünüyorsan izlemeye devam.",
      ],
      [
        "ölçeklenme çözümleri gecikmeli gelse de ekosistem büyüyor. afrika tarafındaki kullanım örnekleri underrated.",
        false,
      ],
      [
        "hydra layer2 testnet sonuçları umut verici. tps artışı hedef.",
        false,
      ],
      [
        "charles yayın açınca ada oynar mı hâlâ? community etkileşimi yüksek.",
        false,
      ],
      [
        "delegasyon yaparken pool margin fee bak. küçük fark birikir.",
        false,
      ],
      [
        "plutus öğrenmek zor ama güvenli kontrat hedefi. haskell barrier.",
        false,
      ],
      [
        "midnight privacy chain bekleniyor. zk hype.",
        false,
      ],
      [
        "catalyst oylamasına proje gönderdim. treasury dağıtımı demokratik.",
        false,
      ],
      [
        "yoroi eternl cüzdan karşılaştırması yapıyorum. ux farkları var.",
        false,
      ],
      [
        "eutxo modeli bitcoin'den farklı kavram. öğrenme eğrisi.",
        false,
      ],
      [
        "summit duyuruları hype yaratır. roadmap takip.",
        false,
      ],
      [
        "bear market ada tutanlar sabırlı. diamond hands test.",
        false,
      ],
      [
        "iohk blog teknik okuyunca anlaşılıyor. marketing değil research.",
        false,
      ],
      [
        "native token mint ettim ada ile. low fee.",
        false,
      ],
      [
        "sundae minswap dex hacmi artıyor mu? likidite düşük olabilir.",
        false,
      ],
      [
        "stake pool seçerken uptime önemli. missed block ceza.",
        false,
      ],
      [
        "alonzo smart contract çağı başladı. geç kaldık mı tartışması bitti mi?",
        false,
      ],
      [
        "grafikte uzun süre yatay ada. birikim dönemi mi?",
        false,
      ],
      [
        "github commit sayısı ciddi. developer activity metrik.",
        false,
      ],
      [
        "community toxic değil sakin. farklı vibe.",
        false,
      ],
      [
        "voltaire on-chain governance geliyor. drep delegasyonu yeni.",
        false,
      ],
      [
        "drep delegasyonu yeni kavram, öğreniyoruz.",
        false,
      ],
      [
        "cardano nft projeleri sessiz ama var.",
        false,
      ],
      [
        "uzun vade düşünüyorsan izlemeye devam. sabır cardano'da erdem.",
        false,
      ],
      [
        "ouroboros protokolü okuyunca güven artıyor. formal verification.",
        false,
      ],
      [
        "halving yok ada'da, arz schedule farklı.",
        false,
      ],
      [
        "hydra head kavramı teknik ama ölçeklenme anahtarı.",
        false,
      ],
      [
        "governance oylamasına katılmak vatandaşlık gibi.",
        false,
      ],
      [
        "shelley era'dan beri stake ediyorum. alışkanlık oldu.",
        false,
      ],
    ],
  },
};

function pad(n) {
  return String(n).padStart(2, "0");
}

function makeDate(dayOffset, hour, min) {
  const d = new Date(2026, 5, 11 - dayOffset, hour, min);
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function buildEntries(cfg) {
  return cfg.snippets.map((snippet, index) => {
    const [content, truncated, extra] = snippet;
    const entry = {
      id: cfg.baseId + index + 1,
      author: cfg.authors[index],
      date: makeDate(index % 14, 8 + (index % 12), (index * 7) % 60),
      content,
      truncated: Boolean(truncated),
      hasSeyler: index % 7 === 0 || index % 11 === 3,
    };

    if (truncated && extra) {
      entry.fullContent = content + extra;
    }

    return entry;
  });
}

const cryptoTopicsData = Object.fromEntries(
  Object.entries(coinConfigs).map(([coinId, cfg]) => [
    coinId,
    {
      title: cfg.title,
      coinId,
      entries: buildEntries(cfg),
    },
  ])
);

const fileContent = `export const CRYPTO_COIN_IDS = [
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

export const cryptoTopicsData = ${JSON.stringify(cryptoTopicsData, null, 2)};

export function getCryptoTopicData(coinId) {
  return cryptoTopicsData[coinId] ?? null;
}

export function getCryptoTopicByTitle(title) {
  const coinId = getCryptoIdFromTitle(title);
  if (!coinId) return null;
  return cryptoTopicsData[coinId];
}
`;

writeFileSync(join(root, "src/data/cryptoTopics.js"), fileContent);

for (const [key, value] of Object.entries(cryptoTopicsData)) {
  console.log(`${key}: ${value.entries.length} entries`);
}
