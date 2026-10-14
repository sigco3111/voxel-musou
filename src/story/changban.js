// 第二章「長坂坡」 — chapter data (format: ./chapters.js header): metadata, speakers, the battle script (BEATS), the
// prologue cards over the 當陽 ink map (PL_MAP) and the epilogue.
// History (208 AD, 當陽長坂): 劉琮 surrenders 荊州; 劉備 flees south toward 江陵 with a hundred thousand refugees and is
// overtaken at 長坂 by 曹操's light horse. 趙雲 rides back into the host, finds 甘夫人, takes 夏侯恩's 青釭劍, and carries
// the infant 阿斗 out (糜夫人 throws herself into a well); 張飛 holds the bridge with twenty riders, raising dust in the
// woods behind him, and roars the pursuit to a standstill (據水斷橋). Played as either officer — the script branches by
// `hero`: 趙雲 rides out to the village and back (單騎救主, 張飛 holding the bridge as an allied actor); 張飛 holds the
// bridge on a timer, rides out to meet 趙雲 (an allied actor) and brings him home, then stands alone on the bridge.
// Map (world/maps/changban.js): anchors 'bridge' (the deck's middle, z -128), 'gan', 'mizhu', 'well', 'cao' (曹操's post
// on 景山); gate 'jingshan' (never opened: 曹操 stays out of reach); sets 'well' / 'bridge'.

export const CH = {
  id: 'changban', num: { zh: '제2장', en: 'CHAPTER II' }, title: { zh: '장판파', en: 'Changban' },
  seal: '당양 전투', era: { zh: '건안 13년', en: '208 AD' }, map: 'changban',
  heroes: ['zhaoyun', 'zhangfei'],
  ally: { zhaoyun: 'zhangfei', zhangfei: 'zhaoyun' },
  army: { foe: 'cao', ally: 'liu' },
  // 張飛's riders at the south foot of the bridge (they hold there: the hero rides north, never past them)
  van: [{ x: -5, z: -142, n: 10, cols: 5, hold: true }, { x: 5, z: -142, n: 10, cols: 5, hold: true }],
  hq: [0, 168],                                    // 曹操 on 景山
  rank: { kos: [500, 1000, 1700], time: [540, 720, 900] },   // tuned to the pacing note above BEATS
};

export const SPK = {
  liubei: { name: { zh: '유비', en: 'Liu Bei' }, seal: '劉', side: 'shu', char: 'liubei' },
  mifang: { name: { zh: '미방', en: 'Mi Fang' }, seal: '芳', side: 'shu' },
  jianyong: { name: { zh: '간옹', en: 'Jian Yong' }, seal: '雍', side: 'shu' },
  gan: { name: { zh: '감부인', en: 'Lady Gan' }, seal: '甘', side: 'shu' },
  mi: { name: { zh: '미부인', en: 'Lady Mi' }, seal: '糜', side: 'shu' },
  mizhu: { name: { zh: '미축', en: 'Mi Zhu' }, seal: '竺', side: 'shu' },
  villager: { name: { zh: '백성', en: 'Villager' }, seal: '民', side: 'shu' },
  caocao: { name: { zh: '조조', en: 'Cao Cao' }, seal: '曹', side: 'wei', char: 'caocao' },
  caohong: { name: { zh: '조홍', en: 'Cao Hong' }, seal: '洪', side: 'wei' },
  caochun: { name: { zh: '조순', en: 'Cao Chun' }, seal: '純', side: 'wei' },
  chunyu: { name: { zh: '순우도', en: 'Chunyu Dao' }, seal: '導', side: 'wei' },
  xiahouen: { name: { zh: '하후은', en: 'Xiahou En' }, seal: '恩', side: 'wei' },
  yanming: { name: { zh: '안명', en: 'Yan Ming' }, seal: '晏', side: 'wei' },
  zhanghe: { name: { zh: '장합', en: 'Zhang He' }, seal: '郃', side: 'wei' },
  zhongjin: { name: { zh: '종진', en: 'Zhong Jin' }, seal: '縉', side: 'wei' },
  zhongshen: { name: { zh: '종신', en: 'Zhong Shen' }, seal: '紳', side: 'wei' },
  xuchu: { name: { zh: '허저', en: 'Xu Chu' }, seal: '褚', side: 'wei' },
  xiahoujie: { name: { zh: '하후걸', en: 'Xiahou Jie' }, seal: '傑', side: 'wei' },
  soldier: { name: { zh: '조조군 병사', en: 'Cao Soldier' }, seal: '兵', side: 'wei' },
};

// officers (crowd.spawnOfficer). A default officer has 520 HP (≈ 5 full combos); 張郃 and 許褚 are the heavyweights.
// Looks (armies.js offLook) set the named ones apart from the 曹軍 officer default.
export const OFF = {
  chunyu: { name: { zh: '순우도', en: 'CHUNYU DAO' }, hp: 650, look: { helm: 'cap', armor: 0x3a3440 } },
  xiahouen: { name: { zh: '하후은', en: 'XIAHOU EN' }, hp: 800, look: { helm: 'crest', cape: 0x3a1a4a, plume: 0xe8e0d0 } },
  yanming: { name: { zh: '안명', en: 'YAN MING' }, hp: 750, look: { helm: 'horn', armor: 0x3a2a24, trim: 0xb08040 } },
  zhanghe: { name: { zh: '장합', en: 'ZHANG HE' }, hp: 1100, look: { helm: 'crest', armor: 0x28283a, cape: 0x6a2a6a, plume: 0xd8d0f0 } },
  zhongjin: { name: { zh: '종진', en: 'ZHONG JIN' }, hp: 600, look: { helm: 'horn', armor: 0x3a3028, cape: 0x5a2a18 } },
  zhongshen: { name: { zh: '종신', en: 'ZHONG SHEN' }, hp: 600, look: { helm: 'horn', armor: 0x2a3028, cape: 0x1a3a4a } },
  caochun: { name: { zh: '조순', en: 'CAO CHUN' }, hp: 800, look: { helm: 'crest', armor: 0x1a1a22, plume: 0x1a1a1a, cape: 0x6a1a14 } },
  caohong: { name: { zh: '조홍', en: 'CAO HONG' }, hp: 900, look: { helm: 'wing', armor: 0x2a2240, trim: 0xe0c060 } },
  xuchu: { name: { zh: '허저', en: 'XU CHU' }, hp: 1400, look: { helm: 'horn', armor: 0x4a3a2a, cape: 0x3a2a1a, plume: 0x2a1a10 } },
  xiahoujie: { name: { zh: '하후걸', en: 'XIAHOU JIE' }, hp: 700, boss: true, look: { helm: 'crest', cape: 0x2a1a3a, plume: 0xc0c0c0 } },
};

const ZY = ['zhaoyun'], ZF = ['zhangfei'];
/** Hero south of z (the return run: `at` only looks north) — a 1 km circle just touching z at x = 0. */
const south = (z) => ({ near: [['bridge', 0, z + 128 - 1000], 1000] });
const DECK = ['bridge', 0, 8];                  // the north foot of the bridge (z -120)
const CAO = ['cao', 0, 0];
const CAOCAO = { kit: 'caocao', role: 'npc', at: CAO, yaw: Math.PI, name: { zh: '조조', en: 'CAO CAO' }, seal: '曹' };
// Enemies converge on the hero instead of marching past him: defend the actual north bridgehead. At normal difficulty
// (seed 1, hero invulnerable), an idle guard loses it in 27 s; Zhang Fei's N1→N3→C4 guard keeps 92% through the 150 s hold.
const BRIDGE = { key: 'bridge', at: DECK, r: 5, name: { zh: '장판교', en: 'Changban Bridge' } };
const NAG_ZY = { who: 'hero', zh: '부인과 도련님이 아직 전장에 계신다. 돌아갈 수 없다!', en: 'Our lady and the young lord are still out there. I can\'t turn back now!' };
const NAG_ZY_FWD = { who: 'hero', zh: '먼저 눈앞의 사람을 구하고 나아가자!', en: 'Save the ones in front of me first, then ride on!' };
const NAG_HOME = { who: 'hero', zhaoyun: ['아두를 품에 안았으니 서둘러 장판교로 돌아가야 한다!', 'I have A Dou. Back to the bridge, now!'],
  zhangfei: ['자룡이 뒤에 있는데 내가 먼저 갈 수 있겠느냐!', 'Zilong is behind me. I\'m not riding further in!'] };
const NAG_ZF = { who: 'hero', zh: '내 임무는 다리를 지키는 것이다! 다리를 버리고 돌아다닐 수 없다!', en: 'My job is this bridge. I\'m not running off and leaving it!' };

// Pacing (default difficulty), a scripted bot attacking nonstop — 趙雲: slopes + 甘夫人 + 淳于導 2 min · 夏侯恩 1 min · the
// well 40 s · the ride back past 晏明 / 張郃 / 鍾 brothers 2.5 min · the bridge 20 s ≈ 6.5 min, ≈ 2400 KOs. 張飛: the
// bridge 150 s (timer) · the ride out and 張郃 1.5 min · the ride back 1 min · the bridge stand 1.5-2 min ≈ 7 min. A human
// reading the lines and steering lands at ≈ 9-13 min. Rank thresholds: CH.rank.
export const BEATS = [
  // ================================================================ 趙雲 — 單騎救主
  // ---- the bridge: 張飛 doubts him; into the slopes
  {
    hero: ZY, when: { wait: 30 },
    actors: { zhangfei: { kit: 'zhangfei', role: 'ally', at: ['bridge', 1.2, 5], yaw: 0 }, caocao: CAOCAO },
    actor: [{ key: 'zhangfei', do: 'hold', at: DECK }, { key: 'caocao', do: 'hold', at: CAO }],
    obj: { zh: '장판에 진입해 감부인 찾기', en: 'Ride into the slopes and find Lady Gan', go: ['gan', 0, 0] },
    squads: [{ at: ['slopes', -0.35, -0.72], n: 18 }, { at: ['slopes', 0.3, -0.6], n: 20 }, { at: ['slopes', -0.45, -0.3], n: 22 }, { at: ['slopes', 0.4, -0.15], n: 20 }],
    limit: { z: ['slopes', 0, 0.55], back: ['bridge', 0, 5], nag: NAG_ZY },
    morale: -0.1,
    say: [
      { who: 'mifang', zh: '주공! 자룡이 몇 기를 이끌고 북쪽으로 갔습니다. 조조에게 간 것이 틀림없습니다!', en: 'My lord! Zilong has ridden north with a few horsemen. He must be going over to Cao Cao!' },
      { who: 'liubei', zh: '자룡은 나의 오랜 벗이다. 어찌 배신하겠느냐?', en: 'Zilong is my old friend. He would never betray me.' },
      { who: 'ally', zh: '자룡! 설마 조조에게 항복했느냐?', en: 'Zilong! Don\'t tell me you\'ve gone over to that traitor Cao?' },
      { who: 'hero', zh: '익덕, 의심하지 마시오! 부인과 도련님이 전장에서 흩어졌소. 하늘과 땅을 뒤져서라도 찾아오겠소!', en: 'Put your doubts away, Yide. Our lady and the young lord are lost in the fighting. I\'ll find them, in heaven or under the earth!' },
      { who: 'ally', zh: '좋아! 이 다리에서 기다리겠다. 돌아오지 않으면... 흥!', en: 'Fine! I\'ll wait right here on this bridge. And if you don\'t come back... hmph!' },
    ],
  },
  {
    hero: ZY, when: [{ zone: 'slopes' }, { kos: 40 }],
    waves: true,
    say: [{ who: 'soldier', zh: '흰 갑옷의 장수가 돌아온다! 막아라!', en: 'The general in white is coming back! Stop him!' }],
  },
  // ---- 甘夫人, then 淳于導 with 糜竺 in ropes
  {
    hero: ZY, when: { near: [['gan', 0, 0], 14] },
    banner: { html: '발견 <em>감부인</em>', en: 'Lady Gan is found', dur: 150 },
    heal: 0.2,
    officers: { chunyu: { at: ['mizhu', 0, 4], engaged: true } },
    squads: [{ at: ['mizhu', -8, -4], n: 16, charge: true }, { at: ['gan', 10, 8], n: 16, charge: true }],
    obj: { zh: '순우도를 격파하고 미축 구출', en: 'Defeat Chunyu Dao and free Mi Zhu', go: 'chunyu' },
    say: [
      { who: 'gan', zh: '장군! 미부인과 아두를 안고 가다가 혼란 속에 흩어졌습니다...', en: 'General! Lady Mi and I had A Dou with us, but we were torn apart in the rout...' },
      { who: 'hero', zh: '걱정 마십시오. 반드시 도련님을 찾아오겠습니다!', en: 'Take heart, my lady. I will bring the young lord back!' },
      { who: 'chunyu', zh: '미축은 이미 사로잡았다! 조운, 다음은 네 차례다!', en: 'I\'ve got Mi Zhu tied up! You\'re next, Zhao Yun!' },
    ],
  },
  {
    hero: ZY, when: { down: 'chunyu' },
    banner: { html: '구출 <em>미축</em>', en: 'Mi Zhu is freed', dur: 150 },
    heal: 0.3, morale: 0.12, hush: true,
    officers: { xiahouen: { at: ['village', -0.05, -0.72] } },
    squads: [{ at: ['slopes', -0.3, 0.45], n: 20 }, { at: ['slopes', 0.35, 0.5], n: 20 }, { at: ['village', 0.2, -0.8], n: 18 }],
    obj: { zh: '당양으로 북상해 미부인과 아두 찾기', en: 'Ride north to Dangyang and find Lady Mi and A Dou', go: ['village', 0, -0.9] },
    limit: { z: ['village', 0, -0.35], back: ['bridge', 0, 5], nag: NAG_ZY_FWD },
    say: [
      { who: 'mizhu', zh: '자룡 장군! 구해주셔서 감사합니다!', en: 'General Zilong! I owe you my life!' },
      { who: 'hero', zh: '자중 선생, 부인을 장판교로 모셔주십시오. 저는 도련님을 찾겠습니다!', en: 'Mi Zhu, take Lady Gan to the bridge. I\'m going back for the young lord!' },
    ],
  },
  // ---- 夏侯恩, 曹操's sword-bearer: the 青釭劍
  {
    hero: ZY, when: [{ at: ['village', 0, -1.1] }, { kos: 80, wait: 40 * 60 }],
    skip: { down: 'xiahouen' },
    obj: { zh: '조조의 검을 맡은 하후은 격파', en: 'Defeat Cao Cao\'s sword-bearer, Xiahou En', go: 'xiahouen' },
    say: [
      { who: 'xiahouen', zh: '나는 조 승상의 검을 맡은 하후은이다! 청강검은 쇠도 진흙처럼 벤다. 받아라!', en: 'I am Xiahou En, who carries the Chancellor\'s sword! This is the Qinggang blade. It cuts iron like mud!' },
      { who: 'hero', zh: '네 손에 들린 보검이 아깝구나!', en: 'A fine sword. Wasted in your hands!' },
    ],
  },
  {
    hero: ZY, when: { down: 'xiahouen' },
    buff: { atk: 1.5, zh: '획득 <em>청강검</em> — 공격력 상승', en: 'The Qinggang sword is yours — attack up' },
    heal: 0.25, morale: 0.1, hush: true,
    squads: [{ at: ['village', -0.4, -0.3], n: 18 }, { at: ['village', 0.45, 0.1], n: 20 }, { at: ['well', -6, 12], n: 16 }],
    obj: { zh: '마른 우물로 가서 미부인 찾기', en: 'Find Lady Mi by the old well', go: ['well', -3, 0] },
    limit: { z: ['well', 0, 16], back: ['bridge', 0, 5], nag: NAG_ZY_FWD },
    say: [
      { who: 'hero', zh: '검자루에 금으로 청강 두 글자가 새겨졌다... 역시 조조의 보검이구나!', en: 'The hilt is inlaid with the word Qinggang in gold. Cao Cao\'s own sword!' },
      { who: 'villager', zh: '장군... 다리를 다친 부인이 아이를 안고 무너진 담 옆 마른 우물에 있습니다...', en: 'General... there\'s a lady with a baby, her leg\'s hurt. She\'s by the dry well, under the broken wall...' },
    ],
  },
  // ---- 糜夫人's well
  {
    hero: ZY, when: { near: [['well', 0, 0], 10] },
    banner: { html: '발견 <em>미부인</em> 및 <em>아두</em>', en: 'Lady Mi and A Dou are found', dur: 160 },
    waves: false,
    say: [
      { who: 'mi', zh: '장군을 뵈었으니 아두는 살 수 있겠군요!', en: 'Now that you are here, General, A Dou will live!' },
      { who: 'mi', zh: '이 아이를 장군께 맡깁니다. 저는 크게 다쳤으니 죽어도 아깝지 않습니다!', en: 'I entrust this child to you. I am badly hurt — my death means nothing.' },
      { who: 'hero', zh: '부인, 말에 오르십시오. 저는 걸어서 싸우며 포위를 뚫겠습니다!', en: 'Take my horse, my lady. I\'ll fight on foot and see you out of this!' },
      { who: 'mi', zh: '안 됩니다! 장군께 말이 없어서야 되겠습니까? 저를 짐으로 삼지 마십시오...', en: 'No! What is a general without his horse? Do not let me be your burden...' },
    ],
  },
  {
    hero: ZY, when: { wait: 16 * 60 },
    banner: { html: '미부인이 아두를 내려놓고 몸을 던졌다<em>마른 우물</em>', en: 'Lady Mi lays A Dou on the ground and throws herself into the well', dur: 200 },
    say: [
      { who: 'hero', zh: '부인...!', en: 'My lady—!' },
      { who: 'hero', zh: '...조조군이 부인의 시신을 욕보이게 할 수 없다. 흙담을 무너뜨려 우물을 덮자!', en: '...Cao\'s men will not defile her. I\'ll bring the wall down over the well!' },
    ],
  },
  {
    hero: ZY, when: { wait: 8 * 60 },
    set: 'well',
    banner: { html: '아두를 품에 안고 <em>포위 돌파</em>', en: 'A Dou in his arms, Zhao Yun cuts his way out', dur: 220, big: true },
    waves: true, heal: 0.3,
    officers: { yanming: { at: ['village', 0.1, -0.7], engaged: true } },
    squads: [{ at: ['well', 10, 14], n: 18, charge: true }, { at: ['well', -18, 8], n: 18, charge: true }, { at: ['village', -0.2, -0.55], n: 22 }, { at: ['village', 0.35, -0.7], n: 18 }],
    obj: { zh: '아두를 품에 안고 장판교로 복귀', en: 'Carry A Dou back to Changban Bridge', go: DECK },
    limit: { z: ['well', 0, 10], back: ['village', 0, -1.05], nag: NAG_HOME },     // 晏明 bars the village's south edge
    say: [
      { who: 'hero', zh: '아두야, 꼭 잡아라. 목숨을 걸고라도 주공께 돌려보내겠다!', en: 'Hold tight, A Dou. I\'ll see you back to your father if it costs my life!' },
      { who: 'yanming', zh: '안명이 여기 있다! 조운, 아이를 두고 가라!', en: 'Yan Ming stands here! Zhao Yun, leave the child!' },
    ],
  },
  // ---- the ride back: 晏明, 張郃, the 鍾 brothers; 曹操 watches from 景山
  {
    hero: ZY, when: { down: 'yanming' },
    heal: 0.2, morale: 0.1,
    officers: { zhanghe: { at: ['slopes', 0.05, 0.2] } },
    squads: [{ at: ['slopes', -0.35, 0.3], n: 20 }, { at: ['slopes', 0.35, 0.1], n: 20 }, { at: ['village', 0, 0.2], n: 18, charge: true }],
    obj: { zh: '장합 격파', en: 'Defeat Zhang He', go: 'zhanghe' },
    limit: { z: ['well', 0, 10], back: ['slopes', 0, 0.05], nag: NAG_HOME },
    say: [
      { who: 'caocao', zh: '저 흰 갑옷의 장수는 누구냐?', en: 'Who is that general in white?' },
      { who: 'caohong', zh: '승상, 상산 조자룡입니다!', en: 'That is Zhao Zilong of Changshan, Chancellor!' },
      { who: 'caocao', zh: '참으로 호랑이 같은 장수다! 생포하라, 숨어서 화살을 쏘지 마라!', en: 'A tiger of a general! Pass the word: take him alive — no arrows from cover!' },
      { who: 'zhanghe', zh: '조운! 이제 도망칠 수 없다!', en: 'Zhao Yun! This is as far as you go!' },
    ],
  },
  {
    hero: ZY, when: { down: 'zhanghe' },
    heal: 0.25, morale: 0.1, hush: true,
    officers: { zhongjin: { at: ['bridge', -10, 27], engaged: true }, zhongshen: { at: ['bridge', 10, 27], engaged: true } },
    squads: [{ at: ['bridge', -16, 31], n: 18 }, { at: ['bridge', 16, 33], n: 18 }, { at: ['slopes', 0, 0.3], n: 20, charge: true }],
    obj: { zh: '종진·종신 격파', en: 'Defeat Zhong Jin and Zhong Shen', go: 'zhongjin' },
    limit: { z: ['well', 0, 10], back: ['bridge', 0, 18], nag: NAG_HOME },   // the brothers bar the bridge foot
    say: [
      { who: 'hero', zh: '장합의 용맹은 명불허전이구나... 하지만 오늘은 싸움에 매달릴 수 없다!', en: 'Zhang He lives up to his name... but I can\'t stay to fight him today!' },
      { who: 'zhongjin', zh: '종진·종신 형제가 여기 있다! 조운, 멈춰라!', en: 'The brothers Zhong Jin and Zhong Shen! You\'re not getting past, Zhao Yun!' },
    ],
  },
  {
    hero: ZY, when: { down: 'zhongjin' },
    obj: { zh: '종신 격파', en: 'Defeat Zhong Shen', go: 'zhongshen' },
    say: [{ who: 'zhongshen', zh: '형님! 조운, 목숨을 걸고 싸우겠다!', en: 'Brother! Zhao Yun, you\'ll pay for that!' }],
  },
  {
    hero: ZY, when: { down: 'zhongshen' },
    heal: 0.2, morale: 0.15, hush: true,
    obj: { zh: '장판교로 후퇴', en: 'Get back to the bridge', go: DECK },
    limit: { z: ['well', 0, 10], back: ['bridge', 0, 5], nag: NAG_HOME },
    squads: [{ at: ['slopes', -0.2, -0.55], n: 18, charge: true }, { at: ['slopes', 0.2, -0.3], n: 18, charge: true }],
    say: [{ who: 'hero', zh: '익덕! 도와주시오!', en: 'Yide! To me!' }],
  },
  // ---- the bridge: 張飛's roar
  {
    hero: ZY, when: { near: [DECK, 14] },
    banner: { html: '장판교 앞에서<em>우레 같은 외침</em> — 추격병이 멈췄다', en: 'A thunderous challenge checks the pursuit at Changban Bridge', dur: 240, big: true },
    waves: false, morale: 0.3, hush: true,
    actor: { key: 'zhangfei', do: 'hold', at: ['bridge', 0, 12] },
    say: [
      { who: 'ally', zh: '자룡, 어서 가라! 추격병은 내가 맡겠다!', en: 'Go, Zilong! Leave the pursuit to me!' },
      { who: 'ally', zh: '이 사모를 가로들고 있겠다. 누가 감히 다리에 오르느냐!', en: 'My spear bars these planks. Send forward the man willing to cross its point!' },
      { who: 'soldier', zh: '하후걸... 하후걸 장군이 겁에 질려 말에서 떨어져 죽었다!', en: 'General Xiahou Jie... the roar split his gall — he fell from his horse, dead!' },
    ],
  },
  {
    hero: ZY, when: { wait: 9 * 60 },
    win: true, morale: 1,
    banner: { html: '<em>단기구주</em> — 아두 무사', en: 'Alone, he saved his lord\'s son — A Dou is safe', dur: 260, big: true },
    say: [{ who: 'hero', zh: '주공! 도련님은... 무사하십니다!', en: 'My lord! Your son... is safe and sound!' }],
  },

  // ================================================================ 張飛 — 據水斷橋
  // ---- hold the bridge (a timer, the dust ruse in the woods)
  {
    hero: ZF, when: { wait: 30 },
    actors: { caocao: CAOCAO }, actor: { key: 'caocao', do: 'hold', at: CAO },
    defend: { ...BRIDGE, hp: 600 },
    fail: { when: { hp: ['bridge', 0.01] }, zh: '장판교가 함락되었습니다...', en: 'Changban Bridge has fallen...' },
    obj: { zh: '장판교 방어', en: 'Hold Changban Bridge', go: DECK, timer: 150 },
    squads: [{ at: ['bridge', -12, 33], n: 18 }, { at: ['bridge', 14, 36], n: 18 }, { at: ['slopes', -0.2, -0.82], n: 20 }],
    limit: { z: ['slopes', 0, -0.75], back: ['bridge', 0, -6], nag: NAG_ZF },
    morale: -0.1,
    say: [
      { who: 'liubei', zh: '익덕, 스무 기를 이끌고 뒤를 맡아 조조군을 막아라!', en: 'Yide, take twenty riders and hold the rear. Cao\'s men must not get through!' },
      { who: 'hero', zh: '형님은 먼저 가시오! 내가 있는 한 한 놈도 건너지 못하오!', en: 'Just go, brother! While I\'m here, not one of Cao\'s men crosses this bridge!' },
      { who: 'hero', zh: '얘들아! 가지를 말꼬리에 매달고 숲을 달려 먼지를 일으켜라. 조조가 복병을 의심하게 하자!', en: 'Lads! Cut branches, tie them to your horses\' tails and ride back and forth in the woods. Kick up dust — make Cao think there\'s an ambush!' },
    ],
  },
  {
    hero: ZF, when: [{ kos: 40 }, { wait: 20 * 60 }],
    waves: true,
    squads: [{ at: ['bridge', 0, 34], n: 20, charge: true }],
    say: [
      { who: 'soldier', zh: '다리 남쪽 숲에 먼지가 이는군... 복병인가?', en: 'Look at the dust in the woods past the bridge... is there an ambush?' },
      { who: 'soldier', zh: '뭘 두려워하나! 다리 위에는 한 명뿐이다!', en: 'What of it? There\'s only one man on that bridge!' },
    ],
  },
  {
    hero: ZF, when: { wait: 45 * 60 },
    officers: { caochun: { at: ['bridge', 0, 31], engaged: true } },
    squads: [{ at: ['bridge', -16, 30], n: 16, charge: true }, { at: ['bridge', 16, 31], n: 16, charge: true }],
    say: [
      { who: 'caochun', zh: '호표기 조순이다! 장비, 길을 비켜라!', en: 'Cao Chun of the Tiger and Leopard Riders! Out of the way, Zhang Fei!' },
      { who: 'hero', zh: '호표기? 내 눈에는 들개 기병이다! 와라!', en: 'Tigers and leopards? Jackals, more like! Come on!' },
    ],
  },
  // ---- 簡雍's news: 子龍 is out there alone — ride out to meet him
  {
    hero: ZF, when: { timer: true },
    banner: { html: '<em>장판교</em> 지켜냈다', en: 'The bridge holds', dur: 150 },
    defend: null, fail: null, heal: 0.35, morale: 0.12, hush: true,
    obj: { zh: '당양에 진입해 조운 지원', en: 'Ride into Dangyang and bring Zhao Yun out', go: ['slopes', 0, 0.35] },
    limit: { z: ['village', 0, -0.3], back: ['bridge', 0, -6], nag: NAG_ZF },
    squads: [{ at: ['slopes', -0.35, -0.4], n: 20 }, { at: ['slopes', 0.3, -0.1], n: 20 }, { at: ['slopes', -0.2, 0.2], n: 22 }],
    say: [
      { who: 'jianyong', zh: '삼장군! 자룡 장군이 홀로 조조군에 들어갔는데 아직 돌아오지 않았습니다!', en: 'General! Zilong rode back into Cao\'s army alone, and he hasn\'t come back!' },
      { who: 'hero', zh: '뭐라고? 미방은 조조에게 갔다고 했는데...', en: 'What? Mi Fang said he\'d gone over to Cao...' },
      { who: 'jianyong', zh: '자룡 장군은 부인과 도련님을 찾으러 가신 겁니다!', en: 'He went back for our lady and the young lord!' },
      { who: 'hero', zh: '...내가 오해했구나! 다리는 네게 맡긴다. 내가 데려오겠다!', en: '...Then I wronged him! Hold the bridge — I\'m going to bring him back!' },
    ],
  },
  {
    hero: ZF, when: { at: ['slopes', 0, 0.35] },
    officers: { zhanghe: { at: ['village', 0, -0.72], engaged: true } },
    squads: [{ at: ['village', -0.3, -0.85], n: 20 }, { at: ['village', 0.3, -0.8], n: 20 }, { at: ['slopes', 0, 0.75], n: 18, charge: true }],
    obj: { zh: '장합 격파', en: 'Defeat Zhang He', go: 'zhanghe' },
    say: [
      { who: 'zhanghe', zh: '조운이 포위됐는데 또 죽으러 왔구나!', en: 'Zhao Yun is already surrounded, and here comes another fool to die!' },
      { who: 'hero', zh: '장합! 나를 막는 자는 죽는다!', en: 'Zhang He! Whoever stands in my way dies!' },
    ],
  },
  {
    hero: ZF, when: { down: 'zhanghe' },
    banner: { html: '<em>조운</em> 아두를 품에 안고 포위 돌파', en: 'Zhao Yun breaks out with A Dou in his arms', dur: 180 },
    heal: 0.3, morale: 0.15, hush: true,
    actors: { zhaoyun: { kit: 'zhaoyun', role: 'ally', at: ['village', 0.1, -0.45] } },
    actor: { key: 'zhaoyun', do: 'follow' },
    squads: [{ at: ['village', -0.35, -0.2], n: 18, charge: true }, { at: ['village', 0.35, -0.3], n: 18, charge: true }, { at: ['slopes', -0.3, 0.1], n: 20 }, { at: ['slopes', 0.3, -0.3], n: 20 }],
    obj: { zh: '조운을 호위해 장판교로 후퇴', en: 'Escort Zhao Yun back to the bridge', go: DECK },
    limit: { z: ['village', 0, -0.3], nag: NAG_HOME },
    say: [
      { who: 'ally', zh: '익덕! 아두는 여기 있고 무사하오!', en: 'Yide! A Dou is here, safe and sound!' },
      { who: 'hero', zh: '자룡! 좋은 형제여, 내가 오해했구나!', en: 'Zilong! Brother, I misjudged you!' },
      { who: 'ally', zh: '추격병이 많소. 서둘러 장판교로 돌아갑시다!', en: 'There are too many of them. Back to the bridge!' },
      { who: 'hero', zh: '먼저 가라, 내가 뒤를 맡겠다!', en: 'You ride. I\'ll cover you!' },
    ],
  },
  {
    hero: ZF, when: south(-40),
    squads: [{ at: ['slopes', -0.4, -0.6], n: 18, charge: true }, { at: ['slopes', 0.4, -0.5], n: 18, charge: true }],
    say: [
      { who: 'caocao', zh: '저 검은 얼굴의 대장부는 누구냐?', en: 'Who is that black-faced giant?' },
      { who: 'caohong', zh: '승상, 장비 장익덕입니다!', en: 'That is Zhang Fei, Zhang Yide, Chancellor!' },
      { who: 'caocao', zh: '운장이 말하길 익덕은 백만 군중에서 장수의 목을 주머니 속 물건처럼 꺼낸다 했지. 얕보지 마라!', en: 'Guan Yu once told me Yide could take a general\'s head in an army of a million like picking a pocket. Take no chances!' },
    ],
  },
  // ---- alone on the bridge: 曹洪, 許褚, then the roar and 夏侯傑
  {
    hero: ZF, when: { near: [DECK, 14] },
    actor: { key: 'zhaoyun', do: 'hold', at: ['bridge', 0, -24] },
    defend: { ...BRIDGE, hp: 500 },
    fail: { when: { hp: ['bridge', 0.01] }, zh: '장판교가 함락되었습니다...', en: 'Changban Bridge has fallen...' },
    heal: 0.3, waves: true,
    officers: { caohong: { at: ['bridge', -14, 33], engaged: true }, xuchu: { at: ['bridge', 14, 34], engaged: true } },
    squads: [{ at: ['bridge', -20, 31], n: 18, charge: true }, { at: ['bridge', 20, 33], n: 18, charge: true }, { at: ['slopes', 0, -0.8], n: 20, charge: true }],
    obj: { zh: '홀로 장판교를 지키며 조홍·허저 격파', en: 'Hold the bridge alone — defeat Cao Hong and Xu Chu', go: 'xuchu' },
    limit: { z: ['bridge', 0, 20], back: ['bridge', 0, -6], nag: NAG_ZF },
    say: [
      { who: 'ally', zh: '익덕, 그대는?', en: 'Yide, what about you?' },
      { who: 'hero', zh: '다리를 건너 형님께 가라! 여기는 내게 맡겨라!', en: 'Get across and find my brother! This bridge is mine!' },
      { who: 'caohong', zh: '저놈은 혼자다! 모두 덤벼라!', en: 'He\'s one man! All together!' },
      { who: 'xuchu', zh: '허저다! 검은 놈, 내 칼을 받아라!', en: 'Xu Chu is here! Try this, you black-faced brute!' },
    ],
  },
  {
    hero: ZF, when: [{ down: 'caohong' }, { down: 'xuchu' }, { wait: 50 * 60 }],
    banner: { html: '장비가 창을 가로들고<em>다리 앞을 가로막았다</em> — 조조군이 겁에 질렸다', en: 'Zhang Fei holds the crossing; the pursuit loses its nerve', dur: 260, big: true },
    morale: 0.25, waves: false, heal: 0.2,
    officers: { xiahoujie: { at: ['bridge', 0, 30], engaged: true } },
    obj: { zh: '하후걸 격파', en: 'Defeat Xiahou Jie', go: 'xiahoujie' },
    say: [
      { who: 'hero', zh: '형님을 위해 이 퇴로를 지키겠다! 죽음이 두렵지 않다면 다리에 올라라!', en: 'This road stays open for my brother. Step onto my bridge if your life means so little!' },
      { who: 'hero', zh: '함성은 요란하군. 어째서 기슭에 서 있기만 하느냐?', en: 'An army of loud voices, yet every pair of feet stays ashore!' },
      { who: 'caocao', zh: '...이 목소리는 우레 같구나.', en: '...That voice. Like a thunderclap.' },
      { who: 'xiahoujie', zh: '아... 아아...!', en: 'Ah... ahh...!' },
    ],
  },
  {
    hero: ZF, when: { down: 'xiahoujie' },
    win: true, set: 'bridge', waves: false, morale: 1,
    banner: { html: '하후걸이 겁에 질려 쓰러졌다 — <em>강을 막고 다리를 끊다</em>', en: 'Xiahou Jie falls, his courage shattered — Zhang Fei holds the river and breaks the bridge', dur: 260, big: true },
    say: [{ who: 'hero', zh: '하하하! 다리를 부수면 너희가 어떻게 건너겠느냐!', en: 'Ha! There goes the bridge. Let\'s see you cross now!' }],
  },
];

// ---- prologue ink map of 荊州北部 (viewBox 1600×900): 漢水 from 樊城/襄陽 down to 漢津, 當陽長坂, 江陵, the flight
const peaks = (list, h, w) => list.map(([x, y, k = 1]) =>
  `<path d="M${x - w * k} ${y} Q${x - w * k * 0.35} ${y - h * k * 0.55} ${x} ${y - h * k} Q${x + w * k * 0.3} ${y - h * k * 0.5} ${x + w * k} ${y}Z"/>`).join('');
const HAN = 'M-20 170 C220 150 420 200 640 205 S900 230 1010 330 S1080 520 1150 640 S1300 820 1420 930';
const ZHANG = 'M300 360 C360 460 420 520 500 590 S600 700 640 760';                    // 沮漳水 past 當陽 toward 江陵
export const PL_MAP = {
  art: `<g class="pl-mtns" fill="url(#pl-mtn)" filter="url(#pl-ink)">
    ${peaks([[80, 330, 1.1], [190, 300], [300, 345, 1.2], [140, 480, 0.9], [250, 520, 1.1], [120, 640], [230, 700, 1.2], [110, 820, 1.1]], 120, 90)}
    ${peaks([[1250, 140, 0.9], [1380, 180, 1.1], [1500, 150], [1560, 260, 0.9]], 110, 90)}
    ${peaks([[640, 520, 0.6], [700, 505, 0.75]], 100, 70)}
  </g>
  <g class="pl-mark" data-id="jingshan" fill="url(#pl-mtn)" filter="url(#pl-ink)">${peaks([[760, 470, 0.8], [820, 455, 1.05]], 130, 70)}</g>
  <g class="pl-mark" data-id="river" filter="url(#pl-ink)" fill="none" stroke-linecap="round">
    <path d="${HAN}" stroke="#6f7c78" stroke-width="30" opacity=".35"/><path d="${HAN}" stroke="#46524f" stroke-width="7" opacity=".7"/>
    <path d="${ZHANG}" stroke="#6f7c78" stroke-width="16" opacity=".3"/><path d="${ZHANG}" stroke="#46524f" stroke-width="4" opacity=".6"/>
  </g>
  <g class="pl-labels">
    <g class="pl-mark wei" data-id="fancheng"><rect x="600" y="118" width="32" height="32" rx="3"/><text x="650" y="145">번성</text></g>
    <g class="pl-mark wei" data-id="xiangyang"><rect x="622" y="236" width="36" height="36" rx="3"/><text x="676" y="265">양양</text></g>
    <g class="pl-mark" data-id="changban"><text x="590" y="600">장판</text><text class="sm" x="520" y="660">당양</text></g>
    <g class="pl-mark wei" data-id="jingshan"><text class="sm" x="850" y="500">경산 조조</text></g>
    <g class="pl-mark" data-id="jiangling"><rect x="600" y="790" width="32" height="32" rx="3"/><text x="650" y="818">강릉</text></g>
    <g class="pl-mark" data-id="hanjin"><rect x="1118" y="600" width="30" height="30" rx="3"/><text x="1166" y="626">한진</text></g>
    <g class="pl-mark" data-id="river"><text class="sm river" x="840" y="200">한수</text></g>
  </g>`,
  arrows: [
    ['liu1', 'shu', 'M630 150 C650 200 650 240 640 260'],
    ['cao1', 'wei', 'M760 20 C720 80 690 150 660 240'],
    ['liu2', 'shu', 'M640 290 C630 380 610 470 600 560'],
    ['cao2', 'wei', 'M690 280 C760 360 740 470 660 560'],
    ['liu3', 'shu', 'M620 590 C760 640 940 630 1110 615'],
    ['guan', 'shu', 'M1030 390 C1070 460 1110 520 1130 590'],
  ],
};

// ---- prologue cards (format: chapters.js). Card 4 branches on the hero.
export const PROLOGUE = [
  { cols: ['건안 13년 가을', '조조의 대군이 남하한다', '유종이 형주를 바치고 항복한다'], en: 'Autumn, 208 AD. Cao Cao marches south in force, and Liu Cong surrenders Jing Province without a fight.',
    show: ['cao1', 'fancheng', 'xiangyang', 'river'], focus: [680, 220, 1.2] },
  { cols: ['유비는 번성을 버리고 남으로 간다', '형주의 백성 십여만이 따르니', '하루에 십여 리만 나아간다'], en: 'Liu Bei abandons Fancheng and flees south. A hundred thousand people follow him — ten li a day.',
    show: ['liu1', 'liu2'], focus: [640, 400, 1.15] },
  { cols: ['조조는 직접 호표기를 이끌어', '하루 밤낮 삼백 리를 달리고', '당양 장판에 따라붙는다'], en: 'Cao Cao leads his Tiger and Leopard Riders three hundred li in a day and a night, and overtakes them at Changban.',
    show: ['cao2', 'changban', 'jingshan'], focus: [700, 540, 1.3] },
  { zhaoyun: { cols: ['유비는 처자를 두고 달아난다', '조운은 부인을 찾지 못해', '홀로 다시 포위 속으로 들어간다'], en: 'Liu Bei flees, leaving his family behind. Zhao Yun cannot find his lord\'s wife and son, and rides back into the host alone.' },
    zhangfei: { cols: ['유비는 장비에게 명하여', '스무 기로 후위를 지키게 한다', '강을 막고 다리를 끊다'], en: 'Liu Bei orders Zhang Fei to hold the rear with twenty riders — at the river, at the bridge.' },
    show: ['jiangling'], focus: [620, 600, 1.45] },
  { cols: ['동쪽 한진으로 향하고', '운장의 수군은 강 위에 있다', '장판의 승부가 여기에 달렸다'], en: 'East lies Hanjin, where Guan Yu\'s boats wait on the river. Everything turns on Changban.',
    show: ['liu3', 'guan', 'hanjin'], focus: [860, 560, 1.05] },
];

// ---- result screen epilogue (win), branched on the hero
export const EPILOGUE = {
  zhaoyun: {
    zh: ['조운은 어린 아두와 감부인을 보호해 모두 위기에서 구했다. 아두는 훗날의 후주, 감부인은 후주의 어머니였다.', '유비는 아두를 내려놓으며 말했다. "이 아이 때문에 큰 장수를 잃을 뻔했구나!" 조운은 아문장군으로 승진했다.'],
    en: ['Zhao Yun carried the infant — the future emperor — in his arms and kept Lady Gan safe; both escaped.',
      'Liu Bei set the child on the ground and said: "For this little one I nearly lost a great general!" Zhao Yun was made General of the Standard.'],
  },
  zhangfei: {
    zh: ['장비는 강가에서 창을 가로들고 외쳤다. "나는 장익덕이다! 와서 죽음을 겨뤄보자!" 적은 누구도 다가오지 못했다.', '유비는 한진으로 향해 관우의 배와 합류했다. 면수를 건너 하구에 도착했다.'],
    en: ['Zhang Fei held the river, broke the bridge, and glared over his leveled spear: "I am Zhang Yide! Come and die with me!" None dared come near.',
      'Liu Bei turned east to Hanjin, met Guan Yu\'s boats, crossed the Mian, and reached Xiakou.'],
  },
};
