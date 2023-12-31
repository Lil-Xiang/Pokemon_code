import { defineStore } from 'pinia';
import movie1 from "/images/movies/movie_1.png"
import movie2 from "/images/movies/movie_2.png"
import movie3 from "/images/movies/movie_3.png"
import movie4 from "/images/movies/movie_4.png"
import movie5 from "/images/movies/movie_5.png"
import movie6 from "/images/movies/movie_6.png"
import movie7 from "/images/movies/movie_7.png"
import movie8 from "/images/movies/movie_8.png"
import movie9 from "/images/movies/movie_9.png"
import movie10 from "/images/movies/movie_10.png"
import movie11 from "/images/movies/movie_11.png"
import movie12 from "/images/movies/movie_12.png"
import movie13 from "/images/movies/movie_13.png"
import movie14 from "/images/movies/movie_14.png"
import movie15 from "/images/movies/movie_15.png"
import movie16 from "/images/movies/movie_16.png"
import movie17 from "/images/movies/movie_17.png"
import movie18 from "/images/movies/movie_18.png"
import movie19 from "/images/movies/movie_19.png"
import movie20 from "/images/movies/movie_20.png"
import movie21 from "/images/movies/movie_21.png"

export const useMovie = defineStore('movie', () => {
  const moveData = [
    {
        id: "1",
        name: "超夢的逆襲",
        releaseDate: "2000年2月3日",
        img: movie1,
        plot: "收集到關都八個道館徽章的小智與他的同伴，某日，和海盜風格的訓練家戰鬥完後，忽然收到快龍送來的信，內容說是要邀請他們和「全世界最強的訓練家」會面，地點是新島的神奇寶貝城，他們就毫不遲疑的前往。然而這其實是被人類以複製方式所創造出的神奇寶貝—超夢為了報復，所設下的陷阱。而這時，在亞馬遜叢林的深處，夢幻也感受到超夢的存在而甦醒，一場「本尊」和「分身」間的戰爭即將展開.....。"
    },
    {
        id: "2",
        name: "夢幻神奇寶貝-洛奇亞爆誕",
        releaseDate: "2001年1月20日",
        img: movie2,
        plot: "在橘子群島一帶旅行的小智等人，某日在乘船時意外被暴風雨吹至當中的一個島嶼-亞西亞島，當地適逢慶典，他們結識少女芙蘆拉等居民，並得知流傳島上的古老傳說。 就在同時，貪婪的收藏家吉爾露太，為了滿足自己的收藏慾望，捕捉了傳說中神聖不可侵犯的的火焰鳥與閃電鳥，甚至想進一步捕捉急凍鳥，以引出傳說中的海之神-洛奇亞，致使傳說成真，各處氣候變異、關都，城都地區步向毀滅，小智決定挺身而出前往化解危機...."
    },
    {
        id: "3",
        name: "結晶塔的帝王",
        releaseDate: "2002年2月9日",
        img: movie3,
        plot: "綠色草原，是個能夠使人和神奇寶貝都心境安寧的地方，在這裡住著秀力博士和他的女兒小美，有一天，秀力博士在遺跡裡研究神秘神奇寶貝-未知圖騰的時候，不小心被吸進異次元內，小美十分思念父親，沒想到竟因此喚醒了未知圖騰。未知圖騰將小美的心靈以結晶化呈現，最後更創造出小美最喜歡的傳說神奇寶貝-炎帝，小美因此誤以為爸爸變成炎帝的模樣回來了，炎帝為了實現小美的心願，並充當他的爸爸。小智的媽媽和秀力博士是舊識，因為擔心小美而趕來，在這碰到剛結束對戰來到這裡休息的小智他們。沒想到炎帝卻從結晶塔中出現，將小智的媽媽暫時催眠，強行帶走。得知整件事情的經過後，小智等人於是並決定前往結晶塔，救出小智的媽媽，並讓小美脫離那裡......"
    },
    {
        id: "4",
        name: "雪拉比-穿梭時空的相遇",
        releaseDate: "2006年3月4日",
        img: movie4,
        plot: "在電影開始開篇，場景被設置在40年前的一片大森林中。一個叫雪成的男孩想進去那個森林去畫畫，在森林內，雪成遇到了被神奇寶貝獵人追捕並受重傷的雪拉比，當他們被神奇寶貝獵人追的走投無路的時候，雪拉比帶著雪成到了40年後（現代），正好小智他們在這森林裡，他們救了雪成，雪成告訴了小智他們關於雪拉比的事，小智他們救了雪拉比，並和他成為了好朋友。與此同時，火箭隊的三幹部比夏斯也在尋找著並打算捕獵雪拉比。比夏斯擁有能將一切神奇寶貝變得兇惡的黑暗球，將雪拉比自小智他們的身邊奪走。為了拯救被比夏斯捕捉的雪拉比，小智與雪成拼命奮戰。可是，溫柔的雪拉比已經發生了很大的變化…… 激烈的對戰中，傳說中的神奇寶貝水君出現了！小智他們能否拯救雪拉比和森林呢......"
    },
    {
        id: "5",
        name: "水都的守護神 拉帝亞斯和拉帝歐斯",
        releaseDate: "2006年4月1日",
        img: movie5,
        plot: "水都奧多馬雷，相傳在這裡有兩隻傳說神奇寶貝——拉帝歐斯與拉帝亞斯，秘密地看守著守護這座城市的寶石：心之水滴。小智一行人正好造訪這裡，參加完水上競速賽後，並從當地居民口中得知這項傳說。這時，聞名世界的怪盜姊妹出現了，她們為了奪取心之水滴，利用探測器，找出了變成人型的拉帝亞斯，想藉此查出心之水滴的下落，正好被小智撞見。怪盜姊妹想利用心之水滴的力量掌控整個水都奧多馬雷，小智該如何制止她們的計畫？"
    },
    {
        id: "6",
        name: "七夜的許願星-基拉祈",
        releaseDate: "2004年1月31日",
        img: movie6,
        plot: "小智一行人為了觀看一千年才出現七天的千年彗星，而來到了某處，正好有移動式遊樂園也到了這裡。在遊樂園內，他們認識了魔術師巴特勒與他的助手黛安。在表演中，小勝不時聽到有人在呼喚他的聲音，巴特勒得知後，並告訴他們有關基拉祈的事，同時將沉眠之繭交給他們。傳說當千年彗星造訪地球的時候，只要有心地純真的人當搭檔，基拉祈就能從沉眠之繭中甦醒七天，之後就會再次沉睡。基拉祈具有實現人們願望的能力，表面和善的巴特勒，背地卻想利用基拉祈的力量來達成自己的野心，小智等人有辦法保護基拉祈嗎？在這不可思議的七天七夜裡，一場冒險即將展開！"
    },
    {
        id: "7",
        name: "裂空的訪問者-代歐奇希斯",
        releaseDate: "2006年4月15日",
        img: movie7,
        plot: "四年前，一顆隕石墜落至極地，從中誕生出DNA神奇寶貝-代歐奇希斯，居住在臭氧層的天空神奇寶貝—烈空坐，因而認為代歐奇希斯侵略牠的領域，雙方展開了一場激烈的殊死戰。戰況到了最後，烈空坐原本陷入一面倒的慘況，讓代歐奇希斯鬆懈了下來，沒想到代歐奇希斯卻一時大意，被烈空坐最後的破壞死光消滅，其核心沉到了海裡，倫多博士正好帶著他的助手優子及兒子小超來此地考察，目睹了這一切，並帶走了另一個還留在隕石內沒有復活的代歐奇希斯的核心，但是小超從此變得很害怕神奇寶貝。四年後，小智等人為了挑戰對戰塔，造訪了小超居住的高科技城市-拉魯斯市。在陰錯陽差下，小超被誤當成挑戰者和小智一起被送上競技場。就在同時，代歐奇希斯又完全復活，牠依據其同伴所發出的信號，來到了拉魯斯市。烈空坐也感覺到代歐奇希斯的復活，向拉魯斯市飛去，兩隻神奇寶貝的大戰即將一觸即發...."
    },
    {
        id: "8",
        name: "夢幻與波導的勇者-路卡利歐",
        releaseDate: "2006年6月30日",
        img: movie8,
        plot: "很久以前，在歐魯德朗城曾經爆發一場很嚴重的戰爭，勇者亞朗於是決定藉助世界初始之樹及夢幻的力量來平息戰爭，為了不讓自己的搭檔寶可夢—路卡利歐隨自己一起犧牲，亞朗於是將牠封印在權杖內，就這樣過了好幾百年...。到了現代，小智一行人來到了歐魯德朗城，在這裡正舉辦紀念勇者亞朗的慶典，他們換上了當地的服裝，小智還在慶典的對戰大賽中拿到優勝，榮獲勇者的名號。當晚正當大家正沉醉在快樂的舞會時，夢幻卻出現了，並帶走了皮卡丘和喵喵。另一方面，就在舞會要結束時，亞朗權杖上的封印竟解除了，從裡面出現了路卡利歐，路卡利歐對於亞朗封印自己的事十分不能諒解。這時小勝跑了過來告訴大家夢幻帶走了皮卡丘。十分擔心皮卡丘安危的小智等人，於是並決定在路卡利歐及探險家琪朵小姐的帶領下，前往夢幻所居住的地方—世界初始之樹..."
    },
    {
        id: "9",
        name: "蒼海的王子-瑪納霏",
        releaseDate: "2008年3月26日",
        img: movie9,
        plot: "由杜勳頓所帶領的海盜集團，在海中取得有「蒼海的王子」之稱的瑪納霏的蛋，企圖用以不法之事。但隨即被從中臥底的神奇寶貝保育家傑克·渥卡所奪走。之後，小智等人在旅途中因缺乏水源，而與一群為「水之民」後代的馬戲團家族結識。當晚小遙夢見一座神殿。後經廣美的解說，眾人方知他們正在替傑克保管瑪納霏的蛋，而那神殿正是牠的故鄉，名為亞克夏。   隨後，杜勳頓等人聞訊前來想把蛋搶回。在混亂之中，瑪納霏在小遙手中孵化了。大家便決定將牠送回神殿；而杜勳頓為了得到隱藏在神殿內的寶物「海之王冠」，極需要瑪納霏來替自己找出神殿的正確位置，便在後跟蹤。一場驚險的行動就此展開...."
    },
    {
        id: "10",
        name: "決戰時空之塔-帝牙盧卡VS帕路奇犽VS達克萊伊",
        releaseDate: "2008年4月4日",
        img: movie10,
        plot: "小智一行人抵達了小光預備參加寶可夢華麗大賽的白楊鎮，在那裡他們認識了駕駛熱氣球的在地女子艾莉絲、其青梅竹馬東尼歐，以及艾伯特男爵。由於艾伯特男爵認定隱居於城鎮庭園中的黑暗寶可夢-達克萊伊是近日來破壞城鎮的元兇，並準備討伐牠。然而東尼歐的想法卻不同，他偵測到在白楊鎮的上方有一股異常的衝擊波，而那正是傳說中分別掌控時間的帝牙盧卡與空間的帕路奇犽這兩大傳說中的寶可夢在次元夾縫中大戰所造成；而達克萊伊的攻擊正是為了讓牠們遠離這座城鎮。隨著兩大神之寶可夢的爭鬥越來越激烈，終於在白楊鎮的名景「時空之塔」的上方產生了空間裂縫，戰場也隨之轉移到了白楊鎮。小智他們該如何阻止這場危機？而眾人對達克萊伊的誤解又會如何化解？好看又刺激的一場爭鬥即將展開！"
    },
    {
        id: "11",
        name: "騎拉帝納與冰空的花束-潔咪",
        releaseDate: "2009年7月16日",
        img: movie11,
        plot: "在這個世界上有一個神秘的鏡子反射般的世界。在那裡沒有所謂的美麗，是騎拉帝納棲息之處。可是因為帝牙盧卡與帕路奇犽的戰鬥，時空開始扭曲，反轉世界被稱為黑色瘴毒的雲層給覆蓋。看到自己的棲身之所被玷汙而震怒的騎拉帝納，找到了罪魁禍首帝牙盧卡，並打算將其帶入反轉世界。另一方面，在小智等人跟前出現了樣子迷你可愛的神奇寶貝，那是被稱為感謝神奇寶貝的潔咪。為了幫助潔咪前往葛拉西蒂亞花花田，以進行被稱為「花之傳遞」的集體遷移，小智一行人和潔咪展開了短暫的冒險旅程。"
    },
    {
        id: "12",
        name: "阿爾宙斯-超克的時空",
        releaseDate: "2010年6月25日",
        img: movie12,
        plot: "傳說中創造世界的神奇寶貝阿爾宙斯，在某次災難中拯救了世界不被滅亡，但卻身受重傷，是達摩斯救了他。之後，為了使米季納的土地復甦，阿爾宙斯將其生命寶玉借給達摩斯，並約定在下一個日蝕之日歸還，但達摩斯卻背叛了誓言。阿爾宙斯長眠前，許下「當我下一次醒來後將對人類進行制裁」的誓言。在阿爾宙斯甦醒之後，以壓倒性的力量將三神徹底打敗，而帝牙盧卡也在倒下前夕將小智一行人送到過去，去了解達摩斯為什麼會背叛阿爾宙斯的真正緣由。"
    },
    {
        id: "13",
        name: "幻影的霸者-索羅亞克",
        releaseDate: "2010年7月30日",
        img: movie13,
        plot: "王冠市是個水與綠茵、古街道與近代建築完美調合的城市。為了觀看正在這裡舉辦的「神奇寶貝足籃世界盃」，小智一行人向王冠市前進。在旅途中，小智們與正在尋找媽媽的神奇寶貝「索羅亞」相遇，並一起結伴同行。就在此時，名為「索羅亞克」的神奇寶貝竟然化身成為雷公、炎帝、水君的模樣，在王冠市的街道上大搞破壞。就連相隔了20年再度回到這座城市的雪拉比，也再次面臨了危險。王冠市到底面臨著什麼樣的危機？幻影的霸者「索羅亞克」的身分究竟是？雪拉比的命運又會如何？小智和皮卡丘是否能夠解救城裡遭遇危險的神奇寶貝們？場景"
    },
    {
        id: "14",
        name: "比克提尼與黑英雄-捷克羅姆比克提尼與白英雄-雷希拉姆",
        releaseDate: "2011年8月19日",
        img: movie14,
        plot: "在合眾地方旅行的小智、艾莉絲、天桐一行人，來到了被稱為「大地之劍」的塔為中心發展的城市：艾茵多奧克。這裡是由曾經繁榮一時的大地之民所建立的國度，但現在已經沒落。小智等人為了參加收穫祭對戰大會來到艾茵多奧克，他們在這裡遇到了能給予人或神奇寶貝不可思議力量的夢幻神奇寶貝——比克提尼。大地之民的後裔——德雷多企圖利用比克提尼的魔力讓早已絕跡的古王國重現人間，艾茵多奧克因此陷入前所未有的混亂。究竟小智一行人能不能拯救陷入危機的城市呢？比克提尼的命運將會如何？伴隨著捷克羅姆、雷希拉姆的謎團，神奇寶貝史上最大的冒險，帶給你無限的感動！"
    },
    {
        id: "15",
        name: "酋雷姆VS聖劍士-凱路迪歐",
        releaseDate: "2012年10月5日",
        img: movie15,
        plot: "《酋雷姆VS聖劍士 凱路迪歐》故事描述小智與皮卡丘、艾莉絲、天桐一行人正搭乘火車前往洛祥的旅途中，在行經山區時發現一隻從未見過的神奇寶貝，但他卻受了傷一動也不動。其實他正是被稱為三位聖劍士的後繼者，夢幻的神奇寶貝‧凱路迪歐。就在此時，最強的龍系神奇寶貝酋雷姆突然來襲！面對能變換成焰白與闇黑兩種型態，並擁有壓倒性力量的酋雷姆，小智一行人千鈞一髮逃過酋雷姆的追擊。面對酋雷姆的窮追不捨，在行進列車與飛行船間發生戰鬥，他們能否戰勝這次的強大挑戰呢？"
    },
    {
        id: "16",
        name: "神速的蓋諾賽克特-超夢覺醒",
        releaseDate: "2013年8月16日",
        img: movie16,
        plot: "小智一行人來到紐特市，遭遇了蓋諾賽克特作亂破壞的情景，而此時超夢出現並阻止蓋諾賽克特。"
    },
    {
        id: "17",
        name: "破壞之繭與蒂安希",
        releaseDate: "2000年22014年8月29日月3日",
        img: movie17,
        plot: "深藏於地底的淨土「鑽石礦國」，是寶石神奇寶貝小碎鑽們生活的美麗國家。這個國家有著巨大的「神聖鑽石」，提供維持礦國運作的重要能源。而能製造出神聖鑽石的，正是礦國的神奇寶貝公主－蒂安希。隨著時光的流逝，神聖鑽石的生命即將到達盡頭，若蒂安希仍無法製造出新的神聖鑽石，鑽石礦國將會毀滅。"
    },
    {
        id: "18",
        name: "光環的超魔神-胡帕",
        releaseDate: "2015年11月20日",
        img: movie18,
        plot: "一百年前，沙漠城市「荒漠市」因寶可夢們的對戰而蒙受極大損害，這場對戰的開端，則源自某隻寶可夢的存在。然而這隻寶可夢遭到某個人封印，如今荒漠市已恢復以往的寧靜。小智與皮卡丘等人在旅行途中，遇見擁有「能從光環拿出所有物品」能力的幻之寶可夢—胡帕，以及照顧牠的少女「梅雅利」。愛搗蛋的胡帕，以從那個神奇光環中拿出牠最愛的甜甜圈，還有各種物品來嚇人為樂。喜歡搗蛋又天真無邪的胡帕，還稱呼小智和皮卡丘為「小知/サト」跟「皮卡/比卡」，徹底成為好朋友的胡帕和小智等人，決定一起去旅行。抵達荒漠市時的小智一行人，遇到梅雅利的哥哥—巴爾札。但是，巴爾札的樣子似乎怪怪的，小智等人仔細一瞧，他手裡所那著是據稱封印了過去破壞荒漠市的寶可夢的「懲戒之壺」。壺裡散發出一般邪惡氣息，懲戒之壺的封印，在歷經漫長的歲月後好像被解開了！這時，有著相同氣息的傳說的寶可夢出現了！原始固拉多、原始蓋歐卡、帝牙盧卡、帕路奇亞、騎拉帝納，還有酋雷姆也都出現。這樣下去，荒漠市會有危險。胡帕為了保護荒漠市，用光環讓全新的傳說的寶可夢「降臨」, 小智等人是否能和胡帕安排降臨的傳說的寶可夢們，共同守護荒漠市呢，而這股邪惡力量究竟為何？傳說對傳說，此刻，史上最壯烈的對戰即將開始！"
    },
    {
        id: "19",
        name: "波爾凱尼恩與機關人偶-瑪機雅娜",
        releaseDate: "2016年11月18日",
        img: movie19,
        plot: "小智一行人在旅行途中突然遇到「夢幻寶可夢」-波爾凱尼恩從天而降，其落下的衝撃讓小智與波爾凱尼恩被奇妙的裝置聯繫在一起，被波爾凱尼恩給牽著走的小智等人來到了有巨大齒輪的都市阿佐特王國…擁有不停轉動的巨大齒輪的超級機關城市——阿佐特王國的大臣賈維斯，得到了他長年所追尋的終極發明。那就是500年前誕生於阿佐特王國的人造寶可夢——瑪機雅娜，以及據說寄存在瑪機雅娜體內，被稱為「魂心」的未知力量。究竟被綁在一起的小智和波爾凱尼恩，能不能合力救出瑪機雅娜呢？然而，隱藏於「魂心」中的真正力量又是什麼？寶可夢史上最火熱的對戰即將開始!"
    },
    {
        id: "20",
        name: "就決定是你了！",
        releaseDate: "2017年11月17日",
        img: movie20,
        plot: "真新鎮的小智以成為寶可夢大師為目標，但他啟程的第一天卻睡過了頭，使他沒能拿到三個初學者寶可夢（妙蛙種子、傑尼龜、小火龍）中的任何一個，而是得到一隻不願意進入寶貝球的皮卡丘。儘管小智很希望與皮卡丘成為朋友，但皮卡丘不領情，不斷以電擊攻擊小智，他的某次攻擊意外命中了烈雀，憤怒的烈雀群起追擊小智與皮卡丘，小智希望皮卡丘進入球中以免受傷害，而受傷的皮卡丘看到小智保護自己的背影，決定成為小智的夥伴。就在此時，傳說的寶可夢鳳王飛過現出彩虹的天空，留下一根彩虹羽毛給小智。小智在旅途中聽見炎帝出沒的傳聞，雖然他敗在炎帝壓倒性的力量之下，但也結識了兩位訓練師誠子和宗次。小智從宗次口中得知鳳王創造三個寶可夢的傳說，並得知彩虹羽毛是彩虹勇者的象徵，三人便以尋找鳳王為目標，往天青山前進，而幻之寶可夢瑪夏多也偷偷跟著小智。在旅途中的某個夜裡，水君出現在誠子面前。小智在雨中撿到被訓練師克羅斯拋棄的小火龍，並因此與認為唯有強大的寶可夢才有價值、不重視與寶可夢培養感情的克羅斯成為勁敵，在敗給克羅斯後，小智一直無法面對失敗，甚至口出「最初的寶可夢應該選傑尼龜或妙蛙種子」，導致皮卡丘拋下小智，小智的彩虹羽毛也因為小智失去純真而黯淡。瑪夏多操控了小智的夢境，夢裡是不存在寶可夢的世界，進而讓小智想起皮卡丘是自己最重要的夥伴，羽毛的光澤也恢復成七彩。抵達天青山後，小智等人與找到伴侶的巴大蝶告別，並與雷公相遇。他們遇見研究鳳王的專家梵爺，並遵循彩虹羽毛的指引企圖喚出鳳王，但卻被克羅斯攔截。瑪夏多現身並監視小智與克羅斯的對戰，在敗給小智後，克羅斯透露自己也曾遇見鳳王，但鳳王卻沒有選中自己，小智表示原因出自克羅斯與寶可夢並非朋友，讓後者憤而搶走小智的彩虹羽毛並喚出鳳王，瑪夏多出手制止克羅斯，並操控克羅斯的鬃岩狼人和周遭的野生寶可夢攻擊小智等人。眾人掩護小智，讓他得以奪回彩虹羽毛，克羅斯為了掩護小智而被鬃岩狼人咬傷，但也因此讓鬃岩狼人擺脫控制。但小智等人不是瑪夏多的對手，他再度希望皮卡丘進入球中免受傷害，並問皮卡丘為何不願進入球內，皮卡丘說：「因為我想一直與你在一起」。小智的真心讓他再度取得了彩虹羽毛，鳳王降臨後治癒了所有的寶可夢，並與小智的皮卡丘進行對戰，這場戰鬥勝負不明。故事最後，小智接連與克羅斯、宗次和誠子告別，持續與皮卡丘一起朝成為寶可夢大師而努力。"
    },
    {
        id: "21",
        name: "我們的故事",
        releaseDate: "2018年12月7日",
        img: movie21,
        plot: "故事延續前作《劇場版精靈寶可夢 就決定是你了！》的概念，主角小智來到了風來市並遇到了更多同伴。這部電影是精靈寶可夢在平成時代上映的最後一部劇場版。"
    }
];

  return {
    moveData
  };
});
