"use strict";

const QUESTION_BANK = {
  sweet: [
    "第一次意识到“我好像真的喜欢上你了”，是在哪个瞬间？",
    "我做过哪一件很小的事，却让你悄悄开心了很久？",
    "如果把我们的一天做成一部短片，你最想保留哪个画面？",
    "你觉得我们两个人最默契的一件事是什么？",
    "用三个词形容和我在一起时的你，会是哪三个？",
    "哪一次约会让你回家以后还忍不住嘴角上扬？",
    "如果现在就能一起出发，你最想带我去哪里？",
    "我身上哪一个小习惯，让你觉得特别可爱？",
    "你最喜欢我怎么称呼你？为什么？",
    "如果我们的关系有一种味道，你觉得会是什么？",
    "你最想和我一起培养哪一个新的小习惯？",
    "哪一首歌最像我们？你会选哪一句送给我？",
    "在你眼里，我们最像哪一对影视或故事里的搭档？",
    "最近一次因为我感到被爱，是什么时候？",
    "如果明天完全不用工作，我们会怎样度过这一天？",
    "你最喜欢我们哪一种平凡的相处方式？",
    "如果可以重温我们的一天，你会选哪一天？",
    "见到我之前，你想象中的爱情和现在有什么不同？",
  ],
  deep: [
    "你最希望我真正理解你的哪一面？",
    "在一段关系里，什么会让你最有安全感？",
    "当你难过却不想说话时，希望我怎样陪你？",
    "你最近有什么压力，是我可能没有注意到的？",
    "你觉得我们在哪件事上需要更多耐心和沟通？",
    "你害怕失去的，究竟是我，还是我们之间的什么？",
    "对你来说，“被坚定地选择”具体是什么样子？",
    "有没有一个关于未来的画面，你一直希望里面有我？",
    "你希望一年后的我们，比现在多拥有哪一种能力？",
    "你觉得自己在爱里最容易受伤的地方是什么？",
    "有什么需求你很少主动说，但其实一直都很在意？",
    "哪一种道歉方式，会让你真正感到被理解？",
    "你从原生家庭里学到的爱情是什么样的？哪些想保留，哪些想改变？",
    "当我们意见不同时，你最希望我记住的一件事是什么？",
    "你觉得好的亲密关系，应该给彼此怎样的自由？",
    "你什么时候最容易怀疑自己？我能怎样支持你？",
    "你认为我们最值得珍惜、也最需要守护的东西是什么？",
    "有什么事你正在努力成为，却还没有告诉我？",
  ],
  brave: [
    "有没有一件事你曾对我失望，却一直没有认真说出来？",
    "我哪一种表达爱的方式，其实并不是你最需要的？",
    "如果能诚实地向我提一个要求，你现在最想说什么？",
    "我们吵架时，我做什么最容易让你觉得不被尊重？",
    "你有没有为了不让我担心，而假装自己没事的时候？",
    "关于我们的未来，你目前最大的顾虑是什么？",
    "有没有一个边界，你希望我以后更认真地尊重？",
    "你觉得我在哪个时刻没有站在你的角度想问题？",
    "如果我们保持现状不变，哪件事最可能成为未来的问题？",
    "你希望我停止替你做哪一种决定？",
    "你曾经误解过我的哪一面？现在还这样认为吗？",
    "你最怕我在冲突中说出或做出什么？",
    "有没有一种委屈，是你担心说出来会显得自己太计较？",
    "如果可以重新处理我们的一次争执，你想选哪一次？",
    "你希望我为这段关系承担起哪一份更多的责任？",
    "当你说“没关系”时，有哪一次其实真的有关系？",
    "我们之间有什么问题，你觉得温柔也不能代替解决？",
    "此刻你最需要我认真听见的一句话是什么？",
  ],
};

const GROUP_QUESTION_BANK = {
  emotion: [
    "你觉得一段关系里，最珍贵但也最容易被忽略的是什么？",
    "最近一次感到“有人真的懂我”，是在什么时候？",
    "你更希望被爱、被理解，还是被坚定地选择？为什么？",
    "什么样的相处，会让你慢慢愿意卸下防备？",
    "你认为一段长久的友情，靠的究竟是什么？",
    "别人怎样表达关心，最容易被你真正接收到？",
    "你曾经从一段关系的结束里学会了什么？",
    "对你来说，舒服的边界感应该是什么样的？",
    "你会因为什么瞬间，突然对一个人产生信任？",
    "成年以后，你对“喜欢一个人”的理解发生了什么变化？",
  ],
  choice: [
    "哪一个看似很小的选择，后来悄悄改变了你的人生？",
    "如果安全感和可能性只能选一个，你现在会选哪一个？",
    "你做过最勇敢的一次决定是什么？",
    "有没有一条大家都在走的路，你却越来越不想走了？",
    "你曾经放弃过什么，后来发现那其实是一种成全？",
    "如果不需要向任何人解释，你最想重新做一次什么选择？",
    "你更相信及时止损，还是再坚持一下？什么情况下？",
    "人生哪一个阶段，你最希望当时有人提醒你一句话？",
    "你做决定时，更听从理性、直觉，还是重要的人？",
    "有什么选择，你至今不知道对错，但仍愿意承担结果？",
  ],
  growth: [
    "过去一年，你身上最值得自己骄傲的变化是什么？",
    "你现在已经学会了，小时候却完全不会的一件事是什么？",
    "哪一次失败，让你重新认识了自己？",
    "你正在努力摆脱的一个旧习惯或旧观念是什么？",
    "别人经常夸你的哪一点，你自己其实很难相信？",
    "你什么时候最像真实的自己？",
    "如果可以拥抱五年前的自己，你最想先说什么？",
    "你最近正在和自己和解的一件事是什么？",
    "有什么能力，是生活逼着你慢慢学会的？",
    "现在的你，比过去更愿意保护自己的什么？",
  ],
  memory: [
    "你记忆里最有“家”的感觉的一个画面是什么？",
    "哪一个普通的下午，你却一直没有忘记？",
    "小时候的你，曾经坚定地相信什么？",
    "有没有一个陌生人的善意，让你记到现在？",
    "你最想回到哪一年，只待一天也好？",
    "哪一次告别，你后来才明白那真的是最后一次？",
    "成长过程中，谁的一句话曾经给过你很大的力量？",
    "你人生中第一次感到自己长大了，是什么时候？",
    "哪一种气味、声音或天气，会立刻把你带回某段记忆？",
    "如果可以把一段回忆做成照片，你会选哪个瞬间？",
  ],
  future: [
    "如果未来三年只认真完成一件事，你希望是什么？",
    "你想象中真正理想的一天，会怎样从早晨过到夜晚？",
    "十年后的你，最希望感谢现在的自己做了什么？",
    "如果完全不用考虑收入，你愿意把时间花在哪里？",
    "你最希望未来的生活里，始终保留哪一种简单的快乐？",
    "有什么事情，你不想等到“有一天”才开始？",
    "你想成为一个怎样的大人，又不想成为怎样的大人？",
    "如果能提前看到人生的一个答案，你最想知道什么？",
    "未来某一天回望现在，你希望记住今晚的什么？",
    "你希望离开这个世界很久以后，人们怎样想起你？",
  ],
};

const MODE_META = {
  sweet: { label: "轻甜热身", level: "轻松" },
  deep: { label: "认真走心", level: "深入" },
  brave: { label: "勇敢坦白", level: "挑战" },
  custom: { label: "专属问题", level: "只属于你们" },
};

const GROUP_TOPIC_META = {
  emotion: { label: "情感关系" },
  choice: { label: "人生选择" },
  growth: { label: "自我成长" },
  memory: { label: "回忆片段" },
  future: { label: "未来想象" },
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
  groupTopics: new Set(Object.keys(GROUP_QUESTION_BANK)),
  groupTotalRounds: 15,
  groupCurrentRound: 0,
  groupAnswered: 0,
  groupDeck: [],
  groupUsedIds: new Set(),
  groupPlayerQueue: [],
  groupActivePlayer: "",
};

const screens = [...document.querySelectorAll(".screen")];
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
