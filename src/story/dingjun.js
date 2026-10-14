// 第四章「定軍山」 — chapter data (format: ./chapters.js header): metadata, speakers, the battle script (BEATS), the
// prologue cards over the 漢中 ink map (PL_MAP) and the epilogue.
// History (219 AD, 漢中之戰): 劉備 camps at 陽平關; 法正 counsels seizing the heights of 定軍山; 夏侯淵 holds the
// mountain, 張郃 the eastern lines; 黃忠 storms the heights and cuts down 夏侯淵 (老當益壯); 趙雲 later saves 黃忠 at
// 漢水 and holds the empty camp (空營計). Played as either officer: `hero` = the chosen one, `ally` = the other one,
// who appears in the dialogue with his pixel portrait (chars/index.js). Everyone else speaks under a seal portrait.
// Map gates (world/map.js GATES): 'pass' barricade, 'weiCamp' castle gate, 'summit' barricade — all shut at the start.
// ['gate', dx, dz] = metres from the camp gate (the map's 'gate' anchor).

export const CH = {
  id: 'dingjun', num: { zh: '제4장', en: 'CHAPTER IV' }, title: { zh: '정군산', en: 'Mount Dingjun' },
  seal: '한중 전투', era: { zh: '건안 24년', en: '219 AD' }, map: 'dingjun',
  heroes: ['huangzhong', 'zhaoyun'],
  ally: { huangzhong: 'zhaoyun', zhaoyun: 'huangzhong' },
  army: { foe: 'wei', ally: 'shu' },
  // the van drawn up either side of the road inside the 本陣 gate, holding rank until the hero marches past
  van: [{ x: -5.575, z: -121.6, n: 12, cols: 4, hold: true }, { x: 5.575, z: -121.6, n: 12, cols: 4, hold: true }],
  hq: [4, 208],                                    // 夏侯淵's pavilion on the summit
  rank: { kos: [600, 1200, 2000], time: [540, 720, 900] },   // tuned to the pacing note above BEATS
};

export const SPK = {
  liubei: { name: { zh: '유비', en: 'Liu Bei' }, seal: '劉', side: 'shu' },
  fazheng: { name: { zh: '법정', en: 'Fa Zheng' }, seal: '法', side: 'shu' },
  yuan: { name: { zh: '하후연', en: 'Xiahou Yuan' }, seal: '淵', side: 'wei', char: 'xiahouyuan' },
  zhanghe: { name: { zh: '장합', en: 'Zhang He' }, seal: '郃', side: 'wei' },
  shang: { name: { zh: '하후상', en: 'Xiahou Shang' }, seal: '尚', side: 'wei' },
  duxi: { name: { zh: '두습', en: 'Du Xi' }, seal: '襲', side: 'wei' },
  soldier: { name: { zh: '조조군 병사', en: 'Wei Soldier' }, seal: '兵', side: 'wei' },
};

// officers (crowd.spawnOfficer). HP: a default officer has 520 (≈ 5 full combos); the boss ≈ 4.5× that, so the
// summit duel runs ~1.5-2 min with a Musou or two, like a DW8 commander.
const YUAN_HP = 2400;                            // 夏侯淵: a boss actor (src/actors, NPC kit 'xiahouyuan'), × game.diff.officerHp
export const OFF = {
  shang: { name: { zh: '하후상', en: 'XIAHOU SHANG' }, hp: 650 },
  duxi: { name: { zh: '두습', en: 'DU XI' }, hp: 650 },
  zhanghe: { name: { zh: '장합', en: 'ZHANG HE' }, hp: 1100 },
  guard: { name: { zh: '친위대장', en: 'GUARD CAPTAIN' }, hp: 320 },
};

const SUMMIT_GATE = ['summit', -0.65, -0.53];   // the 'summit' barricade across the ramp (≈ -20, 176)
const NAG = { who: 'fazheng', zh: '장군, 잠시 기다리십시오! 앞길이 정리되지 않았으니 홀로 깊이 들어가면 안 됩니다.', en: 'Wait, General! The way ahead isn\'t secured — don\'t go in alone.' };
const NAG_GATE = { who: 'fazheng', zh: '진영 문이 닫혔습니다. 먼저 수장 장합을 격파하십시오!', en: 'The gate is barred. Defeat Zhang He, who guards it!' };

// Pacing (default difficulty): a scripted bot that attacks nonstop and never dodges clears in ≈ 6 min with ≈ 3200 KOs
// (ford 45 s · pass + ambush 60 s · gate duel 90 s · camp and climb 35 s · summit 2.5 min) and ~250 damage taken; a
// human reading the dialogue and steering lands at ≈ 9-13 min. Officers only come forward after the hero has fought a
// while (kos / wait), so rushing shortens a stage but never skips one. Rank thresholds: CH.rank.
export const BEATS = [
  // ---- 蜀軍本陣: briefing, then the ford
  {
    when: { wait: 30 },
    obj: { zh: '한수 나루 점령', en: 'Seize the Han River ford', go: ['ford', 0, 0.4] },
    squads: [{ at: ['ford', -0.5, -0.35], n: 22 }, { at: ['ford', 0.45, -0.25], n: 22 }, { at: ['ford', -0.2, 0.2], n: 24 }, { at: ['ford', 0.35, 0.45], n: 22 }],
    limit: { z: ['pass', 0, -1], nag: NAG },
    morale: 0,
    say: [
      { who: 'liubei', zh: '정군산은 한중의 관문이다. 이번 싸움에 모든 것이 달렸다!', en: 'Mount Dingjun is the gate of Hanzhong. Everything rides on this battle!' },
      { who: 'fazheng', zh: '하후연은 용맹하지만 지략이 부족합니다. 한수 나루와 산길을 차지한 뒤 진영을 치십시오.', en: 'Xiahou Yuan is brave but rash. Take the ford, then the pass, then strike his camp.' },
      { who: 'hero', huangzhong: ['칠순이 가깝다지만, 이 몸은 아직 쓸 만하다!', 'Seventy winters or not, these old bones still have a war in them!'],
        zhaoyun: ['자룡이 선봉을 맡겠습니다. 창 한 자루로 길을 열지요!', 'Let me lead the van. My spear will open the road!'] },
      { who: 'ally', huangzhong: ['한승 장군, 제가 뒤를 받치겠습니다. 마음껏 싸우십시오!', 'General Hansheng, I\'ll hold the rear. Fight without fear!'],
        zhaoyun: ['자룡, 나도 곧 뒤따르겠네. 공을 혼자 차지할 생각은 말게!', 'Go on, Zilong. But this old man won\'t let you take all the glory!'] },
    ],
  },
  {
    when: [{ zone: 'ford' }, { kos: 60 }],
    waves: true,
    say: [
      { who: 'shang', zh: '촉군은 한수를 건널 수 없다! 궁병, 쏴라!', en: 'Not one Shu soldier crosses the Han! Archers, loose!' },
      { who: 'hero', huangzhong: ['그깟 활로 내 앞에서 재주를 부리느냐?', 'Arrows? You\'d trade shots with me?'],
        zhaoyun: ['나루의 수비병은 많지 않다. 단숨에 돌파하라!', 'The ford is thinly held. Through them in one charge!'] },
    ],
  },
  {
    when: [{ kos: 60, wait: 15 * 60 }, { wait: 60 * 60 }],
    officers: { shang: { at: ['ford', 0, 0.55], engaged: true } },
    obj: { zh: '나루 수장 하후상 격파', en: 'Defeat the ford commander, Xiahou Shang', go: 'shang' },
    say: [{ who: 'shang', zh: '나는 하후상이다! 네 이름을 밝혀라!', en: 'I am Xiahou Shang! Name yourself!' }],
  },
  {
    when: { down: 'shang' },
    banner: { html: '<em>한수 나루</em> 점령!', en: 'Han River ford captured — the army\'s spirit rises', dur: 180 },
    heal: 0.35, morale: 0.12, waves: false, retire: true, hush: true,
    obj: { zh: '산길 돌파', en: 'Break through the mountain pass', go: ['pass', 0, 0.2] },
    limit: { z: ['pass', 0, 0.68], nag: NAG },                      // just short of the 'pass' barricade (z 59.5)
    say: [{ who: 'fazheng', zh: '나루를 차지했습니다! 산길이 좁으니 위군의 매복을 조심하십시오.', en: 'The ford is ours! The pass is narrow. Wei will have an ambush waiting.' }],
  },

  // ---- 山道: the ambush (mid-battle twist)
  {
    when: { zone: 'pass' },
    squads: [{ at: ['pass', -0.45, -0.55], n: 18 }, { at: ['pass', 0.4, -0.3], n: 20 }],
    waves: true,
    say: [{ who: 'soldier', zh: '촉군이 산길을 올라온다! 하후 장군께 알려라!', en: 'Shu troops in the pass! Warn General Xiahou!' }],
  },
  {
    when: [{ at: ['pass', 0, -0.1] }, { kos: 150 }],
    banner: { html: '<em>복병</em>！위군이 산길 양쪽에서 나타났다', en: 'Ambush! Wei troops pour down both slopes', dur: 170 },
    squads: [{ at: ['pass', -0.85, -0.35], n: 16, charge: true }, { at: ['pass', 0.85, -0.2], n: 16, charge: true },
      { at: ['pass', 0, -0.65], n: 18, charge: true }, { at: ['pass', 0, 0.15], n: 20, charge: true }],
    officers: { duxi: { at: ['pass', 0.3, 0.1], engaged: true } },
    morale: -0.1,
    obj: { zh: '매복 장수 두습 격파', en: 'Defeat the ambush leader, Du Xi', go: 'duxi' },
    say: [
      { who: 'duxi', zh: '하하, 계략에 걸렸구나! 이 산길이 너희 무덤이다!', en: 'Ha! You walked right in. This pass will be your grave!' },
      { who: 'fazheng', zh: '매복이다! 두습을 베면 복병도 무너질 것이다!', en: 'An ambush! Cut down Du Xi and the rest will scatter!' },
    ],
  },
  {
    when: { down: 'duxi' },
    banner: { html: '<em>복병</em> 격퇴!', en: 'The ambush is broken', dur: 150 },
    heal: 0.3, morale: 0.12, retire: true, hush: true, gate: 'pass',
    obj: { zh: '장합을 격파하고 진영 문 열기', en: 'Defeat Zhang He and open the camp gate', go: 'zhanghe' },
    officers: { zhanghe: { at: ['gate', 0, -9] } },
    squads: [{ at: ['gate', -13, -14], n: 18 }, { at: ['gate', 13, -14], n: 18 }],
    limit: { z: ['gate', 0, -3], nag: NAG_GATE },
    say: [{ who: 'ally', huangzhong: ['한승 장군! 뒷길을 정리했습니다. 진영 문은 맡기겠습니다!', 'General Hansheng! The road behind is clear. The gate is yours!'],
      zhaoyun: ['자룡, 잘했네! 앞이 진영 문이야. 장합이 지키고 있네!', 'Well fought, Zilong! The gate is ahead, and Zhang He stands before it!'] }],
  },

  // ---- 魏軍營寨: Zhang He at the gate
  {
    when: { at: ['gate', 0, -28] },
    skip: { down: 'zhanghe' },
    say: [
      { who: 'zhanghe', zh: '나 장합이 있는 한, 촉군은 반 발짝도 들어오지 못한다!', en: 'While Zhang He stands here, no Shu soldier sets foot past this gate!' },
      { who: 'hero', huangzhong: ['장준예, 명성은 익히 들었네. 오늘 실력을 보겠네!', 'Zhang Junyi! I\'ve long wanted to test your famous blade!'],
        zhaoyun: ['장합, 장판에서 헤어진 뒤 다시 만났군! 오늘 승부를 가리자!', 'Zhang He. Not since Changban. Let us settle it!'] },
    ],
  },
  {
    when: { down: 'zhanghe' },
    gate: 'weiCamp', limit: { z: null }, heal: 0.3, morale: 0.15, retire: true, hush: true, waves: false,
    banner: { html: '<em>위군 진영</em> 문이 열렸다!', en: 'The Wei camp gate is open!', dur: 180 },
    obj: { zh: '정상에 올라 하후연 격파', en: 'Take the summit and defeat Xiahou Yuan', go: ['gate', 0, 10] },   // through the gate first
    squads: [{ at: ['camp', -0.5, 0.35], n: 20 }, { at: ['camp', 0.5, 0.5], n: 20 }, { at: ['camp', -0.6, 0.62], n: 16 }],   // courtyard ×2, foot of the ramp
    say: [
      { who: 'zhanghe', zh: '...젠장, 진영을 지킬 수 없다. 전군, 철수하라!', en: '...Curse it, the camp is lost. All troops, fall back!' },
      { who: 'fazheng', zh: '장합이 패주하여 하후연은 고립됐습니다! 정상에 올라 승부를 끝내십시오!', en: 'Zhang He has fled. Xiahou Yuan stands alone! Take the summit and end this!' },
    ],
  },
  {
    when: { at: ['gate', 0, 6] },
    // 夏侯淵 takes the field before his pavilion and holds it (a boss actor: telegraphed blows, poise, the boss bar)
    actors: { yuan: { kit: 'xiahouyuan', role: 'boss', at: ['summit', 0, 0.2], hp: YUAN_HP } },
    actor: { key: 'yuan', do: 'hold' },
    squads: [{ at: ['summit', -0.55, -0.45], n: 18 }, { at: ['summit', 0.55, -0.4], n: 18 }],
    obj: { zh: '정상 방책 파괴', en: 'Break through the summit barricade', go: SUMMIT_GATE },
    say: [{ who: 'soldier', zh: '막아라! 하후 장군께 다가가게 해서는 안 된다!', en: 'Hold him! Don\'t let him near General Xiahou!' }],
  },
  {
    // the camp's defenders thinned, 40 s passed, or he is up the ramp at the barricade 8 s in: the summit barricade burns
    when: [{ kos: 45 }, { wait: 40 * 60 }, { at: ['summit', 0, -0.9], wait: 8 * 60 }],
    gate: 'summit',
    banner: { html: '<em>정상 방책</em> 돌파!', en: 'The summit barricade is down — the road to the top is open', dur: 160 },
    obj: { zh: '적 총대장 하후연 격파', en: 'Defeat the enemy commander, Xiahou Yuan', go: 'yuan' },
  },

  // ---- 定軍山頂: 夏侯淵 (boss actor), the drums at half HP, the win on his fall (no retreat)
  {
    when: { at: ['summit', 0, -0.35] },           // z ≈ 182: over the barricade (the ramp below it tops out at z ≈ 177)
    skip: { down: 'yuan' },
    banner: { html: '적 총대장 <em>하후연</em>', en: 'Enemy commander: Xiahou Yuan', dur: 150, big: true },
    actor: { key: 'yuan', do: 'join' },          // he leaves his post: a taunt, then at the hero
    waves: true,
    say: [
      { who: 'yuan', huangzhong: ['백발 늙은이가 감히 죽으러 왔느냐?', 'A white-haired old man, come here to die?'],
        zhaoyun: ['조자룡! 장판의 수치까지 오늘 갚아주마!', 'Zhao Zilong! Today I repay you for Changban!'] },
      { who: 'hero', huangzhong: ['늙을수록 더 강해지는 법! 하후연, 네 목은 내가 가져가겠다!', 'Old, and only stronger for it! Xiahou Yuan, your head is mine!'],
        zhaoyun: ['하후연, 오늘 이 산은 한나라의 것이 된다!', 'Xiahou Yuan, this mountain belongs to the Han today!'] },
    ],
  },
  {
    when: { below: ['yuan', 0.5] },
    skip: { down: 'yuan' },
    banner: { html: '위군<em>전고</em>울린다. 지원군이 도착했다!', en: 'The Wei war drums thunder — reinforcements!', dur: 170 },
    morale: -0.12,
    squads: [{ at: ['summit', -0.9, 0.5], n: 16, charge: true }, { at: ['summit', 0.9, 0.4], n: 16, charge: true }, { at: ['summit', 0, 0.95], n: 16, charge: true }],
    officers: { guard1: { at: ['summit', -0.5, 0.6], engaged: true, like: 'guard' }, guard2: { at: ['summit', 0.5, 0.6], engaged: true, like: 'guard' } },
    say: [
      { who: 'yuan', zh: '북을 울려라! 전군 진격, 저놈을 짓밟아라!', en: 'Beat the drums! All troops, crush him!' },
      { who: 'ally', huangzhong: ['한승 장군, 지원군은 제가 맡겠습니다. 하후연을 치십시오!', 'Leave the reinforcements to me. Take Xiahou Yuan!'],
        zhaoyun: ['자룡, 지원군은 내가 막겠네. 하후연을 치게!', 'This old man will hold their reinforcements. Go, Zilong!'] },
    ],
  },
  {
    when: { down: 'yuan' },
    win: true, waves: false, morale: 1,
    banner: { html: '적 총대장 <em>하후연</em> 토벌!', en: 'Enemy commander Xiahou Yuan has fallen!', dur: 260, big: true },
    say: [{ who: 'hero', huangzhong: ['노장 황충, 전장에서 하후연을 베었다!', 'Old Huang Zhong has cut down Xiahou Yuan!'],
      zhaoyun: ['상산 조자룡이 하후연을 토벌했다!', 'Xiahou Yuan has fallen to Zhao Zilong of Changshan!'] }],
  },
];

// ---- prologue ink map of 漢中 (viewBox 1600×900): the ranges, 定軍山, 漢水, places and troop arrows
const peaks = (list, h, w) => list.map(([x, y, k = 1]) =>
  `<path d="M${x - w * k} ${y} Q${x - w * k * 0.35} ${y - h * k * 0.55} ${x} ${y - h * k} Q${x + w * k * 0.3} ${y - h * k * 0.5} ${x + w * k} ${y}Z"/>`).join('');
const RIVER = 'M-20 360 C180 330 300 420 460 430 S760 360 920 420 S1220 470 1380 420 S1560 400 1620 430';
export const PL_MAP = {
  art: `<g class="pl-mtns" fill="url(#pl-mtn)" filter="url(#pl-ink)">
    ${peaks([[90, 190, 1.1], [210, 170], [330, 200, 1.2], [470, 160, .9], [600, 190, 1.1], [760, 170], [900, 185, 1.2], [1060, 160], [1200, 190, 1.1], [1350, 170, .9], [1500, 195, 1.2]], 120, 90)}
    ${peaks([[120, 900, 1.2], [300, 880], [480, 905, 1.1], [820, 890, .9], [1000, 905, 1.2], [1180, 885], [1380, 900, 1.1], [1540, 890]], 130, 100)}
    ${peaks([[250, 330, .7], [340, 318, .8]], 110, 70)}
  </g>
  <g class="pl-mark" data-id="dingjun" fill="url(#pl-mtn)" filter="url(#pl-ink)">${peaks([[560, 640, .9], [640, 620, 1.35], [730, 645, .85]], 150, 80)}</g>
  <g class="pl-mark" data-id="river" filter="url(#pl-ink)" fill="none" stroke-linecap="round">
    <path d="${RIVER}" stroke="#6f7c78" stroke-width="30" opacity=".35"/><path d="${RIVER}" stroke="#46524f" stroke-width="7" opacity=".7"/>
  </g>
  <g class="pl-labels">
    <g class="pl-mark" data-id="yangping"><rect x="276" y="286" width="30" height="30" rx="3"/><text x="330" y="312">양평관</text></g>
    <g class="pl-mark" data-id="nanzheng"><rect x="1042" y="282" width="36" height="36" rx="3"/><text x="1034" y="350">남정</text></g>
    <g class="pl-mark wei" data-id="dingjun"><text x="600" y="690">정군산</text><text class="sm" x="686" y="520">하후연</text></g>
    <g class="pl-mark wei" data-id="east"><text class="sm" x="880" y="650">장합 동쪽 진영</text></g>
    <g class="pl-mark" data-id="river"><text class="sm river" x="190" y="412">한수</text></g>
  </g>`,
  arrows: [
    ['shu1', 'shu', 'M150 880 C185 720 250 520 292 342'],
    ['wei1', 'wei', 'M1040 330 C930 370 810 450 712 548'],
    ['wei2', 'wei', 'M1060 350 C1040 450 990 540 930 590'],
    ['shu2', 'shu', 'M318 338 C390 400 440 480 530 612'],
    ['shu3', 'shu', 'M540 652 C570 616 596 574 626 536'],
    ['shu4', 'shu', 'M668 520 C780 420 900 340 1020 318'],
  ],
};

// ---- prologue cards (format: chapters.js). Card 4 branches on the hero.
export const PROLOGUE = [
  { cols: ['건안 24년 봄', '유비가 대군을 이끌고 북진한다', '양평관에 군을 주둔시킨다'], en: 'Spring, 219 AD. Liu Bei marches north and makes camp at Yangping Pass.',
    show: ['shu1', 'yangping'], focus: [360, 470, 1.22] },
  { cols: ['조위의 명장 하후연은', '정군산을 지키고', '장합은 동쪽에 주둔한다'], en: 'Wei\'s great general Xiahou Yuan holds Mount Dingjun; Zhang He guards the eastern lines.',
    show: ['wei1', 'wei2', 'nanzheng', 'dingjun', 'east'], focus: [860, 470, 1.1] },
  { cols: ['법정이 계책을 올린다', '정군산은 지세가 높으니', '산을 빼앗으면 한중을 평정할 수 있다'], en: 'Fa Zheng counsels: "Take the heights of Dingjun, and Hanzhong is ours."',
    show: ['shu2', 'river'], focus: [520, 500, 1.2] },
  { huangzhong: { cols: ['노장황충', '선봉을 자청하며', '하후연을 베겠다고 맹세한다'], en: 'The old general Huang Zhong asks to lead the van, and swears to take Xiahou Yuan\'s head.' },
    zhaoyun: { cols: ['상산 조운은', '황충과 함께 진군하여', '한수를 건너 공격한다'], en: 'Zhao Yun of Changshan rides beside Huang Zhong across the Han to strike.' },
    show: ['shu3'], focus: [650, 560, 1.45] },
  { cols: ['징과 북이 하늘을 울리고', '함성이 골짜기를 뒤흔든다', '한 싸움으로 한중을 평정한다'], en: 'Drums shake the sky and war cries fill the valleys. One battle will decide Hanzhong.',
    show: ['shu4'], focus: [700, 450, 1.04] },
];

// ---- result screen epilogue (win), branched on the hero
export const EPILOGUE = {
  huangzhong: {
    zh: ['황충은 선봉을 몰아 진격했다. 징과 북이 하늘을 울리고, 하후연을 베자 조조군은 크게 무너졌다.', '유비는 한중을 평정하고 한중왕에 올랐으며, 황충을 후장군에 임명했다.'],
    en: ['Huang Zhong drove on without pause; to the roar of drums he cut down Xiahou Yuan, and the Wei army broke.',
      'Liu Bei took Hanzhong and was proclaimed King of Hanzhong. Huang Zhong was named General of the Rear.'],
  },
  zhaoyun: {
    zh: ['하후연이 죽자 조조가 대군을 이끌고 왔다. 조운은 한수에서 황충을 구한 뒤 진영 문을 활짝 열고 깃발과 북을 거두었다.', '조조군은 복병을 의심하고 물러났다. 유비는 "자룡은 온몸이 담력이구나"라며 칭찬했다.'],
    en: ['With Xiahou Yuan slain, Cao Cao came himself. Zhao Yun rescued Huang Zhong at the Han, then threw open his camp gate and silenced the drums.',
      'Fearing an ambush, Wei withdrew. Liu Bei said: "Zilong is courage through and through."'],
  },
};
