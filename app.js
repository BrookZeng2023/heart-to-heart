"use strict";

const ADULT_QUESTION_BANK = [
  "你最喜欢怎样的亲吻开场？",
  "在亲密时刻里，你最在意对方先给你的哪一种回应？",
  "你觉得自己身上最性感的部位是哪里？",
  "你最想听伴侣在耳边对你说的一句大胆的话是什么？",
  "你偏爱慢慢升温，还是一开始就很热烈？",
  "哪一种眼神会让你立刻感到暧昧？",
  "你最喜欢被怎样触碰，才会觉得很有感觉？",
  "在床上，你更喜欢主导、被带领，还是轮流掌控？",
  "哪一件贴身衣物最能让你觉得自己有魅力？",
  "你希望一次亲密约会从哪个细节开始被认真准备？",
  "你最想和伴侣尝试的一种浪漫又大胆的约会场景是什么？",
  "亲密时你最希望对方注意到你的哪一种反应？",
  "你会更享受轻柔挑逗，还是直接热烈的靠近？",
  "哪一种气味最容易让你联想到欲望或亲密？",
  "你觉得最性感的拥抱方式是什么？",
  "你希望伴侣如何确认你此刻真的想继续？",
  "有没有一个只要想到就会让你脸红的亲密幻想？",
  "你最喜欢在什么时间、什么氛围下和喜欢的人亲近？",
  "你觉得一句真诚的夸赞，怎样说才会让你特别心动？",
  "你更喜欢灯亮一点、昏暗一点，还是完全关灯？",
  "你会想把哪一种吻留得更久一点？",
  "对你来说，前戏里最不能省略的是什么？",
  "你觉得声音、触感和眼神里，哪一种最能点燃气氛？",
  "你最想让伴侣知道的一个身体敏感点是什么？",
  "在亲密关系里，什么会让你感到既安全又兴奋？",
  "你觉得被慢慢脱去衣物会更撩人，还是自己主动更有感觉？",
  "如果可以安排一晚完全不被打扰的亲密时光，你会怎么布置？",
  "你更喜欢边亲吻边说话，还是用沉默和动作表达？",
  "你曾经被哪一种暧昧的肢体距离弄得心跳加快？",
  "你最喜欢伴侣怎样夸你的身体？",
  "你愿意和伴侣一起探索的一个新边界是什么？",
  "亲密时你更在意节奏、力度，还是情绪连接？",
  "你最希望对方在靠近你前先问的一个问题是什么？",
  "你觉得什么样的抚摸最容易让人放松下来？",
  "在床上，你最享受给予快乐还是接受快乐？",
  "你觉得哪一种姿势最能让双方都感到贴近？",
  "你更想尝试一次精心设计的情趣约会，还是自然发生的激情？",
  "你会想和伴侣一起挑选哪一种成人小玩具或情趣用品？",
  "你希望亲密时的音乐是怎样的？",
  "你觉得自己在欲望面前通常更害羞还是更直接？",
  "有没有一种亲密请求，你希望对方大胆说出口？",
  "你会怎样告诉对方：这样很好，请继续？",
  "你最喜欢被亲吻的三个部位分别是哪里？",
  "你觉得温柔地被命令，还是被温柔地请求，更容易让你心动？",
  "哪一种成人角色扮演或情境扮演让你好奇？",
  "你最期待在亲密之后获得怎样的拥抱或照顾？",
  "你喜欢在镜子前欣赏彼此，还是更喜欢只感受彼此？",
  "你愿意为一场亲密约会穿上怎样大胆的衣服？",
  "你觉得怎样的挑逗最有分寸、也最性感？",
  "如果对方想更进一步，你最希望他或她怎样征求你的同意？",
  "你最想把哪一种幻想先说给伴侣听？",
  "你更容易被声音撩动，还是被画面撩动？",
  "哪一种贴近会让你觉得比接吻更亲密？",
  "你希望伴侣在你害羞时怎样带着你慢慢放开？",
  "对你来说，一次很棒的性爱最重要的感受是什么？",
  "你觉得高潮前最容易暴露自己的哪一种反应？",
  "你喜欢在亲密时被注视，还是更喜欢闭上眼专心感受？",
  "你希望对方怎样告诉你他或她也正在享受？",
  "你愿意尝试一次由谁来完全安排的成人约会？",
  "你最想收到哪一种只属于成年人的暧昧邀请？",
  "你觉得哪里比床更适合一次大胆但私密的亲吻？",
  "你更喜欢脱衣服的过程，还是事后的依偎？",
  "你希望伴侣如何回应你主动发出的性暗示？",
  "你会想在亲密时使用怎样的安全词或暂停信号？",
  "你最容易被对方哪一种自信的动作撩到？",
  "如果两个人的欲望节奏不同，你希望怎样沟通？",
  "你想让对方先了解你的哪一种边界，才会更放心地玩？",
  "你觉得分享自慰偏好，会让关系更亲密吗？为什么？",
  "你愿意和伴侣一起讨论哪些安全性行为或避孕方式？",
  "你最希望对方在亲密时给予你怎样的肯定？",
  "你喜欢循序渐进的挑逗，还是偶尔被突如其来的吻打乱节奏？",
  "如果能把一次亲密体验变得更好，你最想调整什么？",
  "你对束缚、眼罩或感官游戏中的哪一种最感兴趣？",
  "你会怎样用一句话邀请伴侣和你共度一个性感的夜晚？",
  "你喜欢亲密时聊幻想，还是事后再慢慢分享？",
  "哪一种不带性意味的动作，也会让你觉得非常性感？",
  "你更期待对方主动探索，还是先清楚地告诉你想要什么？",
  "如果只能选一件事来提升亲密感，你会选更多沟通、更多时间，还是更多新鲜感？",
  "你希望伴侣在哪个时刻停下来确认你的感受？",
  "你觉得两个人谈论性偏好时，怎样才不会尴尬？",
  "你有没有一个想尝试、但需要很多安全感才会尝试的成人愿望？",
  "你最喜欢在亲密前被怎样调情？",
  "你希望伴侣怎样处理你说“慢一点”或“停一下”的时刻？",
  "你觉得哪一种贴身睡衣最有诱惑力？",
  "你愿意和伴侣一起列一份“想尝试”和“绝不尝试”的清单吗？",
  "你觉得亲密关系里的性吸引，会被哪些日常细节持续点亮？",
  "你最想被对方怎样吻醒，或怎样吻着入睡？",
  "你觉得在亲密时坦白身体的不安，会让关系变近还是变难？",
  "如果伴侣认真询问你的欲望，你最希望他或她先听懂什么？",
  "你会如何描述自己喜欢的性爱节奏？",
  "你喜欢在亲密时交换主导权吗？",
  "你认为最性感的同意表达是什么样的？",
  "如果今天只能做一件让彼此脸红的事，你会选什么？",
  "你愿意和伴侣一起探索怎样的亲密仪式，让每次开始都更有期待？",
  "你觉得事后聊天时，最想听对方分享哪一种感受？",
  "你会怎样温柔地拒绝一件自己暂时不想尝试的事？",
  "在成年人的亲密游戏里，你最想被尊重的一条规则是什么？",
  "你希望未来和伴侣在哪个方面更大胆、更坦诚地谈性？",
  "如果要为一晚亲密时光设定一个共同的愿望，你会写下什么？",
  "你希望对方怎样邀请你一起探索新的亲密体验，才会既大胆又安心？",
];

const QUESTION_BANK = {
  sweet: [
    "今天你最想和我分享的一件小事是什么？",
    "我说过的哪句话，会在你心里偶尔冒出来？",
    "如果为我们设计一个专属表情包，它会是什么样子？",
    "哪一种天气最适合和我一起度过？",
    "你觉得我最有魅力的一个瞬间，通常发生在什么时候？",
    "如果我们下次约会不许看手机，你想怎么安排？",
    "你最喜欢我给你准备的哪一种小惊喜？",
    "我们之间哪一个小默契最让你觉得安心？",
    "如果要把我介绍给十年前的你，你会怎么说？",
    "你觉得我们适合养一只什么小动物？为什么？",
    "哪一顿一起吃过的饭，至今让你觉得特别幸福？",
    "我身上哪个不经意的小动作，会让你心软？",
    "如果把我们的关系比作一种交通工具，你会选什么？",
    "你希望我们每周固定保留的一小段时间，用来做什么？",
    "哪一次我认真听你说话，让你感到特别被重视？",
    "如果只能给我们拍一张照片，你想让画面停在什么时刻？",
    "你最想和我一起完成的一件很普通的事是什么？",
    "我们最适合在哪个城市慢慢散步一整天？",
    "如果今晚可以实现一个小愿望，你想和我实现什么？",
    "哪一种称呼或玩笑，是只有我们懂的？",
    "你觉得我们最像一首怎样的歌：轻快、安静，还是热烈？",
    "我做什么时，会让你觉得被偏爱了？",
    "如果为我们的纪念日设一个新仪式，你会选什么？",
    "你最想收到我亲手做的什么东西？",
    "哪一次临时起意，最后变成了你很喜欢的回忆？",
    "如果我们一起上一个兴趣课，你最想学什么？",
    "你觉得我们相处时最舒服的节奏是什么？",
    "今天的我，有哪一点值得你夸一夸？",
  ],
  deep: [
    "最近有什么情绪，你还没找到合适的方式告诉我？",
    "当你需要独处时，怎样的陪伴会让你不觉得被冷落？",
    "你希望我更了解你生活中的哪一部分？",
    "在被误解的时候，你最希望亲近的人先做什么？",
    "你觉得自己在关系里最擅长给予什么？",
    "哪一种承诺对你而言最有分量？",
    "你想让我们一起练习的沟通方式是什么？",
    "当生活很乱时，什么能让你重新感到安稳？",
    "你认为被爱和被需要，最大的不同是什么？",
    "你希望我在哪个方面更主动地靠近你？",
    "你最近最想完成、却总被搁置的一件事是什么？",
    "怎样的争执会让你觉得仍然是在同一边？",
    "你觉得两个人各自成长，怎样才不会渐渐走远？",
    "过去的哪段经历，让你现在更珍惜亲密关系？",
    "当我状态不好时，你希望我怎样向你求助？",
    "你希望我们的家或共同生活，给人怎样的感觉？",
    "有什么关于你的期待，你担心说出来会给我压力？",
    "什么时刻会让你觉得自己值得被好好爱着？",
    "你希望我们如何处理那些暂时没有答案的问题？",
    "你觉得彼此信任，需要哪些可见的小行动？",
    "最近你在哪件事上感到自己被低估了？",
    "如果我们定一个关系里的提醒词，你希望它提醒我们什么？",
    "你最希望我尊重你的哪一种节奏？",
    "对你而言，真正的理解更像认真倾听，还是一起行动？",
    "哪一件小事会让你觉得我们正在变得更好？",
    "你希望未来的我们如何留住对彼此的好奇？",
    "如果可以请现在的我们给未来写一封信，你最想写下什么？",
    "你觉得爱一个人时，最需要学习的能力是什么？",
  ],
  brave: [
    "我最近哪一种反应，会让你不知道该怎么靠近我？",
    "如果我有一个习惯需要立刻调整，你会选哪一个？",
    "我们之间有没有一件事，你希望不要再靠猜？",
    "当你觉得受委屈时，我最容易忽略什么信号？",
    "你是否有过想暂停讨论、却不知道怎样说出口的时候？",
    "我在哪些时候太急着解释，而没有先听懂你？",
    "有哪条界限，你希望我以后主动记住而不是等你提醒？",
    "你希望我用什么方式表达不同意见，才会让你更容易接受？",
    "我们最近最该认真解决、而不是拖着的一件小事是什么？",
    "你觉得我在哪件事上对自己太苛刻，也影响了我们？",
    "有没有一个需求，你说过一次却觉得我没有真正记住？",
    "当我们情绪都很高时，你希望谁先怎样让谈话慢下来？",
    "你最不希望我把哪一句话当成玩笑？",
    "我做什么时，会让你觉得自己的感受被排在后面？",
    "如果我们只能改掉一种冲突习惯，你最想改哪一种？",
    "你希望我在哪件事上少一点自以为是，多问一句你的想法？",
    "我们各自忙碌时，怎样联系会让你觉得刚刚好？",
    "有什么担心，你宁愿我提前知道，也不想一个人消化？",
    "当我犯错时，怎样做比说“对不起”更重要？",
    "你觉得我们在哪个话题上最需要放下胜负心？",
    "如果你可以诚实地指出我的一个盲点，会是什么？",
    "我曾在哪个时刻让你觉得没有被当成队友？",
    "面对一件重要决定，你最需要我给你的支持是什么？",
    "我们有没有把某种不舒服误认为是理所当然？",
    "如果以后再次出现同样的矛盾，你希望我们先做什么？",
    "你希望我更清楚地表达哪一种心意？",
    "有什么话题让你害怕开口，但你希望它能被温柔地讨论？",
    "现在为了更好地爱彼此，我们各自最该承担的一件事是什么？",
  ],
  spicy: ADULT_QUESTION_BANK,
};

const GROUP_QUESTION_BANK = {
  emotion: [
    "什么样的朋友，会让你想主动分享好消息？",
    "你收到过最恰到好处的一次安慰是什么？",
    "你觉得熟悉一个人，需要知道哪些小细节？",
    "在关系里，你更在意被记得还是被陪伴？",
    "你会把什么样的事告诉真正信任的人？",
    "你最欣赏身边人身上的哪一种温柔？",
    "什么样的相处，会让你觉得不用刻意表现自己？",
    "你会怎样判断一段友情值得长期经营？",
    "你希望别人怎样向你表达关心？",
    "哪一次来自朋友的帮助，让你一直记得？",
    "你觉得坦诚和分寸感，怎样才能同时存在？",
    "你在一群人里通常扮演怎样的角色？",
    "如果要感谢一位朋友，你最想感谢他或她什么？",
    "什么话会让你觉得自己被真正理解了？",
    "你认为关系变淡时，最值得先做的一件事是什么？",
    "你最希望被身边人看见的优点是什么？",
  ],
  choice: [
    "哪一次随手答应的事，后来给你带来了意外收获？",
    "如果明天多出一个完全自由的下午，你会怎么用？",
    "你做选择时，最容易被什么因素影响？",
    "最近有什么事让你意识到，自己其实可以更勇敢？",
    "你更愿意先行动再调整，还是准备充分再开始？",
    "哪一个小决定，让你的生活变得更轻松？",
    "如果可以立刻学会一项能力，你会选什么？",
    "你会为了一个很喜欢的目标，放弃什么舒适区？",
    "当意见相反时，你通常怎样判断该不该坚持？",
    "你曾经因为好奇而做过最有意思的事是什么？",
    "你人生里哪一次转弯，现在看来特别重要？",
    "如果只能保留一项日常消费，你最不愿放弃什么？",
    "你觉得“准备好了”是一种感觉，还是一个条件？",
    "哪一种机会即使结果未知，你也愿意试一试？",
    "如果可以把一件麻烦事交给明天的自己，你会选什么？",
    "你希望未来的自己更果断地拒绝什么？",
  ],
  growth: [
    "最近你发现自己进步最快的一件事是什么？",
    "你想培养的一个新习惯，打算从多小的一步开始？",
    "谁曾经给过你一句很有用的建议？",
    "你现在比从前更会保护自己的什么？",
    "你觉得自己哪一种特质，是慢慢练出来的？",
    "最近有什么事让你对自己刮目相看？",
    "你曾经很怕、现在却能从容面对的一件事是什么？",
    "如果给自己放一天假，你最希望暂停哪一种压力？",
    "你希望三个月后的自己多拥有哪一个小改变？",
    "哪一个错误最后教会你重要的一课？",
    "你最近学会对什么事情说“不”？",
    "有什么爱好会让你很快找回能量？",
    "你最想感谢过去的自己坚持了什么？",
    "别人对你的哪种评价，曾让你重新认识自己？",
    "你觉得成熟以后，最想保留的孩子气是什么？",
    "如果把成长做成一条进度条，你觉得自己正在哪个阶段？",
  ],
  memory: [
    "你记得最清楚的一次生日惊喜是什么？",
    "哪一首老歌会立刻把你带回某段时光？",
    "小时候最喜欢躲在哪里做自己的事？",
    "你最怀念的一种放学或下班后的快乐是什么？",
    "哪一次旅行中的小插曲，现在想起还会笑？",
    "你记忆里最香的一道家常菜是什么？",
    "曾经收到过哪一份小礼物，让你觉得很有心意？",
    "你小时候最想拥有、后来真的拥有过的东西是什么？",
    "哪一个季节最容易让你想起过去？",
    "你最想重看的一部电影或动画是什么？为什么？",
    "哪一位老师或长辈曾经影响过你？",
    "你第一次自己完成一件大事时，是什么感觉？",
    "哪一个旧地方，即使变化很大你也想再去看看？",
    "你记得最清楚的一次全家或朋友聚餐是什么样子？",
    "童年时有什么小规矩，现在想起来特别有趣？",
    "如果能保存一段声音，你想保存谁说的哪一句话？",
  ],
  future: [
    "明年这个时候，你最希望自己正在享受怎样的生活？",
    "如果能和未来的自己吃顿饭，你最想问什么？",
    "你想为未来的家添置的第一样东西是什么？",
    "接下来最想解锁的一座城市或风景在哪里？",
    "如果要给未来一年取一个主题词，你会选什么？",
    "你希望未来仍和现在的哪些人保持联系？",
    "有什么小目标，完成后你会非常有成就感？",
    "你希望未来的周末通常怎样度过？",
    "如果明天就能开始一项长期计划，你会开始什么？",
    "你想让生活里多一点什么，少一点什么？",
    "五年后你希望自己仍然保有哪一种热情？",
    "你最想把哪项技能练到可以教会别人？",
    "如果能为未来的自己留一封便签，你会写哪一句？",
    "你想和朋友们一起完成一次怎样的冒险？",
    "未来哪一种平凡日常，会让你觉得特别幸福？",
    "你希望今天的自己为未来少留哪一种遗憾？",
  ],
  spicy: ADULT_QUESTION_BANK,
};

const MODE_META = {
  sweet: { label: "轻甜热身", level: "轻松" },
  deep: { label: "认真走心", level: "深入" },
  brave: { label: "勇敢坦白", level: "挑战" },
  spicy: { label: "18+ 劲爆挑战", level: "成年人限定" },
  custom: { label: "专属问题", level: "只属于你们" },
};

const GROUP_TOPIC_META = {
  emotion: { label: "情感关系" },
  choice: { label: "人生选择" },
  growth: { label: "自我成长" },
  memory: { label: "回忆片段" },
  future: { label: "未来想象" },
  spicy: { label: "18+ 劲爆挑战" },
};

const STORAGE_KEYS = {
  custom: "heart-to-heart-custom-questions",
  settings: "heart-to-heart-settings",
  group: "heart-to-heart-group-settings",
};

const state = {
  players: ["小满", "阿川"],
  mode: "sweet",
  totalRounds: 12,
  currentRound: 0,
  answered: 0,
  turn: 0,
  deck: [],
  usedIds: new Set(),
  customQuestions: [],
  soundEnabled: true,
  groupPlayers: [],
  groupTopics: new Set(["emotion", "choice", "growth", "memory", "future"]),
  groupTotalRounds: 15,
  groupCurrentRound: 0,
  groupAnswered: 0,
  groupDeck: [],
  groupUsedIds: new Set(),
  groupPlayerQueue: [],
  groupActivePlayer: "",
};

const screens = [...document.querySelectorAll(".screen")];
const appShell = document.querySelector(".app-shell");
const playerOneInput = document.querySelector("#player-one");
const playerTwoInput = document.querySelector("#player-two");
const roundInput = document.querySelector("#round-count");
const roundLabel = document.querySelector("#round-count-label");
const customDialog = document.querySelector("#custom-dialog");
const infoDialog = document.querySelector("#info-dialog");
const customInput = document.querySelector("#custom-question-input");
const questionCard = document.querySelector("#question-card");
const groupPlayerInput = document.querySelector("#group-player-input");
const groupRoundInput = document.querySelector("#group-round-count");
const groupRoundLabel = document.querySelector("#group-round-count-label");
const groupQuestionCard = document.querySelector("#group-question-card");
const soundToggle = document.querySelector("#sound-toggle");
let toastTimer;
let audioContext;

function showScreen(screenId) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === screenId);
  });
  appShell?.scrollTo({ top: 0, behavior: "smooth" });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function cleanName(value, fallback) {
  const name = value.trim().replace(/\s+/g, " ");
  return name || fallback;
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function makeQuestion(text, mode, index, source = "built-in") {
  return {
    id: `${source}-${mode}-${index}-${text.slice(0, 8)}`,
    text,
    mode,
  };
}

function buildDeck() {
  const selectedModes = state.mode === "mixed" ? ["sweet", "deep", "brave"] : [state.mode];
  const builtIn = selectedModes.flatMap((mode) =>
    QUESTION_BANK[mode].map((text, index) => makeQuestion(text, mode, index)),
  );
  const custom = state.customQuestions.map((text, index) =>
    makeQuestion(text, "custom", index, "custom"),
  );

  const available = [...builtIn, ...custom].filter((question) => !state.usedIds.has(question.id));
  if (!available.length) {
    state.usedIds.clear();
    return shuffle([...builtIn, ...custom]);
  }
  return shuffle(available);
}

function nextQuestion() {
  if (!state.deck.length) {
    state.deck = buildDeck();
  }

  const question = state.deck.pop();
  state.usedIds.add(question.id);
  return question;
}

function buildGroupDeck() {
  const selectedTopics = [...state.groupTopics];
  const questions = selectedTopics.flatMap((topic) =>
    GROUP_QUESTION_BANK[topic].map((text, index) => ({
      id: `group-${topic}-${index}`,
      text,
      topic,
    })),
  );
  const available = questions.filter((question) => !state.groupUsedIds.has(question.id));
  if (!available.length) {
    state.groupUsedIds.clear();
    return shuffle(questions);
  }
  return shuffle(available);
}

function nextGroupQuestion() {
  if (!state.groupDeck.length) {
    state.groupDeck = buildGroupDeck();
  }
  const question = state.groupDeck.pop();
  state.groupUsedIds.add(question.id);
  return question;
}

function nextGroupPlayer() {
  if (!state.groupPlayerQueue.length) {
    state.groupPlayerQueue = shuffle(state.groupPlayers);
    if (
      state.groupPlayerQueue.length > 1 &&
      state.groupPlayerQueue[0] === state.groupActivePlayer
    ) {
      [state.groupPlayerQueue[0], state.groupPlayerQueue[1]] = [
        state.groupPlayerQueue[1],
        state.groupPlayerQueue[0],
      ];
    }
  }
  state.groupActivePlayer = state.groupPlayerQueue.shift();
  return state.groupActivePlayer;
}

function paintRange(input) {
  const min = Number(input.min);
  const max = Number(input.max);
  const value = Number(input.value);
  const percentage = ((value - min) / (max - min)) * 100;
  input.style.background = `linear-gradient(to right, var(--rose) ${percentage}%, rgba(255, 255, 255, 0.12) ${percentage}%)`;
}

function updateRangeBackground() {
  paintRange(roundInput);
}

function renderGameStatus() {
  const displayRound = Math.min(state.currentRound + 1, state.totalRounds);
  document.querySelector("#active-player").textContent = state.players[state.turn];
  document.querySelector("#progress-number").textContent = String(displayRound).padStart(2, "0");
  document.querySelector("#progress-total").textContent = String(state.totalRounds).padStart(2, "0");
  document.querySelector("#progress-bar").style.width = `${(state.currentRound / state.totalRounds) * 100}%`;
  document.querySelector("#turn-kicker").textContent =
    state.turn === 0 ? `${state.players[1]}，把这一题交给 TA` : `${state.players[0]}，把这一题交给 TA`;
}

function renderQuestion(question, animate = true) {
  const meta = MODE_META[question.mode];
  const applyContent = () => {
    document.querySelector("#question-category").textContent = meta.label;
    document.querySelector("#question-level").textContent = meta.level;
    document.querySelector("#question-text").textContent = question.text;
    questionCard.classList.remove("card-out");
    if (animate) {
      questionCard.classList.add("card-in");
      window.setTimeout(() => questionCard.classList.remove("card-in"), 400);
    }
  };

  if (!animate) {
    applyContent();
    return;
  }

  questionCard.classList.add("card-out");
  window.setTimeout(applyContent, 210);
}

function renderGroupGameStatus() {
  const displayRound = Math.min(state.groupCurrentRound + 1, state.groupTotalRounds);
  document.querySelector("#group-active-player").textContent = state.groupActivePlayer;
  document.querySelector("#group-progress-number").textContent = String(displayRound).padStart(2, "0");
  document.querySelector("#group-progress-total").textContent = String(state.groupTotalRounds).padStart(2, "0");
  document.querySelector("#group-progress-bar").style.width =
    `${(state.groupCurrentRound / state.groupTotalRounds) * 100}%`;
}

function renderGroupQuestion(question, animate = true) {
  const applyContent = () => {
    document.querySelector("#group-question-category").textContent =
      GROUP_TOPIC_META[question.topic].label;
    document.querySelector("#group-question-text").textContent = question.text;
    groupQuestionCard.classList.remove("card-out");
    if (animate) {
      groupQuestionCard.classList.add("card-in");
      window.setTimeout(() => groupQuestionCard.classList.remove("card-in"), 400);
    }
  };

  if (!animate) {
    applyContent();
    return;
  }

  groupQuestionCard.classList.add("card-out");
  window.setTimeout(applyContent, 210);
}

function tickSound(frequency = 480, duration = 0.08) {
  if (!state.soundEnabled) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audioContext ||= new AudioContextClass();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    gain.gain.setValueAtTime(0.035, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  } catch {
    // Sound is optional; the game remains fully usable when the browser blocks it.
  }
}

function vibrate(pattern = 16) {
  if ("vibrate" in navigator) navigator.vibrate(pattern);
}

function confirmAdultContent() {
  return window.confirm(
    "此题库仅限所有参与者均已满 18 周岁且明确同意时使用。任何人都可以跳过、暂停或退出，且无需解释。确认继续吗？",
  );
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function saveSettings() {
  try {
    localStorage.setItem(
      STORAGE_KEYS.settings,
      JSON.stringify({
        players: state.players,
        soundEnabled: state.soundEnabled,
        totalRounds: state.totalRounds,
      }),
    );
  } catch {
    // Some private browsing modes disable storage; the current game can still continue.
  }
}

function saveCustomQuestions() {
  try {
    localStorage.setItem(STORAGE_KEYS.custom, JSON.stringify(state.customQuestions));
  } catch {
    // Keep the in-memory custom deck when storage is unavailable.
  }
}

function saveGroupSettings() {
  try {
    localStorage.setItem(
      STORAGE_KEYS.group,
      JSON.stringify({
        players: state.groupPlayers,
        topics: [...state.groupTopics],
        totalRounds: state.groupTotalRounds,
      }),
    );
  } catch {
    // Group play remains available in memory when storage is unavailable.
  }
}

function loadSavedData() {
  try {
    const custom = JSON.parse(localStorage.getItem(STORAGE_KEYS.custom) || "[]");
    if (Array.isArray(custom)) {
      state.customQuestions = custom.filter((item) => typeof item === "string").slice(0, 20);
    }

    const settings = JSON.parse(localStorage.getItem(STORAGE_KEYS.settings) || "{}");
    if (Array.isArray(settings.players) && settings.players.length === 2) {
      playerOneInput.value = settings.players[0];
      playerTwoInput.value = settings.players[1];
    }
    if (typeof settings.soundEnabled === "boolean") {
      state.soundEnabled = settings.soundEnabled;
    }
    if (Number.isInteger(settings.totalRounds)) {
      state.totalRounds = Math.min(24, Math.max(6, settings.totalRounds));
      roundInput.value = String(state.totalRounds);
      roundLabel.textContent = String(state.totalRounds);
    }

    const groupSettings = JSON.parse(localStorage.getItem(STORAGE_KEYS.group) || "{}");
    if (Array.isArray(groupSettings.players)) {
      state.groupPlayers = groupSettings.players
        .filter((item) => typeof item === "string" && item.trim())
        .slice(0, 12);
    }
    if (Array.isArray(groupSettings.topics)) {
      const validTopics = groupSettings.topics.filter((topic) => GROUP_QUESTION_BANK[topic]);
      if (validTopics.length) state.groupTopics = new Set(validTopics);
    }
    if (Number.isInteger(groupSettings.totalRounds)) {
      state.groupTotalRounds = Math.min(30, Math.max(8, groupSettings.totalRounds));
      groupRoundInput.value = String(state.groupTotalRounds);
      groupRoundLabel.textContent = String(state.groupTotalRounds);
    }
  } catch {
    // Corrupt browser storage should never prevent a new game.
  }

  soundToggle.classList.toggle("muted", !state.soundEnabled);
  soundToggle.setAttribute("aria-label", state.soundEnabled ? "关闭声音" : "打开声音");
  updateRangeBackground();
  paintRange(groupRoundInput);
  renderCustomQuestions();
  renderGroupPlayers();
  renderGroupTopics();
}

function enterSetup() {
  state.players = [
    cleanName(playerOneInput.value, "第一位"),
    cleanName(playerTwoInput.value, "第二位"),
  ];
  playerOneInput.value = state.players[0];
  playerTwoInput.value = state.players[1];
  saveSettings();
  tickSound();
  showScreen("setup-screen");
}

function startGame({ continuePlaying = false } = {}) {
  if (state.mode === "spicy" && !confirmAdultContent()) return;

  state.totalRounds = Number(roundInput.value);
  state.currentRound = 0;
  state.answered = 0;
  state.turn = continuePlaying ? state.turn : Math.floor(Math.random() * 2);
  state.deck = buildDeck();
  saveSettings();

  renderGameStatus();
  renderQuestion(nextQuestion(), false);
  showScreen("game-screen");
  tickSound(540);
  vibrate();
}

function completeAnswer() {
  state.answered += 1;
  state.currentRound += 1;
  tickSound(620, 0.12);
  vibrate([12, 35, 12]);

  if (state.currentRound >= state.totalRounds) {
    showResult();
    return;
  }

  state.turn = state.turn === 0 ? 1 : 0;
  renderGameStatus();
  renderQuestion(nextQuestion());
}

function skipQuestion() {
  renderQuestion(nextQuestion());
  tickSound(390);
  vibrate(10);
  showToast("没关系，舒服比回答更重要");
}

function showResult() {
  document.querySelector("#answered-count").textContent = String(state.answered);
  document.querySelector("#result-player-one").textContent = state.players[0];
  document.querySelector("#result-player-two").textContent = state.players[1];
  showScreen("result-screen");
}

function goHome() {
  if (customDialog.open) customDialog.close();
  if (infoDialog.open) infoDialog.close();
  showScreen("scene-screen");
}

function goCouple() {
  showScreen("welcome-screen");
}

function goGroupSetup() {
  renderGroupPlayers();
  renderGroupTopics();
  showScreen("group-setup-screen");
}

function renderGroupPlayers() {
  const list = document.querySelector("#group-player-list");
  document.querySelector("#group-player-count").textContent = String(state.groupPlayers.length);
  list.replaceChildren();

  if (!state.groupPlayers.length) {
    const empty = document.createElement("p");
    empty.textContent = "还没有人入座";
    list.append(empty);
    return;
  }

  state.groupPlayers.forEach((player, index) => {
    const chip = document.createElement("span");
    const name = document.createElement("span");
    const remove = document.createElement("button");
    chip.className = "group-player-chip";
    name.textContent = player;
    remove.type = "button";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `移除 ${player}`);
    remove.addEventListener("click", () => {
      state.groupPlayers.splice(index, 1);
      state.groupPlayerQueue = [];
      saveGroupSettings();
      renderGroupPlayers();
    });
    chip.append(name, remove);
    list.append(chip);
  });
}

function renderGroupTopics() {
  document.querySelectorAll("[data-group-topic]").forEach((button) => {
    const selected = state.groupTopics.has(button.dataset.groupTopic);
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function addGroupPlayers() {
  const message = document.querySelector("#group-form-message");
  const names = groupPlayerInput.value
    .split(/[,，、\n]+/)
    .map((name) => cleanName(name, ""))
    .filter(Boolean);

  if (!names.length) {
    message.textContent = "先写下至少一个名字";
    return;
  }

  let added = 0;
  let duplicates = 0;
  for (const name of names) {
    if (state.groupPlayers.length >= 12) break;
    const exists = state.groupPlayers.some(
      (player) => player.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );
    if (exists) {
      duplicates += 1;
      continue;
    }
    state.groupPlayers.push(name.slice(0, 12));
    added += 1;
  }

  groupPlayerInput.value = "";
  state.groupPlayerQueue = [];
  saveGroupSettings();
  renderGroupPlayers();

  if (state.groupPlayers.length >= 12 && names.length > added + duplicates) {
    message.textContent = "已经坐满 12 人啦";
  } else if (!added && duplicates) {
    message.textContent = "这些名字已经在座位上了";
  } else {
    message.textContent = added > 1 ? `${added} 位朋友已入座` : "已入座";
  }
  window.setTimeout(() => {
    message.textContent = "";
  }, 1600);
}

function startGroupGame() {
  const message = document.querySelector("#group-form-message");
  if (state.groupPlayers.length < 3) {
    message.textContent = "多人夜谈至少需要 3 位参与者";
    groupPlayerInput.focus();
    return;
  }
  if (!state.groupTopics.size) {
    message.textContent = "至少选择一种想聊的话题";
    return;
  }
  if (state.groupTopics.has("spicy") && !confirmAdultContent()) return;

  state.groupTotalRounds = Number(groupRoundInput.value);
  state.groupCurrentRound = 0;
  state.groupAnswered = 0;
  state.groupDeck = buildGroupDeck();
  state.groupPlayerQueue = [];
  state.groupActivePlayer = "";
  nextGroupPlayer();
  saveGroupSettings();

  renderGroupGameStatus();
  renderGroupQuestion(nextGroupQuestion(), false);
  showScreen("group-game-screen");
  tickSound(540);
  vibrate();
}

function completeGroupAnswer() {
  state.groupAnswered += 1;
  state.groupCurrentRound += 1;
  tickSound(620, 0.12);
  vibrate([12, 35, 12]);

  if (state.groupCurrentRound >= state.groupTotalRounds) {
    showGroupResult();
    return;
  }

  nextGroupPlayer();
  renderGroupGameStatus();
  renderGroupQuestion(nextGroupQuestion());
}

function skipGroupQuestion() {
  renderGroupQuestion(nextGroupQuestion());
  tickSound(390);
  vibrate(10);
  showToast("换一道更想聊的，完全没关系");
}

function changeGroupPlayer() {
  const previousPlayer = state.groupActivePlayer;
  nextGroupPlayer();
  renderGroupGameStatus();
  tickSound(430);
  showToast(`${previousPlayer} 把这一题交给了 ${state.groupActivePlayer}`);
}

function showGroupResult() {
  document.querySelector("#group-answered-count").textContent = String(state.groupAnswered);
  const players = document.querySelector("#group-result-players");
  players.replaceChildren();
  state.groupPlayers.forEach((player) => {
    const chip = document.createElement("span");
    chip.textContent = player;
    players.append(chip);
  });
  showScreen("group-result-screen");
}

function continueGroupGame() {
  state.groupCurrentRound = 0;
  state.groupAnswered = 0;
  state.groupDeck = buildGroupDeck();
  nextGroupPlayer();
  renderGroupGameStatus();
  renderGroupQuestion(nextGroupQuestion(), false);
  showScreen("group-game-screen");
  tickSound(540);
}

function renderCustomQuestions() {
  const list = document.querySelector("#custom-question-list");
  const count = state.customQuestions.length;
  document.querySelector("#custom-list-count").textContent = `${count} 个问题`;
  document.querySelector("#custom-count-label").textContent = count
    ? `已添加 ${count} 个只属于你们的问题`
    : "添加只属于你们的真心话";

  list.replaceChildren();
  if (!count) {
    const empty = document.createElement("li");
    empty.className = "custom-list-empty";
    empty.textContent = "还没有专属问题";
    list.append(empty);
    return;
  }

  state.customQuestions.forEach((question, index) => {
    const item = document.createElement("li");
    const text = document.createElement("span");
    const remove = document.createElement("button");
    text.textContent = question;
    remove.type = "button";
    remove.setAttribute("aria-label", `删除问题：${question}`);
    remove.textContent = "×";
    remove.addEventListener("click", () => {
      state.customQuestions.splice(index, 1);
      saveCustomQuestions();
      renderCustomQuestions();
    });
    item.append(text, remove);
    list.append(item);
  });
}

function addCustomQuestion() {
  const question = customInput.value.trim().replace(/\s+/g, " ");
  const message = document.querySelector("#custom-form-message");
  if (question.length < 4) {
    message.textContent = "再多写一点点吧";
    return;
  }
  if (state.customQuestions.includes(question)) {
    message.textContent = "这个问题已经在题库里啦";
    return;
  }
  if (state.customQuestions.length >= 20) {
    message.textContent = "最多保存 20 个专属问题";
    return;
  }

  state.customQuestions.push(question);
  saveCustomQuestions();
  renderCustomQuestions();
  customInput.value = "";
  document.querySelector("#custom-character-count").textContent = "0";
  message.textContent = "已加入今晚的题库";
  tickSound(560);
  window.setTimeout(() => {
    message.textContent = "";
  }, 1600);
}

document.querySelector("#enter-setup").addEventListener("click", enterSetup);
document.querySelector("#open-couple-mode").addEventListener("click", goCouple);
document.querySelector("#open-group-mode").addEventListener("click", goGroupSetup);
document.querySelector("#start-game").addEventListener("click", () => startGame());
document.querySelector("#complete-answer").addEventListener("click", completeAnswer);
document.querySelector("#skip-question").addEventListener("click", skipQuestion);
document.querySelector("#end-early").addEventListener("click", showResult);
document.querySelector("#continue-game").addEventListener("click", () => startGame({ continuePlaying: true }));
document.querySelector("#add-group-player").addEventListener("click", addGroupPlayers);
document.querySelector("#start-group-game").addEventListener("click", startGroupGame);
document.querySelector("#complete-group-answer").addEventListener("click", completeGroupAnswer);
document.querySelector("#skip-group-question").addEventListener("click", skipGroupQuestion);
document.querySelector("#change-group-player").addEventListener("click", changeGroupPlayer);
document.querySelector("#end-group-early").addEventListener("click", showGroupResult);
document.querySelector("#continue-group-game").addEventListener("click", continueGroupGame);
document.querySelector("#open-custom").addEventListener("click", () => customDialog.showModal());
document.querySelector("#info-toggle").addEventListener("click", () => infoDialog.showModal());
document.querySelector("#add-custom-question").addEventListener("click", addCustomQuestion);

document.querySelectorAll("[data-go-home]").forEach((button) => {
  button.addEventListener("click", goHome);
});

document.querySelectorAll("[data-go-scene]").forEach((button) => {
  button.addEventListener("click", goHome);
});

document.querySelectorAll("[data-go-couple]").forEach((button) => {
  button.addEventListener("click", goCouple);
});

document.querySelectorAll(".mode-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".mode-card").forEach((item) => {
      const selected = item === card;
      item.classList.toggle("selected", selected);
      item.setAttribute("aria-checked", String(selected));
    });
    state.mode = card.dataset.mode;
    tickSound(450);
  });
});

document.querySelectorAll("[data-group-topic]").forEach((button) => {
  button.addEventListener("click", () => {
    const topic = button.dataset.groupTopic;
    if (state.groupTopics.has(topic)) {
      state.groupTopics.delete(topic);
    } else {
      state.groupTopics.add(topic);
    }
    renderGroupTopics();
    saveGroupSettings();
    tickSound(440);
  });
});

roundInput.addEventListener("input", () => {
  roundLabel.textContent = roundInput.value;
  updateRangeBackground();
});

groupRoundInput.addEventListener("input", () => {
  groupRoundLabel.textContent = groupRoundInput.value;
  paintRange(groupRoundInput);
});

groupPlayerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    addGroupPlayers();
  }
});

customInput.addEventListener("input", () => {
  document.querySelector("#custom-character-count").textContent = String(customInput.value.length);
});

customInput.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    addCustomQuestion();
  }
});

soundToggle.addEventListener("click", () => {
  state.soundEnabled = !state.soundEnabled;
  soundToggle.classList.toggle("muted", !state.soundEnabled);
  soundToggle.setAttribute("aria-label", state.soundEnabled ? "关闭声音" : "打开声音");
  saveSettings();
  if (state.soundEnabled) tickSound();
});

document.addEventListener("keydown", (event) => {
  const isGameActive = document.querySelector("#game-screen").classList.contains("active");
  const isGroupGameActive = document.querySelector("#group-game-screen").classList.contains("active");
  if (customDialog.open || infoDialog.open) return;
  if (isGameActive) {
    if (event.key === "ArrowRight" || event.key === "Enter") completeAnswer();
    if (event.key === "ArrowLeft") skipQuestion();
  }
  if (isGroupGameActive) {
    if (event.key === "ArrowRight" || event.key === "Enter") completeGroupAnswer();
    if (event.key === "ArrowLeft") skipGroupQuestion();
  }
});

if ("serviceWorker" in navigator && window.location.protocol.startsWith("http")) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // Installation is an enhancement; local play still works without it.
    });
  });
}

loadSavedData();
